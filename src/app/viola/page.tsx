import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import SplitSection from "@/components/SplitSection";
import CollectionSection from "@/components/CollectionSection";
import { violas } from "@/lib/violas";

export const metadata: Metadata = {
  title: "Violas | Victoria Strings London",
  description:
    "Refined violas, balanced in depth and character — handcrafted by Victoria Strings London's network of master luthiers.",
};

const collectionItems = violas.map((v) => ({
  slug: v.slug,
  image: v.images[0],
  alt: v.title,
}));

export default function ViolaPage() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/viola_cover.jpg" />

        <IntroSection
          kicker="Victoria Strings London · Professional Collection"
          title="Instruments That Speak With Character"
          body="Each piece is selected for clarity, balance, and expressive range — shaped through careful craftsmanship and refined adjustment, so players can feel confident from studio work to the concert platform."
        />

        <div className="space-y-[78px] pb-[110px]">
          <SplitSection
            kicker="Tone & Responsiveness"
            title="Clarity when you need it. Warmth when you want it."
            body="Built for control and projection, these violas respond quickly under the bow and keep their focus across dynamic changes — supporting articulate phrasing, colour, and a confident core sound."
            image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/viola_show1.png"
            alt="Viola detail"
          />
          <SplitSection
            kicker="Craft & Finishing"
            title="Made with discipline — refined with taste."
            body="From arching and edgework to varnish texture and final tonal adjustment, our process follows consistent workshop standards while collaborating with international master luthiers — delivering instruments that feel stable, elegant, and musically mature."
            image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/viola_show2.png"
            alt="Craftsmanship detail"
            reverse
          />
        </div>

        <CollectionSection
          label="Our Collection"
          title="Refined Violas, Balanced in Depth and Character"
          basePath="/viola"
          items={collectionItems}
        />
      </main>
      <Footer />
    </>
  );
}
