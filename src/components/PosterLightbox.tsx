"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The poster as a thumbnail; clicking it opens a full-screen view with a
 * download, so a teacher can save the image and pass it on.
 */
export default function PosterLightbox({
  src,
  alt,
  downloadSrc,
  labels,
}: {
  src: string;
  alt: string;
  downloadSrc: string;
  labels: { open: string; close: string; download: string };
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    openerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    // stop the page behind from scrolling under the overlay
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={labels.open}
        className="group/poster relative block w-full cursor-zoom-in overflow-hidden rounded-[4px] bg-ink-900 shadow-[0_18px_44px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_26px_62px_rgba(0,0,0,0.28)] focus-visible:ring-2 focus-visible:ring-[#c9ab7c] focus-visible:ring-offset-4 focus-visible:outline-none"
      >
        <Image
          src={src}
          alt={alt}
          width={1215}
          height={1519}
          className="h-auto w-full"
          sizes="(min-width: 768px) 420px, 92vw"
          priority
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/75 to-transparent px-4 pt-10 pb-4 font-sans text-[11px] font-semibold tracking-[0.18em] text-white/0 uppercase transition-colors duration-300 group-hover/poster:text-white/90">
          {labels.open}
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-black/92 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full flex-col items-center gap-5"
          >
            {/* Plain img: the poster is already a right-sized WebP, and this
                keeps the natural size available to "save image as". */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[78svh] w-auto max-w-full rounded-[3px] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            />

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={downloadSrc}
                download
                className="inline-flex items-center gap-2.5 rounded-full bg-[#c9ab7c] px-7 py-3 font-sans text-[12px] font-semibold tracking-[0.14em] text-[#1a1613] uppercase transition-colors hover:bg-[#e0c48f] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <span aria-hidden="true">&#8595;</span>
                {labels.download}
              </a>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="inline-flex items-center rounded-full border border-white/45 px-7 py-3 font-sans text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:border-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                {labels.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
