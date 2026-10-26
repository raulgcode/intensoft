import { useEffect, useRef, useState } from "react";

import { Link } from "react-router";

import {
  getT,
  heroStats,
  serviceCards,
  processSteps,
  stackItems,
  portfolioItems,
  type Locale,
} from "~/i18n/translations";
import { buildLocaleCookie } from "~/lib/locale";

import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

type CompanyLandingProps = {
  locale: Locale;
};

type SectionId =
  | "hero"
  | "services"
  | "process"
  | "stack"
  | "portfolio"
  | "contact";

const languageRoute: Record<Locale, string> = {
  en: "/es",
  es: "/",
};

const calendlyUrl = "https://calendly.com/intensoft";
const contactEmail = "rgonzalez@intensoft.dev";
const privacyRoute: Record<Locale, string> = {
  en: "/privacy",
  es: "/es/privacy",
};
const whatsappMessageByLocale: Record<Locale, string> = {
  en: "Hi Intensoft, I want to talk about software and AI agent development.",
  es: "Hola Intensoft, quiero conversar sobre desarrollo de software y agentes de IA.",
};

export function CompanyLanding({ locale }: CompanyLandingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = getT(locale);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const nextLocale: Locale = locale === "en" ? "es" : "en";
  const whatsappUrl = `https://wa.me/50684384179?text=${encodeURIComponent(whatsappMessageByLocale[locale])}`;
  const navItems: Array<{ id: SectionId; label: string }> = [
    { id: "hero", label: t("nav.home") },
    { id: "services", label: t("nav.services") },
    { id: "process", label: t("nav.process") },
    { id: "stack", label: t("nav.stack") },
    { id: "portfolio", label: t("nav.portfolio") },
    { id: "contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    node.classList.add("js-enhanced");

    let frame = 0;

    const updateFromScroll = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const maxScroll = Math.max(
          document.body.scrollHeight - window.innerHeight,
          1,
        );
        node.style.setProperty("--scroll-y", `${y}px`);
        node.style.setProperty(
          "--scroll-progress",
          String(Math.min(y / maxScroll, 1)),
        );
      });
    };

    const updateFromPointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      node.style.setProperty("--pointer-x", x.toFixed(4));
      node.style.setProperty("--pointer-y", y.toFixed(4));
    };

    updateFromScroll();

    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("pointermove", updateFromPointer, {
      passive: true,
    });

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      node.classList.remove("js-enhanced");
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("pointermove", updateFromPointer);
    };
  }, []);

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!revealTargets.length) {
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            revealObserver.unobserve(target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const sectionIds: SectionId[] = [
      "hero",
      "services",
      "process",
      "stack",
      "portfolio",
      "contact",
    ];
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!targets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.6],
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const order: SectionId[] = [
      "hero",
      "services",
      "process",
      "stack",
      "portfolio",
      "contact",
    ];
    const sceneIndex = order.indexOf(activeSection);
    node.style.setProperty(
      "--scene-index",
      String(sceneIndex === -1 ? 0 : sceneIndex),
    );
  }, [activeSection]);

  useEffect(() => {
    document.cookie = buildLocaleCookie(locale);
  }, [locale]);

  function persistLocalePreference() {
    document.cookie = buildLocaleCookie(nextLocale);
  }

  return (
    <div
      ref={containerRef}
      className="landing-shell relative isolate min-h-screen overflow-x-clip bg-[var(--brand-ink)] text-white"
    >
      <div aria-hidden className="parallax-canvas">
        <div className="parallax-layer parallax-layer-base" />
        <div className="parallax-layer parallax-layer-grid" />
        <div className="parallax-layer parallax-layer-stars" />
        <div className="parallax-layer parallax-layer-glow" />
        <div className="parallax-layer parallax-layer-mesh" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/15 bg-[color:color-mix(in_oklab,var(--brand-ink)_72%,transparent)] backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <div className="font-heading text-xl font-semibold tracking-tight text-[var(--brand-sand)]">
            Intensoft
          </div>
          <div className="hidden items-center gap-2 text-sm text-white/90 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-md px-3 py-1.5 transition-colors",
                  activeSection === item.id
                    ? "bg-white/18 text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
          <Link
            to={languageRoute[locale]}
            onClick={persistLocalePreference}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/45 bg-white/10 text-white hover:bg-white/20",
            )}
          >
            {t("language.switch")}
          </Link>
        </nav>
      </header>

      <aside className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <div className="rounded-2xl border border-white/20 bg-[color:color-mix(in_oklab,var(--brand-ink)_72%,black_18%)] p-2.5 shadow-[0_14px_38px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <ul className="space-y-1.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "flex min-w-32 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all",
                    activeSection === item.id
                      ? "bg-[var(--brand-signal)] text-[#061116]"
                      : "text-white/88 hover:bg-white/12",
                  )}
                >
                  <span
                    className={cn(
                      "inline-block h-2 w-2 rounded-full",
                      activeSection === item.id
                        ? "bg-[#061116]"
                        : "bg-white/60",
                    )}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <nav className="fixed inset-x-2 bottom-2 z-50 lg:hidden">
        <div className="overflow-x-auto rounded-2xl border border-white/20 bg-[color:color-mix(in_oklab,var(--brand-ink)_72%,black_15%)] px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <ul className="flex min-w-max items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em]",
                    activeSection === item.id
                      ? "bg-[var(--brand-signal)] text-[#071118]"
                      : "text-white/90",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="content-shell relative z-20">
        <section
          id="hero"
          data-reveal
          className="reveal-block mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col justify-center px-5 py-24 md:px-8"
        >
          <div className="animate-rise space-y-7">
            <Badge className="border border-white/15 bg-[var(--brand-signal)]/95 text-[#041014] hover:bg-[var(--brand-signal)]">
              {t("hero.badge")}
            </Badge>
            <h1 className="max-w-5xl text-balance font-heading text-4xl leading-[1.05] font-extrabold text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.55)] md:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/95">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-11 bg-[var(--brand-sand)] px-5 text-[var(--brand-ink)] shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:bg-[var(--brand-sand-2)]",
                )}
              >
                {t("hero.cta.primary")}
              </a>
              <a
                href="#portfolio"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 border-white/45 bg-white/10 px-5 text-white hover:bg-white/20",
                )}
              >
                {t("hero.cta.secondary")}
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
            {heroStats[locale].map((item) => (
              <Card
                key={item.label}
                className="surface-card border-white/20 bg-[color:color-mix(in_oklab,var(--brand-ink)_70%,white_10%)] shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              >
                <CardContent className="space-y-1 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/85">
                    {item.label}
                  </p>
                  <p className="text-2xl font-semibold text-[var(--brand-sand)]">
                    {item.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="services"
          data-reveal
          className="reveal-block mx-auto w-full max-w-6xl px-5 py-18 md:px-8"
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {t("services.title")}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceCards[locale].map((service, index) => (
              <Card
                key={service.title}
                className="surface-card surface-card--interactive animate-rise border-white/20 bg-[color:color-mix(in_oklab,var(--brand-ink)_68%,white_12%)] shadow-[0_14px_32px_rgba(0,0,0,0.27)] backdrop-blur-xl"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-white/88">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="process"
          data-reveal
          className="reveal-block mx-auto w-full max-w-6xl px-5 py-18 md:px-8"
        >
          <div className="section-panel rounded-3xl border border-white/20 bg-[color:color-mix(in_oklab,var(--brand-ink)_66%,white_15%)] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-10">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              {t("process.title")}
            </h2>
            <Separator className="my-7 bg-white/22" />
            <ul className="space-y-4 text-white/93">
              {processSteps[locale].map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--brand-signal)]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="stack"
          data-reveal
          className="reveal-block mx-auto w-full max-w-6xl px-5 py-18 md:px-8"
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {t("stack.title")}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {stackItems[locale].map((item) => (
              <article
                key={item}
                className="surface-card surface-card--interactive rounded-2xl border border-white/24 bg-[color:color-mix(in_oklab,var(--brand-ink)_70%,white_14%)] p-5 text-white/95 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              >
                {item}
              </article>
            ))}
          </div>
        </section>

        <section
          id="portfolio"
          data-reveal
          className="reveal-block mx-auto w-full max-w-6xl px-5 py-18 md:px-8"
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {t("portfolio.title")}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {portfolioItems[locale].map((project) => (
              <Card
                key={project.title}
                className="surface-card surface-card--interactive border-white/20 bg-[color:color-mix(in_oklab,var(--brand-ink)_68%,white_12%)] shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              >
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/88">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-[var(--brand-sand)]">
                    {project.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="contact"
          data-reveal
          className="reveal-block mx-auto w-full max-w-6xl px-5 py-22 md:px-8"
        >
          <div className="section-panel rounded-3xl border border-[var(--brand-sand)]/45 bg-[color:color-mix(in_oklab,var(--brand-ink)_58%,var(--brand-sand)_14%)] p-9 shadow-[0_18px_48px_rgba(0,0,0,0.34)] backdrop-blur-xl md:p-12">
            <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
              {t("cta.title")}
            </h3>
            <p className="mt-4 max-w-2xl text-white/93">
              {t("cta.description")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-11 bg-[var(--brand-signal)] px-5 text-[var(--brand-ink)] shadow-[0_10px_24px_rgba(0,0,0,0.3)] hover:bg-[var(--brand-signal-2)]",
                )}
              >
                {t("cta.button")}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 border-white/45 bg-white/10 px-5 text-white hover:bg-white/20",
                )}
              >
                {t("cta.whatsapp")}
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 border-white/45 bg-white/10 px-5 text-white hover:bg-white/20",
                )}
              >
                {t("cta.email")}
              </a>
            </div>
            <div className="mt-4 space-y-1 text-sm text-white/80">
              <p>{t("cta.hint.calendly")}</p>
              <p>{t("cta.hint.whatsapp")}</p>
              <p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="underline-offset-4 hover:text-white hover:underline"
                >
                  {t("cta.hint.email")}
                </a>
              </p>
            </div>
          </div>
          <footer className="mt-8 space-y-1 text-sm text-white/82">
            <p>{t("footer")}</p>
            <p className="text-white/70">
              {t("footer.legal").replace(
                "{year}",
                String(new Date().getFullYear()),
              )}
            </p>
            <p>
              <Link
                to={privacyRoute[locale]}
                className="text-white/82 underline underline-offset-4 hover:text-white"
              >
                {t("footer.privacy")}
              </Link>
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
