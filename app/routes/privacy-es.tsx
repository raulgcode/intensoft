import { PrivacyPolicy } from "~/components/privacy-policy";

import type { Route } from "./+types/privacy-es";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Política de Privacidad | Intensoft" },
    {
      name: "description",
      content:
        "Cómo Intensoft, operado por Monaz Studio LLC (Wyoming), trata la información de visitantes y contactos.",
    },
    { name: "language", content: "es" },
    { property: "og:title", content: "Política de Privacidad | Intensoft" },
    { property: "og:url", content: "/es/privacy" },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: "/es/privacy" },
  { rel: "alternate", hrefLang: "en", href: "/privacy" },
  { rel: "alternate", hrefLang: "es", href: "/es/privacy" },
  { rel: "alternate", hrefLang: "x-default", href: "/privacy" },
];

export default function PrivacySpanish() {
  return <PrivacyPolicy locale="es" />;
}
