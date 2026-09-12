"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LOCALES,
  LOCALE_NAMES,
  localePath,
  stripLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const pathname = usePathname() ?? "/";
  const links = [
    { href: "/", label: t.nav.home },
    { href: "/violin", label: t.nav.violin },
    { href: "/viola", label: t.nav.viola },
    { href: "/cello", label: t.nav.cello },
    { href: "/double-bass", label: t.nav.doubleBass },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-2.5 font-display transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-[rgba(0,0,0,0.92)] shadow-[0_4px_18px_rgba(0,0,0,0.6)]" : "bg-transparent"
      }`}
    >
      {/* Several covers are pale at the top, leaving the white nav and the
          language control barely legible. A soft scrim gives them ground
          without putting a bar across the photograph. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-[150px] bg-gradient-to-b from-black/55 via-black/25 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`relative mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-[padding] duration-300 md:px-8 ${
          scrolled ? "py-3" : "py-[18px]"
        }`}
      >
        <Link href={localePath(locale, "/")} className="block">
          <Image
            src="/images/2026/02/VS_Logo_transparent.webp"
            alt="Victoria Strings"
            width={220}
            height={124}
            className="h-[52px] w-auto object-contain md:h-[94px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={localePath(locale, href)}
              className="group relative inline-block pb-1 text-[21px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:text-[#f2c869]"
            >
              {label}
              <span className="absolute -bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#f7e3a4] via-[#f2c869] to-[#c48a3a] transition-all duration-250 group-hover:w-full" />
            </Link>
          ))}
          {/* Below lg the whole nav collapses, and the language control goes
              with it rather than standing alone beside the menu button. */}
          <LanguageSwitcher locale={locale} />
        </nav>

        <button
          className="flex flex-col gap-1.5 p-1 text-white lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        // Opaque, not 92%: at that alpha the hero headline ghosted through the
        // panel. It also scrolls, so the language list stays reachable on a
        // short screen.
        <div className="flex max-h-[calc(100svh-88px)] flex-col gap-1 overflow-y-auto border-t border-white/10 bg-[#0b0a09] px-6 py-6 lg:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={localePath(locale, href)}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base uppercase tracking-wide text-white hover:bg-white/5 hover:text-[#f2c869]"
            >
              {label}
            </Link>
          ))}

          <p className="mt-5 mb-1 border-t border-white/10 px-3 pt-5 font-sans text-[11px] font-semibold tracking-[0.22em] text-white/45 uppercase">
            {t.nav.language}
          </p>
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={localePath(l, stripLocale(pathname))}
              hrefLang={l}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-base tracking-wide transition-colors hover:bg-white/5 ${
                l === locale ? "text-[#f2c869]" : "text-white/80 hover:text-white"
              }`}
            >
              {LOCALE_NAMES[l]}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
