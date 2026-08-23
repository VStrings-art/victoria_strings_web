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

const SITE_URL = "https://victoriastrings.com";
const SITE_NAME = "Victoria Strings London";
const DESCRIPTION =
  "Victoria Strings London represents an exclusive circle of master luthiers, offering handcrafted violins, violas, cellos and double basses for professional musicians.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Victoria Strings London | Fine Handcrafted Violins, Violas, Cellos & Double Basses",
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Victoria Strings London | Fine Handcrafted String Instruments",
    description: DESCRIPTION,
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Victoria Strings London — fine handcrafted string instruments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Strings London | Fine Handcrafted String Instruments",
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "/" },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "Victoria Strings",
  url: SITE_URL,
  logo: `${SITE_URL}/images/2026/02/VS_Logo-10-scaled.webp`,
  image: `${SITE_URL}/og-image.jpg`,
  description: DESCRIPTION,
  email: "sales@victoriastrings.com",
  telephone: "+44 7521 071557",
  areaServed: "GB",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "sales@victoriastrings.com",
    telephone: "+44 7521 071557",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.instagram.com/victoriastringslondon/",
    "https://www.facebook.com/profile.php?id=61580239296561",
    "https://www.linkedin.com/in/victoria-strings-london-776536370/",
    "https://www.youtube.com/@VictoriaStrings/videos",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organisationSchema, websiteSchema]),
          }}
        />
      </head>
      <body
        className={`${display.variable} ${sans.variable} ${script.variable} font-sans bg-white text-ink-800 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
