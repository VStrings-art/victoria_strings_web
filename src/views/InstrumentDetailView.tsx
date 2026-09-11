import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstrumentCarousel from "@/components/InstrumentCarousel";
import ContactSection from "@/components/ContactSection";
import RelatedInstruments from "@/components/RelatedInstruments";
import { getRelated } from "@/lib/related";
import { instrumentSchema } from "@/lib/instrument-seo";
import type { Instrument } from "@/lib/instrument-types";
import { type Locale } from "@/i18n/config";
import { getDictionary, localiseAll } from "@/i18n";

export type Category = "violin" | "viola" | "cello" | "double-bass";

const SCHEMA_CATEGORY: Record<Category, string> = {
  violin: "Violin",
  viola: "Viola",
  cello: "Cello",
  "double-bass": "Double Bass",
};

export default function InstrumentDetailView({
  all,
  slug,
  category,
  locale,
}: {
  all: Instrument[];
  slug: string;
  category: Category;
  locale: Locale;
}) {
  const t = getDictionary(locale);
  const localised = localiseAll(all, locale);
  const instrument = localised.find((i) => i.slug === slug);
  if (!instrument) notFound();

  const basePath = `/${category}`;
  const related = getRelated(localised, slug);
  const relatedTitle = {
    violin: t.detail.relatedViolin,
    viola: t.detail.relatedViola,
    cello: t.detail.relatedCello,
    "double-bass": t.detail.relatedBass,
  }[category];

  return (
    <>
      <Header locale={locale} />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              instrumentSchema(instrument, SCHEMA_CATEGORY[category], basePath),
            ),
          }}
        />
        <InstrumentCarousel
          images={instrument.images}
          caption={instrument.caption}
          title={instrument.title}
          locale={locale}
        />
        <RelatedInstruments
          title={relatedTitle}
          basePath={basePath}
          items={related}
          locale={locale}
        />
        <ContactSection instrument={instrument.title} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
