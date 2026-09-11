import Image from "next/image";
import Link from "next/link";
import { type Locale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n";

const CATEGORY_IMAGES = [
  {
    href: "/violin",
    image: "/images/2025/05/pexels-photo-7095506-7095506-scaled.webp",
  },
  {
    href: "/viola",
    image: "/images/2025/09/Screenshot-2025-09-16-at-17.21.25.webp",
  },
  {
    href: "/cello",
    image: "/images/2025/09/Screenshot-2025-09-17-at-17.57.17.webp",
  },
  {
    href: "/double-bass",
    image: "/images/2025/09/Screenshot-2025-09-17-at-18.15.30.webp",
  },
];

export default function CategoryGrid({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const labels = [t.categories.violins, t.categories.violas, t.categories.cellos, t.categories.doubleBasses];
  const categories = CATEGORY_IMAGES.map((c, i) => ({ ...c, label: labels[i] }));
  return (
    <section id="collection" className="mx-auto max-w-[1680px] px-5 pt-16 pb-2.5 font-display text-[#222] md:px-8">
      <div className="mb-[70px] text-center">
        <h2 className="text-[38px] font-medium tracking-[0.10em] text-[#111] capitalize md:text-[62px]">
          {t.categories.heading}
        </h2>
        <div className="mx-auto mt-[22px] mb-[26px] h-[3px] w-[120px] rounded-sm bg-[#c8a34d]" />
        <p className="mx-auto max-w-[900px] text-[17px] leading-[1.9] text-[#444] md:text-[20px]">
          {t.categories.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {categories.map((c) => (
          <Link
            key={c.href}
            href={localePath(locale, c.href)}
            className="group flex flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_14px_26px_rgba(0,0,0,0.10)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_rgba(0,0,0,0.16)]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={c.image}
                alt={c.label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="px-[18px] pt-6 pb-7 text-center">
              <h3 className="mb-4 text-[24px] font-semibold tracking-[0.08em] text-[#111] md:text-[29px]">
                {c.label}
              </h3>
              <span className="inline-flex items-center gap-1.5 border-b border-transparent pt-1 text-[14px] font-semibold tracking-[0.18em] text-[#333] uppercase transition-colors group-hover:border-[#7b1d1b] group-hover:text-[#7b1d1b]">
                {t.categories.learnMore} <span aria-hidden className="text-base">&#10141;</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
