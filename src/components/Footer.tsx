import Image from "next/image";
import Link from "next/link";

const categoryLinks = [
  { href: "/violin", label: "Violins" },
  { href: "/viola", label: "Violas" },
  { href: "/cello", label: "Cellos" },
  { href: "/double-bass", label: "Double Basses" },
  { href: "/luthiers", label: "Luthiers" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/victoriastringslondon/",
    label: "Instagram",
    path: "M12 2c2.7 0 3.05.01 4.12.06 1.07.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.24.64.41 1.36.46 2.43.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.22 1.79-.46 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.24-1.36.41-2.43.46-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.24-.64-.41-1.36-.46-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.07.22-1.79.46-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.44 2.53c.64-.24 1.36-.41 2.43-.46C8.95 2.01 9.3 2 12 2Zm0 1.8c-2.65 0-2.97.01-4.02.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.3 6.03 4.3 6.35 4.3 9v.01c0 2.65.01 2.97.06 4.02.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.02.06s2.97-.01 4.02-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.02s-.01-2.97-.06-4.02c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.97 3.81 14.65 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3Zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Zm5.35-1.98a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61580239296561",
    label: "Facebook",
    path: "M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H8v2.96h2.46V21h3.04Z",
  },
  {
    href: "https://www.linkedin.com/in/victoria-strings-london-776536370/",
    label: "LinkedIn",
    path: "M6.94 8.5H3.56V20.5h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.5h-3.38v-6.3c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.64-2.42 3.33v6.4H9.17V8.5h3.24v1.64h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.2v6.91Z",
  },
  {
    href: "https://www.youtube.com/@VictoriaStrings/videos",
    label: "YouTube",
    path: "M22 12s0-3.05-.39-4.52a2.79 2.79 0 0 0-1.96-1.98C18.2 5.1 12 5.1 12 5.1s-6.2 0-7.65.4a2.79 2.79 0 0 0-1.96 1.98C2 8.95 2 12 2 12s0 3.05.39 4.52a2.79 2.79 0 0 0 1.96 1.98c1.45.4 7.65.4 7.65.4s6.2 0 7.65-.4a2.79 2.79 0 0 0 1.96-1.98C22 15.05 22 12 22 12ZM10 15.3V8.7l5.5 3.3-5.5 3.3Z",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-white pt-[140px] font-display">
      <div
        className="absolute inset-x-0 top-0 h-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/2025/12/Screenshot-2025-12-03-at-16.35.49-scaled.png')",
          clipPath: "polygon(0 0, 100% 0, 100% 52%, 50% 100%, 0 52%)",
        }}
      />

      <div className="relative z-[5] mx-auto flex max-w-[1400px] flex-col gap-10 px-6 pt-10 pb-14 md:flex-row md:items-start md:justify-between md:gap-14 md:px-14">
        <div className="text-center md:text-left">
          <ul className="space-y-3.5">
            {categoryLinks.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="text-[17px] font-semibold text-[#7b1d1b] transition-colors hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:ml-[70px]">
          <div className="mb-6 inline-flex gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-black hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <Image
            src="/images/2026/02/VS_Logo-10-scaled.png"
            alt="Victoria Strings London"
            width={360}
            height={180}
            className="mt-2 h-auto max-h-[180px] w-auto max-w-[240px] object-contain"
          />
        </div>

        <div className="text-center text-[17px] leading-[1.8] font-medium text-[#222] md:text-right">
          <p className="font-bold">Try our instruments</p>
          <p>Open Mon&ndash;Fri</p>
          <p>9:00am &ndash; 6:00pm (London time)</p>
          <p>Available by appointment only</p>
        </div>
      </div>

      <div className="relative z-[5] pb-8 text-center text-[14px] font-medium text-[#444]">
        Copyright &copy; {new Date().getFullYear()} . Powered by Victoria Strings.
      </div>
    </footer>
  );
}
