import { PrivacyPolicy } from "~/components/privacy-policy";

import type { Route } from "./+types/privacy-en";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | Intensoft" },
    {
      name: "description",
      content:
        "How Intensoft, operated by Monaz Studio LLC (Wyoming), handles visitor and contact information.",
    },
    { name: "language", content: "en" },
    { property: "og:title", content: "Privacy Policy | Intensoft" },
    { property: "og:url", content: "/privacy" },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: "/privacy" },
  { rel: "alternate", hrefLang: "en", href: "/privacy" },
  { rel: "alternate", hrefLang: "es", href: "/es/privacy" },
  { rel: "alternate", hrefLang: "x-default", href: "/privacy" },
];

export default function PrivacyEnglish() {
  return <PrivacyPolicy locale="en" />;
}
