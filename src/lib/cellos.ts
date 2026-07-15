import type { Instrument } from "./instrument-types";

export const cellos: Instrument[] = [
  {
    slug: "cello-01",
    title: "Cello 01",
    images: [
      "/images/2026/02/cello1_back.png",
      "/images/2026/02/cello1_front.png",
      "/images/2026/02/cello1_head.png",
    ],
    caption:
      "This cello features a richly flamed maple back with deep amber varnish, offering warmth, power, and expansive resonance.",
  },
  {
    slug: "cello-02",
    title: "Cello 02",
    images: [
      "/images/2026/02/cello2_front.png",
      "/images/2026/02/cell2_back.png",
      "/images/2026/02/cello2_head.png",
    ],
    caption: "Brilliant flamed maple back with luminous golden varnish and powerful resonance.",
  },
];

export function getCello(slug: string): Instrument | undefined {
  return cellos.find((c) => c.slug === slug);
}
