import type { Metadata } from "next";
import ViolaView from "@/views/ViolaView";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("en", "viola", "/viola");

export default function Page() {
  return <ViolaView locale="en" />;
}
