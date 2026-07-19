import Image from "next/image";
import Link from "next/link";

type Item = {
  slug: string;
  title: string;
  images: [string, string, string];
};

export default function RelatedInstruments({
  title,
  basePath,
  items,
}: {
  title: string;
  basePath: string;
  items: Item[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 font-display">
      <h2 className="mb-14 text-center text-[1.7rem] tracking-[0.1em] text-[#222] uppercase md:text-[2.1rem]">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.slug} className="group text-center">
            <Link
              href={`${basePath}/${item.slug}`}
              aria-label={`View ${item.title}`}
              className="mx-auto block aspect-[2/3] w-[85%] max-h-[400px]"
            >
              <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover:-translate-y-2">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 22vw, 45vw"
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
      </div>
    </section>
  );
}
