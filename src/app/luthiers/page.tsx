import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { luthiers } from "@/lib/luthiers";

export const metadata: Metadata = {
  title: "Master Luthiers | Victoria Strings London",
  description:
    "Meet the master luthiers behind Victoria Strings London — makers of fine violins, violas, cellos and double basses, each with decades of experience at the bench.",
};

const pillars = [
  {
    title: "Handcrafted Lineage",
    body: [
      "Rooted in traditional craftsmanship, our luthiers bring decades of experience and time-honoured techniques to every instrument.",
      "Each violin carries a lineage of skill, passed from bench to bench with deep respect for classical tradition.",
    ],
  },
  {
    title: "Refined Details",
    body: [
      "From the white violin to varnish and final setup, each stage is handled with precision, consistency and a refined eye for nuance.",
      "Graduations, arching and tone refinement are balanced to support long-term stability and expressive response.",
    ],
  },
  {
    title: "Made for Performance",
    body: [
      "Built for tone, projection and responsiveness, our instruments support serious study and professional performance.",
      "They evolve with the musician, opening up over time to offer a richer and more expressive sound palette.",
    ],
  },
];

const services = [
  "Professional setup",
  "Restoration",
  "Varnish touch-up",
  "Sound adjustment",
  "Custom instruments",
];

export default function LuthiersPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-ink-900 pt-[8rem] pb-16 text-white md:min-h-[70vh]">
          <Image
            src="/images/2025/12/l3.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-ink-900" />
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
            <p className="mb-5 text-[0.85rem] font-semibold tracking-[0.3em] text-gold-400 uppercase">
              The People Behind the Instruments
            </p>
            <h1 className="font-display text-[2.9rem] leading-[1.08] md:text-[4.6rem]">
              Master Luthiers
            </h1>
            <p className="mt-6 max-w-[46rem] font-display text-[1.2rem] leading-[1.7] text-white/80 md:text-[1.45rem]">
              Victoria Strings represents a collective of master luthiers &mdash;
              each chosen for individuality, craftsmanship, tonal depth and
              long-term potential.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-14">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="mb-6 h-px w-[70px] bg-gradient-to-r from-[#b38a5a] to-transparent" />
                <h2 className="font-display text-[1.9rem] leading-[1.2] text-[#222] md:text-[2.15rem]">
                  {p.title}
                </h2>
                <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.85] text-[#5b5550]">
                  {p.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-cream-200 py-16 md:py-20">
          <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
            <p className="text-[0.82rem] font-semibold tracking-[0.28em] text-[#a97f34] uppercase">
              In-House Workshop
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-4 font-display text-[1.15rem] text-[#2b2b2b] md:gap-x-8 md:text-[1.45rem]">
              {services.map((s, i) => (
                <span key={s} className="flex items-center gap-4 md:gap-8">
                  {i > 0 && <span className="text-[#b38a5a]">&#183;</span>}
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1560px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-16 text-center font-display">
            <p className="mb-4 text-[0.95rem] font-semibold tracking-[0.22em] text-[#b38a5a] uppercase">
              Our Makers
            </p>
            <h2 className="text-[2.4rem] leading-[1.2] text-[#222] md:text-[3.2rem]">
              Victoria Strings Master Luthiers
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {luthiers.map((l) => (
              <article key={l.id} className="group">
                <div className="relative aspect-square w-full overflow-hidden rounded-[14px] bg-ink-100">
                  <Image
                    src={l.image}
                    alt={l.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                  />
                </div>

                <p className="mt-7 text-[0.72rem] font-semibold tracking-[0.24em] text-[#a97f34] uppercase">
                  {l.specialty}
                </p>
                <h3 className="mt-3 font-display text-[1.85rem] leading-[1.15] text-[#1f1b18]">
                  {l.name}
                </h3>
                {l.role && (
                  <p className="mt-1.5 font-display text-[1.1rem] text-[#7b1d1b] italic">
                    {l.role}
                  </p>
                )}
                <div className="mt-5 space-y-3.5 text-[1rem] leading-[1.8] text-[#5b5550]">
                  {l.bio.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
