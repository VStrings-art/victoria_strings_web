import type { Metadata } from "next";
import { getEvent } from "./events";
import { localePath, type Locale } from "@/i18n/config";
import { eventText } from "@/i18n";
import { languageAlternates } from "./page-seo";

export function eventMetadata(slug: string, locale: Locale): Metadata {
  const event = getEvent(slug);
  if (!event) return { title: "Victoria Strings London" };

  const text = eventText(event, locale);
  const title = `${text.title} | Victoria Strings London`;
  const path = `/events/${slug}`;
  // Social scrapers crop to 1.91:1; a portrait poster would lose its title.
  const card = `/og/events-${slug}.jpg`;

  return {
    title,
    description: text.summary,
    alternates: { canonical: localePath(locale, path), languages: languageAlternates(path) },
    openGraph: {
      type: "article",
      title,
      description: text.summary,
      url: localePath(locale, path),
      siteName: "Victoria Strings London",
      images: [{ url: card, width: 1200, height: 630, alt: text.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: text.summary,
      images: [card],
    },
  };
}
