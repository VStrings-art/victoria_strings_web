export default function IntroSection({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <section className="mx-auto max-w-[920px] px-6 pt-[110px] pb-[76px] text-center font-display text-[#141414]">
      <p className="mb-3.5 text-[15px] tracking-[0.22em] text-[#141414]/75 uppercase">
        {kicker}
      </p>
      <h1 className="mb-3 text-[36px] leading-[1.12] font-medium md:text-[52px]">
        {title}
      </h1>
      <p className="mt-0 text-[16px] leading-[1.8] text-[#333] md:text-[18px]">{body}</p>

      <div className="relative mx-auto mt-[52px] h-px w-[240px] bg-[#c9a75e] md:w-[420px]">
        <span className="absolute top-1/2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#c9a75e] bg-white" />
      </div>
    </section>
  );
}
