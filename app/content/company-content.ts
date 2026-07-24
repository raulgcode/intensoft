// Deprecated — use ~/i18n/translations instead.
export type { Locale } from "~/i18n/translations";

export const companyContent = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      stack: "Stack",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    languageSwitch: "ES",
    hero: {
      badge: "AI Engineer + Product Development Partner",
      title: "We Build Software Products and AI Agents That Scale Operations",
      description:
        "Intensoft designs, develops, and evolves modern software platforms, automation workflows, and domain-specific AI agents for ambitious companies.",
      primary: "Book a Discovery Call",
      secondary: "See Our Capabilities",
      stats: [
        { label: "Delivery focus", value: "End-to-end" },
        { label: "Core model", value: "Engineering + AI" },
        { label: "Engagement", value: "Product-first" },
      ],
    },
    services: {
      title: "What We Do",
      cards: [
        {
          title: "Custom Software Development",
          description:
            "Web platforms, APIs, internal tools, and scalable cloud-native architectures built with quality and speed.",
        },
        {
          title: "AI Agent Engineering",
          description:
            "Autonomous and semi-autonomous agents for support, operations, lead qualification, and repetitive task orchestration.",
        },
        {
          title: "Applied AI Integration",
          description:
            "LLM workflows, RAG pipelines, observability, evals, and governance integrated into real production systems.",
        },
      ],
    },
    process: {
      title: "How We Work",
      steps: [
        "Discovery: align business goals, risks, and success metrics.",
        "Architecture: define scalable foundations and AI integration map.",
        "Delivery: short iterations, transparent demos, measurable outcomes.",
        "Evolution: optimization, monitoring, and long-term partnership.",
      ],
    },
    stack: {
      title: "Technology Capabilities",
      items: [
        "React Router framework mode, TypeScript, modern frontend architecture",
        "Node.js backend ecosystems, API-first design, distributed systems",
        "AI engineering with agents, orchestration, retrieval, and eval loops",
        "Cloud deployment workflows, CI/CD, and product telemetry",
      ],
    },
    portfolio: {
      title: "Selected Experience",
      items: [
        {
          title: "AI Agent Ops Layer",
          description:
            "Designed agent orchestration and evaluation flows for operations teams to reduce manual throughput and increase response quality.",
          impact: "Automation-first operations",
        },
        {
          title: "Product Platform Modernization",
          description:
            "Migrated legacy application surfaces to a modern TypeScript architecture with improved maintainability and delivery speed.",
          impact: "Faster product iteration",
        },
        {
          title: "Business Workflow Intelligence",
          description:
            "Integrated AI-assisted classification and decision support into internal tools to accelerate business-critical processes.",
          impact: "Higher process efficiency",
        },
      ],
    },
    cta: {
      title: "Ready to Transform Your Operations with Software + AI?",
      description:
        "Let's define a roadmap that turns your ideas into reliable, high-impact digital products.",
      button: "Start the Conversation",
      whatsapp: "Chat on WhatsApp",
      calendlyHint: "Calendly: calendly.com/intensoft",
      whatsappHint: "WhatsApp: +506 8438 4179",
    },
    footer: "Intensoft. Engineering software and AI systems with precision.",
  },
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      stack: "Tecnologias",
      portfolio: "Portafolio",
      contact: "Contacto",
    },
    languageSwitch: "EN",
    hero: {
      badge: "AI Engineer + Socio de Desarrollo de Producto",
      title:
        "Creamos Productos de Software y Agentes de IA que Escalan Operaciones",
      description:
        "Intensoft disena, desarrolla y evoluciona plataformas de software modernas, flujos de automatizacion y agentes de IA especializados para empresas ambiciosas.",
      primary: "Agendar Discovery Call",
      secondary: "Ver Capacidades",
      stats: [
        { label: "Enfoque", value: "End-to-end" },
        { label: "Modelo", value: "Ingenieria + IA" },
        { label: "Trabajo", value: "Producto primero" },
      ],
    },
    services: {
      title: "Que Hacemos",
      cards: [
        {
          title: "Desarrollo de Software a Medida",
          description:
            "Plataformas web, APIs, herramientas internas y arquitecturas cloud escalables con calidad y velocidad.",
        },
        {
          title: "Ingenieria de Agentes de IA",
          description:
            "Agentes autonomos y semiautonomos para soporte, operaciones, calificacion de leads y orquestacion de tareas repetitivas.",
        },
        {
          title: "Integracion de IA Aplicada",
          description:
            "Workflows con LLM, pipelines RAG, observabilidad, evaluaciones y gobernanza integradas en sistemas productivos.",
        },
      ],
    },
    process: {
      title: "Como Trabajamos",
      steps: [
        "Discovery: alineamos objetivos de negocio, riesgos y metricas de exito.",
        "Arquitectura: definimos bases escalables y mapa de integracion de IA.",
        "Entrega: iteraciones cortas, demos transparentes y resultados medibles.",
        "Evolucion: optimizacion, monitoreo y partnership de largo plazo.",
      ],
    },
    stack: {
      title: "Capacidades Tecnologicas",
      items: [
        "React Router framework mode, TypeScript y arquitectura frontend moderna",
        "Ecosistemas backend Node.js, diseno API-first y sistemas distribuidos",
        "Ingenieria de IA con agentes, orquestacion, retrieval y ciclos de evaluacion",
        "Workflows de despliegue cloud, CI/CD y telemetria de producto",
      ],
    },
    portfolio: {
      title: "Experiencia Seleccionada",
      items: [
        {
          title: "Capa Operativa de Agentes IA",
          description:
            "Disenamos flujos de orquestacion y evaluacion de agentes para equipos operativos, reduciendo trabajo manual y elevando la calidad de respuesta.",
          impact: "Operaciones orientadas a automatizacion",
        },
        {
          title: "Modernizacion de Plataforma de Producto",
          description:
            "Migramos superficies legacy hacia arquitectura moderna en TypeScript, mejorando mantenibilidad y velocidad de entrega.",
          impact: "Iteracion de producto mas rapida",
        },
        {
          title: "Inteligencia para Flujos de Negocio",
          description:
            "Integramos clasificacion asistida por IA y soporte de decision en herramientas internas para acelerar procesos criticos.",
          impact: "Mayor eficiencia operativa",
        },
      ],
    },
    cta: {
      title: "Listo para Transformar tus Operaciones con Software + IA?",
      description:
        "Disenemos una hoja de ruta para convertir tus ideas en productos digitales confiables y de alto impacto.",
      button: "Iniciar Conversacion",
      whatsapp: "Escribir por WhatsApp",
      calendlyHint: "Calendly: calendly.com/intensoft",
      whatsappHint: "WhatsApp: +506 8438 4179",
    },
    footer: "Intensoft. Ingenieria de software y sistemas de IA con precision.",
  },
} as const;
