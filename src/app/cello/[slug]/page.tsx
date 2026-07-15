import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstrumentCarousel from "@/components/InstrumentCarousel";
import ContactSection from "@/components/ContactSection";
import { cellos, getCello } from "@/lib/cellos";

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

  return (
    <>
      <Header />
      <main>
        <InstrumentCarousel images={cello.images} caption={cello.caption} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
