import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstrumentCarousel from "@/components/InstrumentCarousel";
import ContactSection from "@/components/ContactSection";
import RelatedInstruments from "@/components/RelatedInstruments";
import { violas, getViola } from "@/lib/violas";
import { getRelated } from "@/lib/related";
import { instrumentMetadata, instrumentSchema } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return violas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const viola = getViola(slug);
  return instrumentMetadata(viola, "Viola", "/viola");
}

export default async function ViolaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const viola = getViola(slug);
  if (!viola) notFound();

  const related = getRelated(violas, slug);

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(instrumentSchema(viola, "Viola", "/viola")),
          }}
        />
        <InstrumentCarousel images={viola.images} caption={viola.caption} title={viola.title} />
        <RelatedInstruments title="More Violas to Explore" basePath="/viola" items={related} />
        <ContactSection instrument={viola.title} />
      </main>
      <Footer />
    </>
  );
}
