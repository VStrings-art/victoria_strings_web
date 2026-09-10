import type { Instrument } from "./instrument-types";

export const cellos: Instrument[] = [
  {
    slug: "everest",
    title: "Everest",
    images: [
      "/images/2026/cellos/cello5_Mara/cello5_back.webp",
      "/images/2026/cellos/cello5_Mara/cello5_front.webp",
      "/images/2026/cellos/cello5_Mara/cello5_head.webp",
    ],
    caption:
      "A faithful copy of the legendary 1711 “Mara” Stradivari, its broadly flamed maple back glowing beneath warm amber antiquing, with deep resonance and a full, singing voice.",
  },
  {
    slug: "kilimanjaro",
    title: "Kilimanjaro",
    images: [
      "/images/2026/cellos/cello6_Davidoff/cello6_back.webp",
      "/images/2026/cellos/cello6_Davidoff/cello6_front.webp",
      "/images/2026/cellos/cello6_Davidoff/cello6_head.webp",
    ],
    caption:
      "A faithful copy of the celebrated 1712 “Davidoff” Stradivari, its softly flamed maple veiled in deep chestnut-red antiquing, delivering dark warmth and commanding projection.",
  },
  {
    slug: "fuji",
    title: "Fuji",
    images: [
      "/images/2026/cellos/cello7/cello7_front.webp",
      "/images/2026/cellos/cello7/cello7_back.webp",
      "/images/2026/cellos/cello7/cello7_head.webp",
    ],
    caption:
      "Luminous golden-orange varnish over finely flamed maple, offering bright clarity, quick response, and a warm, open voice.",
  },
  {
    slug: "denali",
    title: "Denali",
    images: [
      "/images/2026/02/cello1_back.webp",
      "/images/2026/02/cello1_front.webp",
      "/images/2026/02/cello1_head.webp",
    ],
    caption:
      "This cello features a richly flamed maple back with deep amber varnish, offering warmth, power, and expansive resonance.",
  },
  {
    slug: "matterhorn",
    title: "Matterhorn",
    images: [
      "/images/2026/02/cello2_front.webp",
      "/images/2026/02/cell2_back.webp",
      "/images/2026/02/cello2_head.webp",
    ],
    caption: "Brilliant flamed maple back with luminous golden varnish and powerful resonance.",
  },
  {
    slug: "annapurna",
    title: "Annapurna",
    images: [
      "/images/2026/cellos/cello3/cello3_back.webp",
      "/images/2026/cellos/cello3/cello3_back.webp",
      "/images/2026/cellos/cello3/cello3_back.webp",
    ],
    caption:
      "Vivid two-tone flame maple back beneath a warm honey-amber varnish, offering rich resonance and deep, singing warmth.",
  },
  {
    slug: "olympus",
    title: "Olympus",
    images: [
      "/images/2026/cellos/cello4/cello4_front.webp",
      "/images/2026/cellos/cello4/cello4_back.webp",
      "/images/2026/cellos/cello4/cello4_front.webp",
    ],
    caption:
      "Antiqued honey-amber varnish over a delicately flamed back, capturing time-worn character with warm, resonant depth.",
  },
];

export function getCello(slug: string): Instrument | undefined {
  return cellos.find((c) => c.slug === slug);
}
