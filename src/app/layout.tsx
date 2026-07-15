import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Petit_Formal_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const script = Petit_Formal_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Victoria Strings London | Fine Handcrafted Violins, Violas, Cellos & Double Basses",
  description:
    "Victoria Strings London represents an exclusive circle of master luthiers, offering handcrafted violins, violas, cellos and double basses for professional musicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${script.variable} font-sans bg-white text-ink-800 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
