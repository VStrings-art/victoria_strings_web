import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstrumentCarousel from "@/components/InstrumentCarousel";
import ContactSection from "@/components/ContactSection";
import { violas, getViola } from "@/lib/violas";

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
  return {
    title: viola ? `${viola.title} | Victoria Strings London` : "Viola | Victoria Strings London",
  };
}

export default async function ViolaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const viola = getViola(slug);
  if (!viola) notFound();

  return (
    <>
      <Header />
      <main>
        <InstrumentCarousel images={viola.images} caption={viola.caption} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
