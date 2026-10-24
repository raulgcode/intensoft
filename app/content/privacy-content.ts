import type { Locale } from "~/i18n/translations";

export type PrivacySection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type PrivacyContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: PrivacySection[];
};

export const privacyContent: Record<Locale, PrivacyContent> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: October 24, 2026",
    intro:
      "This Privacy Policy explains how Intensoft (intensoft.dev) handles information about visitors to this website and people who contact us.",
    sections: [
      {
        title: "Who is responsible",
        paragraphs: [
          "Intensoft is operated by Monaz Studio LLC, a limited liability company organized in the State of Wyoming, United States. Monaz Studio LLC is the party responsible for the information described in this policy.",
          "For any privacy question or request, write to rgonzalez@intensoft.dev.",
        ],
      },
      {
        title: "Information we collect",
        paragraphs: [
          "This website has no forms, accounts, or analytics trackers. We only receive information in these cases:",
        ],
        items: [
          "When you contact us by email, WhatsApp, or Calendly: the details you choose to share, such as your name, email address, phone number, company, and the content of your message.",
          "Technical data processed by our hosting provider to deliver and protect the site, such as IP address, browser type, and request logs.",
          "A single cookie, preferred_locale, that remembers whether you prefer English or Spanish. It contains no personal information.",
        ],
      },
      {
        title: "How we use information",
        paragraphs: [
          "We use the information you send us to reply to you, schedule calls, prepare proposals, and provide our services. Technical data is used only to operate, secure, and troubleshoot the website. We do not sell or rent personal information, and we do not use it for advertising.",
        ],
      },
      {
        title: "Third-party services",
        paragraphs: [
          "Some features rely on services operated by other companies, each under its own privacy policy:",
        ],
        items: [
          "Calendly, when you book a meeting.",
          "WhatsApp (Meta), when you message us there.",
          "Google Fonts, which loads the site's typefaces from Google's servers.",
          "Our website hosting and content delivery provider.",
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "We keep contact and project information for as long as needed to respond to you, carry out our work together, and meet legal or accounting obligations. After that we delete it.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "You may ask us to access, correct, or delete the personal information we hold about you, or to stop contacting you. Depending on where you live, you may have additional rights under local law. Email rgonzalez@intensoft.dev and we will respond within a reasonable time.",
        ],
      },
      {
        title: "Children",
        paragraphs: [
          "This website is intended for businesses and is not directed to children under 16. We do not knowingly collect information from children.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "We may update this policy from time to time. The date at the top of this page shows when it was last changed.",
        ],
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: 24 de octubre de 2026",
    intro:
      "Esta Política de Privacidad explica cómo Intensoft (intensoft.dev) trata la información de quienes visitan este sitio web y de quienes nos contactan.",
    sections: [
      {
        title: "Responsable",
        paragraphs: [
          "Intensoft es operado por Monaz Studio LLC, una sociedad de responsabilidad limitada constituida en el Estado de Wyoming, Estados Unidos. Monaz Studio LLC es la responsable de la información descrita en esta política.",
          "Para cualquier consulta o solicitud sobre privacidad, escribe a rgonzalez@intensoft.dev.",
        ],
      },
      {
        title: "Información que recopilamos",
        paragraphs: [
          "Este sitio no tiene formularios, cuentas de usuario ni herramientas de analítica. Solo recibimos información en estos casos:",
        ],
        items: [
          "Cuando nos contactas por correo, WhatsApp o Calendly: los datos que decidas compartir, como tu nombre, correo, teléfono, empresa y el contenido de tu mensaje.",
          "Datos técnicos que procesa nuestro proveedor de hosting para entregar y proteger el sitio, como dirección IP, tipo de navegador y registros de solicitudes.",
          "Una única cookie, preferred_locale, que recuerda si prefieres inglés o español. No contiene información personal.",
        ],
      },
      {
        title: "Cómo usamos la información",
        paragraphs: [
          "Usamos la información que nos envías para responderte, agendar llamadas, preparar propuestas y prestar nuestros servicios. Los datos técnicos se usan solo para operar, proteger y diagnosticar el sitio. No vendemos ni alquilamos información personal, y no la usamos con fines publicitarios.",
        ],
      },
      {
        title: "Servicios de terceros",
        paragraphs: [
          "Algunas funciones dependen de servicios operados por otras empresas, cada una con su propia política de privacidad:",
        ],
        items: [
          "Calendly, cuando agendas una reunión.",
          "WhatsApp (Meta), cuando nos escribes por ese medio.",
          "Google Fonts, que carga las tipografías del sitio desde servidores de Google.",
          "Nuestro proveedor de hosting y entrega de contenido.",
        ],
      },
      {
        title: "Conservación",
        paragraphs: [
          "Conservamos la información de contacto y de proyectos durante el tiempo necesario para responderte, realizar nuestro trabajo en conjunto y cumplir obligaciones legales o contables. Después la eliminamos.",
        ],
      },
      {
        title: "Tus derechos",
        paragraphs: [
          "Puedes pedirnos acceder, corregir o eliminar la información personal que tengamos sobre ti, o que dejemos de contactarte. Según el lugar donde vivas, la ley local puede darte derechos adicionales. Escribe a rgonzalez@intensoft.dev y responderemos en un plazo razonable.",
        ],
      },
      {
        title: "Menores de edad",
        paragraphs: [
          "Este sitio está dirigido a empresas y no a menores de 16 años. No recopilamos de forma intencional información de menores.",
        ],
      },
      {
        title: "Cambios a esta política",
        paragraphs: [
          "Podemos actualizar esta política ocasionalmente. La fecha al inicio de esta página indica cuándo se modificó por última vez.",
        ],
      },
    ],
  },
};
