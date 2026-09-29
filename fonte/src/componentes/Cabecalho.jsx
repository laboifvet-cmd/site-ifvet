import { useEffect, useState } from "react";
import { FileText, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { contato, links, menu } from "../dados.js";
import { LinkExterno } from "./comum.jsx";

// `base` é "" na página inicial (links do tipo "#exames") e "/" nas
// outras páginas (links do tipo "/#exames").
export default function Cabecalho({ base = "" }) {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const [ativo, setAtivo] = useState("");
  const fechar = () => setAberto(false);

  useEffect(() => {
    document.body.classList.toggle("menu-aberto", aberto);
  }, [aberto]);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 10);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    const observador = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => e.isIntersecting && setAtivo(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    menu.forEach((item) => {
      const secao = document.getElementById(item.id);
      if (secao) observador.observe(secao);
    });
    return () => {
      window.removeEventListener("scroll", aoRolar);
      observador.disconnect();
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <MapPin size={14} aria-hidden="true" /> {contato.areaAtendida}
          </span>
          <span className="topbar-links">
            <a href={contato.telefoneLink}>
              <Phone size={14} aria-hidden="true" /> {contato.telefone}
            </a>
            <a href={`mailto:${contato.email}`}>
              <Mail size={14} aria-hidden="true" /> {contato.email}
            </a>
          </span>
        </div>
      </div>
      <header className={rolou ? "cabecalho rolou" : "cabecalho"}>
        <div className="container cabecalho-inner">
          <a
            className="marca"
            href={base ? "/" : "#inicio"}
            onClick={fechar}
            aria-label="IFVeT Patologia Diagnóstica — início"
          >
            <img
              src="/assets/ifvet-logo-purple.webp"
              alt="IFVeT Patologia Diagnóstica"
              width="520"
              height="183"
            />
          </a>
          <nav
            id="menu-principal"
            className={aberto ? "nav nav-aberta" : "nav"}
            aria-label="Menu principal"
          >
            {menu.map((item) => (
              <a
                key={item.id}
                href={`${base}#${item.id}`}
                onClick={fechar}
                className={ativo === item.id ? "ativo" : undefined}
                aria-current={ativo === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
            <LinkExterno
              href={links.laudos}
              className="botao botao-roxo nav-cta"
              onClick={fechar}
            >
              <FileText size={18} aria-hidden="true" /> Acessar laudo
            </LinkExterno>
          </nav>
          <button
            className="menu-botao"
            type="button"
            aria-controls="menu-principal"
            aria-expanded={aberto}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setAberto(!aberto)}
          >
            {aberto ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}
