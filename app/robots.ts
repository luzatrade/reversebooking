import type { MetadataRoute } from "next";
import { publicSiteOrigin } from "@/lib/seo/site-url";

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
    sitemap: `${publicSiteOrigin()}/sitemap.xml`,
  };
}
