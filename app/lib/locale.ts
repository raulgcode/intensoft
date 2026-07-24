import type { Locale } from "~/i18n/translations";

const LOCALE_COOKIE_NAME = "preferred_locale";
const LOCALE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function parsePreferredLocale(request: Request): Locale | null {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) {
    return null;
  }

  const cookies = Object.fromEntries(
    cookieHeader
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((entry) => {
        const separatorIndex = entry.indexOf("=");
        if (separatorIndex === -1) {
          return [entry, ""] as const;
        }

        const key = entry.slice(0, separatorIndex);
        const value = entry.slice(separatorIndex + 1);
        return [key, decodeURIComponent(value)] as const;
      }),
  );

  const locale = cookies[LOCALE_COOKIE_NAME];
  if (locale === "en" || locale === "es") {
    return locale;
  }

  return null;
}

export function buildLocaleCookie(locale: Locale) {
  return `${LOCALE_COOKIE_NAME}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
}

/**
 * Parses the Accept-Language header to determine the user's preferred locale.
 * Returns "es" if Spanish is preferred, "en" otherwise.
 */
export function parseAcceptLanguage(request: Request): Locale {
  const header = request.headers.get("Accept-Language");
  if (!header) return "en";

  // Parse entries like "es-ES,es;q=0.9,en;q=0.8,en-US;q=0.7"
  const locales = header
    .split(",")
    .map((entry) => {
      const [tag, qPart] = entry.trim().split(";");
      const q = qPart ? parseFloat(qPart.replace("q=", "")) : 1.0;
      return { lang: tag.trim().toLowerCase().split("-")[0], q };
    })
    .filter(({ q }) => !isNaN(q))
    .sort((a, b) => b.q - a.q);

  // Return "es" if Spanish is the top preferred language
  if (locales.length > 0 && locales[0].lang === "es") {
    return "es";
  }

  return "en";
}
