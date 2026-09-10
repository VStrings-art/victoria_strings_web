import Image from "next/image";
import Link from "next/link";

type Item = {
  slug: string;
  image: string;
  alt: string;
  /** Each instrument is called by its name rather than a generic label. */
  name: string;
  /** Optional three-word summary of the instrument's voice. */
  character?: string;
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
            {/* Museum label: a gold hairline, the name, then the voice. */}
            <Link
              href={`${basePath}/${item.slug}`}
              className="group/label mt-1 block px-2 pb-1"
            >
              <span className="mx-auto mt-6 block h-px w-[38px] bg-[#c9ab7c]" />
              <span className="mt-4 block text-[1.3rem] leading-[1.25] font-medium tracking-[0.14em] text-[#1f1b18] uppercase transition-colors duration-200 ease-out group-hover/label:text-[#a97f34] sm:text-[1.6rem]">
                {item.name}
              </span>
              {item.character && (
                <span className="mt-2.5 block font-sans text-[0.62rem] leading-[1.5] font-medium tracking-[0.19em] text-[#a08b73] uppercase sm:text-[0.66rem]">
                  {item.character}
                </span>
              )}
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
