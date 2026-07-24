import { CompanyLanding } from "~/components/company-landing";
import { buildStructuredData } from "~/lib/structured-data";

import type { Route } from "./+types/home-es";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Intensoft | Ingenieria de Software y Agentes de IA" },
    {
      name: "description",
      content:
        "Intensoft crea plataformas de software y agentes de IA para operaciones, automatizacion y crecimiento empresarial.",
    },
    { name: "language", content: "es" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Intensoft | Ingenieria de Software y Agentes de IA" },
    {
      property: "og:description",
      content:
        "Desarrollamos plataformas de software modernas y agentes de IA para automatizacion, crecimiento y excelencia operativa.",
    },
    { property: "og:locale", content: "es_ES" },
    { property: "og:url", content: "/es" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Intensoft | Ingenieria de Software y Agentes de IA" },
    {
      name: "twitter:description",
      content:
        "Desarrollamos plataformas de software modernas y agentes de IA para automatizacion, crecimiento y excelencia operativa.",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: "/es" },
  { rel: "alternate", hrefLang: "en", href: "/" },
  { rel: "alternate", hrefLang: "es", href: "/es" },
  { rel: "alternate", hrefLang: "x-default", href: "/" },
];

export default function HomeSpanish() {
  const structuredData = buildStructuredData("es", "https://intensoft.dev");

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CompanyLanding locale="es" />
    </>
  );
}
