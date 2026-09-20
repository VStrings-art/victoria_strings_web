import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getEvent } from "@/lib/events";
import { type Locale, localePath } from "@/i18n/config";
import { getDictionary, eventText } from "@/i18n";

export default function EventDetailView({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const t = getDictionary(locale);
  const event = getEvent(slug);
  if (!event) notFound();

  const text = eventText(event, locale);

  return (
    <>
      <Header locale={locale} />
      <main>
        {/* Black ground and gold type, following the printed announcement. */}
        <section className="relative overflow-hidden bg-ink-900 pt-[calc(4.8rem+72px)] pb-16 text-white md:pt-[calc(4.8rem+150px)] md:pb-24">
          <Image
            src={event.image}
            alt=""
            fill
            priority
            className="object-cover opacity-[0.16]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/70 to-ink-900" />

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <Link
              href={localePath(locale, "/events")}
              className="inline-flex items-center gap-2 font-sans text-[0.72rem] font-semibold tracking-[0.2em] text-white/55 uppercase transition-colors hover:text-gold-300"
            >
              <span aria-hidden="true">&#8592;</span>
              {t.events.backToEvents}
            </Link>

            <p className="mt-9 font-sans text-[0.7rem] font-semibold tracking-[0.28em] text-gold-400 uppercase sm:text-[0.78rem]">
              {t.events.status[event.status]}
            </p>
            <h1 className="mt-5 max-w-[20ch] font-display text-[2.5rem] leading-[1.1] text-gold-200 md:text-[4rem]">
              {text.title}
            </h1>
            <div className="mt-8 h-px w-[96px] bg-gradient-to-r from-gold-300 to-transparent" />
            <p className="mt-8 max-w-[44ch] font-display text-[1.25rem] leading-[1.6] text-white/85 md:text-[1.7rem]">
              {text.summary}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[46rem]">
            <dl className="flex flex-col gap-12 md:gap-14">
              {text.sections.map((s) => (
                <div key={s.heading}>
                  <dt className="font-display text-[1.45rem] leading-[1.25] text-[#1f1b18] md:text-[1.8rem]">
                    {s.heading}
                  </dt>
                  <dd className="mt-4 text-[1.03rem] leading-[1.9] text-[#5b5550] md:text-[1.1rem]">
                    {s.body}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-14 flex flex-col items-start gap-4 border-t border-black/10 pt-12">
              <a
                href={event.ctaHref}
                className="inline-flex max-w-full items-center justify-center gap-2.5 rounded-full bg-[#7b1d1b] px-7 py-3.5 text-center font-sans text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#5d1513] hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:px-9 sm:text-[13px]"
              >
                {text.ctaLabel}
                <span aria-hidden="true">&#8594;</span>
              </a>
              <a
                href="mailto:sales@victoriastrings.com"
                className="font-sans text-[0.95rem] text-[#6b6560] underline-offset-4 transition-colors hover:text-[#a97f34] hover:underline"
              >
                sales@victoriastrings.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
