import type { Metadata } from "next";
import InstrumentDetailView from "@/views/InstrumentDetailView";
import { doubleBasses } from "@/lib/double-basses";
import { instrumentMetadata } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return doubleBasses.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return instrumentMetadata(doubleBasses, slug, "double-bass", "en");
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <InstrumentDetailView all={doubleBasses} slug={slug} category="double-bass" locale="en" />;
}
