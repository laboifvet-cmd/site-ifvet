import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { SITE, cabecaDaPagina, rotasParaGerar } from "./rotas.js";

export { SITE, rotasParaGerar };

export function render(caminho) {
  const html = renderToString(
    <StrictMode>
      <App caminho={caminho} />
    </StrictMode>,
  );
  return { html, head: cabecaDaPagina(caminho) };
}
