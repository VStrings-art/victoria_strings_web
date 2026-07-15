import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FramedIntroSection from "@/components/FramedIntroSection";
import CollectionSection from "@/components/CollectionSection";

export const metadata: Metadata = {
  title: "Double Basses | Victoria Strings London",
  description:
    "Double basses with depth, power and structural integrity — handcrafted by Victoria Strings London's network of master luthiers.",
};

const cards = [
  {
    label: "Foundation",
    body: "Weight and clarity in the low register — built to support the section without losing definition.",
  },
  {
    label: "Response",
    body: "Clean bow start with controlled sustain, supporting both articulation and long lines.",
  },
  {
    label: "Stability",
    body: "Dependable setup and disciplined build for consistent playability across seasons and sessions.",
  },
];

const doubleBasses = [
  { slug: "doublebass-01", image: "/images/2026/03/doublebass1_front.png", alt: "Double Bass 01" },
  { slug: "doublebass-02", image: "/images/2026/03/doublebass2_back.png", alt: "Double Bass 02" },
];

export default function DoubleBassPage() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/double_bass_cover.jpg" />

        <FramedIntroSection
          title="Double Basses with Authority, Selected to Anchor the Ensemble"
          subtitle="Depth that stays defined, a clear pitch centre, and a response that remains stable under real orchestral demands. Each double bass is assessed for projection, balance, and long-term structural reliability."
          cards={cards}
          image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/double_bass_intro.jpg"
        />

        <CollectionSection
          label="Our Collection"
          title="Double Basses with Depth, Power & Structural Integrity"
          basePath="/double-bass"
          items={doubleBasses}
        />
      </main>
      <Footer />
    </>
  );
}
