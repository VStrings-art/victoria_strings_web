import type { Metadata } from "next";
import DoubleBassView from "@/views/DoubleBassView";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("en", "doubleBass", "/double-bass");

export default function Page() {
  return <DoubleBassView locale="en" />;
}
