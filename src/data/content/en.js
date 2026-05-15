// Proposed copy based on docs/CONTENT_COPY_DECK.md; final approval is tracked in docs/OPEN_DECISIONS.md.
export const en = {
  meta: {
    title: "Lyken Agency — Intelligent Strategy. Unforgettable Brands.",
    description:
      "Lyken Agency combines branding, digital marketing, technology and AI-powered solutions to help businesses build, position and grow.",
    language: "en",
  },
  validation: {
    nameRequired: "Please enter your name.",
    emailInvalid: "Please enter a valid email.",
    serviceRequired: "Please select a service.",
    messageRequired: "Please write a short message.",
  },
  navigation: {
    brandLabel: "Lyken Agency",
    skipLabel: "Skip to main content",
    items: [
      { id: "about", label: "About", target: "about", href: "#about", order: 1 },
      { id: "services", label: "Services", target: "services", href: "#services", order: 2 },
      { id: "process", label: "Process", target: "process", href: "#process", order: 3 },
      { id: "solutions", label: "Solutions", target: "solutions", href: "#solutions", order: 4 },
      { id: "contact", label: "Contact", target: "contact", href: "#contact", order: 5 },
    ],
    cta: {
      label: "Start a Project",
      href: "#contact",
    },
    mobileMenu: {
      openLabel: "Open navigation",
      closeLabel: "Close navigation",
    },
  },
  loading: {
    phrase: "From idea to branding.",
  },
  hero: {
    concept: "From Idea to Living Brand",
    narrative: "Idea → Structure → Identity → Digital Presence → Intelligence → Growth",
    headline: "We turn ideas into living digital brands.",
    subheadline:
      "Lyken Agency combines strategy, branding, technology and intelligence to transform ideas into structured, memorable and scalable digital experiences.",
    primaryCta: {
      label: "Start a Project",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore the Transformation",
      href: "#journey",
    },
    tagline: "Intelligent Strategy. Unforgettable Brands.",
  },
  journey: {
    id: "journey",
    sectionLabel: "Journey",
    title: "A brand is not simply created. It is shaped, structured and brought to life.",
    intro:
      "From the first possibility to digital growth, Lyken guides the transformation of a brand with clarity, structure, intelligence and intention.",
    continueCta: {
      label: "Continue to what we bring to life",
      href: "#services",
    },
    stages: [
      {
        id: "spark",
        eyebrow: "01 — The Spark",
        label: "The Spark",
        title: "Every brand begins as a possibility.",
        description:
          "Before a brand has a name, a voice or a visual identity, it begins as an idea waiting for direction.",
        visualConcept:
          "Empty deep green space with a single champagne-gold point breathing subtly.",
        keywords: ["vision", "intention", "possibility"],
        order: 1,
      },
      {
        id: "structure",
        eyebrow: "02 — The Structure",
        label: "The Structure",
        title: "Strategy transforms possibility into direction.",
        description:
          "We organize ideas into positioning, narrative and structure so every decision has a clear purpose.",
        visualConcept:
          "Thin editorial lines, connected points and quiet structural modules forming a system.",
        keywords: ["clarity", "method", "direction", "positioning", "structure"],
        order: 2,
      },
      {
        id: "identity",
        eyebrow: "03 — The Identity",
        label: "The Identity",
        title: "A brand becomes real when it can be seen, understood and remembered.",
        description:
          "We shape visual and verbal systems that give the brand presence, consistency and recognition.",
        visualConcept:
          "An editorial brand composition with the LK monogram, Playfair typography, gold details and identity modules.",
        keywords: ["visual identity", "tone of voice", "brand memory", "positioning", "name", "system"],
        order: 3,
      },
      {
        id: "digital-presence",
        eyebrow: "04 — The Digital Presence",
        label: "The Digital Presence",
        title: "We transform brands into digital experiences.",
        description:
          "Websites, platforms and digital touchpoints turn brand identity into interaction, clarity and connection.",
        visualConcept:
          "A more present digital mesh with refined interface modules for website, app, social, e-commerce and digital touchpoints.",
        keywords: ["website", "landing page", "app", "e-commerce", "social presence", "digital experience"],
        order: 4,
      },
      {
        id: "intelligence",
        eyebrow: "05 — The Intelligence",
        label: "The Intelligence",
        title: "Technology turns presence into performance.",
        description:
          "AI, automation and intelligent systems help brands operate with more clarity, speed and precision.",
        visualConcept:
          "Connected points, abstract data flows and intelligent panels without AI cliches.",
        keywords: ["AI", "automation", "workflow", "systems", "data", "performance"],
        order: 5,
      },
      {
        id: "growth",
        eyebrow: "06 — The Growth",
        label: "The Growth",
        title: "A living brand evolves, adapts and grows.",
        description:
          "Growth comes from a brand system that can adapt, communicate and expand with intention.",
        visualConcept:
          "An expanded mesh, more light, open composition and a discreet continuity cue toward the next section.",
        keywords: ["growth", "evolution", "adaptation", "scale", "continuity"],
        order: 6,
      },
    ],
  },
  services: {
    id: "services",
    sectionLabel: "Services",
    title: "What We Bring to Life",
    intro:
      "A system of transformation that moves from strategy and identity into digital presence, technology and growth.",
    items: [
      {
        id: "brand-strategy",
        title: "Brand Strategy",
        description:
          "Direction, positioning, narrative and strategic systems for brands that need clarity before execution.",
        icon: "target",
        order: 1,
      },
      {
        id: "visual-identity",
        title: "Visual Identity",
        description:
          "Logos, typography, color systems, brand applications and visual languages designed to be recognized and remembered.",
        icon: "diamond",
        order: 2,
      },
      {
        id: "digital-presence",
        title: "Digital Presence",
        description:
          "Websites, landing pages, content structures and digital touchpoints that communicate value with clarity.",
        icon: "globe",
        order: 3,
      },
      {
        id: "growth-marketing",
        title: "Growth Marketing",
        description:
          "Digital strategy, content direction and campaigns designed to build authority, connection and measurable growth.",
        icon: "trending-up",
        order: 4,
      },
      {
        id: "web-platforms",
        title: "Web Platforms",
        description:
          "Websites, web apps, e-commerce, client portals and responsive digital experiences built for real business needs.",
        icon: "layers",
        order: 5,
      },
      {
        id: "ai-solutions",
        title: "AI Solutions",
        description:
          "AI-assisted workflows, automation, internal tools and intelligent systems that help businesses work smarter.",
        icon: "cpu",
        order: 6,
      },
    ],
  },
  process: {
    id: "process",
    sectionLabel: "Process",
    title: "A structured process for creative transformation.",
    steps: [
      {
        id: "discover",
        title: "Discover",
        description: "We understand the business, context, audience and goals.",
        order: 1,
      },
      {
        id: "define",
        title: "Define",
        description: "We clarify strategy, direction, priorities and scope.",
        order: 2,
      },
      {
        id: "design",
        title: "Design",
        description: "We shape the visual, verbal and experiential system.",
        order: 3,
      },
      {
        id: "build",
        title: "Build",
        description: "We create the digital experience, platform or solution.",
        order: 4,
      },
      {
        id: "launch",
        title: "Launch",
        description: "We prepare the brand or solution for real-world use.",
        order: 5,
      },
      {
        id: "evolve",
        title: "Evolve",
        description: "We refine, optimize and support the next stage of growth.",
        order: 6,
      },
    ],
  },
  solutions: {
    id: "solutions",
    sectionLabel: "Solutions",
    title: "Designed for every stage of your business.",
    items: [
      {
        id: "new-brands",
        title: "New Brands",
        description:
          "For businesses starting from zero and needing strategy, identity and digital structure.",
        order: 1,
      },
      {
        id: "repositioning",
        title: "Repositioning",
        description:
          "For brands that need a new direction, stronger positioning or a more refined visual presence.",
        order: 2,
      },
      {
        id: "digital-expansion",
        title: "Digital Expansion",
        description:
          "For businesses ready to grow online through websites, content, marketing and digital experiences.",
        order: 3,
      },
      {
        id: "intelligent-operations",
        title: "Intelligent Operations",
        description:
          "For companies that want to improve internal processes with technology, automation and AI.",
        order: 4,
      },
    ],
  },
  whyLyken: {
    id: "why-lyken",
    sectionLabel: "Why Lyken",
    title: "Because modern brands need more than design.",
    points: [
      { id: "strategy-before-execution", text: "Strategy before execution", order: 1 },
      {
        id: "business-connected-branding",
        text: "Branding connected to business goals",
        order: 2,
      },
      {
        id: "growth-built-experiences",
        text: "Digital experiences built for growth",
        order: 3,
      },
      { id: "ai-enhanced-workflows", text: "AI-enhanced workflows", order: 4 },
      { id: "premium-visual-direction", text: "Premium visual direction", order: 5 },
      {
        id: "flexible-business-stages",
        text: "Flexible solutions for different business stages",
        order: 6,
      },
    ],
  },
  contact: {
    id: "contact",
    sectionLabel: "Contact",
    finalCta: {
      title: "Ready to transform your idea into a living brand?",
      text: "Let’s build the next stage of your business with strategy, design, technology and intelligence.",
      button: {
        label: "Start a Project",
        href: "#contact-form",
      },
    },
    form: {
      id: "contact-form",
      submitLabel: "Start a Project",
      loadingLabel: "Preparing Request",
      successMessage:
        "Your message has been prepared. We will review your request and get back to you soon.",
      errorMessage: "Something went wrong. Please try again or contact us directly.",
      privacyNote: "Your information will only be used to respond to your project request.",
      fields: [
        {
          id: "name",
          name: "name",
          label: "Name",
          placeholder: "Your name",
          type: "text",
          required: true,
          validationKey: "nameRequired",
          order: 1,
        },
        {
          id: "business-name",
          name: "businessName",
          label: "Business Name",
          placeholder: "Your business name",
          type: "text",
          required: false,
          validationKey: null,
          order: 2,
        },
        {
          id: "email",
          name: "email",
          label: "Email",
          placeholder: "you@business.com",
          type: "email",
          required: true,
          validationKey: "emailInvalid",
          order: 3,
        },
        {
          id: "phone",
          name: "phone",
          label: "Phone",
          placeholder: "Your phone number",
          type: "tel",
          required: false,
          validationKey: null,
          order: 4,
        },
        {
          id: "service-needed",
          name: "serviceNeeded",
          label: "Service Needed",
          placeholder: "Select a service",
          type: "select",
          required: true,
          validationKey: "serviceRequired",
          order: 5,
        },
        {
          id: "message",
          name: "message",
          label: "Message",
          placeholder: "Tell us what you want to build",
          type: "textarea",
          required: true,
          validationKey: "messageRequired",
          order: 6,
        },
      ],
      serviceOptions: [
        { id: "brand-strategy", label: "Brand Strategy", value: "brand-strategy", order: 1 },
        { id: "visual-identity", label: "Visual Identity", value: "visual-identity", order: 2 },
        { id: "website", label: "Website", value: "website", order: 3 },
        { id: "web-app", label: "Web App", value: "web-app", order: 4 },
        { id: "e-commerce", label: "E-commerce", value: "e-commerce", order: 5 },
        { id: "digital-marketing", label: "Digital Marketing", value: "digital-marketing", order: 6 },
        { id: "ai-solution", label: "AI Solution", value: "ai-solution", order: 7 },
        { id: "not-sure-yet", label: "Not sure yet", value: "not-sure-yet", order: 8 },
      ],
    },
    directContact: {
      label: "Direct Contact",
      text: "Official email, WhatsApp and social links are pending approval. This section is prepared for the confirmed contact path.",
      items: [
        { id: "email", label: "Email", value: "Official email pending approval", order: 1 },
        { id: "whatsapp", label: "WhatsApp", value: "Official number pending approval", order: 2 },
      ],
    },
  },
  footer: {
    tagline: "Intelligent Strategy. Unforgettable Brands.",
    brandLine: "Lyken Agency — Intelligent Strategy. Unforgettable Brands.",
    navigationLabel: "Navigation",
    contactLabel: "Contact",
    socialLabel: "Social",
    pendingLabel: "Pending approval",
    logo: {
      src: "/logos/lyken-logo.svg",
      alt: "Lyken Agency",
    },
    links: [
      { id: "about", label: "About", href: "#about", order: 1 },
      { id: "services", label: "Services", href: "#services", order: 2 },
      { id: "process", label: "Process", href: "#process", order: 3 },
      { id: "solutions", label: "Solutions", href: "#solutions", order: 4 },
      { id: "contact", label: "Contact", href: "#contact", order: 5 },
    ],
    socialLinks: [
      { id: "instagram", label: "Instagram", href: null, order: 1 },
      { id: "linkedin", label: "LinkedIn", href: null, order: 2 },
    ],
    contact: {
      emailLabel: "Email",
      email: null,
      emailPendingText: "Official email pending approval",
    },
    cta: {
      label: "Start a Project",
      href: "#contact",
    },
    copyright: "All rights reserved.",
  },
}
