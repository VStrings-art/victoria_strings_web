import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FramedIntroSection from "@/components/FramedIntroSection";
import CollectionSection from "@/components/CollectionSection";
import { doubleBasses } from "@/lib/double-basses";
import { type Locale } from "@/i18n/config";
import { getDictionary, localiseAll } from "@/i18n";

export default function DoubleBassView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const items = localiseAll(doubleBasses, locale).map((d) => ({
    slug: d.slug,
    image: d.images[0],
    alt: d.title,
    name: d.title,
    character: d.character,
  }));

  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/double_bass_cover.jpg" />

        <FramedIntroSection
          title={t.bassPage.title}
          subtitle={t.bassPage.subtitle}
          cards={t.bassPage.cards}
          image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/double_bass_intro.jpg"
        />

        <CollectionSection
          label={t.collection.label}
          title={t.collection.bassTitle}
          basePath="/double-bass"
          items={items}
          locale={locale}
        />
      </main>
      <Footer locale={locale} />
    </>
  );
}
