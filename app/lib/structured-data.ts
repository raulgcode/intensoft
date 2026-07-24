import type { Locale } from "~/i18n/translations";

type JsonLdNode = Record<string, unknown>;

export function buildStructuredData(
  locale: Locale,
  baseUrl: string,
): JsonLdNode {
  const organizationName = "Intensoft";
  const englishDescription =
    "Intensoft develops custom software platforms and AI agents for automation, operations, and growth.";
  const spanishDescription =
    "Intensoft desarrolla plataformas de software a medida y agentes de IA para automatizacion, operaciones y crecimiento.";

  const inLanguage = locale === "es" ? "es" : "en";
  const pageUrl = locale === "es" ? `${baseUrl}/es` : `${baseUrl}/`;

  const organization: JsonLdNode = {
    "@type": "Organization",
    name: organizationName,
    url: baseUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+50684384179",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Spanish"],
      },
    ],
    sameAs: ["https://calendly.com/intensoft"],
  };

  const professionalService: JsonLdNode = {
    "@type": "ProfessionalService",
    name: organizationName,
    url: pageUrl,
    description: locale === "es" ? spanishDescription : englishDescription,
    telephone: "+50684384179",
    areaServed: "Worldwide",
    serviceType: [
      "Custom Software Development",
      "AI Agent Engineering",
      "AI Integration",
    ],
    inLanguage,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, professionalService],
  };
}
