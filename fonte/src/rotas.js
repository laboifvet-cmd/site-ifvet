// Páginas do site e as informações de SEO (título, descrição, dados para o
// Google) de cada uma.
import { contato, exames } from "./dados.js";

export const SITE = "https://www.ifvet.com.br";

// Uma página por exame. O conteúdo vem de `exames`, `envio` e `perguntas`
// em dados.js; aqui ficam só o endereço e os textos de SEO.
export const paginasExame = [
  {
    caminho: "/citologia-veterinaria/",
    exame: "citologia",
    titulo: "Citologia veterinária em Fortaleza",
    tituloSeo: "Citologia veterinária em Fortaleza | IFVET Patologia Diagnóstica",
    descricao:
      "Citologia veterinária em Fortaleza-CE: PAAF de nódulos e linfonodos, citologia de pele, otológica e de líquidos. Laudo em 1 dia útil, com orientações de envio para clínicas.",
  },
  {
    caminho: "/histopatologia-veterinaria/",
    exame: "histopatologia",
    titulo: "Histopatologia veterinária em Fortaleza",
    tituloSeo:
      "Histopatologia e biópsia veterinária em Fortaleza | IFVET Patologia Diagnóstica",
    descricao:
      "Histopatologia veterinária (biópsias e peças cirúrgicas) em Fortaleza-CE, com avaliação de margens e graduação histológica. Laudo em 5 a 7 dias úteis.",
  },
  {
    caminho: "/biopsia-transcirurgica/",
    exame: "transcirurgica",
    titulo: "Biópsia transcirúrgica (congelação) em Fortaleza",
    tituloSeo:
      "Biópsia transcirúrgica (congelação) veterinária em Fortaleza | IFVET",
    descricao:
      "Biópsia por congelação feita no centro cirúrgico, junto com o cirurgião: avaliação intraoperatória de margens e da natureza da lesão, com resposta durante a cirurgia. Fortaleza-CE.",
  },
  {
    caminho: "/necropsia-veterinaria/",
    exame: "necropsia",
    titulo: "Necropsia veterinária em Fortaleza",
    tituloSeo: "Necropsia veterinária em Fortaleza | IFVET Patologia Diagnóstica",
    descricao:
      "Necropsia veterinária em Fortaleza-CE para determinar a causa da morte, com análise microscópica dos órgãos. Veja como conservar e enviar o corpo.",
  },
];

export const rotasParaGerar = [
  "/",
  ...paginasExame.map((p) => p.caminho),
  "/404",
];

const inicio = {
  tituloSeo:
    "IFVET Patologia Diagnóstica | Citologia, histopatologia e necropsia veterinária em Fortaleza",
  descricao:
    "Laboratório de patologia veterinária em Fortaleza-CE. Citologia, histopatologia (biópsias), biópsia transcirúrgica (congelação) e necropsia, com laudo digital para clínicas e tutores. Rua Professor Raimundo Vítor, 80 – Parquelândia.",
  ogTitulo: "IFVET | Patologia Diagnóstica Veterinária em Fortaleza",
  ogDescricao:
    "Citologia, histopatologia e necropsia com laudo digital. Clareza para quem trata e para quem cuida.",
};

const laboratorio = {
  "@type": "VeterinaryCare",
  "@id": `${SITE}/#laboratorio`,
  name: "IFVET Patologia Diagnóstica",
  description:
    "Laboratório de patologia veterinária: citologia, histopatologia, biópsia transcirúrgica (congelação) e necropsia.",
  url: `${SITE}/`,
  logo: `${SITE}/assets/ifvet-logo-purple.webp`,
  image: `${SITE}/assets/og-image.jpg`,
  telephone: "+55 85 99183-2120",
  email: contato.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Professor Raimundo Vítor, 80 – Parquelândia",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    postalCode: "60450-115",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  hasMap: contato.mapa,
  areaServed: "Fortaleza e Região Metropolitana, CE",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exames de patologia veterinária",
    itemListElement: paginasExame.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.titulo.replace(" em Fortaleza", ""),
        url: `${SITE}${p.caminho}`,
      },
    })),
  },
  sameAs: [contato.instagram],
};

function escapar(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function montar({ titulo, descricao, url, ogTitulo, ogDescricao, jsonLd, indexar = true }) {
  const og = ogTitulo || titulo;
  const ogDesc = ogDescricao || descricao;
  const linhas = [
    `<title>${escapar(titulo)}</title>`,
    `<meta name="description" content="${escapar(descricao)}" />`,
    indexar
      ? `<link rel="canonical" href="${url}" />`
      : `<meta name="robots" content="noindex" />`,
    `<meta property="og:title" content="${escapar(og)}" />`,
    `<meta property="og:description" content="${escapar(ogDesc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${escapar(og)}" />`,
    `<meta name="twitter:description" content="${escapar(ogDesc)}" />`,
  ];
  if (jsonLd) {
    const json = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
    linhas.push(`<script type="application/ld+json">${json}</script>`);
  }
  return linhas.join("\n    ");
}

export function cabecaDaPagina(caminho) {
  if (caminho === "/") {
    return montar({
      titulo: inicio.tituloSeo,
      descricao: inicio.descricao,
      url: `${SITE}/`,
      ogTitulo: inicio.ogTitulo,
      ogDescricao: inicio.ogDescricao,
      jsonLd: { "@context": "https://schema.org", ...laboratorio },
    });
  }
  const pagina = paginasExame.find((p) => p.caminho === caminho);
  if (pagina) {
    const exame = exames.find((e) => e.id === pagina.exame);
    return montar({
      titulo: pagina.tituloSeo,
      descricao: pagina.descricao,
      url: `${SITE}${pagina.caminho}`,
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: pagina.titulo,
            description: exame.simples,
            serviceType: exame.titulo,
            url: `${SITE}${pagina.caminho}`,
            areaServed: "Fortaleza e Região Metropolitana, CE",
            provider: { "@id": `${SITE}/#laboratorio` },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Exames", item: `${SITE}/#exames` },
              {
                "@type": "ListItem",
                position: 3,
                name: exame.titulo,
                item: `${SITE}${pagina.caminho}`,
              },
            ],
          },
          laboratorio,
        ],
      },
    });
  }
  return montar({
    titulo: "Página não encontrada | IFVET Patologia Diagnóstica",
    descricao: "O endereço acessado não existe no site do IFVET Patologia Diagnóstica.",
    url: `${SITE}/`,
    indexar: false,
  });
}
