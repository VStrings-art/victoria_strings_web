export default function AboutSection() {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-8 py-24 text-[#111827] md:grid-cols-[1fr_1.15fr] md:gap-20 md:py-28">
      <div>
        <p className="mb-7 text-[0.82rem] font-medium tracking-[0.30em] text-[#bfa18a] uppercase">
          About Us
        </p>
        <h2 className="font-display text-[3.2rem] leading-[1.12] font-normal text-[#2b2b2b] md:text-[4rem]">
          Handcrafted Elegance,
          <br />
          Timeless Sound
        </h2>
        <div className="mt-8 h-0.5 w-[110px] bg-gradient-to-r from-[#c9a68a] via-[#e8d6c8] to-transparent" />
      </div>

      <div className="space-y-7 text-[1.15rem] leading-[1.95] text-[#4b5563]">
        <p>
          We are a London-based company working closely with global
          musicians, soloists and ensembles today &mdash; connecting
          traditional craftsmanship with the real performance demands of
          the modern stage. At Victoria Strings London, each instrument is
          handcrafted by master luthiers with decades of experience and
          dedication. We carefully select makers whose work reflects both
          discipline and artistry.
        </p>
        <p>
          From meticulously selected tonewoods to the final varnish, every
          step is shaped by hand with precision and intention. We do not
          simply make instruments &mdash; we cultivate voices defined by
          balance, projection and individuality. Whether in chamber music,
          orchestral settings or solo performance, our instruments are
          chosen to speak with clarity and presence.
        </p>
      </div>
    </section>
  );
}
