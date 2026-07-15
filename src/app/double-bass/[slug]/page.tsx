import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstrumentCarousel from "@/components/InstrumentCarousel";
import ContactSection from "@/components/ContactSection";
import { doubleBasses, getDoubleBass } from "@/lib/double-basses";

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
  return {
    title: doubleBass
      ? `${doubleBass.title} | Victoria Strings London`
      : "Double Bass | Victoria Strings London",
  };
}

export default async function DoubleBassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doubleBass = getDoubleBass(slug);
  if (!doubleBass) notFound();

  return (
    <>
      <Header />
      <main>
        <InstrumentCarousel images={doubleBass.images} caption={doubleBass.caption} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
