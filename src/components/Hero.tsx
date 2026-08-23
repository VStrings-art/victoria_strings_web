import Link from "next/link";

export default function Hero({
  image = "https://cdn.jsdelivr.net/gh/VStrings-art/web_image/assemble_new.png",
}: {
  image?: string;
}) {
  return (
    <section className="relative -mt-10 flex min-h-[88svh] w-full items-end overflow-hidden text-white md:min-h-[86vh] md:items-center">
      {/* The photograph is a wide, near-2:1 composition. Centred, a narrow
          screen crops to the cluster of pegboxes in the middle and reads as
          nothing in particular; framing on the cello keeps a recognisable
          instrument in shot at phone widths. */}
      <div
        className="animate-hero-zoom absolute inset-0 bg-cover bg-[position:68%_center] lg:bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 md:bg-gradient-to-r md:from-black/75 md:via-black/35 md:to-black/10" />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-28 pb-14 md:px-12 md:pt-0 md:pb-0">
        <div className="max-w-[34rem]">
          <p className="mb-5 text-[0.7rem] font-semibold tracking-[0.26em] text-gold-300 uppercase sm:text-[0.78rem] sm:tracking-[0.3em]">
            Fine String Instruments &middot; London
          </p>

          <h1 className="font-display text-[2.6rem] leading-[1.08] font-normal sm:text-[3.4rem] md:text-[4.4rem]">
            Handcrafted by
            <br />
            Master Luthiers
          </h1>

          <div className="mt-7 h-px w-[86px] bg-gradient-to-r from-gold-300 to-transparent" />

          {/* A phone screen only has room for the mark and the headline —
              the supporting line and the buttons crowd it, so they start
              at md and the collection stays one tap away in the menu. */}
          <p className="mt-7 hidden max-w-[30rem] font-display text-[1.3rem] leading-[1.65] text-white/85 md:block">
            Violins, violas, cellos and double basses &mdash; crafted for
            professional musicians and serious students.
          </p>

          <div className="hidden gap-4 md:mt-9 md:flex">
            <Link
              href="/violin"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-[#111] uppercase transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-gold-200 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] sm:text-[13px]"
            >
              Explore the Collection
              <span aria-hidden="true">&#8594;</span>
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10 sm:text-[13px]"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
