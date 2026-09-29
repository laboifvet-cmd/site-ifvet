import Inicio from "./paginas/Inicio.jsx";
import { CAMINHO_PRIVACIDADE, paginasExame } from "./rotas.js";
import PaginaExame from "./paginas/PaginaExame.jsx";
import NaoEncontrada from "./paginas/NaoEncontrada.jsx";
import Privacidade from "./paginas/Privacidade.jsx";

function normalizar(caminho) {
  const limpo = caminho.replace(/index\.html$/, "");
  return limpo.endsWith("/") ? limpo : `${limpo}/`;
}

export default function App({ caminho }) {
  const rota = normalizar(caminho);
  if (rota === "/") return <Inicio />;
  const exame = paginasExame.find((p) => p.caminho === rota);
  if (exame) return <PaginaExame pagina={exame} />;
  if (rota === CAMINHO_PRIVACIDADE) return <Privacidade />;
  return <NaoEncontrada />;
}
