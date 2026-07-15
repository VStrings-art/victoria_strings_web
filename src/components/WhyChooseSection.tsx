const features = [
  {
    title: "Master Luthier Representation",
    body: "We represent a refined circle of exceptional master luthiers. Each maker’s work is chosen for individuality, craftsmanship, tonal depth, and long-term potential.",
  },
  {
    title: "High-End Handcrafted Instruments",
    body: "Our focus is exclusively on individually hand-crafted instruments — not mass-produced student models — allowing musicians to explore character, resonance, and true craftsmanship.",
  },
  {
    title: "Trusted by Musicians",
    body: "Players and teachers choose us for our honest guidance, reliable sourcing, and commitment to instruments that perform beautifully under real artistic demands.",
  },
  {
    title: "Curated Bows & Accessories",
    body: "Alongside instruments, we provide carefully selected bows, cases, and fittings — ensuring musicians have everything they need in one trusted place.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="mx-auto mt-20 grid max-w-[1350px] grid-cols-1 gap-12 px-7 py-20 font-sans text-[#0f172a] md:grid-cols-[0.95fr_1.35fr] md:items-center md:gap-6">
      <div className="pt-6">
        <p className="mb-3.5 text-[0.82rem] font-semibold tracking-[0.22em] text-[#f97316] uppercase">
          Fine String Instruments
        </p>
        <h2 className="text-[2.4rem] leading-[1.1] font-extrabold md:text-[3.1rem]">
          Why Victoria Strings London?
        </h2>
        <p className="mt-6 max-w-[34rem] text-[1.1rem] leading-[1.8] text-[#4b5563]">
          Victoria Strings represents an exclusive selection of fine
          violins, violas, cellos, and double basses crafted by outstanding
          makers &mdash; curated for musicians seeking artistry,
          authenticity, and lasting musical value.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-[20px] border border-slate-400/25 bg-white p-9 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-[#f97316]/45 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]"
          >
            <h3 className="mb-4 text-[1.35rem] font-bold text-[#0f172a]">
              {f.title}
            </h3>
            <p className="text-[1.05rem] leading-[1.75] text-[#6b7280]">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
