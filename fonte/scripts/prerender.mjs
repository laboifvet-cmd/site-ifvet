// Gera o HTML pronto de cada página (bom para o Google e para abrir rápido),
// o sitemap.xml e a página 404. Roda depois do `vite build`.
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

const hoje = new Date().toISOString().slice(0, 10);
const urls = rotasParaGerar
  .filter((r) => r !== "/404")
  .map((r) => `  <url>\n    <loc>${SITE}${r}</loc>\n    <lastmod>${hoje}</lastmod>\n  </url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log("  sitemap.xml gerado");

fs.rmSync(distSsr, { recursive: true, force: true });
