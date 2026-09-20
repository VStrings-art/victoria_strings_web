import type { Metadata } from "next";
import EventsView from "@/views/EventsView";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("en", "events", "/events");

export default function Page() {
  return <EventsView locale="en" />;
}
