import { redirect } from "react-router";

import { CompanyLanding } from "~/components/company-landing";
import { parseAcceptLanguage, parsePreferredLocale } from "~/lib/locale";
import { buildStructuredData } from "~/lib/structured-data";

import type { Route } from "./+types/home";

export async function loader({ request }: Route.LoaderArgs) {
  // 1. Cookie explícita tiene prioridad (el usuario eligió manualmente)
  const cookieLocale = parsePreferredLocale(request);
  if (cookieLocale === "es") {
    throw redirect("/es");
  }

  // 2. Si no hay cookie, detectar el idioma del navegador
  if (cookieLocale === null) {
    const browserLocale = parseAcceptLanguage(request);
    if (browserLocale === "es") {
      throw redirect("/es");
    }
  }

  return null;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Intensoft | Software & AI Agent Engineering" },
    {
      name: "description",
      content:
        "Intensoft builds custom software platforms and AI agents for business operations, automation, and growth.",
    },
    { name: "language", content: "en" },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "Intensoft | Software & AI Agent Engineering",
    },
    {
      property: "og:description",
      content:
        "Engineering modern software platforms and AI agents for automation, growth, and operational excellence.",
    },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: "/" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Intensoft | Software & AI Agent Engineering",
    },
    {
      name: "twitter:description",
      content:
        "Engineering modern software platforms and AI agents for automation, growth, and operational excellence.",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: "/" },
  { rel: "alternate", hrefLang: "en", href: "/" },
  { rel: "alternate", hrefLang: "es", href: "/es" },
  { rel: "alternate", hrefLang: "x-default", href: "/" },
];

export default function Home() {
  const structuredData = buildStructuredData("en", "https://intensoft.dev");

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CompanyLanding locale="en" />
    </>
  );
}
