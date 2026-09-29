import { useEffect, useState } from "react";
import { analytics } from "../dados.js";

// Google Analytics 4 com consentimento (LGPD): o script do Google só é
// carregado depois que o visitante aceita. A escolha fica salva no navegador.
const CHAVE = "ifvet-cookies";
const EVENTO_REABRIR = "ifvet-cookies-reabrir";

function lerEscolha() {
  try {
    return localStorage.getItem(CHAVE);
  } catch {
    return null;
  }
}

function salvarEscolha(valor) {
  try {
    localStorage.setItem(CHAVE, valor);
  } catch {
    // Navegador sem armazenamento (ex.: aba anônima bloqueada): segue sem salvar.
  }
}

let carregado = false;
function carregarGoogle(id) {
  if (carregado) return;
  carregado = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

export function reabrirAvisoCookies() {
  window.dispatchEvent(new Event(EVENTO_REABRIR));
}

export default function Estatisticas() {
  const id = analytics.idGoogle;
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    if (!id) return;
    const escolha = lerEscolha();
    if (escolha === "aceito") carregarGoogle(id);
    else if (!escolha) setMostrar(true);
    const reabrir = () => setMostrar(true);
    window.addEventListener(EVENTO_REABRIR, reabrir);
    return () => window.removeEventListener(EVENTO_REABRIR, reabrir);
  }, [id]);

  if (!mostrar) return null;

  const escolher = (valor) => {
    salvarEscolha(valor);
    setMostrar(false);
    if (valor === "aceito") carregarGoogle(id);
  };

  return (
    <div className="aviso-cookies" role="region" aria-label="Aviso de cookies">
      <p>
        Usamos cookies do Google Analytics só para contar as visitas e melhorar
        o site. Nada é usado para publicidade.{" "}
        <a href="/privacidade/">Saiba mais</a>
      </p>
      <div className="aviso-cookies-botoes">
        <button
          type="button"
          className="botao botao-roxo"
          onClick={() => escolher("aceito")}
        >
          Aceitar
        </button>
        <button
          type="button"
          className="botao botao-contorno"
          onClick={() => escolher("recusado")}
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
