import type { Metadata } from "next";
import EventDetailView from "@/views/EventDetailView";
import { events } from "@/lib/events";
import { eventMetadata } from "@/lib/event-seo";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return eventMetadata(slug, "en");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EventDetailView slug={slug} locale="en" />;
}
