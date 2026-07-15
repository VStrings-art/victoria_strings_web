const crafts = [
  { title: "Plate Carving & Graduation", youtubeId: "tslwJ7tYDY0" },
  { title: "Scroll Carving", youtubeId: "ChpRmr6TEYM" },
  { title: "Purfling Inlay", youtubeId: "jtm4riKp54c" },
];

export default function CraftSection() {
  return (
    <section className="mx-auto mt-20 mb-8 max-w-[1680px] px-6 pb-[4.5rem] font-display text-[#222] md:px-8">
      <div className="relative mb-16 text-center">
        <h2 className="text-[2.3rem] tracking-[0.05em] md:text-[3.3rem]">
          The Soul of Strings, Crafted by Hand
        </h2>
        <p className="mx-auto mt-2 max-w-[920px] text-[1.05rem] leading-[1.75] text-[#555] md:text-[1.3rem]">
          Every instrument from Victoria Strings tells its own story &mdash;
          shaped by skilled hands and guided by passion, crafted to achieve
          the perfect balance between elegance, resonance, and soul.
        </p>
        <div className="mx-auto mt-9 h-px w-[140px] bg-gradient-to-r from-transparent via-[#d9b66a] to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {crafts.map((c) => (
          <article
            key={c.youtubeId}
            className="group flex flex-col gap-5 transition-transform duration-300 ease-out hover:-translate-y-1.5"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
              <iframe
                src={`https://www.youtube.com/embed/${c.youtubeId}`}
                title={c.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <h3 className="text-center text-[1.4rem] md:text-[1.6rem]">{c.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
