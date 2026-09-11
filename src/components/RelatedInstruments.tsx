import Image from "next/image";
import Link from "next/link";
import { type Locale, localePath } from "@/i18n/config";

type Item = {
  slug: string;
  title: string;
  images: [string, string, string];
};

export default function RelatedInstruments({
  title,
  basePath,
  items,
  locale = "en",
}: {
  title: string;
  basePath: string;
  items: Item[];
  locale?: Locale;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 font-display">
      <h2 className="mb-14 text-center text-[1.7rem] tracking-[0.1em] text-[#222] uppercase md:text-[2.1rem]">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.slug} className="group text-center">
            <Link
              href={localePath(locale, `${basePath}/${item.slug}`)}
              aria-label={`View ${item.title}`}
              className="mx-auto block aspect-[2/3] w-[92%] max-h-[400px] sm:w-[85%]"
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
            <Link href={localePath(locale, `${basePath}/${item.slug}`)} className="group/label block px-1 pb-1">
              <span className="mx-auto mt-4 block h-px w-[30px] bg-[#c9ab7c]" />
              <span className="mt-3 block text-[0.95rem] leading-[1.25] font-medium tracking-[0.13em] text-[#1f1b18] uppercase transition-colors duration-200 ease-out group-hover/label:text-[#a97f34] sm:mt-3.5 sm:text-[1.15rem]">
                {item.title}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
