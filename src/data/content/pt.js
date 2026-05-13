// Copy proposta com base em docs/CONTENT_COPY_DECK.md; a aprovação final está registrada em docs/OPEN_DECISIONS.md.
export const pt = {
  meta: {
    title: "Lyken Agency — Estratégia Inteligente. Marcas Inesquecíveis.",
    description:
      "A Lyken Agency une branding, marketing digital, tecnologia e soluções com inteligência artificial para ajudar negócios a construir, posicionar e crescer.",
    language: "pt",
  },
  validation: {
    nameRequired: "Por favor, informe seu nome.",
    emailInvalid: "Por favor, informe um email válido.",
    serviceRequired: "Por favor, selecione um serviço.",
    messageRequired: "Por favor, escreva uma breve mensagem.",
  },
  navigation: {
    brandLabel: "Lyken Agency",
    items: [
      { id: "about", label: "Sobre", target: "about", href: "#about", order: 1 },
      { id: "services", label: "Serviços", target: "services", href: "#services", order: 2 },
      { id: "process", label: "Processo", target: "process", href: "#process", order: 3 },
      { id: "solutions", label: "Soluções", target: "solutions", href: "#solutions", order: 4 },
      { id: "contact", label: "Contato", target: "contact", href: "#contact", order: 5 },
    ],
    cta: {
      label: "Iniciar um Projeto",
      href: "#contact",
    },
    mobileMenu: {
      openLabel: "Abrir navegação",
      closeLabel: "Fechar navegação",
    },
  },
  loading: {
    phrase: "Da ideia ao branding.",
  },
  hero: {
    concept: "Da Ideia à Marca Viva",
    narrative: "Ideia → Estrutura → Identidade → Presença Digital → Inteligência → Crescimento",
    headline: "Transformamos ideias em marcas digitais vivas.",
    subheadline:
      "A Lyken Agency combina estratégia, branding, tecnologia e inteligência para transformar ideias em experiências digitais estruturadas, memoráveis e escaláveis.",
    primaryCta: {
      label: "Iniciar um Projeto",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explorar a Transformação",
      href: "#journey",
    },
    tagline: "Estratégia Inteligente. Marcas Inesquecíveis.",
  },
  journey: {
    id: "journey",
    sectionLabel: "Jornada",
    title: "Uma marca não é simplesmente criada. Ela é moldada, estruturada e trazida à vida.",
    intro:
      "Da primeira possibilidade ao crescimento digital, a Lyken conduz a transformação da marca com clareza, estrutura, inteligência e intenção.",
    continueCta: {
      label: "Continuar para o que trazemos à vida",
      href: "#services",
    },
    stages: [
      {
        id: "spark",
        eyebrow: "01 — O Começo",
        label: "O Começo",
        title: "Toda marca começa como uma possibilidade.",
        description:
          "Antes de uma marca ter nome, voz ou identidade visual, ela começa como uma ideia à espera de direção.",
        visualConcept:
          "Espaço vazio em verde profundo com um único ponto champagne-gold respirando de forma sutil.",
        keywords: ["visão", "intenção", "possibilidade"],
        order: 1,
      },
      {
        id: "structure",
        eyebrow: "02 — A Estrutura",
        label: "A Estrutura",
        title: "A estratégia transforma possibilidade em direção.",
        description:
          "Organizamos ideias em posicionamento, narrativa e estrutura para que cada decisão tenha um propósito claro.",
        visualConcept:
          "Linhas editoriais finas, pontos conectados e módulos estruturais formando um sistema.",
        keywords: ["clareza", "método", "direção", "posicionamento", "estrutura"],
        order: 2,
      },
      {
        id: "identity",
        eyebrow: "03 — A Identidade",
        label: "A Identidade",
        title: "Uma marca se torna real quando pode ser vista, compreendida e lembrada.",
        description:
          "Criamos sistemas visuais e verbais que dão presença, consistência e reconhecimento à marca.",
        visualConcept:
          "Composição editorial de marca com monograma LK, tipografia Playfair, detalhes dourados e módulos de identidade.",
        keywords: ["identidade visual", "tom de voz", "memória de marca", "posicionamento", "nome", "sistema"],
        order: 3,
      },
      {
        id: "digital-presence",
        eyebrow: "04 — A Presença Digital",
        label: "A Presença Digital",
        title: "Transformamos marcas em experiências digitais.",
        description:
          "Sites, plataformas e pontos de contato digitais transformam identidade de marca em interação, clareza e conexão.",
        visualConcept:
          "Malha digital mais presente com módulos refinados de interface para website, app, social, e-commerce e pontos digitais.",
        keywords: ["website", "landing page", "app", "e-commerce", "presença social", "experiência digital"],
        order: 4,
      },
      {
        id: "intelligence",
        eyebrow: "05 — A Inteligência",
        label: "A Inteligência",
        title: "A tecnologia transforma presença em performance.",
        description:
          "IA, automação e sistemas inteligentes ajudam marcas a operar com mais clareza, velocidade e precisão.",
        visualConcept:
          "Pontos conectados, fluxos abstratos de dados e painéis inteligentes sem clichês visuais de IA.",
        keywords: ["IA", "automação", "workflow", "sistemas", "dados", "performance"],
        order: 5,
      },
      {
        id: "growth",
        eyebrow: "06 — O Crescimento",
        label: "O Crescimento",
        title: "Uma marca viva evolui, se adapta e cresce.",
        description:
          "O crescimento nasce de um sistema de marca capaz de se adaptar, comunicar e expandir com intenção.",
        visualConcept:
          "Malha expandida, mais luz, composição aberta e um sinal discreto de continuidade para a próxima seção.",
        keywords: ["crescimento", "evolução", "adaptação", "escala", "continuidade"],
        order: 6,
      },
    ],
  },
  services: {
    id: "services",
    sectionLabel: "Serviços",
    title: "O Que Trazemos à Vida",
    intro:
      "Um sistema de transformação que avança da estratégia e identidade para presença digital, tecnologia e crescimento.",
    items: [
      {
        id: "brand-strategy",
        title: "Estratégia de Marca",
        description:
          "Direção, posicionamento, narrativa e sistemas estratégicos para marcas que precisam de clareza antes da execução.",
        icon: "target",
        order: 1,
      },
      {
        id: "visual-identity",
        title: "Identidade Visual",
        description:
          "Logotipos, tipografia, sistemas de cor, aplicações de marca e linguagens visuais criadas para serem reconhecidas e lembradas.",
        icon: "diamond",
        order: 2,
      },
      {
        id: "digital-presence",
        title: "Presença Digital",
        description:
          "Sites, landing pages, estruturas de conteúdo e pontos de contato digitais que comunicam valor com clareza.",
        icon: "globe",
        order: 3,
      },
      {
        id: "growth-marketing",
        title: "Marketing de Crescimento",
        description:
          "Estratégia digital, direção de conteúdo e campanhas criadas para construir autoridade, conexão e crescimento mensurável.",
        icon: "trending-up",
        order: 4,
      },
      {
        id: "web-platforms",
        title: "Plataformas Web",
        description:
          "Sites, aplicativos web, e-commerce, portais de clientes e experiências digitais responsivas construídas para necessidades reais de negócio.",
        icon: "layers",
        order: 5,
      },
      {
        id: "ai-solutions",
        title: "Soluções com IA",
        description:
          "Fluxos de trabalho com IA, automação, ferramentas internas e sistemas inteligentes que ajudam negócios a trabalhar melhor.",
        icon: "cpu",
        order: 6,
      },
    ],
  },
  process: {
    id: "process",
    sectionLabel: "Processo",
    title: "Um processo estruturado para transformação criativa.",
    steps: [
      {
        id: "discover",
        title: "Descobrir",
        description: "Entendemos o negócio, o contexto, o público e os objetivos.",
        order: 1,
      },
      {
        id: "define",
        title: "Definir",
        description: "Clarificamos estratégia, direção, prioridades e escopo.",
        order: 2,
      },
      {
        id: "design",
        title: "Criar",
        description: "Desenvolvemos o sistema visual, verbal e experiencial.",
        order: 3,
      },
      {
        id: "build",
        title: "Construir",
        description: "Criamos a experiência digital, plataforma ou solução.",
        order: 4,
      },
      {
        id: "launch",
        title: "Lançar",
        description: "Preparamos a marca ou solução para uso real.",
        order: 5,
      },
      {
        id: "evolve",
        title: "Evoluir",
        description: "Refinamos, otimizamos e apoiamos a próxima etapa de crescimento.",
        order: 6,
      },
    ],
  },
  solutions: {
    id: "solutions",
    sectionLabel: "Soluções",
    title: "Soluções para cada estágio do seu negócio.",
    items: [
      {
        id: "new-brands",
        title: "Novas Marcas",
        description:
          "Para negócios começando do zero e que precisam de estratégia, identidade e estrutura digital.",
        order: 1,
      },
      {
        id: "repositioning",
        title: "Reposicionamento",
        description:
          "Para marcas que precisam de uma nova direção, posicionamento mais forte ou presença visual mais refinada.",
        order: 2,
      },
      {
        id: "digital-expansion",
        title: "Expansão Digital",
        description:
          "Para negócios prontos para crescer no digital por meio de sites, conteúdo, marketing e experiências digitais.",
        order: 3,
      },
      {
        id: "intelligent-operations",
        title: "Operações Inteligentes",
        description:
          "Para empresas que desejam melhorar processos internos com tecnologia, automação e inteligência artificial.",
        order: 4,
      },
    ],
  },
  whyLyken: {
    id: "why-lyken",
    sectionLabel: "Por Que Lyken",
    title: "Porque marcas modernas precisam de mais do que design.",
    points: [
      { id: "strategy-before-execution", text: "Estratégia antes da execução", order: 1 },
      {
        id: "business-connected-branding",
        text: "Branding conectado aos objetivos do negócio",
        order: 2,
      },
      {
        id: "growth-built-experiences",
        text: "Experiências digitais criadas para crescimento",
        order: 3,
      },
      { id: "ai-enhanced-workflows", text: "Fluxos de trabalho otimizados com IA", order: 4 },
      { id: "premium-visual-direction", text: "Direção visual premium", order: 5 },
      {
        id: "flexible-business-stages",
        text: "Soluções flexíveis para diferentes estágios de negócio",
        order: 6,
      },
    ],
  },
  contact: {
    id: "contact",
    sectionLabel: "Contato",
    finalCta: {
      title: "Pronto para transformar sua ideia em uma marca viva?",
      text: "Vamos construir a próxima etapa do seu negócio com estratégia, design, tecnologia e inteligência.",
      button: {
        label: "Iniciar um Projeto",
        href: "#contact-form",
      },
    },
    form: {
      id: "contact-form",
      submitLabel: "Iniciar um Projeto",
      loadingLabel: "Preparando Solicitação",
      successMessage:
        "Sua mensagem foi preparada. Vamos analisar sua solicitação e retornar em breve.",
      errorMessage: "Algo deu errado. Por favor, tente novamente ou entre em contato diretamente.",
      privacyNote: "Suas informações serão usadas apenas para responder à sua solicitação de projeto.",
      fields: [
        {
          id: "name",
          name: "name",
          label: "Nome",
          placeholder: "Seu nome",
          type: "text",
          required: true,
          validationKey: "nameRequired",
          order: 1,
        },
        {
          id: "business-name",
          name: "businessName",
          label: "Nome da Empresa",
          placeholder: "Nome da sua empresa",
          type: "text",
          required: false,
          validationKey: null,
          order: 2,
        },
        {
          id: "email",
          name: "email",
          label: "Email",
          placeholder: "voce@empresa.com",
          type: "email",
          required: true,
          validationKey: "emailInvalid",
          order: 3,
        },
        {
          id: "phone",
          name: "phone",
          label: "Telefone",
          placeholder: "Seu telefone",
          type: "tel",
          required: false,
          validationKey: null,
          order: 4,
        },
        {
          id: "service-needed",
          name: "serviceNeeded",
          label: "Serviço Desejado",
          placeholder: "Selecione um serviço",
          type: "select",
          required: true,
          validationKey: "serviceRequired",
          order: 5,
        },
        {
          id: "message",
          name: "message",
          label: "Mensagem",
          placeholder: "Conte o que você deseja construir",
          type: "textarea",
          required: true,
          validationKey: "messageRequired",
          order: 6,
        },
      ],
      serviceOptions: [
        { id: "brand-strategy", label: "Estratégia de Marca", value: "brand-strategy", order: 1 },
        { id: "visual-identity", label: "Identidade Visual", value: "visual-identity", order: 2 },
        { id: "website", label: "Site", value: "website", order: 3 },
        { id: "web-app", label: "Aplicativo Web", value: "web-app", order: 4 },
        { id: "e-commerce", label: "E-commerce", value: "e-commerce", order: 5 },
        { id: "digital-marketing", label: "Marketing Digital", value: "digital-marketing", order: 6 },
        { id: "ai-solution", label: "Solução com IA", value: "ai-solution", order: 7 },
        { id: "not-sure-yet", label: "Ainda não tenho certeza", value: "not-sure-yet", order: 8 },
      ],
    },
    directContact: {
      label: "Contato Direto",
      text: "Email oficial, WhatsApp e links sociais ainda estão em aprovação. Esta seção fica preparada para o canal confirmado.",
      items: [
        { id: "email", label: "Email", value: "Email oficial em aprovação", order: 1 },
        { id: "whatsapp", label: "WhatsApp", value: "Número oficial em aprovação", order: 2 },
      ],
    },
  },
  footer: {
    tagline: "Estratégia Inteligente. Marcas Inesquecíveis.",
    brandLine: "Lyken Agency — Estratégia Inteligente. Marcas Inesquecíveis.",
    navigationLabel: "Navegação",
    contactLabel: "Contato",
    socialLabel: "Social",
    pendingLabel: "Em aprovação",
    logo: {
      src: "/logos/lyken-logo.svg",
      alt: "Lyken Agency",
    },
    links: [
      { id: "about", label: "Sobre", href: "#about", order: 1 },
      { id: "services", label: "Serviços", href: "#services", order: 2 },
      { id: "process", label: "Processo", href: "#process", order: 3 },
      { id: "solutions", label: "Soluções", href: "#solutions", order: 4 },
      { id: "contact", label: "Contato", href: "#contact", order: 5 },
    ],
    socialLinks: [
      { id: "instagram", label: "Instagram", href: null, order: 1 },
      { id: "linkedin", label: "LinkedIn", href: null, order: 2 },
    ],
    contact: {
      emailLabel: "Email",
      email: null,
      emailPendingText: "Email oficial em aprovação",
    },
    cta: {
      label: "Iniciar um Projeto",
      href: "#contact",
    },
    copyright: "Todos os direitos reservados.",
  },
}
