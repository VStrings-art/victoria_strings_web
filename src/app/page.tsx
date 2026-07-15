import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CategoryGrid from "@/components/CategoryGrid";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CraftSection from "@/components/CraftSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <CategoryGrid />
        <WhoWeAreSection />
        <WhyChooseSection />
        <CraftSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
