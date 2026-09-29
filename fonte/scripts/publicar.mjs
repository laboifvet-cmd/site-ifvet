// Copia o site gerado (fonte/dist) para a raiz do repositório, que é de onde
// o GitHub Pages publica o www.ifvet.com.br. Roda com `npm run publicar`
// (e automaticamente pelo GitHub Actions a cada alteração em fonte/).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const fonte = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(fonte, "dist");
const repo = path.resolve(fonte, "..");

// Tudo na raiz é substituído pelo site novo, exceto estes itens.
const preservar = new Set([
  ".git",
  ".github",
  ".gitignore",
  ".nojekyll",
  "README.md",
  path.basename(fonte),
]);

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("fonte/dist não existe. Rode `npm run build` antes.");
  process.exit(1);
}

for (const item of fs.readdirSync(repo)) {
  if (!preservar.has(item)) {
    fs.rmSync(path.join(repo, item), { recursive: true, force: true });
  }
}
fs.cpSync(dist, repo, { recursive: true });
fs.writeFileSync(path.join(repo, ".nojekyll"), "");
console.log("Site copiado para a raiz do repositório.");
