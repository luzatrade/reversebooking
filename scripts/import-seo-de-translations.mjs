#!/usr/bin/env node
/** Merge TO-TRANSLATE-DE-DONE.json → data/seo/export/de/content.json */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "data/seo/export/TO-TRANSLATE-DE-DONE.json");
const OUT_DIR = path.join(ROOT, "data/seo/export/de");
const OUT = path.join(OUT_DIR, "content.json");

function main() {
  const src = JSON.parse(fs.readFileSync(SRC, "utf8"));
  const hubs = {};

  for (const [slug, hub] of Object.entries(src.destinationHubs ?? {})) {
    let title = hub.title_de || "";
    if (slug === "reggio-calabria" && title && !title.includes("Direktangebote")) {
      title = `${title} — Direktangebote`;
    }

    hubs[slug] = {
      displayName: src.cityDisplayNames?.[slug]?.de ?? hub.displayName_en,
      title,
      metaDescription: hub.metaDescription_de || "",
      intro: hub.intro_de || hub.editorial_de || "",
      editorial: hub.editorial_de || hub.intro_de || "",
      poiPhrase: hub.poiPhrase_de || (slug === "modena"
        ? "Dom, Ghirlandina, Piazza Grande, Modenese Küche und Motor Valley"
        : ""),
      faq: (hub.faq ?? []).map((item) => ({
        question: item.question_de || "",
        answer: item.answer_de || "",
      })),
    };
  }

  const content = {
    version: "1.0.0",
    locale: "de",
    importedAt: new Date().toISOString(),
    hubSlugs: Object.keys(hubs),
    homepage: {
      title: src.homepage?.title_de || "",
      metaDescription: src.homepage?.metaDescription_de || "",
      heroHeadline: src.homepage?.heroHeadline_de || "",
      heroSubheadline: src.homepage?.heroSubheadline_de || "",
      faq: (src.homepage?.faq ?? []).map((item) => ({
        question: item.question_de || "",
        answer: item.answer_de || "",
      })),
    },
    templates: {
      hubTitle: src.seoTemplates?.hubTitle_de || "",
      hubMetaDescription: src.seoTemplates?.hubMetaDescription_de || "",
      hubIntroPremium: src.seoTemplates?.hubIntroPremium_de || "",
    },
    cityDisplayNames: Object.fromEntries(
      Object.entries(src.cityDisplayNames ?? {}).map(([slug, row]) => [slug, row.de ?? ""]),
    ),
    hubs,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(content, null, 2)}\n`);
  console.log(`Wrote ${OUT} (${content.hubSlugs.length} hubs)`);
}

main();
