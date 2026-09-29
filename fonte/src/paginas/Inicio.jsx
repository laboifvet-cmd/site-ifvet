import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  ChevronDown,
  CircleCheck,
  ClipboardList,
  Clock,
  FileText,
  Info,
  Instagram,
  KeyRound,
  Mail,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Quote,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";
import Layout from "../componentes/Layout.jsx";
import {
  Estrelas,
  LinkExterno,
  TituloSecao,
  icones,
  iniciais,
} from "../componentes/comum.jsx";
import {
  contato,
  depoimentos,
  envio,
  equipe,
  exames,
  glossario,
  google,
  links,
  passosTutor,
  passosVet,
  perguntas,
  prazos,
  quemRecebe,
} from "../dados.js";
import { paginasExame } from "../rotas.js";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-fundo" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-texto">
          <span className="selo-hero">
            <span className="ponto" /> Patologia veterinária · Fortaleza-CE
          </span>
          <h1>
            Clareza no diagnóstico, para quem <em>trata</em> e para quem{" "}
            <em>cuida</em>.
          </h1>
          <p className="hero-lead">
            Analisamos as amostras que o veterinário coleta do seu animal — em
            citologias, biópsias e necropsias — e entregamos um laudo claro,
            que ajuda a escolher o melhor tratamento.
          </p>
          <p className="hero-pergunta">Como podemos ajudar você?</p>
          <div className="hero-caminhos">
            <a href="#tutores" className="caminho">
              <span className="caminho-icone tutor">
                <PawPrint size={22} aria-hidden="true" />
              </span>
              <span className="caminho-texto">
                <small>Informações para</small>
                <strong>Tutores</strong>
              </span>
              <ArrowRight size={20} className="caminho-seta" aria-hidden="true" />
            </a>
            <a href="#veterinarios" className="caminho">
              <span className="caminho-icone vet">
                <Stethoscope size={22} aria-hidden="true" />
              </span>
              <span className="caminho-texto">
                <small>Informações para</small>
                <strong>Veterinários</strong>
              </span>
              <ArrowRight size={20} className="caminho-seta" aria-hidden="true" />
            </a>
          </div>
          <div className="hero-acoes">
            <LinkExterno href={links.laudos} className="botao botao-menta">
              <KeyRound size={18} aria-hidden="true" /> Acessar laudo
            </LinkExterno>
            <LinkExterno href={links.requisicao} className="link-claro">
              <ClipboardList size={18} aria-hidden="true" /> Requisição de
              exames
            </LinkExterno>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-foto">
            <img
              src="/assets/cao-atendimento.webp"
              alt="Cão de pelagem clara no colo durante atendimento veterinário"
              width="800"
              height="709"
              fetchPriority="high"
            />
          </div>
          <div className="flutuante flutuante-laudo" aria-hidden="true">
            <span className="flutuante-icone">
              <CircleCheck size={20} />
            </span>
            <span>
              <strong>Laudo liberado</strong>
              <small>Disponível na Área do Cliente</small>
            </span>
          </div>
          <div className="flutuante flutuante-google">
            <Estrelas tamanho={15} />
            <span>
              <strong>{google.nota}</strong> no Google
            </span>
            <small>{google.avaliacoes} avaliações</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function Prazos() {
  return (
    <section className="prazos" aria-labelledby="titulo-prazos">
      <div className="container">
        <div className="prazos-cartao">
          <div className="prazos-titulo">
            <Clock size={22} aria-hidden="true" />
            <h2 id="titulo-prazos">Prazos de liberação</h2>
            <small>contados a partir da entrada da amostra</small>
          </div>
          <dl className="prazos-lista">
            {prazos.map((p) => (
              <div key={p.rotulo}>
                <dt>{p.rotulo}</dt>
                <dd>{p.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Exames() {
  return (
    <section id="exames" className="secao">
      <div className="container">
        <div className="cabeca-dupla">
          <TituloSecao
            sobre="Nossos exames"
            titulo="O que cada exame faz, em palavras simples."
          />
          <p>
            Cada card traz uma explicação simples sobre o exame e, logo abaixo,
            as informações práticas para o veterinário.
          </p>
        </div>
        <div className="exames-grid">
          {exames.map((exame) => {
            const Icone = icones[exame.icone];
            const pagina = paginasExame.find((p) => p.exame === exame.id);
            return (
              <article
                key={exame.id}
                id={exame.id}
                className={
                  exame.id === "complementares"
                    ? "exame exame-largo revelar"
                    : "exame revelar"
                }
              >
                <header className="exame-topo">
                  <span className="exame-icone">
                    <Icone size={26} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="exame-sub">{exame.subtitulo}</span>
                    <h3>{exame.titulo}</h3>
                  </div>
                </header>
                <p className="exame-texto">{exame.simples}</p>
                <div className="exame-tecnico">
                  <span className="mini-rotulo">
                    <Stethoscope size={14} aria-hidden="true" /> Para o
                    veterinário
                  </span>
                  <ul>
                    {exame.tecnico.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="exame-prazo">
                  <Clock size={16} aria-hidden="true" /> <span>{exame.prazo}</span>
                </p>
                {pagina && (
                  <a href={pagina.caminho} className="exame-mais">
                    Saiba mais sobre {exame.titulo.toLowerCase()}{" "}
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
        <p className="nota">
          <Info size={18} aria-hidden="true" />
          <span>
            O IFVET é especializado em <strong>anatomia patológica</strong>. Não
            realizamos hemograma nem exames de sangue, mas eles ajudam muito na
            interpretação: vale enviá-los junto com a requisição.
          </span>
        </p>
      </div>
    </section>
  );
}

function Tutores() {
  const iconesQuem = [Building2, PawPrint];
  return (
    <section id="tutores" className="secao secao-lilas">
      <div className="container">
        <TituloSecao
          sobre="Para tutores"
          titulo="Da coleta ao laudo: como funciona."
          texto="Seu veterinário pediu um exame e a amostra veio para o IFVET? Veja o caminho que ela percorre até virar um laudo."
        />
        <ol className="linha-tempo">
          {passosTutor.map((passo, i) => (
            <li key={passo.titulo} className="revelar">
              <span className="passo-num">{i + 1}</span>
              <h3>{passo.titulo}</h3>
              <p>{passo.texto}</p>
            </li>
          ))}
        </ol>
        <div className="quem-recebe revelar">
          <div className="quem-recebe-cabeca">
            <h3>Quem recebe o laudo?</h3>
            <p>Depende de como a amostra chegou até nós.</p>
          </div>
          <div className="quem-recebe-grid">
            {quemRecebe.map((opcao, i) => {
              const Icone = iconesQuem[i] || FileText;
              return (
                <div key={opcao.titulo} className="quem-opcao">
                  <span className="quem-icone">
                    <Icone size={22} aria-hidden="true" />
                  </span>
                  <h4>{opcao.titulo}</h4>
                  <p>{opcao.texto}</p>
                </div>
              );
            })}
          </div>
          <div className="quem-recebe-rodape">
            <p>
              <ShieldCheck size={18} aria-hidden="true" />
              <span>
                Quem interpreta o resultado e define o tratamento é o
                veterinário que acompanha o seu animal.
              </span>
            </p>
            <a href="#glossario" className="botao botao-contorno">
              <BookOpen size={18} aria-hidden="true" /> Glossário de termos do
              laudo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Veterinarios() {
  const destinos = {
    requisicao: links.requisicao,
    whatsapp: contato.whatsapp,
    laudos: links.laudos,
  };
  const rotulos = {
    requisicao: "Abrir requisição",
    whatsapp: "Chamar no WhatsApp",
    laudos: "Área do Cliente",
  };
  return (
    <section id="veterinarios" className="secao">
      <div className="container vet-grid">
        <div className="vet-lateral">
          <TituloSecao
            sobre="Para médicos-veterinários"
            titulo="Uma rotina simples para a sua clínica."
            texto="Você cuida do paciente; nós transformamos a amostra em uma resposta útil para a sua conduta, com a possibilidade de discutir o caso com quem fez o laudo."
          />
          <div className="vet-acoes">
            <LinkExterno href={links.requisicao} className="botao botao-roxo">
              <ClipboardList size={18} aria-hidden="true" /> Fazer requisição
            </LinkExterno>
            <LinkExterno href={contato.whatsapp} className="botao botao-contorno">
              <MessageCircle size={18} aria-hidden="true" /> Combinar coleta
            </LinkExterno>
          </div>
          <p className="vet-area">
            <Truck size={18} aria-hidden="true" /> Serviço volante em{" "}
            {contato.areaAtendida}
          </p>
        </div>
        <ol className="passos-vet">
          {passosVet.map((passo, i) => (
            <li key={passo.titulo} className="revelar">
              <span className="passo-num">{i + 1}</span>
              <div>
                <h3>{passo.titulo}</h3>
                <p>{passo.texto}</p>
                {passo.link && (
                  <LinkExterno href={destinos[passo.link]} className="link-seta">
                    {rotulos[passo.link]}{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </LinkExterno>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="container">
        <div className="envio" id="envio-de-amostras">
          <div className="envio-cabeca">
            <span className="sobretitulo">Guia rápido</span>
            <h3>Como enviar as amostras</h3>
            <p>
              Uma amostra bem acondicionada é metade do diagnóstico. Toque em
              cada item para ver as orientações.
            </p>
          </div>
          <div className="envio-lista">
            {envio.map((grupo) => (
              <GrupoEnvio key={grupo.titulo} grupo={grupo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GrupoEnvio({ grupo, aberto }) {
  const Icone = icones[grupo.icone];
  return (
    <details className="sanfona" open={aberto}>
      <summary>
        <span className="sanfona-icone">
          <Icone size={20} aria-hidden="true" />
        </span>
        <span className="sanfona-titulo">{grupo.titulo}</span>
        <ChevronDown size={20} className="sanfona-seta" aria-hidden="true" />
      </summary>
      <ListaCheck itens={grupo.itens} />
    </details>
  );
}

export function ListaCheck({ itens }) {
  return (
    <ul className="lista-check">
      {itens.map((item) => (
        <li key={item}>
          <CircleCheck size={18} aria-hidden="true" /> <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AreaCliente() {
  return (
    <section id="area-do-cliente" className="secao secao-roxa">
      <div className="container area-grid">
        <div>
          <TituloSecao
            claro
            sobre="Área do Cliente"
            titulo="Seu laudo, disponível on-line e com segurança."
            texto="Os laudos ficam guardados em ambiente protegido e só podem ser abertos por quem tem acesso ao caso."
          />
          <div className="acessos-tipos">
            <div className="acesso-tipo">
              <span className="acesso-tipo-icone">
                <PawPrint size={20} aria-hidden="true" />
              </span>
              <div>
                <h3>Tutores — atendimento particular</h3>
                <p>
                  Entre com o <strong>número do protocolo</strong> e o{" "}
                  <strong>código de acesso de 6 caracteres</strong>, enviados no
                  e-mail de aviso ou pelo WhatsApp.
                </p>
              </div>
            </div>
            <div className="acesso-tipo">
              <span className="acesso-tipo-icone">
                <Building2 size={20} aria-hidden="true" />
              </span>
              <div>
                <h3>Clínicas e veterinários</h3>
                <p>
                  Entre com <strong>e-mail e senha</strong> e veja todos os casos
                  enviados, o status e a previsão de liberação.
                </p>
              </div>
            </div>
          </div>
          <div className="area-acoes">
            <LinkExterno href={links.laudos} className="botao botao-menta">
              <KeyRound size={18} aria-hidden="true" /> Acessar a Área do
              Cliente
            </LinkExterno>
          </div>
        </div>
        <div className="portal-demo" aria-hidden="true">
          <div className="portal-barra">
            <span />
            <span />
            <span />
            <em>laudos.ifvet.com.br</em>
          </div>
          <div className="portal-corpo">
            <p className="portal-titulo">Meus exames</p>
            <div className="portal-linha">
              <div>
                <strong>P1234-26 · Thor</strong>
                <small>Histopatologia</small>
              </div>
              <span className="status liberado">
                <CircleCheck size={14} /> Liberado
              </span>
            </div>
            <div className="portal-linha">
              <div>
                <strong>C0567-26 · Mel</strong>
                <small>Citologia</small>
              </div>
              <span className="status liberado">
                <CircleCheck size={14} /> Liberado
              </span>
            </div>
            <div className="portal-linha">
              <div>
                <strong>P1250-26 · Luna</strong>
                <small>Histopatologia</small>
              </div>
              <span className="status analise">
                <Clock size={14} /> Em análise
              </span>
            </div>
            <p className="portal-previsao">
              <Info size={14} /> Previsão de liberação exibida para cada caso em
              análise
            </p>
          </div>
          <p className="portal-legenda">Ilustração da Área do Cliente</p>
        </div>
      </div>
    </section>
  );
}

function Arvore() {
  return (
    <figure className="arvore revelar" aria-labelledby="arvore-legenda">
      <div className="arvore-raiz">
        <strong>Aumento de volume</strong>
        <span>o “tumor”, “caroço” ou “nódulo”</span>
      </div>
      <div className="arvore-ramos">
        <div className="ramo">Inflamação</div>
        <div className="ramo">Cisto</div>
        <div className="ramo">Hiperplasia</div>
        <div className="ramo ramo-neo">
          Neoplasia
          <div className="ramo-sub">
            <span>Benigna</span>
            <span className="maligna">
              Maligna <small>(câncer)</small>
            </span>
          </div>
        </div>
        <div className="chave">
          <span>não são neoplasias</span>
        </div>
      </div>
      <figcaption id="arvore-legenda">
        Um aumento de volume pode ter várias causas. Só o exame mostra qual delas
        é — e nem toda neoplasia é câncer.
      </figcaption>
    </figure>
  );
}

function Glossario() {
  return (
    <section id="glossario" className="secao secao-lilas">
      <div className="container">
        <TituloSecao
          sobre="Glossário"
          titulo="Termos que costumam aparecer nos laudos."
          texto="Um pequeno glossário para ajudar você a entender o laudo e a conversa com o veterinário. Ele explica palavras; não substitui a avaliação do caso."
        />
        <Arvore />
        <div className="glossario-grupos">
          {glossario.map((grupo) => (
            <details key={grupo.grupo} className="sanfona glossario-grupo">
              <summary>
                <h3>{grupo.grupo}</h3>
                <small>{grupo.itens.map((item) => item.termo).join(" · ")}</small>
                <ChevronDown size={20} className="sanfona-seta" aria-hidden="true" />
              </summary>
              <dl>
                {grupo.itens.map((item) => (
                  <div key={item.termo}>
                    <dt>{item.termo}</dt>
                    <dd>{item.texto}</dd>
                  </div>
                ))}
              </dl>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Laboratorio() {
  const fotos = [
    {
      src: "/assets/lab-microtomo.webp",
      w: 600,
      h: 782,
      alt: "Micrótomo de congelação com amostra de tecido pronta para o corte",
      legenda: "Micrótomo de congelação",
    },
    {
      src: "/assets/lab-preparo.webp",
      w: 600,
      h: 965,
      alt: "Patologista preparando uma amostra no micrótomo",
      legenda: "Preparo da amostra para o corte",
    },
    {
      src: "/assets/lab-gas.webp",
      w: 605,
      h: 965,
      alt: "Patologista aplicando gás refrigerante no micrótomo",
      legenda: "Congelamento da amostra com gás refrigerante",
    },
  ];
  return (
    <section id="laboratorio" className="secao">
      <div className="container">
        <div className="cabeca-dupla">
          <TituloSecao
            sobre="Nosso laboratório"
            titulo="Venha nos conhecer na Parquelândia."
          />
          <p>
            Recebemos amostras, tutores e colegas veterinários no nosso espaço em
            Fortaleza. Toda a análise é feita por médicos-veterinários
            patologistas.
          </p>
        </div>
        <div className="bento">
          <figure className="bento-foto bento-principal">
            <img
              src="/assets/recepcao.webp"
              alt="Recepção do IFVET, com balcão branco, paredes em azul e o logotipo do laboratório"
              width="1400"
              height="1050"
              loading="lazy"
            />
            <figcaption>Recepção do IFVET</figcaption>
          </figure>
          <div className="bento-info bento-endereco">
            <MapPin size={22} aria-hidden="true" />
            <h3>Endereço</h3>
            <p>{contato.endereco}</p>
            <LinkExterno href={contato.mapa} className="link-seta">
              Abrir no Google Maps <ArrowUpRight size={16} aria-hidden="true" />
            </LinkExterno>
            <p className="bento-horario">
              <Clock size={16} aria-hidden="true" /> Aberto de segunda a sábado.{" "}
              <a href="#contato">Ver horários</a>
            </p>
          </div>
          {fotos.map((foto) => (
            <figure key={foto.src} className="bento-foto">
              <img
                src={foto.src}
                alt={foto.alt}
                width={foto.w}
                height={foto.h}
                loading="lazy"
              />
              <figcaption>{foto.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipe() {
  return (
    <section id="equipe" className="secao secao-lilas">
      <div className="container">
        <TituloSecao
          sobre="Quem está por trás dos laudos"
          titulo="Patologistas que conversam com você."
          texto="Somos uma equipe de médicos-veterinários patologistas comprometida com diagnósticos precisos e com uma relação próxima com clínicas e tutores."
        />
        <div className="equipe-grid">
          {equipe.map((pessoa) => (
            <article key={pessoa.nome} className="pessoa revelar">
              {pessoa.foto ? (
                <img
                  src={pessoa.foto}
                  alt={`Foto de ${pessoa.nome}`}
                  className="pessoa-foto"
                  width="520"
                  height="650"
                  loading="lazy"
                />
              ) : (
                <div className="pessoa-foto pessoa-iniciais" aria-hidden="true">
                  {iniciais(pessoa.nome)}
                </div>
              )}
              <div className="pessoa-texto">
                <span className="mini-rotulo">{pessoa.cargo}</span>
                <h3>{pessoa.nome}</h3>
                <p>{pessoa.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  return (
    <section className="secao secao-noite" aria-labelledby="titulo-depoimentos">
      <div className="container">
        <div className="cabeca-dupla">
          <TituloSecao
            claro
            id="titulo-depoimentos"
            sobre="Quem confia no IFVET"
            titulo="Confiança construída em cada parceria."
          />
          <div className="nota-google">
            <span className="nota-google-num">{google.nota}</span>
            <span>
              <Estrelas tamanho={18} />
              <small>{google.avaliacoes} avaliações no Google</small>
            </span>
          </div>
        </div>
        <div className="depo-grid">
          {depoimentos.map((d) => (
            <figure key={d.nome} className="depo revelar">
              <Quote size={28} aria-hidden="true" className="depo-icone" />
              <blockquote>{d.texto}</blockquote>
              <figcaption>
                <span className="depo-avatar" aria-hidden="true">
                  {iniciais(d.nome)}
                </span>
                <span>
                  <strong>{d.nome}</strong>
                  <small>Avaliação no Google</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pergunta({ item }) {
  return (
    <details className="sanfona">
      <summary>
        <span className="sanfona-titulo">{item.pergunta}</span>
        <ChevronDown size={20} className="sanfona-seta" aria-hidden="true" />
      </summary>
      <p>{item.resposta}</p>
    </details>
  );
}

function Duvidas() {
  const [filtro, setFiltro] = useState("todas");
  const filtros = [
    { id: "todas", label: "Todas" },
    { id: "tutor", label: "Para tutores" },
    { id: "vet", label: "Para veterinários" },
  ];
  const visiveis = perguntas.filter(
    (p) => filtro === "todas" || p.grupo === filtro || p.grupo === "ambos",
  );
  return (
    <section id="duvidas" className="secao secao-lilas">
      <div className="container duvidas-grid">
        <div className="duvidas-lateral">
          <TituloSecao
            sobre="Dúvidas frequentes"
            titulo="Perguntas que ouvimos todos os dias."
          />
          <div className="filtros" role="group" aria-label="Filtrar perguntas">
            {filtros.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filtro === f.id}
                onClick={() => setFiltro(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="duvidas-lista">
          {visiveis.map((item) => (
            <Pergunta key={item.pergunta} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container contato-grid">
        <div>
          <span className="sobretitulo claro">Fale com a gente</span>
          <h2>
            O próximo diagnóstico começa com uma <em>boa conversa</em>.
          </h2>
          <p>
            Clínicas, hospitais e tutores em atendimento particular: fale com a
            nossa equipe para tirar dúvidas sobre exames, combinar a coleta de
            amostras ou discutir um caso.
          </p>
          <LinkExterno href={contato.whatsapp} className="botao botao-menta">
            <MessageCircle size={18} aria-hidden="true" /> Conversar pelo
            WhatsApp
          </LinkExterno>
        </div>
        <div className="contato-cartao">
          <a href={contato.telefoneLink}>
            <Phone size={20} aria-hidden="true" />
            <span>
              <small>Telefone e WhatsApp</small>
              {contato.telefone}
            </span>
          </a>
          <a href={`mailto:${contato.email}`}>
            <Mail size={20} aria-hidden="true" />
            <span>
              <small>E-mail</small>
              {contato.email}
            </span>
          </a>
          <LinkExterno href={contato.instagram}>
            <Instagram size={20} aria-hidden="true" />
            <span>
              <small>Instagram</small>
              {contato.instagramUser}
            </span>
          </LinkExterno>
          <div className="contato-linha">
            <MapPin size={20} aria-hidden="true" />
            <span>
              <small>Endereço</small>
              {contato.endereco}
              <LinkExterno href={contato.mapa} className="link-seta">
                Como chegar <ArrowUpRight size={14} aria-hidden="true" />
              </LinkExterno>
            </span>
          </div>
          <div className="contato-linha">
            <Clock size={20} aria-hidden="true" />
            <span>
              <small>Horário de atendimento</small>
              {contato.horario.map((h) => (
                <span key={h.dias} className="horario-linha">
                  <span>{h.dias}</span>
                  <span>{h.horas}</span>
                </span>
              ))}
            </span>
          </div>
          <div className="contato-linha">
            <Truck size={20} aria-hidden="true" />
            <span>
              <small>Coleta de amostras (serviço volante)</small>
              {contato.areaAtendida}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Inicio() {
  return (
    <Layout>
      <Hero />
      <Prazos />
      <Exames />
      <Tutores />
      <Veterinarios />
      <AreaCliente />
      <Glossario />
      <Laboratorio />
      <Equipe />
      <Depoimentos />
      <Duvidas />
      <Contato />
    </Layout>
  );
}
