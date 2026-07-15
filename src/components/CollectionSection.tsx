import Image from "next/image";
import Link from "next/link";

type Item = {
  slug: string;
  image: string;
  alt: string;
};

export default function CollectionSection({
  label,
  title,
  basePath,
  items,
}: {
  label: string;
  title: string;
  basePath: string;
  items: Item[];
}) {
  return (
    <>
      <section className="px-4 pt-24 pb-10 text-center font-display">
        <p className="mb-4 text-[0.95rem] font-semibold tracking-[0.22em] text-[#b38a5a] uppercase">
          {label}
        </p>
        <h2 className="text-[2.4rem] leading-[1.25] text-[#222] md:text-[3.2rem]">
          {title}
        </h2>
      </section>

      <section className="mx-auto grid max-w-[1560px] grid-cols-1 gap-x-32 gap-y-20 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.slug} className="group text-center font-display">
            <Link
              href={`${basePath}/${item.slug}`}
              aria-label="View this instrument"
              className="mx-auto block aspect-[2/3] w-[88%] max-h-[650px]"
            >
              <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover:-translate-y-2.5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                />
              </div>
            </Link>
            <Link
              href={`${basePath}/${item.slug}`}
              className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full border border-black/55 bg-white px-[30px] py-3.5 text-[15px] tracking-[0.12em] text-[#111] uppercase transition-[transform,background-color,border-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:border-black/92 hover:bg-[#111] hover:text-white"
            >
              View Instrument{" "}
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
