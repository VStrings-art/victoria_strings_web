import type { Instrument } from "./instrument-types";

export const violas: Instrument[] = [
  {
    slug: "como",
    character: "Golden · Deep · Refined",
    title: "Como",
    images: [
      "/images/2026/02/viola1_front.webp",
      "/images/2026/02/viola1_back.webp",
      "/images/2026/02/viola1_head-scaled.webp",
    ],
    caption:
      "16-inch viola with radiant flamed maple back and warm golden varnish, offering depth and refined resonance.",
  },
  {
    slug: "lucerne",
    character: "Radiant · Rich · Expansive",
    title: "Lucerne",
    images: [
      "/images/2026/02/viola2_front-scaled.webp",
      "/images/2026/02/viola2_back.webp",
      "/images/2026/02/viola2_head.webp",
    ],
    caption: "Radiant flamed maple back with great potential to develop a rich, expansive voice.",
  },
  {
    slug: "baikal",
    character: "Bright · Balanced · Deep",
    title: "Baikal",
    images: [
      "/images/2026/02/viola3_back-scaled.webp",
      "/images/2026/02/viola3_front-scaled.webp",
      "/images/2026/02/viola3_head.webp",
    ],
    caption:
      "Bright flamed maple back with warm golden hues, delivering balanced tone and impressive depth for advancing players.",
  },
];

export function getViola(slug: string): Instrument | undefined {
  return violas.find((v) => v.slug === slug);
}
