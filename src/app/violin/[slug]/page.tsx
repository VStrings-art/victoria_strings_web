import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstrumentCarousel from "@/components/InstrumentCarousel";
import ContactSection from "@/components/ContactSection";
import RelatedInstruments from "@/components/RelatedInstruments";
import { violins, getViolin } from "@/lib/violins";
import { getRelated } from "@/lib/related";
import { instrumentMetadata, instrumentSchema } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return violins.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const violin = getViolin(slug);
  return instrumentMetadata(violin, "Violin", "/violin");
}

export default async function ViolinDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const violin = getViolin(slug);
  if (!violin) notFound();

  const related = getRelated(violins, slug);

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(instrumentSchema(violin, "Violin", "/violin")),
          }}
        />
        <InstrumentCarousel images={violin.images} caption={violin.caption} title={violin.title} />
        <RelatedInstruments title="More Violins to Explore" basePath="/violin" items={related} />
        <ContactSection instrument={violin.title} />
      </main>
      <Footer />
    </>
  );
}
