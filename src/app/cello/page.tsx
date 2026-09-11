import type { Metadata } from "next";
import CelloView from "@/views/CelloView";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("en", "cello", "/cello");

export default function Page() {
  return <CelloView locale="en" />;
}
