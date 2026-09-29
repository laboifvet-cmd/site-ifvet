import { ChevronRight, ShieldCheck } from "lucide-react";
import Layout from "../componentes/Layout.jsx";
import { LinkExterno } from "../componentes/comum.jsx";
import { reabrirAvisoCookies } from "../componentes/Estatisticas.jsx";
import { analytics, contato } from "../dados.js";

// Data da última revisão do texto. Atualize sempre que mudar a política.
export const PRIVACIDADE_ATUALIZADA_EM = "29 de setembro de 2026";

export default function Privacidade() {
  return (
    <Layout base="/">
      <section className="pagina-topo">
        <div className="hero-fundo" aria-hidden="true" />
        <div className="container pagina-topo-inner">
          <nav className="migalhas" aria-label="Você está em">
            <a href="/">Início</a>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Política de privacidade</span>
          </nav>
          <div className="pagina-topo-titulo">
            <span className="pagina-topo-icone">
              <ShieldCheck size={28} aria-hidden="true" />
            </span>
            <span className="sobretitulo claro">LGPD</span>
          </div>
          <h1>Política de privacidade</h1>
          <p className="hero-lead">
            Como o IFVET cuida dos dados de tutores, clínicas e visitantes do
            site. Em resumo: usamos os dados para fazer os exames e entregar os
            laudos, não vendemos nada a ninguém e você pode pedir acesso,
            correção ou exclusão quando quiser.
          </p>
          <p className="pagina-prazo">Atualizada em {PRIVACIDADE_ATUALIZADA_EM}</p>
        </div>
      </section>

      <section className="secao pagina-corpo">
        <div className="container texto-legal">
          <h2>1. Quem somos</h2>
          <p>
            <strong>IFVET Patologia Diagnóstica</strong>, laboratório de
            patologia veterinária, {contato.endereco}. Somos os responsáveis
            (controladores) pelos dados descritos aqui. Para qualquer assunto
            de privacidade, escreva para{" "}
            <a href={`mailto:${contato.email}`}>{contato.email}</a>.
          </p>

          <h2>2. Quais dados usamos</h2>
          <ul>
            <li>
              <strong>Na requisição de exames e no atendimento:</strong> nome e
              contato do tutor (e-mail e telefone, quando informados), dados do
              animal (nome, espécie, raça, sexo e idade) e as informações
              clínicas do caso; nome da clínica, do veterinário e CRMV.
            </li>
            <li>
              <strong>Na Área do Cliente:</strong> e-mail e senha de acesso das
              clínicas e o número do protocolo e o código de acesso dos tutores.
              As senhas são guardadas de forma cifrada (hash) e ninguém da
              equipe consegue lê-las.
            </li>
            <li>
              <strong>Quando você fala com a gente</strong> por WhatsApp, e-mail
              ou Instagram: o que você nos enviar.
            </li>
            <li>
              <strong>Ao navegar no site:</strong> só se você aceitar os
              cookies, o Google Analytics registra dados de uso, como páginas
              visitadas, tipo de aparelho e cidade aproximada. Sem o seu aceite,
              nenhum dado de navegação é coletado.
            </li>
          </ul>

          <h2>3. Para que usamos</h2>
          <ul>
            <li>Realizar os exames e emitir os laudos.</li>
            <li>
              Disponibilizar os laudos na Área do Cliente e avisar por e-mail
              quando ficam prontos.
            </li>
            <li>
              Falar com você sobre o caso, combinar a coleta de amostras e
              tratar de pagamentos.
            </li>
            <li>Cumprir obrigações legais e as normas da medicina veterinária.</li>
            <li>
              Entender como o site é usado e melhorá-lo (só com o seu aceite
              dos cookies).
            </li>
          </ul>
          <p>
            As bases legais são a execução do serviço contratado, o cumprimento
            de obrigações legais e regulatórias, o nosso legítimo interesse em
            manter os sistemas seguros e, para as estatísticas do site, o seu
            consentimento (artigo 7º da Lei 13.709/2018, a LGPD).
          </p>

          <h2>4. Com quem compartilhamos</h2>
          <p>Não vendemos nem alugamos dados. Compartilhamos só o necessário com:</p>
          <ul>
            <li>
              <strong>O veterinário ou a clínica responsável pelo caso</strong>,
              que recebe o laudo.
            </li>
            <li>
              <strong>Laboratórios parceiros</strong>, quando um exame
              complementar é necessário (dados da amostra e do caso).
            </li>
            <li>
              <strong>Google</strong>, que hospeda nossos sistemas (Área do
              Cliente, planilhas, arquivos, e-mail e, com o seu aceite, o
              Google Analytics), seguindo as nossas instruções.
            </li>
            <li>Autoridades, quando a lei exigir.</li>
          </ul>

          <h2>5. Por quanto tempo guardamos</h2>
          <p>
            Os laudos e os registros dos exames ficam guardados pelo tempo
            exigido pela lei e pelas normas da medicina veterinária. Os dados de
            navegação do Google Analytics ficam guardados por no máximo 14
            meses. O resto é apagado ou anonimizado quando deixa de ser
            necessário.
          </p>

          <h2>6. Como protegemos</h2>
          <p>
            Os laudos só abrem com login da clínica ou com o protocolo e o
            código de acesso do tutor. As senhas são cifradas, a equipe tem
            contas individuais e todas as conexões são criptografadas (HTTPS).
          </p>

          <h2>7. Seus direitos</h2>
          <p>Pela LGPD, você pode pedir, a qualquer momento:</p>
          <ul>
            <li>confirmação de que tratamos seus dados e acesso a eles;</li>
            <li>correção de dados incompletos ou errados;</li>
            <li>
              anonimização, bloqueio ou exclusão do que for desnecessário ou
              tratado em desacordo com a lei;
            </li>
            <li>portabilidade para outro fornecedor;</li>
            <li>informação sobre com quem compartilhamos;</li>
            <li>retirada do consentimento (por exemplo, dos cookies).</li>
          </ul>
          <p>
            Para isso, escreva para{" "}
            <a href={`mailto:${contato.email}`}>{contato.email}</a> ou fale
            pelo <LinkExterno href={contato.whatsapp}>WhatsApp</LinkExterno>.
            Você também pode procurar a Autoridade Nacional de Proteção de Dados
            (ANPD).
          </p>

          <h2>8. Cookies</h2>
          <p>
            O site guarda no seu navegador apenas a sua escolha sobre os
            cookies. O Google Analytics só é carregado se você clicar em
            "Aceitar", e não usamos cookies de publicidade.
            {analytics.idGoogle && (
              <>
                {" "}
                Para mudar a sua escolha,{" "}
                <button type="button" className="link-botao" onClick={reabrirAvisoCookies}>
                  abra as preferências de cookies
                </button>
                .
              </>
            )}
          </p>

          <h2>9. Mudanças nesta política</h2>
          <p>
            Quando esta política mudar, a data no topo da página é atualizada.
          </p>
        </div>
      </section>
    </Layout>
  );
}
