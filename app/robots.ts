import type { MetadataRoute } from "next";
import { getAppUrl } from "@/lib/legal/company";

function sitemapUrl() {
  const base = getAppUrl().replace(/\/$/, "");
  const canonicalBase = base === "https://hotelsdrop.com" ? "https://www.hotelsdrop.com" : base;
  return `${canonicalBase}/sitemap.xml`;
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/console/",
          "/admin/",
          "/chat/",
          "/auth/",
          "/api/",
          "/struttura/dashboard",
          "/inserzionista/",
        ],
      },
    ],
    sitemap: sitemapUrl(),
  };
}
