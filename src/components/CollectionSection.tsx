import Image from "next/image";
import Link from "next/link";

type Item = {
  slug: string;
  image: string;
  alt: string;
  /** Shown on the card's button, so each instrument is called by its name. */
  name: string;
};

export default function CollectionSection({
  label,
  title,
  note,
  basePath,
  items,
}: {
  label: string;
  title: string;
  note?: string;
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
        {note && (
          <p className="mx-auto mt-6 max-w-[42rem] font-sans text-[0.98rem] leading-[1.75] text-[#6b6560]">
            {note}
          </p>
        )}
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
              className="mt-6 inline-block max-w-full px-2 text-[1.3rem] leading-[1.3] font-medium tracking-[0.14em] text-[#1f1b18] uppercase transition-colors duration-200 ease-out hover:text-[#a97f34] sm:text-[1.6rem]"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
