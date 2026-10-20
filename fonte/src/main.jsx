import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/source-serif-4";
import "./estilos/site.css";
import "./estilos/paginas.css";
import App from "./App.jsx";

const raiz = document.getElementById("root");
const app = (
  <StrictMode>
    <App caminho={window.location.pathname} />
  </StrictMode>
);

// Com o HTML pré-gerado, só "liga" o que já está na página; em
// desenvolvimento o #root tem apenas um comentário, então renderiza do zero.
if (raiz.firstElementChild) hydrateRoot(raiz, app);
else createRoot(raiz).render(app);
