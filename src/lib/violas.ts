import type { Instrument } from "./instrument-types";

export const violas: Instrument[] = [
  {
    slug: "viola-01",
    title: "Viola 01",
    images: [
      "/images/2026/02/viola1_front.png",
      "/images/2026/02/viola1_back.png",
      "/images/2026/02/viola1_head-scaled.png",
    ],
    caption:
      "16-inch viola with radiant flamed maple back and warm golden varnish, offering depth and refined resonance.",
  },
  {
    slug: "viola-02",
    title: "Viola 02",
    images: [
      "/images/2026/02/viola2_front-scaled.png",
      "/images/2026/02/viola2_back.png",
      "/images/2026/02/viola2_head.png",
    ],
    caption: "Radiant flamed maple back with great potential to develop a rich, expansive voice.",
  },
  {
    slug: "viola-03",
    title: "Viola 03",
    images: [
      "/images/2026/02/viola3_back-scaled.png",
      "/images/2026/02/viola3_front-scaled.png",
      "/images/2026/02/viola3_head.png",
    ],
    caption:
      "Bright flamed maple back with warm golden hues, delivering balanced tone and impressive depth for advancing players.",
  },
];

export function getViola(slug: string): Instrument | undefined {
  return violas.find((v) => v.slug === slug);
}
