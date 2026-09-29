import { FileText, House, MessageCircle } from "lucide-react";
import Layout from "../componentes/Layout.jsx";
import { LinkExterno } from "../componentes/comum.jsx";
import { contato, links } from "../dados.js";

export default function NaoEncontrada() {
  return (
    <Layout base="/">
      <section className="secao secao-lilas nao-encontrada">
        <div className="container">
          <p className="nao-encontrada-codigo" aria-hidden="true">
            404
          </p>
          <h1>Página não encontrada</h1>
          <p>
            O endereço que você acessou não existe ou mudou de lugar. Volte para
            a página inicial ou fale com a gente pelo WhatsApp.
          </p>
          <div className="nao-encontrada-acoes">
            <a className="botao botao-roxo" href="/">
              <House size={18} aria-hidden="true" /> Voltar ao início
            </a>
            <LinkExterno className="botao botao-contorno" href={links.laudos}>
              <FileText size={18} aria-hidden="true" /> Acessar laudo
            </LinkExterno>
            <LinkExterno className="botao botao-contorno" href={contato.whatsapp}>
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp
            </LinkExterno>
          </div>
        </div>
      </section>
    </Layout>
  );
}
