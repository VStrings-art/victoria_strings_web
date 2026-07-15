type Frame = {
  label: string;
  quote: string;
  position: "left" | "center" | "right";
};

const justify: Record<Frame["position"], string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

const margin: Record<Frame["position"], string> = {
  left: "md:ml-[clamp(0px,6vw,90px)]",
  center: "",
  right: "md:mr-[clamp(0px,6vw,90px)]",
};

export default function CinematicOverlaySection({
  image,
  frames,
}: {
  image: string;
  frames: Frame[];
}) {
  return (
    <section
      aria-label="Cinematic introduction"
      className="relative -mt-14 bg-cover bg-center pt-14 font-display md:bg-fixed"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[260px] bg-gradient-to-b from-black/48 via-black/28 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(0,0,0,0.08), rgba(0,0,0,0.62)), linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.62))",
        }}
      />

      <div className="relative z-[1]">
        {frames.map((f) => (
          <div
            key={f.label}
            className={`grid min-h-[72svh] items-center px-5 py-[4.2rem] md:min-h-screen md:px-9 md:py-[10rem] ${justify[f.position]}`}
          >
            <div
              className={`max-w-[760px] rounded-[18px] border border-white/14 bg-black/28 px-6 py-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-md ${margin[f.position]}`}
            >
              <p className="mb-3 text-[1.05rem] tracking-[0.26em] text-white/72 uppercase md:text-[1.3rem]">
                {f.label}
              </p>
              <p className="m-0 text-[1.5rem] leading-[1.5] tracking-[0.01em] text-white/92 md:text-[2.55rem]">
                {f.quote}
              </p>
              <div className="mt-[1.05rem] h-px w-[72px] bg-[#b38a5a]/85" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
