// Verificação do site gerado (fonte/dist), rodada nos pull requests e com
// `npm run verificar`. Abre as páginas principais em 1440px e 390px e falha
// se houver erro no console, violação de acessibilidade (axe), mais de um
// <h1>, rolagem horizontal, ou se o JS/CSS principal passar do orçamento.
// Também testa os filtros de "Dúvidas" e o menu do celular.
//
// Precisa do `npm run build` antes. O Chromium vem do Playwright
// (`npx playwright install --with-deps chromium` no GitHub Actions); fora
// dele, usa PLAYWRIGHT_CHROMIUM_PATH ou /opt/pw-browsers/chromium, se existir.
import fs from "node:fs";
import http from "node:http";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { chromium } from "playwright";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(raiz, "dist");
const require = createRequire(import.meta.url);
const axeCaminho = require.resolve("axe-core/axe.min.js");

const ROTAS = ["/", "/citologia-veterinaria/", "/privacidade/", "/404.html"];
const LARGURAS = [1440, 390];
const ORCAMENTO_KB = { js: 120, css: 20 };
const TAGS_AXE = ["wcag2a", "wcag2aa", "best-practice"];

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("fonte/dist não existe. Rode `npm run build` antes.");
  process.exit(1);
}

// ---------- Servidor estático simples para o dist ----------
const tipos = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".webmanifest": "application/manifest+json",
};
const servidor = http.createServer((req, res) => {
  const caminho = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let arquivo = path.join(dist, caminho);
  if (!arquivo.startsWith(dist)) arquivo = "";
  if (arquivo && fs.existsSync(arquivo) && fs.statSync(arquivo).isDirectory())
    arquivo = path.join(arquivo, "index.html");
  if (!arquivo || !fs.existsSync(arquivo)) {
    res.statusCode = 404;
    arquivo = path.join(dist, "404.html");
  }
  res.setHeader("content-type", tipos[path.extname(arquivo)] || "application/octet-stream");
  fs.createReadStream(arquivo).pipe(res);
});
await new Promise((r) => servidor.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${servidor.address().port}`;

// ---------- Tamanho do JS e do CSS principais ----------
const falhas = [];
function falhar(mensagem) {
  falhas.push(mensagem);
  console.log(`  ✗ ${mensagem}`);
}

console.log("Tamanho (gzip) dos arquivos principais:");
for (const [tipo, extensao] of [["js", ".js"], ["css", ".css"]]) {
  const nome = fs
    .readdirSync(path.join(dist, "assets"))
    .find((a) => a.startsWith("index-") && a.endsWith(extensao));
  if (!nome) {
    falhar(`não achei dist/assets/index-*${extensao}`);
    continue;
  }
  const kb = gzipSync(fs.readFileSync(path.join(dist, "assets", nome))).length / 1024;
  const texto = `${nome}: ${kb.toFixed(1)} KB gzip (orçamento: ${ORCAMENTO_KB[tipo]} KB)`;
  if (kb > ORCAMENTO_KB[tipo]) falhar(`acima do orçamento — ${texto}`);
  else console.log(`  ✓ ${texto}`);
}

// ---------- Páginas no navegador ----------
const caminhoChromium =
  process.env.PLAYWRIGHT_CHROMIUM_PATH ||
  (fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined);
const navegador = await chromium.launch({
  executablePath: caminhoChromium,
  args: ["--no-sandbox"],
});

for (const largura of LARGURAS) {
  for (const rota of ROTAS) {
    const titulo = `${rota} @ ${largura}px`;
    console.log(titulo);
    const contexto = await navegador.newContext({
      viewport: { width: largura, height: 900 },
    });
    const pagina = await contexto.newPage();
    const erros = [];
    pagina.on("console", (m) => {
      if (m.type() === "error") erros.push(`console: ${m.text()}`);
    });
    pagina.on("pageerror", (e) => erros.push(`erro na página: ${e.message}`));
    // O axe entra antes da navegação, pelo protocolo do navegador: uma tag
    // <script> injetada depois seria bloqueada pela CSP do site.
    await pagina.addInitScript({ path: axeCaminho });

    await pagina.goto(base + rota, { waitUntil: "networkidle" });

    const h1 = await pagina.locator("h1").count();
    if (h1 !== 1) falhar(`${titulo}: ${h1} <h1> (esperado 1)`);

    const transborda = await pagina.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    if (transborda) falhar(`${titulo}: a página tem rolagem horizontal`);

    const axe = await pagina.evaluate(
      (tags) => window.axe.run(document, { runOnly: { type: "tag", values: tags } }),
      TAGS_AXE,
    );
    for (const v of axe.violations) {
      const alvos = v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(", ");
      falhar(`${titulo}: axe ${v.id} (${v.impact}): ${v.help} — ${alvos}`);
    }

    // Interações só na página inicial: filtros de "Dúvidas" e menu do celular.
    if (rota === "/") {
      const lista = pagina.locator(".duvidas-lista details");
      const todas = await lista.count();
      const filtro = pagina.getByRole("button", { name: "Para veterinários" });
      await filtro.click();
      const filtradas = await lista.count();
      const pressionado = await filtro.getAttribute("aria-pressed");
      if (pressionado !== "true" || filtradas === 0 || filtradas >= todas)
        falhar(
          `${titulo}: o filtro de dúvidas não funcionou (${todas} → ${filtradas}, aria-pressed=${pressionado})`,
        );

      const botaoMenu = pagina.locator(".menu-botao");
      if (await botaoMenu.isVisible()) {
        await botaoMenu.click();
        const aberto = await botaoMenu.getAttribute("aria-expanded");
        const navVisivel = await pagina.locator("#menu-principal").isVisible();
        if (aberto !== "true" || !navVisivel)
          falhar(`${titulo}: o menu não abriu (aria-expanded=${aberto})`);
        await botaoMenu.click();
        if ((await botaoMenu.getAttribute("aria-expanded")) !== "false")
          falhar(`${titulo}: o menu não fechou`);
      }
    }

    await pagina.waitForTimeout(200);
    for (const erro of erros) falhar(`${titulo}: ${erro}`);
    if (!falhas.some((f) => f.startsWith(titulo))) console.log("  ✓ ok");
    await contexto.close();
  }
}

await navegador.close();
servidor.close();

if (falhas.length) {
  console.log(`\n${falhas.length} problema(s) encontrado(s).`);
  process.exit(1);
}
console.log("\nTudo certo.");
