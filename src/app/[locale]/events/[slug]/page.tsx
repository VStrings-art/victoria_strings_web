import type { Metadata } from "next";
import EventDetailView from "@/views/EventDetailView";
import { events } from "@/lib/events";
import { PREFIXED_LOCALES, type Locale } from "@/i18n/config";
import { eventMetadata } from "@/lib/event-seo";

export function generateStaticParams() {
  return PREFIXED_LOCALES.flatMap((locale) => events.map((e) => ({ locale, slug: e.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return eventMetadata(slug, locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  return <EventDetailView slug={slug} locale={locale} />;
}
