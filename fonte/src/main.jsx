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

if (raiz.hasChildNodes()) hydrateRoot(raiz, app);
else createRoot(raiz).render(app);
