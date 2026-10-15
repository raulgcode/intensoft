export type Locale = "en" | "es";

// ---------------------------------------------------------------------------
// String translations — flat dotted keys
// ---------------------------------------------------------------------------

const en = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.process": "Process",
  "nav.stack": "Stack",
  "nav.portfolio": "Portfolio",
  "nav.contact": "Contact",
  "language.switch": "ES",
  "hero.badge": "AI Engineer + Product Development Partner",
  "hero.title":
    "We Build Software Products and AI Agents That Scale Operations",
  "hero.description":
    "Intensoft designs, develops, and evolves modern software platforms, automation workflows, and domain-specific AI agents for ambitious companies.",
  "hero.cta.primary": "Book a Discovery Call",
  "hero.cta.secondary": "See Our Capabilities",
  "services.title": "What We Do",
  "process.title": "How We Work",
  "stack.title": "Technology Capabilities",
  "portfolio.title": "Selected Experience",
  "cta.title": "Ready to Transform Your Operations with Software + AI?",
  "cta.description":
    "Let's define a roadmap that turns your ideas into reliable, high-impact digital products.",
  "cta.button": "Start the Conversation",
  "cta.whatsapp": "Chat on WhatsApp",
  "cta.hint.calendly": "Calendly: calendly.com/intensoft",
  "cta.hint.whatsapp": "WhatsApp: +506 8438 4179",
  footer: "Intensoft. Engineering software and AI systems with precision.",
  "footer.legal":
    "© {year} Monaz Studio LLC. All rights reserved. Intensoft (intensoft.dev) is operated by Monaz Studio LLC.",
} as const;

const es = {
  "nav.home": "Inicio",
  "nav.services": "Servicios",
  "nav.process": "Proceso",
  "nav.stack": "Tecnologias",
  "nav.portfolio": "Portafolio",
  "nav.contact": "Contacto",
  "language.switch": "EN",
  "hero.badge": "AI Engineer + Socio de Desarrollo de Producto",
  "hero.title":
    "Creamos Productos de Software y Agentes de IA que Escalan Operaciones",
  "hero.description":
    "Intensoft disena, desarrolla y evoluciona plataformas de software modernas, flujos de automatizacion y agentes de IA especializados para empresas ambiciosas.",
  "hero.cta.primary": "Agendar Discovery Call",
  "hero.cta.secondary": "Ver Capacidades",
  "services.title": "Que Hacemos",
  "process.title": "Como Trabajamos",
  "stack.title": "Capacidades Tecnologicas",
  "portfolio.title": "Experiencia Seleccionada",
  "cta.title": "Listo para Transformar tus Operaciones con Software + IA?",
  "cta.description":
    "Disenemos una hoja de ruta para convertir tus ideas en productos digitales confiables y de alto impacto.",
  "cta.button": "Iniciar Conversacion",
  "cta.whatsapp": "Escribir por WhatsApp",
  "cta.hint.calendly": "Calendly: calendly.com/intensoft",
  "cta.hint.whatsapp": "WhatsApp: +506 8438 4179",
  footer: "Intensoft. Ingenieria de software y sistemas de IA con precision.",
  "footer.legal":
    "© {year} Monaz Studio LLC. Todos los derechos reservados. Intensoft (intensoft.dev) es operado por Monaz Studio LLC.",
} as const;

export type TranslationKey = keyof typeof en;

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en,
  es,
};

/** Returns a bound translator for the given locale. */
export function getT(locale: Locale) {
  return (key: TranslationKey): string => translations[locale][key];
}

// ---------------------------------------------------------------------------
// Array / structured content
// ---------------------------------------------------------------------------

export type HeroStat = { label: string; value: string };

export const heroStats: Record<Locale, HeroStat[]> = {
  en: [
    { label: "Delivery focus", value: "End-to-end" },
    { label: "Core model", value: "Engineering + AI" },
    { label: "Engagement", value: "Product-first" },
  ],
  es: [
    { label: "Enfoque", value: "End-to-end" },
    { label: "Modelo", value: "Ingenieria + IA" },
    { label: "Trabajo", value: "Producto primero" },
  ],
};

export type ServiceCard = { title: string; description: string };

export const serviceCards: Record<Locale, ServiceCard[]> = {
  en: [
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
  es: [
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
};

export const processSteps: Record<Locale, string[]> = {
  en: [
    "Discovery: align business goals, risks, and success metrics.",
    "Architecture: define scalable foundations and AI integration map.",
    "Delivery: short iterations, transparent demos, measurable outcomes.",
    "Evolution: optimization, monitoring, and long-term partnership.",
  ],
  es: [
    "Discovery: alineamos objetivos de negocio, riesgos y metricas de exito.",
    "Arquitectura: definimos bases escalables y mapa de integracion de IA.",
    "Entrega: iteraciones cortas, demos transparentes y resultados medibles.",
    "Evolucion: optimizacion, monitoreo y partnership de largo plazo.",
  ],
};

export const stackItems: Record<Locale, string[]> = {
  en: [
    "React Router framework mode, TypeScript, modern frontend architecture",
    "Node.js backend ecosystems, API-first design, distributed systems",
    "AI engineering with agents, orchestration, retrieval, and eval loops",
    "Cloud deployment workflows, CI/CD, and product telemetry",
  ],
  es: [
    "React Router framework mode, TypeScript y arquitectura frontend moderna",
    "Ecosistemas backend Node.js, diseno API-first y sistemas distribuidos",
    "Ingenieria de IA con agentes, orquestacion, retrieval y ciclos de evaluacion",
    "Workflows de despliegue cloud, CI/CD y telemetria de producto",
  ],
};

export type PortfolioItem = {
  title: string;
  description: string;
  impact: string;
};

export const portfolioItems: Record<Locale, PortfolioItem[]> = {
  en: [
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
  es: [
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
};
