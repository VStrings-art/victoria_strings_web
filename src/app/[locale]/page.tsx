import type { Metadata } from "next";
import HomeView from "@/views/HomeView";
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
  return pageMetadata(locale, "home", "/");
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <HomeView locale={locale} />;
}
