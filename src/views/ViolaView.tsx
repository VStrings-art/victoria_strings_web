import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import SplitSection from "@/components/SplitSection";
import CollectionSection from "@/components/CollectionSection";
import { violas } from "@/lib/violas";
import { type Locale } from "@/i18n/config";
import { getDictionary, localiseAll } from "@/i18n";

export default function ViolaView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const items = localiseAll(violas, locale).map((v) => ({
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
        <Hero image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/viola_cover.jpg" />

        <IntroSection
          kicker={t.violaPage.introKicker}
          title={t.violaPage.introTitle}
          body={t.violaPage.introBody}
        />

        <div className="space-y-[78px] pb-[110px]">
          <SplitSection
            kicker={t.violaPage.split1Kicker}
            title={t.violaPage.split1Title}
            body={t.violaPage.split1Body}
            image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/viola_show1.png"
            alt={t.violaPage.split1Alt}
          />
          <SplitSection
            kicker={t.violaPage.split2Kicker}
            title={t.violaPage.split2Title}
            body={t.violaPage.split2Body}
            image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/viola_show2.png"
            alt={t.violaPage.split2Alt}
            reverse
          />
        </div>

        <CollectionSection
          label={t.collection.label}
          title={t.collection.violaTitle}
          basePath="/viola"
          items={items}
          locale={locale}
        />
      </main>
      <Footer locale={locale} />
    </>
  );
}
