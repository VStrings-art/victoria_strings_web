import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstrumentCarousel from "@/components/InstrumentCarousel";
import ContactSection from "@/components/ContactSection";
import RelatedInstruments from "@/components/RelatedInstruments";
import { cellos, getCello } from "@/lib/cellos";
import { getRelated } from "@/lib/related";

export function generateStaticParams() {
  return cellos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cello = getCello(slug);
  return {
    title: cello ? `${cello.title} | Victoria Strings London` : "Cello | Victoria Strings London",
  };
}

export default async function CelloDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cello = getCello(slug);
  if (!cello) notFound();

  const related = getRelated(cellos, slug);

  return (
    <>
      <Header />
      <main>
        <InstrumentCarousel images={cello.images} caption={cello.caption} />
        <RelatedInstruments title="More Cellos to Explore" basePath="/cello" items={related} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
