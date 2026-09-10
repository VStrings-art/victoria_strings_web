import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstrumentCarousel from "@/components/InstrumentCarousel";
import ContactSection from "@/components/ContactSection";
import RelatedInstruments from "@/components/RelatedInstruments";
import { doubleBasses, getDoubleBass } from "@/lib/double-basses";
import { getRelated } from "@/lib/related";
import { instrumentMetadata, instrumentSchema } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return doubleBasses.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doubleBass = getDoubleBass(slug);
  return instrumentMetadata(doubleBass, "Double Bass", "/double-bass");
}

export default async function DoubleBassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doubleBass = getDoubleBass(slug);
  if (!doubleBass) notFound();

  const related = getRelated(doubleBasses, slug);

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(instrumentSchema(doubleBass, "Double Bass", "/double-bass")),
          }}
        />
        <InstrumentCarousel images={doubleBass.images} caption={doubleBass.caption} title={doubleBass.title} />
        <RelatedInstruments
          title="More Double Basses to Explore"
          basePath="/double-bass"
          items={related}
        />
        <ContactSection instrument={doubleBass.title} />
      </main>
      <Footer />
    </>
  );
}
