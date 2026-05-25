import type { MetadataRoute } from "next";
import { getAppUrl } from "@/lib/legal/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", getAppUrl()).toString(),
  };
}
