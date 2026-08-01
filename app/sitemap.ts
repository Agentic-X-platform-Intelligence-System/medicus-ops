import type { MetadataRoute } from "next";
import { siteContent } from "@/lib/public/site-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths = ["", "/credentials", "/procedures", "/contact"] as const;

  const procedurePaths = siteContent.procedures.map(
    (item) => `/procedures/${item.slug}`,
  );
  const conditionPaths = siteContent.conditions.map(
    (item) => `/conditions/${item.slug}`,
  );

  return [...staticPaths, ...procedurePaths, ...conditionPaths].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
