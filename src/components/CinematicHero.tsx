"use client";

import { useEffect, useRef, useState } from "react";

export default function CinematicHero({
  image,
  lines,
}: {
  image: string;
  lines: string[];
}) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      <div
        className={`absolute inset-0 bg-cover bg-[30%_center] transition-[transform,clip-path] duration-[1400ms] ease-out ${
          revealed
            ? "scale-100 [clip-path:inset(0_0_0_0)]"
            : "scale-110 [clip-path:inset(0_18vw_0_18vw)]"
        }`}
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 28% 50%, rgba(0,0,0,.10) 0%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.80) 100%), linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.38))",
        }}
      />
      <div className="absolute inset-0 z-[2] grid place-items-center px-6 text-center">
        <h1
          className={`font-display max-w-[92vw] text-[2.6rem] leading-[1.05] font-semibold text-[#f3efe6] italic transition-all duration-[1400ms] ease-out [text-shadow:0_20px_60px_rgba(0,0,0,0.70)] md:text-[4.8rem] ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
          }`}
        >
          {lines.map((line) => (
            <span key={line} className="block md:whitespace-nowrap">
              {line}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
