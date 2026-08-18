#!/usr/bin/env node
/**
 * Compact single-file pack for external translation (Claude, etc.)
 * Output: data/seo/export/TO-TRANSLATE-DE.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXPORT = path.join(__dirname, "..", "data/seo/export");

function load(name) {
  return JSON.parse(fs.readFileSync(path.join(EXPORT, name), "utf8"));
}

function main() {
  const cities = load("cities-v1.json");
  const homepage = load("homepage.json");
  const hubs = load("destination-hubs.json");
  const templates = load("seo-templates.json");

  const pack = {
    _project: "HotelsDrop SEO hub-only — translate to German (de)",
    _instructions: [
      "Fill every empty string in fields ending with _de.",
      "Keep {count} and HotelsDrop unchanged.",
      "title_de max 60 chars, metaDescription_de max 155 chars.",
      "Use formal 'Sie' for German. Booking intent keywords welcome (Hotel buchen, ohne Provision).",
      "Return the SAME JSON structure with only _de fields filled.",
    ],
    glossary: {
      HotelsDrop: "HotelsDrop (do not translate)",
      "Reverse Booking": "Reverse Booking (keep English) or Umgekehrte Buchung",
      "stay request": "Unterkunftsanfrage",
      "direct offer(s)": "Direktangebot(e)",
      "no commission / no booking commission": "ohne Provision / ohne Buchungsgebühr",
      "properties / lodgings": "Unterkünfte",
      "Get direct offers": "Direktangebote anfordern",
    },
    limits: homepage.limits,
    homepage: {
      title_en: homepage.source.titleEn,
      title_de: "",
      metaDescription_en: homepage.source.descriptionEn,
      metaDescription_de: "",
      heroHeadline_en: "Publish a stay request — get direct hotel offers",
      heroHeadline_de: "",
      heroSubheadline_en: "Free for travellers. No booking commission.",
      heroSubheadline_de: "",
      faq: homepage.faq.map((item) => ({
        question_en: item.question.sourceEn,
        question_de: "",
        answer_en: item.answer.sourceEn,
        answer_de: "",
      })),
    },
    seoTemplates: {
      hubTitle_en: templates.hubTitle.patternEn,
      hubTitle_de: "",
      hubMetaDescription_en: templates.hubMetaDescription.patternEn,
      hubMetaDescription_de: "",
      hubIntroPremium_en: templates.hubIntroPremium.patternEn,
      hubIntroPremium_de: "",
    },
    cityDisplayNames: Object.fromEntries(
      cities.cities.map((c) => [c.slug, { en: c.displayNameEn, de: "" }]),
    ),
    destinationHubs: Object.fromEntries(
      hubs.hubs.map((hub) => {
        const editorialEn = hub.source.editorialEn ?? hub.source.introPremiumEn;
        return [
          hub.slug,
          {
            displayName_en: hub.displayNameEn,
            title_en: hub.source.titleEn,
            title_de: "",
            metaDescription_en: hub.source.metaDescriptionEn,
            metaDescription_de: "",
            intro_en: hub.source.editorialEn ?? hub.source.introPremiumEn,
            intro_de: "",
            editorial_en: editorialEn,
            editorial_de: "",
            poiPhrase_en: hub.source.poiPhraseEn ?? "",
            poiPhrase_de: "",
            faq: hub.faq.map((item) => ({
              question_en: item.question.sourceEn,
              question_de: "",
              answer_en: item.answer.sourceEn,
              answer_de: "",
            })),
          },
        ];
      }),
    ),
  };

  const outPath = path.join(EXPORT, "TO-TRANSLATE-DE.json");
  fs.writeFileSync(outPath, `${JSON.stringify(pack, null, 2)}\n`);
  const bytes = fs.statSync(outPath).size;
  console.log(`Wrote ${outPath} (${(bytes / 1024).toFixed(1)} KB)`);
}

main();
