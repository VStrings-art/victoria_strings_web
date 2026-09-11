import type { Metadata } from "next";
import InstrumentDetailView from "@/views/InstrumentDetailView";
import { violas } from "@/lib/violas";
import { instrumentMetadata } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return violas.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return instrumentMetadata(violas, slug, "viola", "en");
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <InstrumentDetailView all={violas} slug={slug} category="viola" locale="en" />;
}
