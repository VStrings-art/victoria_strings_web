import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MasterFeaturesSection from "@/components/MasterFeaturesSection";
import CinematicHero from "@/components/CinematicHero";
import CollectionSection from "@/components/CollectionSection";
import { violins } from "@/lib/violins";

export const metadata: Metadata = {
  title: "Violins | Victoria Strings London",
  description:
    "Handcrafted violins curated for serious players — fine violins hand-selected for excellence from Victoria Strings London's network of master luthiers.",
};

const features = [
  {
    image: "/images/2026/03/violin_list_1.png",
    title: "Master Luthier Representation",
    body: "Violins crafted by outstanding makers from our curated network of master luthiers, chosen for individuality, craftsmanship and long-term musical value.",
  },
  {
    image: "/images/2026/03/violin_list_2.png",
    title: "Concert-Ready Tone",
    body: "Each instrument is evaluated for clarity, projection and tonal colour across the register, offering the flexibility required for advanced study and performance.",
  },
  {
    image: "/images/2026/03/violin_list_3.png",
    title: "Professional Setup & Aftercare",
    body: "Professional setup, sound adjustment and continuing care ensure that your violin remains comfortable to play and performs at its best over time.",
  },
];

const collectionItems = violins.map((v) => ({
  slug: v.slug,
  image: v.images[0],
  alt: v.title,
}));

export default function ViolinPage() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/cover.png" />

        <MasterFeaturesSection
          kicker="Fine String Instruments"
          intro="We collaborate with master luthiers and refine every instrument so that demanding musicians can find a voice that truly speaks on stage."
          features={features}
        />

        <CinematicHero
          image="/images/2026/03/violin_player.png"
          lines={["Handcrafted Violins", "Curated for Serious Players"]}
        />

        <CollectionSection
          label="Our Collection"
          title="Fine Violins, Hand-Selected for Excellence"
          basePath="/violin"
          items={collectionItems}
        />
      </main>
      <Footer />
    </>
  );
}
