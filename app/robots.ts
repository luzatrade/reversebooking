import type { MetadataRoute } from "next";
import { publicSiteOrigin } from "@/lib/seo/site-url";

const DISALLOWED_PATHS = [
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
];

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  const origin = publicSiteOrigin();

  return {
    rules: [
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOWED_PATHS,
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}

/** Reference for AI crawlers — also linked in sitemap static paths. */
export const LLMS_TXT_URL = `${publicSiteOrigin()}/llms.txt`;
