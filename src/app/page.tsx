import type { Metadata } from "next";
import HomeView from "@/views/HomeView";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("en", "home", "/");

export default function Home() {
  return <HomeView locale="en" />;
}
