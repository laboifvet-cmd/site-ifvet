import Inicio from "./paginas/Inicio.jsx";
import { paginasExame } from "./rotas.js";
import PaginaExame from "./paginas/PaginaExame.jsx";
import NaoEncontrada from "./paginas/NaoEncontrada.jsx";

function normalizar(caminho) {
  const limpo = caminho.replace(/index\.html$/, "");
  return limpo.endsWith("/") ? limpo : `${limpo}/`;
}

export default function App({ caminho }) {
  const rota = normalizar(caminho);
  if (rota === "/") return <Inicio />;
  const exame = paginasExame.find((p) => p.caminho === rota);
  if (exame) return <PaginaExame pagina={exame} />;
  return <NaoEncontrada />;
}
