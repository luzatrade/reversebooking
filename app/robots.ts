import type { MetadataRoute } from "next";
import { getAppUrl } from "@/lib/legal/company";

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
    sitemap: new URL("/sitemap.xml", getAppUrl()).toString(),
  };
}
