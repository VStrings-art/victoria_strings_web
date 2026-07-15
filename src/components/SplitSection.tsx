import Image from "next/image";

export default function SplitSection({
  kicker,
  title,
  body,
  image,
  alt,
  reverse = false,
}: {
  kicker: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-1 px-5 font-display text-[#141414] md:grid-cols-2 md:px-7">
      <div
        className={`flex flex-col justify-center bg-white px-6 py-9 md:px-16 md:py-[72px] ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <p className="mb-3.5 text-[13px] tracking-[0.18em] text-[#141414]/75 uppercase">
          {kicker}
        </p>
        <h2 className="mb-4 text-[28px] leading-[1.12] font-medium md:text-[40px]">
          {title}
        </h2>
        <p className="max-w-[540px] text-[16px] leading-[1.82] text-[#2b2b2b] md:text-[18px]">
          {body}
        </p>
      </div>

      <div
        className={`group relative order-1 min-h-[320px] overflow-hidden bg-[#0e0e0e] md:min-h-[540px] ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(0,0,0,0.06),rgba(0,0,0,0.55))]" />
      </div>
    </section>
  );
}
