import { MessageCircle } from "lucide-react";
import { contato, links, menu } from "../dados.js";
import { LinkExterno } from "./comum.jsx";

export default function Rodape({ base = "" }) {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape-topo">
          <div className="rodape-marca">
            <img
              src="/assets/ifvet-logo-white.webp"
              alt="IFVeT Patologia Diagnóstica"
              width="520"
              height="109"
              loading="lazy"
            />
            <p>Precisão no diagnóstico. Confiança no cuidado.</p>
          </div>
          <div className="rodape-links">
            <div>
              <strong>Navegue</strong>
              {menu.map((item) => (
                <a key={item.id} href={`${base}#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <strong>Acessos</strong>
              <LinkExterno href={links.laudos}>Área do Cliente</LinkExterno>
              <LinkExterno href={links.requisicao}>
                Requisição de exames
              </LinkExterno>
              <a href={`${base}#envio-de-amostras`}>Envio de amostras</a>
              <a href={`${base}#glossario`}>Glossário</a>
            </div>
            <div>
              <strong>Contato</strong>
              <LinkExterno href={contato.whatsapp}>WhatsApp</LinkExterno>
              <a href={`mailto:${contato.email}`}>E-mail</a>
              <LinkExterno href={contato.instagram}>Instagram</LinkExterno>
              <LinkExterno href={contato.mapa}>Como chegar</LinkExterno>
            </div>
          </div>
        </div>
        <div className="rodape-base">
          <span>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            IFVeT Patologia Diagnóstica · {contato.cidade}
          </span>
          <span>{contato.responsavelTecnico}</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsFlutuante() {
  return (
    <LinkExterno
      href={contato.whatsapp}
      className="whats-flutuante"
      aria-label="Falar com o IFVeT pelo WhatsApp"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </LinkExterno>
  );
}
