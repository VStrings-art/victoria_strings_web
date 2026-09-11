import type { Metadata } from "next";
import InstrumentDetailView from "@/views/InstrumentDetailView";
import { cellos } from "@/lib/cellos";
import { PREFIXED_LOCALES, type Locale } from "@/i18n/config";
import { instrumentMetadata } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return PREFIXED_LOCALES.flatMap((locale) =>
    cellos.map((i) => ({ locale, slug: i.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return instrumentMetadata(cellos, slug, "cello", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  return (
    <InstrumentDetailView all={cellos} slug={slug} category="cello" locale={locale} />
  );
}
