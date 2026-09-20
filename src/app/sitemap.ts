import type { MetadataRoute } from "next";
import { violins } from "@/lib/violins";
import { violas } from "@/lib/violas";
import { cellos } from "@/lib/cellos";
import { doubleBasses } from "@/lib/double-basses";
import { events } from "@/lib/events";
import { LOCALES, LOCALE_TAGS, localePath } from "@/i18n/config";

export const dynamic = "force-static";

const BASE_URL = "https://victoriastrings.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/violin",
    "/viola",
    "/cello",
    "/double-bass",
    "/events",
    ...events.map((e) => `/events/${e.slug}`),
    ...violins.map((v) => `/violin/${v.slug}`),
    ...violas.map((v) => `/viola/${v.slug}`),
    ...cellos.map((c) => `/cello/${c.slug}`),
    ...doubleBasses.map((d) => `/double-bass/${d.slug}`),
  ];

  const lastModified = new Date();

  // Every page is listed once per locale, each entry naming all its
  // translations so search engines serve the right language.
  return paths.flatMap((path) => {
    const shared = path || "/";
    const languages = Object.fromEntries(
      LOCALES.map((l) => [LOCALE_TAGS[l], `${BASE_URL}${localePath(l, shared)}`]),
    );
    return LOCALES.map((locale) => ({
      url: `${BASE_URL}${localePath(locale, shared)}`,
      lastModified,
      alternates: { languages },
    }));
  });
}
