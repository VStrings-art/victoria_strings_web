import type { Metadata } from "next";
import InstrumentDetailView from "@/views/InstrumentDetailView";
import { violas } from "@/lib/violas";
import { PREFIXED_LOCALES, type Locale } from "@/i18n/config";
import { instrumentMetadata } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return PREFIXED_LOCALES.flatMap((locale) =>
    violas.map((i) => ({ locale, slug: i.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return instrumentMetadata(violas, slug, "viola", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  return (
    <InstrumentDetailView all={violas} slug={slug} category="viola" locale={locale} />
  );
}
