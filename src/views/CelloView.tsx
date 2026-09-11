import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CinematicOverlaySection from "@/components/CinematicOverlaySection";
import CollectionSection from "@/components/CollectionSection";
import { cellos } from "@/lib/cellos";
import { type Locale } from "@/i18n/config";
import { getDictionary, localiseAll } from "@/i18n";

const POSITIONS = ["left", "center", "right"] as const;

export default function CelloView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const items = localiseAll(cellos, locale).map((c) => ({
    slug: c.slug,
    image: c.images[0],
    alt: c.title,
    name: c.title,
    character: c.character,
  }));

  return (
    <>
      <Header locale={locale} />
      <main>
        <CinematicOverlaySection
          image="https://cdn.jsdelivr.net/gh/VStrings-art/web_image/cello_cover3.jpg"
          frames={t.celloPage.frames.map((f, i) => ({ ...f, position: POSITIONS[i] }))}
        />

        <CollectionSection
          label={t.collection.label}
          title={t.collection.celloTitle}
          basePath="/cello"
          items={items}
          locale={locale}
        />
      </main>
      <Footer locale={locale} />
    </>
  );
}
