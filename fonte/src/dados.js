// Conteúdo do site. Para mudar um texto, telefone, prazo ou pergunta,
// normalmente basta editar este arquivo.

export const contato = {
  whatsapp:
    "https://wa.me/5585991832120?text=Ol%C3%A1%2C%20IFVET!%20Vim%20pelo%20site.",
  telefone: "(85) 99183-2120",
  telefoneLink: "tel:+5585991832120",
  email: "labo.ifvet@gmail.com",
  instagram: "https://www.instagram.com/ifvetlab/",
  instagramUser: "@ifvetlab",
  cidade: "Fortaleza, Ceará",
  endereco:
    "Rua Professor Raimundo Vítor, 80 – Parquelândia, Fortaleza-CE, CEP 60450-115",
  mapa: "https://www.google.com/maps/search/?api=1&query=IFVET+Patologia+Veterin%C3%A1ria+Diagn%C3%B3stica+Rua+Professor+Raimundo+V%C3%ADtor+80+Fortaleza",
  horario: [
    { dias: "Segunda a sexta", horas: "8h30 às 17h30" },
    { dias: "Sábado", horas: "9h às 13h" },
    { dias: "Domingo e feriados", horas: "Fechado" },
  ],
  areaAtendida: "Fortaleza e Região Metropolitana",
  responsavelTecnico:
    "Responsável técnico: Dr. Ismael Lira Borges – CRMV-CE 2596",
};

// Atualize de vez em quando com os números do perfil no Google.
export const google = { nota: "4,9", avaliacoes: 57 };

// Google Analytics 4. Cole aqui o "ID da métrica" (começa com G-), que fica
// em Analytics → Administrador → Fluxos de dados → Web. Enquanto estiver vazio,
// nada é carregado. O visitante só é contado se aceitar no aviso de cookies.
export const analytics = { idGoogle: "G-33BNMT7Z0S" };

// Tudo passa pela ponte laudos.ifvet.com.br (repositório "laudos"), que
// repassa para o Apps Script. Se o endereço do Apps Script mudar, a troca é
// só na ponte e no sistema; o site não precisa ser publicado de novo.
export const links = {
  // O "?entrar=1" leva direto à tela de entrada. Sem ele, laudos.ifvet.com.br
  // mostra a página do laboratório (endereço, contatos, responsável técnico),
  // que é o que os filtros de segurança das empresas leem para classificar o site.
  laudos: "https://laudos.ifvet.com.br/?entrar=1",
  requisicao: "https://laudos.ifvet.com.br/?f=requisicao",
  // Abre a Área do Cliente direto no cadastro da clínica.
  cadastro: "https://laudos.ifvet.com.br/?cadastro=1",
};

export const prazos = [
  { valor: "1 dia útil", rotulo: "Citologia" },
  { valor: "5 a 7 dias úteis", rotulo: "Histopatologia (biópsia)" },
  { valor: "Na hora", rotulo: "Congelação, durante a cirurgia" },
  { valor: "15 a 20 dias úteis", rotulo: "Necropsia" },
];

export const exames = [
  {
    id: "citologia",
    icone: "citologia",
    titulo: "Citologia",
    subtitulo: "Exame citológico",
    simples:
      "Avalia células coletadas com agulha fina, raspado ou “carimbo” da lesão, espalhadas em lâminas de vidro. É rápido, pouco invasivo e muitas vezes feito sem anestesia. Ajuda o veterinário a entender se um aumento de volume é inflamação, cisto ou neoplasia e a decidir os próximos passos.",
    tecnico: [
      "Punção aspirativa por agulha fina (PAAF) de nódulos, linfonodos e órgãos",
      "Citologia de pele, otológica, de mucosas e imprint de lesões",
      "Líquidos cavitários, lavados e outros fluidos",
    ],
    prazo: "1 dia útil após a entrada da amostra",
    paraTutor:
      "Na maioria das vezes, a coleta é rápida e feita na própria consulta, com uma agulha fina — muitas vezes sem anestesia. O resultado sai em 1 dia útil depois que a amostra chega ao laboratório.",
  },
  {
    id: "histopatologia",
    icone: "histopatologia",
    titulo: "Histopatologia",
    subtitulo: "Biópsia",
    simples:
      "Analisa um pedaço do tecido (biópsia) ou a peça retirada em cirurgia. Como mostra a organização do tecido, e não só células soltas, costuma dar o diagnóstico definitivo — por exemplo, se uma neoplasia é benigna ou maligna e se foi totalmente removida.",
    tecnico: [
      "Biópsias incisionais e excisionais, peças cirúrgicas e mastectomias",
      "Avaliação de margens cirúrgicas e graduação histológica de neoplasias",
      "Fragmentos de órgãos colhidos em necropsia",
    ],
    prazo: "5 a 7 dias úteis após a entrada da amostra",
    paraTutor:
      "A amostra é um pedaço do tecido ou a peça retirada na cirurgia. Como mostra a organização das células, costuma dar o diagnóstico definitivo. O resultado sai em 5 a 7 dias úteis; casos que precisam de colorações especiais ou exames complementares podem levar mais tempo.",
    laudoInforma: [
      "Diagnóstico histopatológico (tipo da lesão)",
      "Graduação histológica, quando aplicável",
      "Avaliação das margens cirúrgicas, quando a peça é enviada para esse fim",
    ],
  },
  {
    id: "transcirurgica",
    icone: "transcirurgica",
    titulo: "Biópsia transcirúrgica",
    subtitulo: "Congelação",
    simples:
      "Feita durante a cirurgia, no próprio centro cirúrgico: nosso patologista vai até o local e trabalha junto com o cirurgião. Um fragmento da lesão é congelado e analisado na hora, e a resposta sai ainda durante o procedimento — por exemplo, se as margens estão livres ou se é preciso ampliar a retirada. Depois, a peça segue para a histopatologia de rotina, que confirma o diagnóstico.",
    tecnico: [
      "Realizada in loco, no centro cirúrgico, junto com o cirurgião",
      "Avaliação intraoperatória de margens cirúrgicas e da natureza da lesão",
      "Agendamento prévio com a equipe",
    ],
    prazo: "Resposta durante a cirurgia",
    paraTutor:
      "Se o veterinário do seu animal indicar a congelação, nosso patologista acompanha a cirurgia e dá a resposta ali mesmo — por exemplo, se toda a lesão foi retirada. Depois, a peça vai para a histopatologia, que confirma o diagnóstico.",
  },
  {
    id: "necropsia",
    icone: "necropsia",
    titulo: "Necropsia",
    subtitulo: "Exame pós-morte",
    simples:
      "É o exame feito após o falecimento do animal para entender o que causou a morte. Traz respostas para a família e para o veterinário e pode proteger outros animais da casa ou do rebanho quando há suspeita de doença transmissível ou intoxicação.",
    tecnico: [
      "Exame macroscópico completo com coleta de fragmentos para histopatologia",
      "Determinação da causa mortis e de doenças concomitantes",
      "Contato prévio com a equipe para combinar o recebimento",
    ],
    prazo: "15 a 20 dias úteis (inclui a análise microscópica dos órgãos)",
    paraTutor:
      "Sabemos que é um momento delicado. A necropsia ajuda a entender a causa do falecimento — principalmente em mortes súbitas ou com suspeita de intoxicação — e pode proteger outros animais da casa. O resultado leva de 15 a 20 dias úteis, porque inclui a análise dos órgãos ao microscópio.",
  },
  {
    id: "complementares",
    icone: "complementares",
    titulo: "Exames complementares",
    subtitulo: "Laboratórios parceiros",
    simples:
      "Em alguns casos, são necessários exames extras para fechar o diagnóstico, identificar um microrganismo ou ajudar na escolha do tratamento. Esses exames são realizados por laboratórios parceiros; fale com a gente para saber como solicitar.",
    tecnico: [
      "Imuno-histoquímica e colorações especiais",
      "Cultura fúngica e cultura bacteriana com antibiograma",
      "PCR e PARR (clonalidade de linfócitos)",
    ],
    prazo: "Prazo conforme o exame e o laboratório parceiro",
  },
];

export const passosTutor = [
  {
    titulo: "O veterinário coleta a amostra",
    texto:
      "Na consulta ou na cirurgia, o veterinário do seu animal escolhe o exame, coleta o material e preenche a requisição com o histórico clínico.",
  },
  {
    titulo: "A amostra chega ao IFVET",
    texto:
      "Buscamos na clínica pelo nosso serviço volante (Fortaleza e Região Metropolitana) ou recebemos no laboratório. Cada caso recebe um número de protocolo, que identifica o exame do começo ao fim.",
  },
  {
    titulo: "Nossos patologistas analisam",
    texto:
      "A amostra é processada e avaliada ao microscópio por médicos-veterinários patologistas. Casos mais complexos são conferidos por mais de um patologista.",
  },
  {
    titulo: "O laudo é liberado",
    texto:
      "O laudo fica disponível em formato digital, na nossa Área do Cliente, e o veterinário é avisado assim que ele é liberado.",
  },
];

export const quemRecebe = [
  {
    titulo: "Exame pedido por uma clínica ou hospital",
    texto:
      "O laudo é enviado ao veterinário que pediu o exame. Ele conhece o histórico do seu animal e vai explicar o resultado para você — assim você recebe a notícia e já sai com o próximo passo definido.",
  },
  {
    titulo: "Amostra entregue por você no laboratório (atendimento particular)",
    texto:
      "Cadastramos seu e-mail no balcão e avisamos quando o laudo estiver pronto. O número do protocolo e o código de acesso vêm no e-mail de aviso (ou pelo WhatsApp). Depois, é só levar o laudo na consulta com o veterinário do seu animal.",
  },
];

export const passosVet = [
  {
    titulo: "Preencha a requisição online",
    texto:
      "Informe dados do tutor e do paciente, localização e aspecto da lesão, tempo de evolução, suspeita clínica e tratamentos prévios. Um bom histórico faz diferença no diagnóstico.",
    link: "requisicao",
  },
  {
    titulo: "Acondicione a amostra",
    texto:
      "Siga as orientações de envio abaixo: formol na proporção correta, lâminas secas ao ar e tudo identificado.",
  },
  {
    titulo: "Combine a coleta ou traga ao laboratório",
    texto:
      "Nosso serviço volante busca as amostras na sua clínica em Fortaleza e Região Metropolitana. Combine o horário pelo WhatsApp.",
    link: "whatsapp",
  },
  {
    titulo: "Acompanhe na Área do Cliente",
    texto:
      "Veja todos os casos da clínica, o status de cada exame e a previsão de liberação. Quando o laudo sai, você recebe o aviso e baixa o PDF.",
    link: "laudos",
  },
  {
    titulo: "Discuta o caso com o patologista",
    texto:
      "Ficou alguma dúvida sobre o laudo ou sobre a conduta? Nossa equipe está disponível para conversar sobre o caso. Também fazemos segunda opinião e revisão de casos.",
  },
];

export const envio = [
  {
    exame: "histopatologia",
    titulo: "Histopatologia (biópsias e peças cirúrgicas)",
    icone: "histopatologia",
    itens: [
      "Coloque a amostra em formol a 10% (de preferência tamponado) logo após a coleta.",
      "Use cerca de 10 partes de formol para 1 parte de tecido — o volume de formol deve ser bem maior que o da peça.",
      "Prefira frascos de boca larga e bem vedados: a peça endurece no formol e pode não sair por bocas estreitas.",
      "Peças grandes: faça cortes paralelos de cerca de 1 cm, sem separar totalmente, para o formol penetrar.",
      "Para avaliação de margens, envie a peça inteira e informe na requisição; se possível, marque a orientação (ex.: um ponto de sutura em uma das bordas).",
      "Lesões diferentes vão em frascos separados e identificados.",
      "Transporte em temperatura ambiente. Não congele e não refrigere a amostra em formol.",
    ],
  },
  {
    exame: "transcirurgica",
    titulo: "Biópsia transcirúrgica (congelação) — feita no local",
    icone: "transcirurgica",
    itens: [
      "Não é preciso enviar amostra: nosso patologista vai até o centro cirúrgico e realiza o exame in loco, junto com o cirurgião.",
      "Agende com antecedência pelo WhatsApp, informando data, horário, endereço da clínica e o tipo de cirurgia.",
      "Conte o que precisa ser respondido durante o procedimento (avaliação de margens, natureza da lesão).",
      "Depois da cirurgia, a peça vai em formol para a histopatologia de rotina, que confirma o diagnóstico.",
    ],
  },
  {
    exame: "citologia",
    titulo: "Citologia (lâminas e líquidos)",
    icone: "citologia",
    itens: [
      "Use lâminas limpas e identifique a lápis, na parte fosca, o nome do paciente e o local da coleta.",
      "Faça esfregaços finos e deixe secar ao ar rapidamente. Não fixe no calor.",
      "Sempre que possível, envie de 2 a 4 lâminas por lesão, identificando cada local separadamente.",
      "Nunca envie lâminas junto com frascos de formol, nem no mesmo saco: o vapor do formol estraga a coloração.",
      "Envie em porta-lâminas, protegidas de umidade e calor. Não refrigere as lâminas.",
      "Líquidos (efusões, lavados): envie o fluido em tubo com EDTA (tampa roxa), refrigerado, junto com lâminas preparadas na hora.",
    ],
  },
  {
    exame: "necropsia",
    titulo: "Necropsia",
    icone: "necropsia",
    itens: [
      "Entre em contato antes para combinarmos o recebimento.",
      "Se o corpo puder chegar ao laboratório até o dia seguinte ao óbito, mantenha-o refrigerado (2 a 8 °C).",
      "Se não for possível enviar até o dia seguinte, congele: depois de cerca de 48 horas sob refrigeração, a autólise (degradação natural dos tecidos) já compromete muito o exame.",
      "Corpo congelado deve ser enviado o quanto antes: muitos dias no congelador (4 a 7 dias ou mais) geram artefatos de congelamento que também atrapalham a análise.",
      "Envie o histórico clínico, exames anteriores e medicamentos utilizados.",
    ],
  },
  {
    titulo: "Identificação e requisição",
    icone: "requisicao",
    itens: [
      "Todo frasco ou porta-lâminas deve ter nome do paciente e do tutor.",
      "Preencha a requisição online, ou envie a requisição impressa junto com a amostra.",
      "Informe espécie, raça, sexo e idade, localização e tamanho da lesão, tempo de evolução e suspeita clínica.",
      "Mencione exames e tratamentos anteriores (ex.: uso de corticoide, quimioterapia, biópsias prévias).",
    ],
  },
];

export const glossario = [
  {
    grupo: "Quando aparece um “caroço”",
    itens: [
      {
        termo: "Tumor (aumento de volume)",
        texto:
          "Na linguagem médica, “tumor” quer dizer apenas aumento de volume — o que se costuma chamar de caroço, nódulo ou massa. Ele pode ser causado por inflamação, cisto, hiperplasia ou neoplasia. Só o exame mostra qual é a causa.",
      },
      {
        termo: "Processo inflamatório",
        texto:
          "Reação de defesa do organismo a infecção, alergia, trauma ou corpo estranho. Pode formar um aumento de volume (um “tumor”), mas não é neoplasia.",
      },
      {
        termo: "Cisto",
        texto:
          "Cavidade fechada, com conteúdo líquido ou pastoso. Também pode aparecer como um aumento de volume, mas não é neoplasia.",
      },
      {
        termo: "Hiperplasia",
        texto:
          "Aumento do número de células normais de um tecido, geralmente em resposta a algum estímulo. Não é neoplasia.",
      },
    ],
  },
  {
    grupo: "Sobre as neoplasias",
    itens: [
      {
        termo: "Neoplasia",
        texto:
          "Proliferação anormal de células, que crescem sem obedecer aos controles normais do organismo. Pode ser benigna ou maligna — por isso, neoplasia não é sinônimo de câncer.",
      },
      {
        termo: "Neoplasia benigna",
        texto:
          "Cresce apenas no local, em geral de forma mais lenta e delimitada, e não se espalha para outros órgãos. Muitas vezes a cirurgia resolve.",
      },
      {
        termo: "Neoplasia maligna (câncer)",
        texto:
          "Pode invadir os tecidos vizinhos e se espalhar para outros órgãos. O tratamento e o prognóstico dependem do tipo e do grau.",
      },
      {
        termo: "Metástase",
        texto:
          "Quando células de uma neoplasia maligna se espalham e passam a crescer em outro órgão.",
      },
      {
        termo: "Grau histológico",
        texto:
          "Classificação usada em algumas neoplasias para indicar o quanto tendem a ser agressivas. Ajuda o veterinário a planejar o tratamento.",
      },
      {
        termo: "Margens cirúrgicas",
        texto:
          "São as bordas do tecido retirado. “Livres”: não foram vistas células da neoplasia nas bordas. “Comprometidas”: a neoplasia chega até a borda, e pode ter ficado uma parte no animal.",
      },
    ],
  },
  {
    grupo: "Expressões comuns no laudo",
    itens: [
      {
        termo: "“Compatível com” / “sugestivo de”",
        texto:
          "Usadas quando os achados apontam fortemente para um diagnóstico, mas a confirmação pode depender de outro exame. São comuns na citologia.",
      },
      {
        termo: "Amostra não diagnóstica (“inconclusivo”)",
        texto:
          "Quando o material não tem células suficientes ou representativas para concluir, o resultado costuma vir como “inconclusivo”. Não é um erro — acontece — e pode ser preciso repetir a coleta.",
      },
    ],
  },
];

export const equipe = [
  {
    nome: "Fábio Ranyeri",
    cargo: "Médico-veterinário patologista",
    bio: "Graduado pela UECE e residente em Anatomia Patológica Veterinária pela UnB. Atua em diagnóstico citológico, histopatológico e necroscópico. CRMV-CE 3117.",
    foto: "/assets/equipe-fabio.webp",
  },
  {
    nome: "Ismael Lira Borges",
    cargo: "Médico-veterinário patologista · MSc. · Responsável técnico",
    bio: "Graduado pela UECE, com residência e mestrado em Patologia Animal. Atua em citopatologia, histopatologia, oncologia e necropsia. CRMV-CE 2596.",
    foto: "/assets/equipe-ismael.webp",
  },
];

export const depoimentos = [
  {
    texto:
      "Profissionais excelentes, tenho confiança total no trabalho executado! Serviço ágil e comunicação excelente com os patologistas.",
    nome: "Andressa Panassol",
  },
  {
    texto:
      "Patologistas que passam confiança no diagnóstico de cada exame! Super recomendo!",
    nome: "Thais Negreiros",
  },
  {
    texto: "Ótimo atendimento. Entrega de laudos super-rápido.",
    nome: "Débora Ferreira",
  },
];

export const perguntas = [
  {
    grupo: "tutor",
    exames: ["citologia", "histopatologia"],
    pergunta: "Qual a diferença entre citologia e biópsia?",
    resposta:
      "A citologia avalia células soltas, coletadas geralmente com uma agulha fina — é rápida e pouco invasiva, ótima para triagem. A biópsia (histopatologia) avalia um pedaço do tecido, mostrando como as células estão organizadas; por isso costuma dar o diagnóstico definitivo. O veterinário escolhe o exame mais adequado para cada caso, e às vezes os dois são usados em sequência.",
  },
  {
    grupo: "tutor",
    pergunta: "Quanto tempo demora o resultado?",
    resposta:
      "Citologia: 1 dia útil. Biópsias (histopatologia): 5 a 7 dias úteis. Necropsia: 15 a 20 dias úteis. Os prazos contam a partir da entrada da amostra no laboratório. Casos que precisam de colorações especiais, recortes adicionais ou exames complementares podem levar mais tempo. Na Área do Cliente é possível ver a previsão de liberação de cada exame.",
  },
  {
    grupo: "tutor",
    pergunta: "Como eu acesso o laudo do meu animal?",
    resposta:
      "Se o exame foi pedido por uma clínica, o laudo vai para o veterinário que fez o pedido, e é com ele que você conversa sobre o resultado. Se você trouxe a amostra diretamente ao IFVET, avisamos por e-mail quando o laudo estiver pronto; o número do protocolo e o código de acesso vêm nesse e-mail (ou pelo WhatsApp), e você entra na Área do Cliente com eles.",
  },
  {
    grupo: "tutor",
    pergunta: "Por que o laudo foi para o veterinário e não para mim?",
    resposta:
      "Quando o exame é solicitado por uma clínica, o laudo é um documento técnico endereçado ao veterinário responsável pelo caso. Ele conhece o histórico do seu animal e vai explicar o que o resultado significa na prática e qual é o próximo passo.",
  },
  {
    grupo: "tutor",
    exames: ["citologia", "histopatologia"],
    pergunta: "O laudo fala em “neoplasia” ou “tumor”. Isso quer dizer câncer?",
    resposta:
      "Não necessariamente. “Tumor” quer dizer apenas aumento de volume, que pode ser causado por inflamação, cisto, hiperplasia ou neoplasia. E a neoplasia, por sua vez, pode ser benigna ou maligna. O laudo informa o tipo e, quando se aplica, o grau e as margens cirúrgicas. Quem explica o que isso significa para o seu animal é o veterinário que o acompanha, relacionando o resultado com o exame clínico e o histórico.",
  },
  {
    grupo: "tutor",
    pergunta: "Posso levar a amostra direto ao laboratório?",
    resposta:
      "Sim. A amostra precisa ter sido coletada por um veterinário e estar acondicionada corretamente. No balcão fazemos o cadastro, informamos o protocolo e registramos seu e-mail para avisar quando o laudo estiver pronto.",
  },
  {
    grupo: "tutor",
    exames: ["necropsia"],
    pergunta: "Quando a necropsia é indicada?",
    resposta:
      "Quando se quer entender a causa do falecimento — especialmente em mortes súbitas, suspeita de intoxicação ou de doença que possa afetar outros animais da casa. Sabemos que é um momento delicado. Em geral, o corpo deve ser refrigerado se puder chegar ao laboratório até o dia seguinte, e congelado se o envio for demorar mais. O veterinário do seu animal ou a nossa equipe orientam cada caso.",
  },
  {
    grupo: "ambos",
    pergunta: "O IFVET faz hemograma e exames de sangue?",
    resposta:
      "Não. O IFVET é especializado em anatomia patológica: citologia, histopatologia e necropsia. Hemograma, bioquímicos e outros exames de patologia clínica são feitos por laboratórios de análises clínicas. Se já houver exames de sangue, vale enviá-los junto com a requisição — eles ajudam na interpretação do caso.",
  },
  {
    grupo: "vet",
    pergunta: "Como funciona a coleta das amostras na clínica?",
    resposta:
      "Temos um serviço volante que busca as amostras nas clínicas de Fortaleza e Região Metropolitana. Combine pelo WhatsApp.",
  },
  {
    grupo: "vet",
    exames: ["transcirurgica"],
    pergunta: "Como agendar uma biópsia transcirúrgica (congelação)?",
    resposta:
      "Fale com a gente pelo WhatsApp com antecedência, informando data, horário e endereço da cirurgia e o que precisa ser avaliado (margens, natureza da lesão). Nosso patologista vai até o centro cirúrgico e faz o exame no local, junto com o cirurgião — não é preciso enviar amostra. Depois, a peça segue em formol para a histopatologia de rotina.",
  },
  {
    grupo: "vet",
    exames: ["citologia", "histopatologia"],
    pergunta: "Vocês fazem segunda opinião e revisão de casos?",
    resposta:
      "Sim. Revisamos casos já diagnosticados, inclusive por outros laboratórios, quando se quer uma segunda opinião. Fale com a gente pelo WhatsApp para combinar o envio do material (como lâminas e blocos) e das informações clínicas do caso.",
  },
  {
    grupo: "vet",
    pergunta: "Vocês fazem imuno-histoquímica, cultura, PCR e PARR?",
    resposta:
      "Esses exames são realizados por laboratórios parceiros. Fale com a gente para saber como solicitar e qual amostra enviar.",
  },
  {
    grupo: "vet",
    pergunta: "Como a clínica acessa os laudos?",
    resposta:
      "Cada clínica tem um login (e-mail e senha) na Área do Cliente. Lá aparecem todos os casos enviados, com status, previsão de liberação e o PDF do laudo assim que ele é liberado. Ainda não tem acesso? A própria clínica se cadastra na Área do Cliente, em “Cadastre sua clínica”: informa CPF ou CNPJ, endereço e telefone, confirma o e-mail com um código e escolhe a senha.",
  },
  {
    grupo: "vet",
    pergunta: "Posso discutir um caso com o patologista?",
    resposta:
      "Sim. Consideramos a conversa entre clínico e patologista parte do diagnóstico. Entre em contato pelo WhatsApp informando o número do protocolo.",
  },
  {
    grupo: "ambos",
    pergunta: "Quais são os valores e as formas de pagamento?",
    resposta:
      "Os valores variam conforme o exame e o tipo de atendimento. Fale com a nossa equipe pelo WhatsApp para receber a informação atualizada.",
  },
];

export const menu = [
  { id: "exames", label: "Exames" },
  { id: "tutores", label: "Para tutores" },
  { id: "veterinarios", label: "Para veterinários" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "equipe", label: "Equipe" },
  { id: "contato", label: "Contato" },
];
