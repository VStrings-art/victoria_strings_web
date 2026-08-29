import Link from "next/link";

type Action = { label: string; href: string; primary?: boolean };

export default function Hero({
  image = "https://cdn.jsdelivr.net/gh/VStrings-art/web_image/assemble_new.png",
  focal = "center",
  eyebrow,
  title,
  subtitle,
  actions = [],
}: {
  image?: string;
  /** Horizontal framing below lg, where a wide photograph is heavily cropped. */
  focal?: string;
  eyebrow?: string;
  /** Rendered as the page h1. Lines are stacked. */
  title?: string[];
  subtitle?: string;
  actions?: Action[];
}) {
  const hasCopy = Boolean(eyebrow || title || subtitle || actions.length);

  return (
    <section
      className={`relative -mt-10 flex w-full overflow-hidden text-white ${
        hasCopy
          ? "min-h-[88svh] items-end md:min-h-[86vh] md:items-center"
          : "min-h-[80vh] items-center"
      }`}
    >
      {/* Wide, near-2:1 photographs centre-crop on a phone to whatever sits in
          the middle of the frame, which is rarely the subject. */}
      {/* The focal point is carried in a custom property rather than an inline
          background-position, so the lg: class can still take over on wide
          screens where the whole composition fits. */}
      <div
        className="animate-hero-zoom absolute inset-0 bg-cover bg-[position:var(--hero-focal)_center] lg:bg-center"
        style={
          {
            backgroundImage: `url('${image}')`,
            "--hero-focal": focal,
          } as React.CSSProperties
        }
      />
      <div
        className={
          hasCopy
            ? "absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 md:bg-gradient-to-r md:from-black/75 md:via-black/35 md:to-black/10"
            : "absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.15),rgba(0,0,0,0.65))]"
        }
      />

      {hasCopy ? (
        // pt clears the fixed header — 98px tall on mobile, 140px on desktop —
        // plus the 40px the section is pulled up by. Without it the centred
        // copy slides under the logo as soon as the window gets short.
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-[150px] pb-14 md:px-12 md:pt-[196px] md:pb-16">
          <div className="max-w-[34rem]">
            {eyebrow && (
              <p className="mb-5 text-[0.7rem] font-semibold tracking-[0.26em] text-gold-300 uppercase sm:text-[0.78rem] sm:tracking-[0.3em]">
                {eyebrow}
              </p>
            )}

            {title && (
              <h1 className="font-display text-[2.6rem] leading-[1.08] font-normal sm:text-[3.4rem] md:text-[4.4rem]">
                {title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            )}

            <div className="mt-7 h-px w-[86px] bg-gradient-to-r from-gold-300 to-transparent" />

            {/* A phone screen only has room for the mark and the headline. */}
            {subtitle && (
              <p className="mt-7 hidden max-w-[30rem] font-display text-[1.3rem] leading-[1.65] text-white/85 md:block">
                {subtitle}
              </p>
            )}

            {actions.length > 0 && (
              <div className="hidden flex-wrap gap-4 md:mt-9 md:flex">
                {actions.map((a) =>
                  a.primary ? (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.14em] text-[#111] uppercase transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-gold-200 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                    >
                      {a.label}
                      <span aria-hidden="true">&#8594;</span>
                    </Link>
                  ) : (
                    <a
                      key={a.href}
                      href={a.href}
                      className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3.5 text-[13px] font-semibold tracking-[0.14em] text-white uppercase transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
                    >
                      {a.label}
                    </a>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="relative py-12 px-6 pb-14" />
      )}
    </section>
  );
}
