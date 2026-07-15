import type { MetadataRoute } from "next";
import { violins } from "@/lib/violins";
import { violas } from "@/lib/violas";
import { cellos } from "@/lib/cellos";
import { doubleBasses } from "@/lib/double-basses";

export const dynamic = "force-static";

const BASE_URL = "https://victoriastrings.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/violin", "/viola", "/cello", "/double-bass"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const instrumentRoutes = [
    ...violins.map((v) => `/violin/${v.slug}`),
    ...violas.map((v) => `/viola/${v.slug}`),
    ...cellos.map((c) => `/cello/${c.slug}`),
    ...doubleBasses.map((d) => `/double-bass/${d.slug}`),
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...instrumentRoutes];
}
