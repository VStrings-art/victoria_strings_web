import type { Metadata } from "next";
import ViolinView from "@/views/ViolinView";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("en", "violin", "/violin");

export default function Page() {
  return <ViolinView locale="en" />;
}
