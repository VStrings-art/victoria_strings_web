import type { Instrument } from "./instrument-types";

export function getRelated(list: Instrument[], currentSlug: string, count = 4): Instrument[] {
  const start = list.findIndex((i) => i.slug === currentSlug);
  const rotated =
    start === -1 ? list : [...list.slice(start + 1), ...list.slice(0, start + 1)];
  return rotated.filter((i) => i.slug !== currentSlug).slice(0, count);
}
