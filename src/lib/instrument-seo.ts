import type { Metadata } from "next";
import type { Instrument } from "./instrument-types";

const SITE_URL = "https://victoriastrings.com";

/**
 * Share cards and page titles for a single instrument. Falls back to the
 * category defaults when the slug does not resolve, so an unknown URL still
 * renders sensible metadata before notFound() takes over.
 */
export function instrumentMetadata(
  instrument: Instrument | undefined,
  category: string,
  basePath: string,
): Metadata {
  if (!instrument) {
    return { title: `${category} | Victoria Strings London` };
  }

  const title = `${instrument.title} | Victoria Strings London`;
  const url = `${basePath}/${instrument.slug}`;

  return {
    title,
    description: instrument.caption,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description: instrument.caption,
      url,
      siteName: "Victoria Strings London",
      images: [{ url: instrument.images[0], alt: instrument.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: instrument.caption,
      images: [instrument.images[0]],
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
