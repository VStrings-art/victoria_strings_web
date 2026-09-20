import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sortedEvents } from "@/lib/events";
import { type Locale, localePath } from "@/i18n/config";
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
            <ul className="flex flex-col gap-14 md:gap-20">
              {items.map((event) => {
                const text = eventText(event, locale);
                const href = localePath(locale, `/events/${event.slug}`);
                return (
                  <li key={event.slug}>
                    <article className="group grid grid-cols-1 gap-7 md:grid-cols-[1.05fr_1.2fr] md:items-center md:gap-14">
                      <Link
                        href={href}
                        aria-label={text.title}
                        className="relative block aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-ink-100 md:aspect-[5/4]"
                      >
                        <Image
                          src={event.image}
                          alt={event.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          sizes="(min-width: 768px) 46vw, 92vw"
                        />
                      </Link>

                      <div>
                        <p className="font-sans text-[0.66rem] font-semibold tracking-[0.24em] text-[#a97f34] uppercase sm:text-[0.7rem]">
                          {t.events.status[event.status]}
                        </p>
                        <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] text-[#1f1b18] md:text-[2.6rem]">
                          <Link href={href} className="transition-colors hover:text-[#a97f34]">
                            {text.title}
                          </Link>
                        </h2>
                        <div className="mt-5 h-px w-[52px] bg-[#c9ab7c]" />
                        <p className="mt-6 max-w-[46ch] text-[1.02rem] leading-[1.8] text-[#5b5550] md:text-[1.08rem]">
                          {text.summary}
                        </p>
                        <Link
                          href={href}
                          className="mt-7 inline-flex items-center gap-2 font-sans text-[0.78rem] font-semibold tracking-[0.18em] text-[#1f1b18] uppercase transition-colors hover:text-[#a97f34]"
                        >
                          {t.events.readMore}
                          <span aria-hidden="true">&#8594;</span>
                        </Link>
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
