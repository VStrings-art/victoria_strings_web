"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Locale, localePath } from "@/i18n/config";

type Item = {
  slug: string;
  image: string;
  alt: string;
  /** Each instrument is called by its name rather than a generic label. */
  name: string;
  /** Optional three-word summary of the instrument's voice. */
  character?: string;
};

export type CollectionLabels = {
  previous: string;
  next: string;
  /** Carries "{n}", replaced with the page number. */
  pageLabel: string;
};

/** Two full rows of the three-column grid. */
const PER_PAGE = 6;

export default function CollectionSection({
  label,
  title,
  note,
  basePath,
  items,
  labels,
  locale = "en",
}: {
  label: string;
  title: string;
  note?: string;
  basePath: string;
  items: Item[];
  labels: CollectionLabels;
  locale?: Locale;
}) {
  const [page, setPage] = useState(0);
  const headRef = useRef<HTMLElement>(null);

  const pageCount = Math.ceil(items.length / PER_PAGE);
  // A collection that fits on one screenful is left exactly as it was.
  const paged = pageCount > 1;

  function go(next: number) {
    setPage(next);
    // Land on the heading rather than wherever the shorter page left us.
    const top = headRef.current?.getBoundingClientRect().top ?? 0;
    window.scrollTo({ top: top + window.scrollY - 24, behavior: "smooth" });
  }

  return (
    <>
      <section ref={headRef} className="px-4 pt-24 pb-10 text-center font-display">
        <p className="mb-4 text-[0.95rem] font-semibold tracking-[0.22em] text-[#b38a5a] uppercase">
          {label}
        </p>
        <h2 className="text-[2.4rem] leading-[1.25] text-[#222] md:text-[3.2rem]">
          {title}
        </h2>
        {note && (
          <p className="mx-auto mt-6 max-w-[42rem] font-sans text-[0.98rem] leading-[1.75] text-[#6b6560]">
            {note}
          </p>
        )}
      </section>

      {/* Every instrument stays in the markup; the ones off this page are
          simply not displayed, so search engines still see the whole
          collection and their photographs stay lazy until they are shown. */}
      <section className="mx-auto grid max-w-[1560px] grid-cols-1 gap-x-32 gap-y-20 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item.slug}
            className={`group text-center font-display${
              paged && Math.floor(i / PER_PAGE) !== page ? " hidden" : ""
            }`}
          >
            <Link
              href={localePath(locale, `${basePath}/${item.slug}`)}
              aria-label="View this instrument"
              className="mx-auto block aspect-[2/3] w-[88%] max-h-[650px]"
            >
              <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover:-translate-y-2.5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                />
              </div>
            </Link>
            {/* Museum label: a gold hairline, the name, then the voice. */}
            <Link
              href={localePath(locale, `${basePath}/${item.slug}`)}
              className="group/label mt-1 block px-2 pb-1"
            >
              <span className="mx-auto mt-6 block h-px w-[38px] bg-[#c9ab7c]" />
              <span className="mt-4 block text-[1.3rem] leading-[1.25] font-medium tracking-[0.14em] text-[#1f1b18] uppercase transition-colors duration-200 ease-out group-hover/label:text-[#a97f34] sm:text-[1.6rem]">
                {item.name}
              </span>
              {item.character && (
                <span className="mt-2.5 block font-sans text-[0.62rem] leading-[1.5] font-medium tracking-[0.19em] text-[#a08b73] uppercase sm:text-[0.66rem]">
                  {item.character}
                </span>
              )}
            </Link>
          </div>
        ))}
      </section>

      {paged && (
        <nav
          aria-label={label}
          className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-center gap-x-3 gap-y-4 px-6 pb-20 font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase sm:gap-x-5 sm:text-[0.72rem]"
        >
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 0}
            className="text-[#a08b73] transition-colors duration-200 ease-out hover:text-[#a97f34] disabled:pointer-events-none disabled:opacity-35"
          >
            {labels.previous}
          </button>

          <span className="flex items-center gap-x-1 sm:gap-x-2">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-current={i === page ? "page" : undefined}
                aria-label={labels.pageLabel.replace("{n}", String(i + 1))}
                className="group/page px-2.5 py-1.5 text-[#a08b73] transition-colors duration-200 ease-out hover:text-[#a97f34] aria-[current=page]:text-[#1f1b18]"
              >
                {i + 1}
                <span className="mx-auto mt-1.5 block h-px w-full scale-x-0 bg-[#c9ab7c] transition-transform duration-200 ease-out group-aria-[current=page]/page:scale-x-100" />
              </button>
            ))}
          </span>

          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page === pageCount - 1}
            className="text-[#a08b73] transition-colors duration-200 ease-out hover:text-[#a97f34] disabled:pointer-events-none disabled:opacity-35"
          >
            {labels.next}
          </button>
        </nav>
      )}
    </>
  );
}
