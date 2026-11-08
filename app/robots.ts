import type { MetadataRoute } from "next";
import { publicSiteOrigin } from "@/lib/seo/site-url";
import { ROBOTS_DISALLOWED_PATHS } from "@/lib/seo/robots-disallow";

const AI_ANSWER_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Bytespider",
] as const;

export default function robots(): MetadataRoute.Robots {
  const origin = publicSiteOrigin();
  const disallow = [...ROBOTS_DISALLOWED_PATHS];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      {
        userAgent: [...AI_ANSWER_CRAWLERS],
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}

/** Reference for AI crawlers — also linked in sitemap static paths. */
export const LLMS_TXT_URL = `${publicSiteOrigin()}/llms.txt`;
