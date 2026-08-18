#!/usr/bin/env node
/**
 * Export SEO translation pack for hub-only locales (DE, FR, ES…).
 * Output: data/seo/export/
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "data/seo/export");

const BRAND = "HotelsDrop";

const CITIES_V1 = [
  { slug: "roma", cityId: "IT-ROM", nameIt: "Roma", nameEn: "Rome", contextKey: "Roma" },
  { slug: "milano", cityId: "IT-MIL", nameIt: "Milano", nameEn: "Milan", contextKey: "Milano" },
  { slug: "napoli", cityId: "IT-NAP", nameIt: "Napoli", nameEn: "Naples", contextKey: "Napoli" },
  { slug: "firenze", cityId: "IT-FLR", nameIt: "Firenze", nameEn: "Florence", contextKey: "Firenze" },
  { slug: "venezia", cityId: "IT-VCE", nameIt: "Venezia", nameEn: "Venice", contextKey: "Venezia" },
  { slug: "torino", cityId: "IT-TRN", nameIt: "Torino", nameEn: "Turin", contextKey: "Torino" },
  { slug: "bologna", cityId: "IT-BLQ", nameIt: "Bologna", nameEn: "Bologna", contextKey: "Bologna" },
  { slug: "palermo", cityId: "IT-PMO", nameIt: "Palermo", nameEn: "Palermo", contextKey: "Palermo" },
  { slug: "genova", cityId: "IT-GOA", nameIt: "Genova", nameEn: "Genoa", contextKey: "Genova" },
  { slug: "bari", cityId: "IT-BRI", nameIt: "Bari", nameEn: "Bari", contextKey: "Bari" },
  { slug: "catania", cityId: "IT-CTA", nameIt: "Catania", nameEn: "Catania", contextKey: "Catania" },
  { slug: "verona", cityId: "IT-VRN", nameIt: "Verona", nameEn: "Verona", contextKey: "Verona" },
  { slug: "padova", cityId: "IT-PAD", nameIt: "Padova", nameEn: "Padua", contextKey: "Padova" },
  { slug: "brescia", cityId: "IT-BSC", nameIt: "Brescia", nameEn: "Brescia", contextKey: "Brescia" },
  { slug: "parma", cityId: "IT-PMF", nameIt: "Parma", nameEn: "Parma", contextKey: "Parma" },
  { slug: "modena", cityId: "IT-MOD", nameIt: "Modena", nameEn: "Modena", contextKey: "Modena" },
  { slug: "reggio-calabria", cityId: "IT-REG", nameIt: "Reggio Calabria", nameEn: "Reggio Calabria", contextKey: "Reggio Calabria" },
  { slug: "messina", cityId: null, nameIt: "Messina", nameEn: "Messina", contextKey: "Messina", note: "cityId da DB al runtime se assente in world-cities" },
  { slug: "catanzaro", cityId: null, nameIt: "Catanzaro", nameEn: "Catanzaro", contextKey: "Catanzaro", note: "cityId da DB al runtime se assente in world-cities" },
  { slug: "lecce", cityId: "IT-LCC", nameIt: "Lecce", nameEn: "Lecce", contextKey: "Lecce" },
  { slug: "salerno", cityId: "IT-SAL", nameIt: "Salerno", nameEn: "Salerno", contextKey: "Salerno" },
  { slug: "sorrento", cityId: "IT-SOR", nameIt: "Sorrento", nameEn: "Sorrento", contextKey: "Sorrento", note: "Hub Costiera Amalfitana (alias amalfi, costiera amalfitana)" },
  { slug: "pisa", cityId: "IT-PSA", nameIt: "Pisa", nameEn: "Pisa", contextKey: "Pisa" },
  { slug: "siena", cityId: "IT-SIE", nameIt: "Siena", nameEn: "Siena", contextKey: "Siena" },
  { slug: "perugia", cityId: "IT-PEG", nameIt: "Perugia", nameEn: "Perugia", contextKey: "Perugia" },
  { slug: "rimini", cityId: "IT-RMI", nameIt: "Rimini", nameEn: "Rimini", contextKey: "Rimini" },
  { slug: "trieste", cityId: "IT-TRS", nameIt: "Trieste", nameEn: "Trieste", contextKey: "Trieste" },
  { slug: "bolzano", cityId: "IT-BZO", nameIt: "Bolzano", nameEn: "Bolzano", contextKey: "Bolzano" },
  { slug: "cagliari", cityId: "IT-CAG", nameIt: "Cagliari", nameEn: "Cagliari", contextKey: "Cagliari" },
  { slug: "taormina", cityId: "IT-TAO", nameIt: "Taormina", nameEn: "Taormina", contextKey: "Taormina" },
];

function loadCityContext() {
  const raw = fs.readFileSync(path.join(ROOT, "data/seo/city-context.json"), "utf8");
  return JSON.parse(raw);
}

function loadPremiumIntros() {
  const src = fs.readFileSync(path.join(ROOT, "lib/i18n/seo-marketing.ts"), "utf8");
  const block = src.match(/const PREMIUM_DESTINATION_INTROS[\s\S]*?^};/m)?.[0] ?? "";
  const intros = {};
  const entryRe = /^\s+([\w-]+):\s*\{\s*\n\s+it:\s*"((?:\\.|[^"\\])*)",\s*\n\s+en:\s*"((?:\\.|[^"\\])*)",/gm;
  let m;
  while ((m = entryRe.exec(block)) !== null) {
    intros[m[1]] = {
      it: JSON.parse(`"${m[2]}"`),
      en: JSON.parse(`"${m[3]}"`),
    };
  }
  return intros;
}

function hubTitle(name, count, locale) {
  if (locale === "en") return `Hotels in ${name}: ${count} properties — Get direct offers`;
  return `Hotel a ${name}: ${count} strutture — Richiedi offerte dirette`;
}

function hubDescription(name, count, locale) {
  if (locale === "en") {
    return `Compare ${count} hotels and B&Bs in ${name}. Publish a free stay request on ${BRAND} and receive personalised direct offers from local properties. No booking commission for travellers.`;
  }
  return `Confronta ${count} hotel e B&B a ${name}. Pubblica una richiesta di soggiorno gratuita su ${BRAND} e ricevi offerte personalizzate dalle strutture. Zero commissioni per chi viaggia.`;
}

function hubIntro(name, count, locale, tier = "premium") {
  if (tier === "premium") {
    if (locale === "en") {
      return `Explore ${count} lodgings in ${name}. On ${BRAND} you can compare properties and request tailored offers without browsing dozens of booking sites.`;
    }
    return `Esplora ${count} strutture ricettive a ${name}. Su ${BRAND} puoi confrontare hotel, B&B e appartamenti e inviare una richiesta personalizzata per ricevere offerte dirette.`;
  }
  if (locale === "en") {
    return `Find ${count} properties in ${name} and request a personalized offer on ${BRAND}.`;
  }
  return `Trova ${count} strutture a ${name} e richiedi un'offerta personalizzata su ${BRAND}.`;
}

function faqTemplate(cityName, locale) {
  if (locale === "en") {
    return [
      {
        question: `How do I get hotel offers in ${cityName}?`,
        answer: `Publish one free stay request for ${cityName} with your dates, budget and preferences. Every compatible property in the area receives it and can reply with a direct offer. You compare proposals and choose the best one.`,
      },
      {
        question: "Can I contact a property directly?",
        answer:
          "Yes. From the catalogue you can open any property profile and contact it directly. You can also send a request that reaches all matching hotels in the destination at once.",
      },
      {
        question: "Is it useful for groups and travel agencies?",
        answer:
          "Yes. Schools, companies, events and agencies can publish one group request instead of emailing dozens of hotels. Every compatible property in the selected area receives the request and replies with its offer.",
      },
      {
        question: `What types of accommodation can I find in ${cityName}?`,
        answer: `The HotelsDrop catalogue in ${cityName} includes hotels, B&Bs, guest houses and apartments with photos and verified details. You can filter by area and services when publishing your request.`,
      },
      {
        question: "Are there booking commissions for travellers?",
        answer:
          "No. Publishing requests, comparing offers and contacting properties is free for travellers on HotelsDrop. Properties reply with direct proposals without OTA-style booking fees on your side.",
      },
    ];
  }
  return [
    {
      question: `Come ricevo offerte hotel a ${cityName}?`,
      answer: `Pubblica una richiesta gratuita per ${cityName} con date, budget e preferenze. Tutte le strutture compatibili della zona la ricevono e possono risponderti con un'offerta diretta. Confronti le proposte e scegli la migliore.`,
    },
    {
      question: "Posso contattare una struttura direttamente?",
      answer:
        "Sì. Dal catalogo puoi aprire la scheda di qualsiasi struttura e contattarla subito. Oppure inviare una richiesta che raggiunge in un colpo solo tutti gli hotel compatibili della destinazione.",
    },
    {
      question: "È utile anche per gruppi e agenzie di viaggio?",
      answer:
        "Sì. Scuole, aziende, eventi e agenzie possono pubblicare una sola richiesta di gruppo invece di mandare decine di email. Tutte le strutture compatibili della zona selezionata ricevono la richiesta e rispondono con la propria offerta.",
    },
    {
      question: `Che tipi di alloggio trovo a ${cityName}?`,
      answer: `Il catalogo HotelsDrop a ${cityName} include hotel, B&B, guest house e appartamenti con foto e dettagli verificati. Puoi indicare zona e servizi quando pubblichi la richiesta.`,
    },
    {
      question: "Ci sono commissioni di prenotazione per chi viaggia?",
      answer:
        "No. Pubblicare richieste, confrontare offerte e contattare le strutture è gratuito per i viaggiatori su HotelsDrop. Le strutture rispondono con proposte dirette, senza commissioni da portale OTA.",
    },
  ];
}

function emptyLocales() {
  return { de: "", fr: "", es: "", nl: "", pl: "" };
}

function trField(sourceIt, sourceEn, extra = {}) {
  return { sourceIt, sourceEn, ...emptyLocales(), ...extra };
}

function trFaq(sourceIt, sourceEn) {
  return (sourceIt || []).map((item, i) => ({
    question: trField(item.question, sourceEn?.[i]?.question ?? ""),
    answer: trField(item.answer, sourceEn?.[i]?.answer ?? ""),
  }));
}

function main() {
  const cityContext = loadCityContext();
  const premium = loadPremiumIntros();
  const countPlaceholder = "{count}";

  fs.mkdirSync(OUT, { recursive: true });

  const citiesManifest = {
    _comment: "30 hub v1 — slug condivisi IT/EN/DE. Compila displayNameDe (e altre lingue) in translations.",
    exportedAt: new Date().toISOString(),
    version: "1.0.0",
    cities: CITIES_V1.map((c) => ({
      slug: c.slug,
      cityId: c.cityId,
      displayNameIt: c.nameIt,
      displayNameEn: c.nameEn,
      displayNameDe: "",
      displayNameFr: "",
      displayNameEs: "",
      ...(c.note ? { note: c.note } : {}),
      urls: {
        it: `/it/destinazioni/${c.slug}`,
        en: `/en/destinations/${c.slug}`,
        de: `/de/reiseziele/${c.slug}`,
      },
    })),
  };

  const homepage = {
    _comment: "Homepage SEO — compila le chiavi de, fr, es… sotto translations.",
    exportedAt: new Date().toISOString(),
    limits: { titleMax: 60, metaDescriptionMax: 155 },
    source: {
      titleIt: "HotelsDrop — Reverse Booking e Reversebooking Hotel senza Commissioni",
      titleEn: "HotelsDrop — Reverse Booking & Reversebooking, No Commission",
      descriptionIt:
        "Reverse booking hotel: pubblichi una richiesta di soggiorno e le strutture ti fanno offerte dirette. Gratis per viaggiatori, agenzie e gruppi. Abbonamento per le strutture.",
      descriptionEn:
        "Hotel reverse booking: publish one stay request and properties send direct offers. Free for travellers, groups and agencies. Subscription for properties.",
    },
    translations: {
      title: emptyLocales(),
      metaDescription: emptyLocales(),
      heroHeadline: emptyLocales(),
      heroSubheadline: emptyLocales(),
    },
    faq: trFaq(
      [
        { question: "Cos'è il reverse booking?", answer: "Pubblichi una richiesta con date e budget; le strutture rispondono con offerte dirette." },
        { question: "HotelsDrop è gratis per chi viaggia?", answer: "Sì. Pubblicare richieste e confrontare offerte non ha commissioni per i viaggiatori." },
      ],
      [
        { question: "What is reverse booking?", answer: "You publish a request with dates and budget; properties reply with direct offers." },
        { question: "Is HotelsDrop free for travellers?", answer: "Yes. Publishing requests and comparing offers is free for travellers." },
      ],
    ),
  };

  const seoTemplates = {
    _comment: "Pattern meta hub — {city}, {count}, {brand}. Usa displayName nella lingua target.",
    exportedAt: new Date().toISOString(),
    placeholders: ["{city}", "{count}", "{brand}"],
    hubTitle: {
      patternIt: "Hotel a {city}: {count} strutture — Richiedi offerte dirette",
      patternEn: "Hotels in {city}: {count} properties — Get direct offers",
      translations: emptyLocales(),
    },
    hubMetaDescription: {
      patternIt: `Confronta {count} hotel e B&B a {city}. Pubblica una richiesta gratuita su {brand} e ricevi offerte personalizzate. Zero commissioni per chi viaggia.`,
      patternEn: `Compare {count} hotels and B&Bs in {city}. Publish a free stay request on {brand} and receive direct offers. No booking commission for travellers.`,
      translations: emptyLocales(),
    },
    hubIntroStandard: {
      patternIt: "Trova {count} strutture a {city} e richiedi un'offerta personalizzata su {brand}.",
      patternEn: "Find {count} properties in {city} and request a personalized offer on {brand}.",
      translations: emptyLocales(),
    },
    hubIntroPremium: {
      patternIt: "Esplora {count} strutture ricettive a {city}. Su {brand} puoi confrontare hotel, B&B e appartamenti e inviare una richiesta personalizzata per ricevere offerte dirette.",
      patternEn: "Explore {count} lodgings in {city}. On {brand} you can compare properties and request tailored offers without browsing dozens of booking sites.",
      translations: emptyLocales(),
    },
  };

  const hubs = CITIES_V1.map((city) => {
    const ctx = cityContext[city.contextKey];
    const prem = premium[city.slug];
    const faqIt = faqTemplate(city.nameIt, "it");
    const faqEn = faqTemplate(city.nameEn, "en");

    return {
      slug: city.slug,
      cityId: city.cityId,
      displayNameIt: city.nameIt,
      displayNameEn: city.nameEn,
      structureCountNote: "Sostituire {count} con numero reale al publish, o lasciare al runtime Fase 3",
      source: {
        titleIt: hubTitle(city.nameIt, countPlaceholder, "it"),
        titleEn: hubTitle(city.nameEn, countPlaceholder, "en"),
        metaDescriptionIt: hubDescription(city.nameIt, countPlaceholder, "it"),
        metaDescriptionEn: hubDescription(city.nameEn, countPlaceholder, "en"),
        introStandardIt: hubIntro(city.nameIt, countPlaceholder, "it", "standard"),
        introStandardEn: hubIntro(city.nameEn, countPlaceholder, "en", "standard"),
        introPremiumIt: hubIntro(city.nameIt, countPlaceholder, "it", "premium"),
        introPremiumEn: hubIntro(city.nameEn, countPlaceholder, "en", "premium"),
        editorialIt: prem?.it ?? null,
        editorialEn: prem?.en ?? null,
        poiPhraseIt: ctx?.phraseIt ?? null,
        poiPhraseEn: ctx?.phraseEn ?? null,
      },
      translations: {
        displayName: emptyLocales(),
        title: emptyLocales(),
        metaDescription: emptyLocales(),
        intro: emptyLocales(),
        editorial: emptyLocales(),
        poiPhrase: emptyLocales(),
      },
      faq: trFaq(faqIt, faqEn),
    };
  });

  const destinationHubs = {
    _comment: "30 hub destinazione — compila translations.* per ogni lingua. FAQ: question/answer per voce.",
    exportedAt: new Date().toISOString(),
    hubs,
  };

  fs.writeFileSync(path.join(OUT, "cities-v1.json"), `${JSON.stringify(citiesManifest, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT, "homepage.json"), `${JSON.stringify(homepage, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT, "destination-hubs.json"), `${JSON.stringify(destinationHubs, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT, "seo-templates.json"), `${JSON.stringify(seoTemplates, null, 2)}\n`);

  console.log(`Exported to ${OUT}`);
  console.log(`  cities-v1.json (${CITIES_V1.length} cities)`);
  console.log(`  homepage.json`);
  console.log(`  destination-hubs.json (${hubs.length} hubs)`);
  console.log(`  seo-templates.json`);
}

main();
