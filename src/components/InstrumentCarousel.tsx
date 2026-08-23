"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDE_MS = 6000;

export default function InstrumentCarousel({
  images: rawImages,
  caption,
  title,
}: {
  images: string[];
  caption: string;
  title?: string;
}) {
  // Some instruments only have one or two photographs; showing the same shot
  // twice would read as a broken slideshow, so collapse repeats.
  const images = Array.from(new Set(rawImages));
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, SLIDE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, images.length, index]);

  return (
    <section className="relative w-full bg-white pt-[calc(4.8rem+64px)] pb-11 md:pt-[calc(4.8rem+150px)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="relative grid h-[min(900px,82vh)] w-full place-items-center overflow-hidden">
          {images.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 m-auto transition-opacity duration-[550ms] ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Instrument image ${i + 1}`}
                fill
                className="object-contain"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-4 flex w-[min(560px,92vw)] items-center justify-center gap-3.5">
          <div className="flex items-center gap-2.5 rounded-full border border-black/[0.06] bg-black/[0.04] px-3.5 py-2.5">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`relative h-[7px] overflow-hidden rounded-full bg-black/20 transition-[width] duration-250 ease-out ${
                  i === index ? "w-10 bg-black/10" : "w-[7px]"
                }`}
              >
                {i === index && (
                  <span
                    key={`${index}-${playing}`}
                    className={`absolute inset-y-0 left-0 rounded-full bg-black/45 ${
                      playing ? "animate-carousel-progress" : ""
                    }`}
                    style={{ width: playing ? undefined : "100%" }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause autoplay" : "Play autoplay"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/25 bg-black/[0.06] transition-colors hover:bg-black/[0.10]"
          >
            {playing ? (
              <span className="flex gap-[5px]">
                <span className="h-[18px] w-[5px] rounded-sm bg-black" />
                <span className="h-[18px] w-[5px] rounded-sm bg-black" />
              </span>
            ) : (
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-black" />
            )}
          </button>
        </div>

        <p
          key={caption}
          className="animate-caption-in mx-auto mt-6 w-[min(1200px,92vw)] text-center font-script text-gold-600 [text-shadow:0_10px_28px_rgba(179,138,90,0.14)]"
          style={{ fontSize: "clamp(1.45rem, 5vw, 3.15rem)", lineHeight: 1.15 }}
        >
          {caption}
        </p>

        {title && (
          <div className="mt-9 flex flex-col items-center gap-3 px-6 md:mt-10">
            <a
              href="#contact"
              className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-[#7b1d1b] px-6 py-3.5 text-center text-[12px] tracking-[0.1em] text-white uppercase transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#5d1513] hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:gap-2.5 sm:px-9 sm:py-4 sm:text-[14px] sm:tracking-[0.16em]"
            >
              Enquire About This Instrument
              <span aria-hidden="true">&#8594;</span>
            </a>
            <p className="text-center font-sans text-[13px] text-[#6b6560] sm:text-[14px]">
              Price on request &middot; Trials in London by appointment
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
