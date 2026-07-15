type Card = {
  label: string;
  body: string;
};

export default function FramedIntroSection({
  title,
  subtitle,
  cards,
  image,
}: {
  title: string;
  subtitle: string;
  cards: Card[];
  image: string;
}) {
  return (
    <section
      aria-label="Professional introduction"
      className="relative overflow-hidden bg-white py-[7rem] font-display text-[#1e1e1e]"
      style={{
        backgroundImage:
          "radial-gradient(1200px 620px at 18% 10%, rgba(179,138,90,0.10), rgba(255,255,255,0) 62%), radial-gradient(900px 520px at 88% 72%, rgba(0,0,0,0.05), rgba(255,255,255,0) 56%)",
      }}
    >
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.06fr_0.94fr] md:gap-20 md:px-10">
        <div>
          <h2 className="mb-[1.1rem] max-w-[560px] text-[2.1rem] leading-[1.15] md:text-[2.7rem]">
            {title}
          </h2>
          <p className="mb-9 max-w-[590px] text-[1rem] leading-[1.95] text-black/70 md:text-[1.06rem]">
            {subtitle}
          </p>

          <div className="grid max-w-[610px] grid-cols-1 gap-4">
            {cards.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-black/10 bg-white/82 py-[18px] pr-[18px] pl-[22px] shadow-[inset_2px_0_0_rgba(179,138,90,0.62),0_14px_34px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-[#b38a5a]/28 hover:shadow-[inset_2px_0_0_rgba(179,138,90,0.72),0_22px_54px_rgba(0,0,0,0.09)]"
              >
                <h4 className="mb-1.5 text-[1.02rem] font-semibold tracking-[0.08em] text-black/78 uppercase">
                  {c.label}
                </h4>
                <p className="text-[1rem] leading-[1.78] text-black/68">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="group relative aspect-[4/5] w-full max-w-[560px] md:aspect-[16/10] lg:aspect-[4/5]">
            <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-[#f2f2f2] shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_38px_96px_rgba(0,0,0,0.22)]">
              <div
                className="absolute inset-0 scale-[1.02] bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
              <div className="pointer-events-none absolute inset-[14px] rounded-2xl border border-[#b38a5a]/55" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
