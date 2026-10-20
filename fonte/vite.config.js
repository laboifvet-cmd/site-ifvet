import { defineConfig } from "vite";
// O código é escrito com a API do React, mas roda sobre o Preact: o preset
// troca "react" e "react-dom" por "preact/compat" (e "react-dom/server" por
// preact-render-to-string), o que deixa o JS do site bem menor.
import preact from "@preact/preset-vite";

// Em desenvolvimento (`npm run dev`) o Vite injeta scripts e estilos inline
// (HMR, React Refresh), que a CSP do index.html bloquearia. A meta vale só
// no site gerado.
const semCspEmDev = {
  name: "sem-csp-em-dev",
  apply: "serve",
  transformIndexHtml(html) {
    return html.replace(
      /\s*<meta\s+http-equiv="Content-Security-Policy"[\s\S]*?\/>/,
      "",
    );
  },
};

export default defineConfig({
  plugins: [preact(), semCspEmDev],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  // No build de servidor (páginas pré-geradas) as dependências ficam de fora
  // do pacote e a troca por "preact/compat" não as alcança: o lucide-react
  // precisa entrar no pacote para usar o mesmo Preact que o resto do site.
  ssr: {
    noExternal: ["lucide-react"],
  },
});
