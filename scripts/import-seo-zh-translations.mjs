#!/usr/bin/env node
/** Merge TO-TRANSLATE-ZH-DONE.json → data/seo/export/zh/content.json */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "data/seo/export/TO-TRANSLATE-ZH-DONE.json");
const OUT_DIR = path.join(ROOT, "data/seo/export/zh");
const OUT = path.join(OUT_DIR, "content.json");

const MODENA_POI_ZH =
  "摩德纳大教堂、吉兰迪纳塔楼、大广场、摩德纳美食与 Motor Valley";

function main() {
  const src = JSON.parse(fs.readFileSync(SRC, "utf8"));
  const existing = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : null;
  const hubs = {};

  for (const [slug, hub] of Object.entries(src.destinationHubs ?? {})) {
    hubs[slug] = {
      displayName: src.cityDisplayNames?.[slug]?.zh ?? hub.displayName_en,
      title: hub.title_zh || "",
      metaDescription: hub.metaDescription_zh || "",
      intro: hub.intro_zh || hub.editorial_zh || "",
      editorial: hub.editorial_zh || hub.intro_zh || "",
      poiPhrase: hub.poiPhrase_zh || (slug === "modena" ? MODENA_POI_ZH : ""),
      faq: (hub.faq ?? []).map((item) => ({
        question: item.question_zh || "",
        answer: item.answer_zh || "",
      })),
    };
  }

  const content = {
    version: "1.0.0",
    locale: "zh",
    importedAt: new Date().toISOString(),
    hubSlugs: Object.keys(hubs),
    homepage: {
      title: src.homepage?.title_zh || "",
      metaDescription: src.homepage?.metaDescription_zh || "",
      heroHeadline: src.homepage?.heroHeadline_zh || "",
      heroSubheadline: src.homepage?.heroSubheadline_zh || "",
      heroEntityIntro: existing?.homepage?.heroEntityIntro || "",
      ui: existing?.homepage?.ui,
      faq: (src.homepage?.faq ?? []).map((item) => ({
        question: item.question_zh || "",
        answer: item.answer_zh || "",
      })),
    },
    templates: {
      hubTitle: src.seoTemplates?.hubTitle_zh || "",
      hubMetaDescription: src.seoTemplates?.hubMetaDescription_zh || "",
      hubIntroPremium: src.seoTemplates?.hubIntroPremium_zh || "",
    },
    cityDisplayNames: Object.fromEntries(
      Object.entries(src.cityDisplayNames ?? {}).map(([slug, row]) => [slug, row.zh ?? ""]),
    ),
    hubs,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(content, null, 2)}\n`);
  console.log(`Wrote ${OUT} (${content.hubSlugs.length} hubs)`);
}

main();
