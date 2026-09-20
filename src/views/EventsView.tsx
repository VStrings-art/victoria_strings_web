import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PosterLightbox from "@/components/PosterLightbox";
import { sortedEvents } from "@/lib/events";
import { type Locale } from "@/i18n/config";
import { getDictionary, eventText } from "@/i18n";

export default function EventsView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const items = sortedEvents();

  return (
    <>
      <Header locale={locale} />
      <main>
        <section className="bg-ink-900 pt-[calc(4.8rem+72px)] pb-16 text-white md:pt-[calc(4.8rem+150px)] md:pb-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <p className="mb-5 font-sans text-[0.7rem] font-semibold tracking-[0.28em] text-gold-400 uppercase sm:text-[0.78rem]">
              {t.events.label}
            </p>
            <h1 className="max-w-[24ch] font-display text-[2.4rem] leading-[1.12] md:text-[3.6rem]">
              {t.events.heading}
            </h1>
            <div className="mt-8 h-px w-[86px] bg-gradient-to-r from-gold-300 to-transparent" />
            <p className="mt-8 max-w-[52ch] text-[1.02rem] leading-[1.8] text-ink-200 md:text-[1.1rem]">
              {t.events.intro}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          {items.length === 0 ? (
            <p className="py-10 text-center font-display text-[1.3rem] text-[#6b6560]">
              {t.events.empty}
            </p>
          ) : (
            <ul className="flex flex-col gap-20 md:gap-28">
              {items.map((event) => {
                const text = eventText(event, locale);
                return (
                  <li key={event.slug}>
                    <article className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,420px)_1fr] md:items-center md:gap-16">
                      <div className="mx-auto w-full max-w-[380px] md:mx-0 md:max-w-[420px]">
                        {event.display === "poster" && event.downloadSrc ? (
                          <PosterLightbox
                            src={event.image}
                            alt={event.imageAlt}
                            downloadSrc={event.downloadSrc}
                            labels={{
                              open: t.events.viewPoster,
                              close: t.events.close,
                              download: t.events.download,
                            }}
                          />
                        ) : (
                          // A mark rather than an announcement: shown whole on a
                          // quiet panel, with nothing to enlarge or download.
                          <div className="flex aspect-square w-full items-center justify-center rounded-[4px] border border-black/[0.07] bg-cream-100 p-10 sm:p-14">
                            <Image
                              src={event.image}
                              alt={event.imageAlt}
                              width={750}
                              height={750}
                              className="h-auto w-full max-w-[240px]"
                              sizes="(min-width: 768px) 240px, 60vw"
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="font-sans text-[0.66rem] font-semibold tracking-[0.24em] text-[#a97f34] uppercase sm:text-[0.7rem]">
                          {t.events.status[event.status]}
                        </p>
                        <h2 className="mt-4 font-display text-[2rem] leading-[1.15] text-[#1f1b18] md:text-[2.8rem]">
                          {text.title}
                        </h2>
                        <div className="mt-5 h-px w-[52px] bg-[#c9ab7c]" />
                        <p className="mt-7 max-w-[52ch] text-[1.02rem] leading-[1.85] text-[#5b5550] md:text-[1.08rem]">
                          {text.summary}
                        </p>

                        <div className="mt-9">
                          <a
                            href={event.ctaHref}
                            {...(event.ctaHref.startsWith("http")
                              ? { target: "_blank", rel: "noreferrer" }
                              : {})}
                            className="inline-flex max-w-full items-center justify-center gap-2.5 rounded-full bg-[#7b1d1b] px-7 py-3.5 text-center font-sans text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#5d1513] hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:px-9 sm:text-[13px]"
                          >
                            {text.ctaLabel}
                            <span aria-hidden="true">&#8594;</span>
                          </a>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
