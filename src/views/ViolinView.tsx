import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MasterFeaturesSection from "@/components/MasterFeaturesSection";
import CinematicHero from "@/components/CinematicHero";
import CollectionSection from "@/components/CollectionSection";
import { violins } from "@/lib/violins";
import { type Locale } from "@/i18n/config";
import { getDictionary, localiseAll } from "@/i18n";

const FEATURE_IMAGES = [
  "/images/2026/03/violin_list_1.webp",
  "/images/2026/03/violin_list_2.webp",
  "/images/2026/03/violin_list_3.webp",
];

export default function ViolinView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const items = localiseAll(violins, locale).map((v) => ({
    slug: v.slug,
    image: v.images[0],
    alt: v.title,
    name: v.title,
    character: v.character,
  }));

  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/cover.png" />

        <MasterFeaturesSection
          kicker={t.violinPage.kicker}
          intro={t.violinPage.intro}
          features={t.violinPage.features.map((f, i) => ({ ...f, image: FEATURE_IMAGES[i] }))}
        />

        <CinematicHero image="/images/2026/03/violin_player.webp" lines={t.violinPage.cinematic} />

        <CollectionSection
          label={t.collection.label}
          title={t.collection.violinTitle}
          basePath="/violin"
          items={items}
          locale={locale}
        />
      </main>
      <Footer locale={locale} />
    </>
  );
}
