import type { Metadata } from "next";
import InstrumentDetailView from "@/views/InstrumentDetailView";
import { cellos } from "@/lib/cellos";
import { instrumentMetadata } from "@/lib/instrument-seo";

export function generateStaticParams() {
  return cellos.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return instrumentMetadata(cellos, slug, "cello", "en");
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <InstrumentDetailView all={cellos} slug={slug} category="cello" locale="en" />;
}
