import Image from "next/image";
import Link from "next/link";
import { type Locale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function WhoWeAreSection({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className="bg-ink-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1680px] px-6 md:px-10">
        <h2 className="font-display text-[2.4rem] font-bold md:text-[3.2rem]">
          {t.whoWeAre.heading}
        </h2>
        <p className="mt-4 text-[1.05rem] leading-[1.7] text-ink-300 italic md:text-[1.2rem] md:whitespace-nowrap">
          {t.whoWeAre.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Link
            href={localePath(locale, "/violin")}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-14 text-center transition-colors duration-200 hover:border-gold-500/50 hover:bg-white/[0.07]"
          >
            {/* The two marks are different shapes — one wide, one stacked — so
                a shared box sizes them by height and keeps the labels level. */}
            <div className="flex h-[180px] items-center justify-center">
              <Image
                src="/images/vs-logo-cropped.webp"
                alt="Victoria Strings London"
                width={400}
                height={213}
                className="h-auto max-h-full w-auto max-w-[300px] object-contain"
              />
            </div>
            <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-gold-400 uppercase">
              {t.whoWeAre.vsLabel}
            </p>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-[1.7] text-ink-200">
              {t.whoWeAre.vsBody}
            </p>
          </Link>

          <a
            href="https://www.venusstrings.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-14 text-center transition-colors duration-200 hover:border-gold-500/50 hover:bg-white/[0.07]"
          >
            <div className="flex h-[180px] items-center justify-center">
              <Image
                src="/images/venus-logo.webp"
                alt="Venus Strings London"
                width={608}
                height={600}
                className="h-auto max-h-full w-auto max-w-[300px] object-contain"
              />
            </div>
            <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-gold-400 uppercase">
              {t.whoWeAre.venusLabel}
              <span className="ml-0.5 align-super text-[0.75em]">*</span>
            </p>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-[1.7] text-ink-200">
              {t.whoWeAre.venusBody}
            </p>
          </a>
        </div>

        {/* Keyed to the asterisk on the Venus card: the brand traded as Prima
            until 2026, and returning visitors will be looking for that name. */}
        <p className="mt-8 text-center text-[0.92rem] text-ink-400">
          {t.whoWeAre.venusFormerly}
        </p>

        <p className="mt-10 text-center text-[1.05rem] text-ink-300">
          {t.whoWeAre.footnote}
        </p>
      </div>
    </section>
  );
}
