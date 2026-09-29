import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  ClipboardList,
  Clock,
  FileCheck,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Layout from "../componentes/Layout.jsx";
import { LinkExterno, icones } from "../componentes/comum.jsx";
import { contato, envio, exames, links, perguntas } from "../dados.js";
import { paginasExame } from "../rotas.js";
import { Contato, ListaCheck, Pergunta } from "./Inicio.jsx";

export default function PaginaExame({ pagina }) {
  const exame = exames.find((e) => e.id === pagina.exame);
  const Icone = icones[exame.icone];
  const orientacoes = envio.filter((g) => g.exame === exame.id);
  const identificacao = envio.find((g) => !g.exame);
  const duvidasTutor = perguntas.filter(
    (p) => p.exames?.includes(exame.id) && p.grupo !== "vet",
  );
  const duvidasVet = perguntas.filter(
    (p) => p.exames?.includes(exame.id) && p.grupo === "vet",
  );
  const outros = paginasExame.filter((p) => p.caminho !== pagina.caminho);

  return (
    <Layout base="/">
      <section className="pagina-topo">
        <div className="hero-fundo" aria-hidden="true" />
        <div className="container pagina-topo-inner">
          <nav className="migalhas" aria-label="Você está em">
            <a href="/">Início</a>
            <ChevronRight size={14} aria-hidden="true" />
            <a href="/#exames">Exames</a>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{exame.titulo}</span>
          </nav>
          <div className="pagina-topo-titulo">
            <span className="pagina-topo-icone">
              <Icone size={28} aria-hidden="true" />
            </span>
            <span className="sobretitulo claro">{exame.subtitulo}</span>
          </div>
          <h1>{pagina.titulo}</h1>
          <p className="hero-lead">{exame.simples}</p>
          <p className="pagina-prazo">
            <Clock size={18} aria-hidden="true" /> {exame.prazo}
          </p>
        </div>
      </section>

      <section className="secao pagina-corpo">
        <div className="container pagina-grid">
          <div className="bloco bloco-tutor">
            <span className="mini-rotulo">
              <PawPrint size={14} aria-hidden="true" /> Para tutores
            </span>
            <h2>O que você precisa saber</h2>
            {exame.paraTutor && <p>{exame.paraTutor}</p>}
            <p className="bloco-destaque">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>
                O laudo vai para o veterinário que pediu o exame. É ele quem
                explica o resultado e indica o tratamento.
              </span>
            </p>
            {duvidasTutor.length > 0 && (
              <div className="bloco-duvidas">
                {duvidasTutor.map((item) => (
                  <Pergunta key={item.pergunta} item={item} />
                ))}
              </div>
            )}
            <a href="/#glossario" className="link-seta">
              <BookOpen size={16} aria-hidden="true" /> Entenda os termos do
              laudo
            </a>
          </div>

          <div className="bloco bloco-vet">
            <span className="mini-rotulo">
              <Stethoscope size={14} aria-hidden="true" /> Para o veterinário
            </span>
            <h2>Informações técnicas</h2>
            <ul className="bloco-lista">
              {exame.tecnico.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {exame.laudoInforma && (
              <>
                <h3>
                  <FileCheck size={18} aria-hidden="true" /> O que o laudo
                  informa
                </h3>
                <ul className="bloco-lista">
                  {exame.laudoInforma.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {orientacoes.map((grupo) => (
              <div key={grupo.titulo}>
                <h3>
                  <ClipboardList size={18} aria-hidden="true" />{" "}
                  {exame.id === "transcirurgica"
                    ? "Como agendar"
                    : "Como coletar e enviar"}
                </h3>
                <ListaCheck itens={grupo.itens} />
              </div>
            ))}
            {exame.id !== "transcirurgica" && identificacao && (
              <>
                <h3>
                  <ClipboardList size={18} aria-hidden="true" />{" "}
                  {identificacao.titulo}
                </h3>
                <ListaCheck itens={identificacao.itens} />
              </>
            )}
            {duvidasVet.length > 0 && (
              <div className="bloco-duvidas">
                {duvidasVet.map((item) => (
                  <Pergunta key={item.pergunta} item={item} />
                ))}
              </div>
            )}
            <div className="bloco-acoes">
              {exame.id === "transcirurgica" ? (
                <LinkExterno href={contato.whatsapp} className="botao botao-roxo">
                  <MessageCircle size={18} aria-hidden="true" /> Agendar pelo
                  WhatsApp
                </LinkExterno>
              ) : (
                <>
                  <LinkExterno href={links.requisicao} className="botao botao-roxo">
                    <ClipboardList size={18} aria-hidden="true" /> Fazer
                    requisição
                  </LinkExterno>
                  <LinkExterno
                    href={contato.whatsapp}
                    className="botao botao-contorno"
                  >
                    <MessageCircle size={18} aria-hidden="true" /> Combinar
                    coleta
                  </LinkExterno>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="outros-exames">
            <h2>Outros exames</h2>
            <div className="outros-exames-grid">
              {outros.map((p) => {
                const outro = exames.find((e) => e.id === p.exame);
                const IconeOutro = icones[outro.icone];
                return (
                  <a key={p.caminho} href={p.caminho} className="outro-exame">
                    <span className="exame-icone">
                      <IconeOutro size={22} aria-hidden="true" />
                    </span>
                    <span>
                      <small>{outro.subtitulo}</small>
                      <strong>{outro.titulo}</strong>
                    </span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Contato />
    </Layout>
  );
}
