import type { MetadataRoute } from "next";
import { company } from "@/lib/legal/company";

const paths = [
  "/",
  "/note-legali",
  "/privacy-policy",
  "/cookie-policy",
  "/termini-e-condizioni",
  "/contatti",
  "/registrazione",
  "/struttura",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.websiteUrl.replace(/\/$/, "");
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
