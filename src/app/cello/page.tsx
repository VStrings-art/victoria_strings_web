import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CinematicOverlaySection from "@/components/CinematicOverlaySection";
import CollectionSection from "@/components/CollectionSection";
import { cellos } from "@/lib/cellos";

export const metadata: Metadata = {
  title: "Cellos | Victoria Strings London",
  description:
    "Refined cellos with presence, balance and authority — handcrafted by Victoria Strings London's network of master luthiers.",
};

const frames = [
  {
    label: "Singing Core",
    quote: "A voice that carries warmth — and still cuts through the hall.",
    position: "left" as const,
  },
  {
    label: "Bow Response",
    quote: "Immediate start, controlled sustain — phrasing feels effortless.",
    position: "center" as const,
  },
  {
    label: "Confident Projection",
    quote: "Depth with clarity — built to speak in real performance spaces.",
    position: "right" as const,
  },
];

const collectionItems = cellos.map((c) => ({
  slug: c.slug,
  image: c.images[0],
  alt: c.title,
}));

export default function CelloPage() {
  return (
    <>
      <Header />
      <main>
        <CinematicOverlaySection
          image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/cello_cover3.jpg"
          frames={frames}
        />

        <CollectionSection
          label="Our Collection"
          title="Refined Cellos with Presence, Balance & Authority"
          basePath="/cello"
          items={collectionItems}
        />
      </main>
      <Footer />
    </>
  );
}
