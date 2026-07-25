import type { MetadataRoute } from "next";
import { publicSiteOrigin } from "@/lib/seo/site-url";

export default function robots(): MetadataRoute.Robots {
  const origin = publicSiteOrigin();
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
          "/login",
          "/registrazione",
          "/scegli-account",
          "/annunci",
        ],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}

/** Reference for AI crawlers — also linked in sitemap static paths. */
export const LLMS_TXT_URL = `${publicSiteOrigin()}/llms.txt`;
