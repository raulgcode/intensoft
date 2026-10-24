import { Link } from "react-router";

import { privacyContent } from "~/content/privacy-content";
import { getT, type Locale } from "~/i18n/translations";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

type PrivacyPolicyProps = {
  locale: Locale;
};

const homeRoute: Record<Locale, string> = {
  en: "/",
  es: "/es",
};

const languageRoute: Record<Locale, string> = {
  en: "/es/privacy",
  es: "/privacy",
};

export function PrivacyPolicy({ locale }: PrivacyPolicyProps) {
  const t = getT(locale);
  const content = privacyContent[locale];

  return (
    <div className="min-h-screen bg-[var(--brand-ink)] text-white">
      <header className="border-b border-white/15">
        <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            to={homeRoute[locale]}
            className="font-heading text-xl font-semibold tracking-tight text-[var(--brand-sand)]"
          >
            Intensoft
          </Link>
          <Link
            to={languageRoute[locale]}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/45 bg-white/10 text-white hover:bg-white/20",
            )}
          >
            {t("language.switch")}
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          {content.title}
        </h1>
        <p className="mt-3 text-sm text-white/70">{content.lastUpdated}</p>
        <p className="mt-6 text-white/90">{content.intro}</p>

        {content.sections.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="font-heading text-2xl font-bold">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-white/88">
                {paragraph}
              </p>
            ))}
            {section.items && (
              <ul className="mt-3 list-disc space-y-2 pl-6 text-white/88">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <footer className="mt-14 space-y-3 border-t border-white/15 pt-6 text-sm text-white/75">
          <p>
            {t("footer.legal").replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </p>
          <Link
            to={homeRoute[locale]}
            className="inline-block text-white underline underline-offset-4"
          >
            {t("privacy.back")}
          </Link>
        </footer>
      </main>
    </div>
  );
}
