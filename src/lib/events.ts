/** The wording of one event. English lives here; translations sit in src/i18n/events. */
export type EventText = {
  title: string;
  /** One or two sentences. The poster carries the full detail. */
  summary: string;
  ctaLabel: string;
};

export type EventItem = {
  slug: string;
  /** Sorts the list, newest first. ISO date. */
  publishedAt: string;
  /** Looked up in the dictionary so the badge follows the visitor's language. */
  status: "open" | "upcoming" | "closed" | "news";
  /** "poster" fills its frame and opens full screen; "logo" simply sits on a panel. */
  display: "poster" | "logo";
  /** Portrait artwork, shown whole rather than cropped into a banner. */
  image: string;
  imageAlt: string;
  /** What the download button saves, for posters worth passing on. JPEG, not
   *  WebP: these get forwarded into apps that still choke on WebP. */
  downloadSrc?: string;
  /** mailto: or https:. The card and the detail page both link here. */
  ctaHref: string;
  text: EventText;
};

export const events: EventItem[] = [
  {
    slug: "fellowship-programme",
    publishedAt: "2026-09-20",
    status: "open",
    display: "poster",
    image: "/images/2026/events/fellowship-programme.webp",
    imageAlt: "Fellowship Programme announcement poster",
    downloadSrc: "/images/2026/events/Victoria-Strings-Fellowship-Programme.jpg",
    ctaHref:
      "mailto:sales@victoriastrings.com?subject=Fellowship%20Programme%20nomination",
    text: {
      title: "Fellowship Programme",
      summary:
        "A professional violin, viola or cello by our master luthiers, on free loan for an academic year and renewable — no cost, no obligation to buy, insurance covered by us. Open to string players aged 14–25 anywhere in the UK, nominated by their teacher or institution.",
      ctaLabel: "Nominate a student",
    },
  },
  {
    slug: "bvma-member",
    publishedAt: "2026-09-19",
    status: "news",
    display: "logo",
    image: "/images/2026/events/bvma-logo.webp",
    imageAlt: "British Violin Making Association",
    ctaHref: "https://www.bvma.org.uk/",
    text: {
      title: "Member of the BVMA",
      summary:
        "Victoria Strings London is now a member of the British Violin Making Association, which brings together makers, restorers, dealers and players of stringed instruments across the United Kingdom.",
      ctaLabel: "Visit the BVMA",
    },
  },
];

export function getEvent(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

/** Newest first. */
export function sortedEvents(): EventItem[] {
  return [...events].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
