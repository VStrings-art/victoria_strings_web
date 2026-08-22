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
  {
    slug: "cello-03",
    title: "Cello 03",
    images: [
      "/images/2026/cellos/cello3/cello3_back.png",
      "/images/2026/cellos/cello3/cello3_back.png",
      "/images/2026/cellos/cello3/cello3_back.png",
    ],
    caption:
      "Vivid two-tone flame maple back beneath a warm honey-amber varnish, offering rich resonance and deep, singing warmth.",
  },
  {
    slug: "cello-04",
    title: "Cello 04",
    images: [
      "/images/2026/cellos/cello4/cello4_front.png",
      "/images/2026/cellos/cello4/cello4_back.png",
      "/images/2026/cellos/cello4/cello4_front.png",
    ],
    caption:
      "Antiqued honey-amber varnish over a delicately flamed back, capturing time-worn character with warm, resonant depth.",
  },
  {
    slug: "cello-05",
    title: "Cello 05",
    images: [
      "/images/2026/cellos/cello5_Mara/cello5_back.png",
      "/images/2026/cellos/cello5_Mara/cello5_front.png",
      "/images/2026/cellos/cello5_Mara/cello5_head.png",
    ],
    caption:
      "A faithful copy of the legendary 1711 “Mara” Stradivari, its broadly flamed maple back glowing beneath warm amber antiquing, with deep resonance and a full, singing voice.",
  },
  {
    slug: "cello-06",
    title: "Cello 06",
    images: [
      "/images/2026/cellos/cello6_Davidoff/cello6_front.png",
      "/images/2026/cellos/cello6_Davidoff/cello6_back.png",
      "/images/2026/cellos/cello6_Davidoff/cello6_head.png",
    ],
    caption:
      "A faithful copy of the celebrated 1712 “Davidoff” Stradivari, its softly flamed maple veiled in deep chestnut-red antiquing, delivering dark warmth and commanding projection.",
  },
  {
    slug: "cello-07",
    title: "Cello 07",
    images: [
      "/images/2026/cellos/cello7/cello7_back.png",
      "/images/2026/cellos/cello7/cello7_front.png",
      "/images/2026/cellos/cello7/cello7_head.png",
    ],
    caption:
      "Luminous golden-orange varnish over finely flamed maple, offering bright clarity, quick response, and a warm, open voice.",
  },
];

export function getCello(slug: string): Instrument | undefined {
  return cellos.find((c) => c.slug === slug);
}
