import type { MetadataRoute } from "next";
import { getAppUrl } from "@/lib/legal/company";
import { homeSeoDestinations } from "@/lib/seo/home-destinations";

const paths = [
  "/",
  "/note-legali",
  "/privacy-policy",
  "/cookie-policy",
  "/termini-e-condizioni",
  "/condizioni-abbonamento",
  "/contatti",
  "/registrazione",
  "/struttura",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getAppUrl().replace(/\/$/, "");
  const staticEntries = paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.7,
  }));

  const destinationEntries = homeSeoDestinations.map(({ slug }) => ({
    url: `${base}/destinazioni/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...destinationEntries];
}
