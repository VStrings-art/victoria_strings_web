"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/violin", label: "Violin" },
  { href: "/viola", label: "Viola" },
  { href: "/cello", label: "Cello" },
  { href: "/double-bass", label: "Double Bass" },
];

export default function Header() {
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
      <div
        className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-[padding] duration-300 md:px-8 ${
          scrolled ? "py-3" : "py-[18px]"
        }`}
      >
        <Link href="/" className="block">
          <Image
            src="/images/2026/02/VS_Logo_transparent.png"
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
              href={href}
              className="group relative inline-block pb-1 text-[21px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:text-[#f2c869]"
            >
              {label}
              <span className="absolute -bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#f7e3a4] via-[#f2c869] to-[#c48a3a] transition-all duration-250 group-hover:w-full" />
            </Link>
          ))}
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
        <div className="flex flex-col gap-1 border-t border-white/10 bg-[rgba(0,0,0,0.92)] px-6 py-6 lg:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base uppercase tracking-wide text-white hover:bg-white/5 hover:text-[#f2c869]"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
