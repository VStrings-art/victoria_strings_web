import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CategoryGrid from "@/components/CategoryGrid";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CraftSection from "@/components/CraftSection";
import ContactSection from "@/components/ContactSection";
import { type Locale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero
          focal="68%"
          eyebrow={t.hero.eyebrow}
          title={t.hero.titleLines}
          subtitle={t.hero.subtitle}
          actions={[
            { label: t.hero.explore, href: localePath(locale, "/violin"), primary: true },
            { label: t.hero.enquire, href: "#contact" },
          ]}
        />
        <AboutSection locale={locale} />
        <CategoryGrid locale={locale} />
        <WhoWeAreSection locale={locale} />
        <WhyChooseSection locale={locale} />
        <CraftSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
