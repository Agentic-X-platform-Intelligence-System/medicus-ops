import type { Metadata } from "next";
import { siteContent } from "@/lib/public/site-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function buildPublicMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = options.title
    ? `${options.title} | ${siteContent.seo.siteName}`
    : siteContent.seo.siteName;
  const description = options.description ?? siteContent.seo.defaultDescription;
  const url = `${siteUrl}${options.path ?? ""}`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url,
      siteName: siteContent.seo.siteName,
      locale: siteContent.seo.locale,
      type: "website",
      images: [
        {
          url: siteContent.doctor.imagePath,
          width: 1200,
          height: 630,
          alt: siteContent.doctor.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteContent.doctor.imagePath],
    },
    alternates: {
      canonical: url,
    },
  };
}
