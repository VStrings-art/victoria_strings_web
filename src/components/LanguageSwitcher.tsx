"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  LOCALES,
  LOCALE_NAMES,
  localePath,
  stripLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  // The same page in another language is this path with its prefix swapped.
  const shared = stripLocale(pathname);
  const t = getDictionary(locale);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t.nav.language}
        className="flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:border-white/70 hover:text-[#f2c869] focus-visible:ring-2 focus-visible:ring-[#f2c869] focus-visible:outline-none sm:px-5 sm:text-[14px]"
      >
        {t.nav.language}
        <span
          aria-hidden="true"
          className={`text-[9px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          &#9660;
        </span>
      </button>

      {open && (
        <div className="absolute top-[calc(100%+10px)] right-0 z-50 min-w-[160px] overflow-hidden rounded-xl border border-white/12 bg-[rgba(12,10,9,0.97)] py-1.5 shadow-[0_18px_44px_rgba(0,0,0,0.5)]">
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={localePath(l, shared)}
              hrefLang={l}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-[15px] transition-colors ${
                l === locale
                  ? "text-[#f2c869]"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              {LOCALE_NAMES[l]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
