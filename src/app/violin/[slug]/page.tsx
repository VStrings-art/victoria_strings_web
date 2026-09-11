import type { Metadata } from "next";
import InstrumentDetailView from "@/views/InstrumentDetailView";
import { violins } from "@/lib/violins";
import { instrumentMetadata } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return violins.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return instrumentMetadata(violins, slug, "violin", "en");
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <InstrumentDetailView all={violins} slug={slug} category="violin" locale="en" />;
}
