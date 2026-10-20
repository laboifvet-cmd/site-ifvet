// Gera o HTML pronto de cada página (bom para o Google e para abrir rápido),
// o sitemap.xml e a página 404. Roda depois do `vite build`.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(raiz, "dist");
const distSsr = path.join(raiz, "dist-ssr");

const { render, rotasParaGerar, SITE } = await import(
  pathToFileURL(path.join(distSsr, "entry-server.js")).href
);

const modelo = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

// Pré-carrega as duas fontes principais (subconjunto latino).
const arquivos = fs.readdirSync(path.join(dist, "assets"));
const fontes = [/^inter-latin-wght-normal-.*\.woff2$/, /^source-serif-4-latin-wght-normal-.*\.woff2$/]
  .map((padrao) => arquivos.find((a) => padrao.test(a)))
  .filter(Boolean)
  .map(
    (a) =>
      `<link rel="preload" as="font" type="font/woff2" href="/assets/${a}" crossorigin />`,
  )
  .join("\n    ");

for (const rota of rotasParaGerar) {
  const { html, head } = render(rota);
  const pagina = modelo
    .replace("<!--app-head-->", head)
    .replace("<!--app-preload-->", fontes)
    .replace("<!--app-html-->", html);
  const destino =
    rota === "/404"
      ? path.join(dist, "404.html")
      : path.join(dist, rota, "index.html");
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, pagina);
  console.log(`  página gerada: ${path.relative(raiz, destino)}`);
}

// O <lastmod> de cada página é a data do último commit que mexeu nos
// arquivos que a alimentam (em vez da data da publicação, que mudava a cada
// build sem o conteúdo ter mudado). Precisa do histórico do git: no GitHub
// Actions, o checkout usa fetch-depth: 0. Sem git, usa a data de hoje.
const hoje = new Date().toISOString().slice(0, 10);
function dataDoUltimoCommit(caminhos) {
  try {
    const data = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...caminhos], {
      cwd: raiz,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(data) ? data : hoje;
  } catch {
    return hoje;
  }
}
// Arquivos que entram em todas as páginas (layout, estilos, textos, SEO).
const comuns = ["src/componentes", "src/estilos", "src/dados.js", "src/rotas.js"];
function lastmod(rota) {
  if (rota === "/") {
    return dataDoUltimoCommit([
      "src",
      ":(exclude)src/paginas/PaginaExame.jsx",
      ":(exclude)src/paginas/Privacidade.jsx",
    ]);
  }
  if (rota === "/privacidade/") {
    return dataDoUltimoCommit([...comuns, "src/paginas/Privacidade.jsx"]);
  }
  // Páginas de exame; Inicio.jsx entra porque elas reaproveitam blocos dele.
  return dataDoUltimoCommit([
    ...comuns,
    "src/paginas/PaginaExame.jsx",
    "src/paginas/Inicio.jsx",
  ]);
}
const urls = rotasParaGerar
  .filter((r) => r !== "/404")
  .map(
    (r) =>
      `  <url>\n    <loc>${SITE}${r}</loc>\n    <lastmod>${lastmod(r)}</lastmod>\n  </url>`,
  )
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log("  sitemap.xml gerado");

fs.rmSync(distSsr, { recursive: true, force: true });
