import type { Metadata } from "next";
import DoubleBassView from "@/views/DoubleBassView";
import { PREFIXED_LOCALES, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/page-seo";

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "doubleBass", "/double-bass");
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <DoubleBassView locale={locale} />;
}
