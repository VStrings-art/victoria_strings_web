export type EventSection = {
  heading: string;
  body: string;
};

/** The wording of one event. English lives here; translations sit in src/i18n/events. */
export type EventText = {
  title: string;
  summary: string;
  sections: EventSection[];
  ctaLabel: string;
};

export type EventItem = {
  slug: string;
  /** Sorts the list, newest first. ISO date. */
  publishedAt: string;
  /** Looked up in the dictionary so the badge follows the visitor's language. */
  status: "open" | "upcoming" | "closed";
  image: string;
  imageAlt: string;
  /** mailto: or https:. The card and the detail page both link here. */
  ctaHref: string;
  text: EventText;
};

export const events: EventItem[] = [
  {
    slug: "fellowship-programme",
    publishedAt: "2026-09-20",
    status: "open",
    image: "/images/2026/03/violin_player.webp",
    imageAlt: "A young player with a violin",
    ctaHref:
      "mailto:sales@victoriastrings.com?subject=Fellowship%20Programme%20nomination",
    text: {
      title: "Fellowship Programme",
      summary: "Free instrument loans for exceptional young string players.",
      sections: [
        {
          heading: "What we offer",
          body: "A professional violin, viola or cello crafted by our global master luthiers, on loan for one academic year, renewable. No cost and no purchase obligation; insurance covered by us.",
        },
        {
          heading: "Who is eligible",
          body: "String players aged 14–25 at conservatoire-preparation level or above, nominated by their teacher or institution anywhere in the UK.",
        },
        {
          heading: "How to nominate",
          body: "Email sales@victoriastrings.com with the student's name, age, instrument and a short note from their teacher. We'll arrange a trial.",
        },
      ],
      ctaLabel: "Nominate a student",
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
