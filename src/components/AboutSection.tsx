import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function AboutSection({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-8 py-24 text-[#111827] md:grid-cols-[1fr_1.15fr] md:gap-20 md:py-28">
      <div>
        <p className="mb-7 text-[0.82rem] font-medium tracking-[0.30em] text-[#bfa18a] uppercase">
          {t.about.kicker}
        </p>
        <h2 className="font-display text-[3.2rem] leading-[1.12] font-normal text-[#2b2b2b] md:text-[4rem]">
          {t.about.titleLines[0]}
          <br />
          {t.about.titleLines[1]}
        </h2>
        <div className="mt-8 h-0.5 w-[110px] bg-gradient-to-r from-[#c9a68a] via-[#e8d6c8] to-transparent" />
      </div>

      <div className="space-y-7 text-[1.15rem] leading-[1.95] text-[#4b5563]">
        <p>{t.about.body1}</p>
        <p>{t.about.body2}</p>
      </div>
    </section>
  );
}
