import type { Instrument } from "./instrument-types";

export type { Instrument };

export const violins: Instrument[] = [
  {
    slug: "158592",
    title: "Professional Violin",
    images: [
      "/images/2025/11/xsh_f.png",
      "/images/2025/11/xsh_b.png",
      "/images/2025/11/xsh_s.png",
    ],
    caption: "A clean, elegant voice - built to carry effortlessly in any hall.",
  },
  {
    slug: "cremonese-01",
    title: "Cremonese 01",
    images: [
      "/images/2025/11/bao_A_f.png",
      "/images/2025/11/bao_A_b.png",
      "/images/2025/11/bao_A_s.png",
    ],
    caption:
      "A luminous, flame-maple silhouette crowned in golden varnish - crafted to project with warmth, depth, and effortless authority.",
  },
  {
    slug: "messiah-01",
    title: "Messiah 01",
    images: [
      "/images/2025/11/Screenshot-2025-11-15-at-18.59.27-scaled.png",
      "/images/2025/11/Screenshot-2025-11-15-at-19.30.45.png",
      "/images/2025/11/kuang_s.png",
    ],
    caption:
      "Radiant golden maple with elegant antiquing, delivering warm depth, focused clarity, and confident projection across every register.",
  },
  {
    slug: "messiah-02",
    title: "Messiah 02",
    images: [
      "/images/2026/03/messiah2_front.png",
      "/images/2026/03/messiah2_back.png",
      "/images/2026/03/messiah2_head.png",
    ],
    caption:
      "Richly flamed maple and warm amber varnish, offering focused projection, refined clarity, and elegant tonal balance throughout.",
  },
  {
    slug: "cremonese-02",
    title: "Cremonese 02",
    images: [
      "/images/2026/03/cremonese2_front-scaled.png",
      "/images/2026/03/cremonese2_back-scaled.png",
      "/images/2026/03/cremonese2_head.png",
    ],
    caption:
      "Golden amber varnish over fine maple flame, producing warm resonance, clear articulation, and balanced projection.",
  },
  {
    slug: "messiah-03",
    title: "Messiah 03",
    images: [
      "/images/2025/11/gu_f.png",
      "/images/2026/03/messiah3_back-scaled.png",
      "/images/2025/11/gu_s.png",
    ],
    caption:
      "Golden maple flame shimmers beneath a warm, translucent varnish, revealing refined craftsmanship and elegant, balanced character.",
  },
  {
    slug: "messiah-04",
    title: "Messiah 04",
    images: [
      "/images/2025/11/ping_f.png",
      "/images/2026/03/messiah4_back.png",
      "/images/2025/11/ping_s.png",
    ],
    caption: "Brilliant flamed maple back with rich, luminous depth and refined elegance.",
  },
  {
    slug: "cremonese-03",
    title: "Cremonese 03",
    images: [
      "/images/2026/03/cremonese03_back-scaled.png",
      "/images/2026/03/cremonese03_front-scaled.png",
      "/images/2026/03/cremonese03_head.png",
    ],
    caption: "Warm amber varnish with vibrant flame, delivering rich tone and focused projection.",
  },
];

export function getViolin(slug: string): Instrument | undefined {
  return violins.find((v) => v.slug === slug);
}
