export const LOCALES = ["en", "de", "fr", "it", "es", "ja", "ko"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Locales that get their own URL prefix. English stays at the site root so
 *  every link shared before this change still resolves. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  es: "Español",
  ja: "日本語",
  ko: "한국어",
};

/** Short code shown in the header switcher. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
  it: "IT",
  es: "ES",
  ja: "JA",
  ko: "KO",
};

/** BCP-47 tags for <html lang> and hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en-GB",
  de: "de",
  fr: "fr",
  it: "it",
  es: "es",
  ja: "ja",
  ko: "ko",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Prefixes a site-absolute path for the given locale. */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Strips any locale prefix from a pathname, returning the shared path. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/([a-z]{2})(?=\/|$)/);
  if (match && isLocale(match[1]) && match[1] !== DEFAULT_LOCALE) {
    return pathname.slice(3) || "/";
  }
  return pathname || "/";
}
