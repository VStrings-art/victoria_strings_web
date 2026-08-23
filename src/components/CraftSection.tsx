"use client";

import Image from "next/image";
import { useState } from "react";

const crafts = [
  { title: "Plate Carving & Graduation", youtubeId: "tslwJ7tYDY0" },
  { title: "Scroll Carving", youtubeId: "ChpRmr6TEYM" },
  { title: "Purfling Inlay", youtubeId: "jtm4riKp54c" },
];

// The YouTube player is only mounted once a visitor asks for it — embedding
// three iframes up front costs roughly a megabyte of scripts before anyone
// presses play.
function CraftVideo({ title, youtubeId }: { title: string; youtubeId: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group/play absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src={`/images/craft/${youtubeId}.webp`}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover/play:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
          />
          <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover/play:bg-black/15" />
          <span className="absolute top-1/2 left-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/45 backdrop-blur-sm transition-[transform,background-color] duration-300 group-hover/play:scale-110 group-hover/play:bg-[#7b1d1b]/85">
            <span className="ml-1.5 h-0 w-0 border-y-[13px] border-l-[21px] border-y-transparent border-l-white" />
          </span>
        </button>
      )}
    </div>
  );
}

export default function CraftSection() {
  return (
    <section className="mx-auto mt-20 mb-8 max-w-[1680px] px-6 pb-[4.5rem] font-display text-[#222] md:px-8">
      <div className="relative mb-16 text-center">
        <h2 className="text-[2.3rem] tracking-[0.05em] md:text-[3.3rem]">
          The Soul of Strings, Crafted by Hand
        </h2>
        <p className="mx-auto mt-2 max-w-[920px] text-[1.05rem] leading-[1.75] text-[#555] md:text-[1.3rem]">
          Every instrument from Victoria Strings tells its own story &mdash;
          shaped by skilled hands and guided by passion, crafted to achieve
          the perfect balance between elegance, resonance, and soul.
        </p>
        <div className="mx-auto mt-9 h-px w-[140px] bg-gradient-to-r from-transparent via-[#d9b66a] to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {crafts.map((c) => (
          <article
            key={c.youtubeId}
            className="group flex flex-col gap-5 transition-transform duration-300 ease-out hover:-translate-y-1.5"
          >
            <CraftVideo title={c.title} youtubeId={c.youtubeId} />
            <h3 className="text-center text-[1.4rem] md:text-[1.6rem]">{c.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
