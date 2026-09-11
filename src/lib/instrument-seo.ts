import type { Metadata } from "next";
import type { Instrument } from "./instrument-types";
import { localePath, type Locale } from "@/i18n/config";
import { localise } from "@/i18n";
import { languageAlternates } from "./page-seo";

const SITE_URL = "https://victoriastrings.com";

/**
 * Share cards and page titles for a single instrument. Names are proper nouns
 * and stay as they are; the description follows the visitor's language.
 */
export function instrumentMetadata(
  all: Instrument[],
  slug: string,
  category: string,
  locale: Locale,
): Metadata {
  const found = all.find((i) => i.slug === slug);
  if (!found) return { title: "Victoria Strings London" };

  const instrument = localise(found, locale);
  const title = `${instrument.title} | Victoria Strings London`;
  const path = `/${category}/${slug}`;
  // Purpose-built 1200x630 card: social scrapers crop to 1.91:1, which would
  // otherwise slice the middle out of a full-length instrument photograph.
  const card = `/og/${category}-${slug}.jpg`;

  return {
    title,
    description: instrument.caption,
    alternates: { canonical: localePath(locale, path), languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      title,
      description: instrument.caption,
      url: localePath(locale, path),
      siteName: "Victoria Strings London",
      images: [{ url: card, width: 1200, height: 630, alt: instrument.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: instrument.caption,
      images: [card],
    },
  };
}

/** Product structured data. Price is deliberately omitted — enquiries only. */
export function instrumentSchema(
  instrument: Instrument,
  category: string,
  basePath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: instrument.title,
    description: instrument.caption,
    category,
    url: `${SITE_URL}${basePath}/${instrument.slug}`,
    image: Array.from(new Set(instrument.images)).map((src) => `${SITE_URL}${src}`),
    brand: {
      "@type": "Brand",
      name: "Victoria Strings London",
    },
  };
}
