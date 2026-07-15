"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDE_MS = 6000;

export default function InstrumentCarousel({
  images,
  caption,
}: {
  images: string[];
  caption: string;
}) {
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
    <section className="relative w-full bg-white pt-[calc(4.8rem+150px)] pb-11">
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
          style={{ fontSize: "clamp(2rem, 3.2vw, 3.15rem)", lineHeight: 1.1 }}
        >
          {caption}
        </p>
      </div>
    </section>
  );
}
