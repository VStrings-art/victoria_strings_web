import type { Instrument } from "./instrument-types";

export const doubleBasses: Instrument[] = [
  {
    slug: "doublebass-01",
    title: "Double Bass 01",
    images: [
      "/images/2026/03/doublebass1_front-scaled.webp",
      "/images/2026/03/doublebass1_back.webp",
      "/images/2026/03/doublebass1_head.webp",
    ],
    caption:
      "Antiqued Double Bass with deep red varnish, offering powerful resonance and rich orchestral character.",
  },
  {
    slug: "doublebass-02",
    title: "Double Bass 02",
    images: [
      "/images/2026/03/doublebass2_back.webp",
      "/images/2026/03/doublebass2_front.webp",
      "/images/2026/03/doublebass2_head.webp",
    ],
    caption:
      "This Double Bass showcases warm amber-red varnish over flamed maple, producing deep resonance, powerful projection, and a rich, commanding orchestral presence.",
  },
];

export function getDoubleBass(slug: string): Instrument | undefined {
  return doubleBasses.find((d) => d.slug === slug);
}
