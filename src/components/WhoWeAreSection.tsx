import Image from "next/image";
import Link from "next/link";

export default function WhoWeAreSection() {
  return (
    <section className="bg-ink-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1680px] px-6 md:px-10">
        <h2 className="font-display text-[2.4rem] font-bold md:text-[3.2rem]">
          Who We Are
        </h2>
        <p className="mt-4 text-[1.05rem] leading-[1.7] text-ink-300 italic md:text-[1.2rem] md:whitespace-nowrap">
          A London-based house of fine string instruments, with two distinct brands.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Link
            href="/"
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-14 text-center transition-colors duration-200 hover:border-gold-500/50 hover:bg-white/[0.07]"
          >
            <Image
              src="/images/vs-logo-cropped.png"
              alt="Victoria Strings London"
              width={400}
              height={213}
              className="h-auto w-full max-w-[300px] object-contain"
            />
            <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-gold-400 uppercase">
              The Professional Collection
            </p>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-[1.7] text-ink-200">
              Fine instruments created in collaboration with individual
              master luthiers around the world &mdash; made for professional
              musicians.
            </p>
          </Link>

          <a
            href="https://primalondon.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-14 text-center transition-colors duration-200 hover:border-gold-500/50 hover:bg-white/[0.07]"
          >
            <Image
              src="/images/prima-logo.png"
              alt="Prima London"
              width={400}
              height={225}
              className="h-auto w-full max-w-[300px] object-contain"
            />
            <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-gold-400 uppercase">
              The Advanced Student Collection
            </p>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-[1.7] text-ink-200">
              Our dedicated brand for advanced student-level instruments
              &mdash; serious quality for progressing players, students and
              teachers.
            </p>
          </a>
        </div>

        <p className="mt-14 text-center text-[1.05rem] text-ink-300">
          Supporting musicians, teachers, students, schools, institutions,
          orchestras and retailers &mdash; through trials, sales, delivery
          and after-sales care.
        </p>
      </div>
    </section>
  );
}
