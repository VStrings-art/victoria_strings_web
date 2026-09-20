import type { Metadata } from "next";
import { LOCALES, LOCALE_TAGS, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

type MetaKey = "home" | "violin" | "viola" | "cello" | "doubleBass" | "events";

/** hreflang set for one shared path, so search engines pair the translations. */
export function languageAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of LOCALES) out[LOCALE_TAGS[l]] = localePath(l, path);
  out["x-default"] = path;
  return out;
}

export function pageMetadata(locale: Locale, key: MetaKey, path: string): Metadata {
  const t = getDictionary(locale);
  const meta = t.meta[key];
  const url = localePath(locale, path);
  const ogTitle = key === "home" ? t.meta.home.ogTitle : meta.title;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: "Victoria Strings London",
      url,
      title: ogTitle,
      description: meta.description,
      locale: LOCALE_TAGS[locale].replace("-", "_"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Victoria Strings London",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: meta.description,
      images: ["/og-image.jpg"],
    },
  };
}
