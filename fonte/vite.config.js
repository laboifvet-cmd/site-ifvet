import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  plugins: [react(), semCspEmDev],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
