import type { MetadataRoute } from "next";
import { publicSiteOrigin } from "@/lib/seo/site-url";
import { ROBOTS_DISALLOWED_PATHS } from "@/lib/seo/robots-disallow";

export default function robots(): MetadataRoute.Robots {
  const origin = publicSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...ROBOTS_DISALLOWED_PATHS],
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}

/** Reference for AI crawlers — also linked in sitemap static paths. */
export const LLMS_TXT_URL = `${publicSiteOrigin()}/llms.txt`;
