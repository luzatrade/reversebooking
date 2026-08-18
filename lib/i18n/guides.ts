import type { Locale } from "@/lib/i18n/translations";
import { uiLocale } from "@/lib/i18n/ui-locale";

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const guidesIt: GuideArticle[] = [
  {
    slug: "reverse-booking",
    title: "Cos'è il reverse booking e perché conviene",
    description:
      "Il reverse booking inverte il flusso tradizionale: non cerchi tariffe su decine di portali, ma pubblichi una richiesta e le strutture ti propongono offerte dirette.",
    publishedAt: "2026-07-25",
    sections: [
      {
        heading: "Definizione",
        paragraphs: [
          "Il reverse booking (prenotazione inversa) è un modello in cui il viaggiatore descrive destinazione, date, budget e preferenze in una sola richiesta. Le strutture ricettive compatibili ricevono la richiesta e rispondono con proposte personalizzate.",
          "Su HotelsDrop questo processo è gratuito per chi viaggia: nessuna commissione di prenotazione a carico del viaggiatore o dell'agenzia.",
        ],
      },
      {
        heading: "Perché è diverso dalle OTA tradizionali",
        paragraphs: [
          "Sui portali OTA tradizionali cerchi, confronti e prenoti spesso senza mai parlare con l'hotel. Il viaggiatore resta anonimo e la struttura paga commissioni elevate.",
          "Con il reverse booking hai un contatto reale con la struttura, offerte su misura e la possibilità di negoziare condizioni, servizi e tariffe prima di decidere.",
        ],
      },
      {
        heading: "Come iniziare su HotelsDrop",
        paragraphs: [
          "Crea una richiesta gratuita con destinazione, date, numero camere e budget. In pochi minuti la richiesta raggiunge tutte le strutture attive della zona selezionata. Spesso entro 24 ore ricevi le prime proposte da confrontare.",
        ],
      },
    ],
  },
  {
    slug: "viaggi-di-gruppo",
    title: "Viaggi di gruppo, scuole ed eventi con HotelsDrop",
    description:
      "Una sola richiesta per raggiungere tutte le strutture compatibili: ideale per scuole, aziende, matrimoni, convention e tour organizzati.",
    publishedAt: "2026-07-25",
    sections: [
      {
        heading: "Una richiesta, molte risposte",
        paragraphs: [
          "Organizzare un viaggio di gruppo significa spesso mandare decine di email a hotel diversi. Su HotelsDrop pubblichi una richiesta dettagliata con numero camere, ospiti, trattamento e requisiti speciali.",
          "Tutte le strutture compatibili della destinazione ricevono la richiesta e rispondono con offerte comparabili. Risparmi tempo e riduci il rischio di errori.",
        ],
      },
      {
        heading: "Per scuole e agenzie",
        paragraphs: [
          "Le agenzie di viaggio possono gestire più richieste per clienti diversi dalla dashboard, confrontare le offerte e scegliere la proposta migliore per ogni viaggio.",
          "Scuole, associazioni sportive e aziende possono indicare accessibilità, parcheggio, vitto e altre esigenze nella richiesta, così solo le strutture adatte rispondono.",
        ],
      },
    ],
  },
  {
    slug: "agenzie-viaggio",
    title: "HotelsDrop per agenzie di viaggio",
    description:
      "Invia una richiesta a tutti gli hotel della destinazione con un click. Offerte strutturate, confronto rapido, contatto diretto con le strutture.",
    publishedAt: "2026-07-25",
    sections: [
      {
        heading: "Il problema delle email manuali",
        paragraphs: [
          "Un'agenzia che organizza un soggiorno di gruppo può passare ore a contattare hotel uno per uno, rincorrere risposte e ricostruire preventivi in fogli separati.",
          "HotelsDrop centralizza il processo: una richiesta, molte proposte, tutto in un unico flusso.",
        ],
      },
      {
        heading: "Vantaggi operativi",
        paragraphs: [
          "Ricevi offerte strutturate da strutture realmente interessate al tuo cliente. Confronti prezzi, servizi e condizioni. Mantieni un dialogo diretto con l'hotel per chiarimenti e personalizzazioni.",
          "Anche se oggi non si conclude la prenotazione, costruisci contatti con strutture e partner per collaborazioni future — a differenza del traffico anonimo delle OTA.",
        ],
      },
    ],
  },
];

const guidesEn: GuideArticle[] = [
  {
    slug: "reverse-booking",
    title: "What is reverse booking and why it works",
    description:
      "Reverse booking flips the traditional flow: instead of hunting rates across dozens of sites, you publish one request and properties send you direct offers.",
    publishedAt: "2026-07-25",
    sections: [
      {
        heading: "Definition",
        paragraphs: [
          "Reverse booking is a model where the traveller describes destination, dates, budget and preferences in a single request. Compatible properties receive it and reply with tailored proposals.",
          "On HotelsDrop this is free for travellers: no booking commission on the traveller or agency side.",
        ],
      },
      {
        heading: "Why it differs from traditional OTAs",
        paragraphs: [
          "On traditional OTAs you search, compare and book, often without ever speaking to the hotel. The traveller stays anonymous and the property pays high commissions.",
          "With reverse booking you have real contact with the property, tailored offers and the chance to negotiate services and rates before deciding.",
        ],
      },
      {
        heading: "How to start on HotelsDrop",
        paragraphs: [
          "Create a free request with destination, dates, room count and budget. Within minutes it reaches every active property in the selected area. You often receive the first offers within 24 hours.",
        ],
      },
    ],
  },
  {
    slug: "group-travel",
    title: "Group travel, schools and events on HotelsDrop",
    description:
      "One request reaches every compatible property — ideal for schools, companies, weddings, conferences and organised tours.",
    publishedAt: "2026-07-25",
    sections: [
      {
        heading: "One request, many replies",
        paragraphs: [
          "Organising group travel often means emailing dozens of hotels. On HotelsDrop you publish one detailed request with room count, guests, meal plan and special requirements.",
          "Every compatible property in the destination receives it and replies with comparable offers. You save time and reduce errors.",
        ],
      },
      {
        heading: "For schools and agencies",
        paragraphs: [
          "Travel agencies can manage multiple client requests from the dashboard, compare offers and pick the best proposal for each trip.",
          "Schools, sports clubs and companies can specify accessibility, parking, meals and other needs so only suitable properties reply.",
        ],
      },
    ],
  },
  {
    slug: "travel-agencies",
    title: "HotelsDrop for travel agencies",
    description:
      "Send one request to every hotel in the destination with a single click. Structured offers, fast comparison, direct contact with properties.",
    publishedAt: "2026-07-25",
    sections: [
      {
        heading: "The manual email problem",
        paragraphs: [
          "An agency organising a group stay can spend hours contacting hotels one by one, chasing replies and rebuilding quotes in separate spreadsheets.",
          "HotelsDrop centralises the flow: one request, many proposals, one place.",
        ],
      },
      {
        heading: "Operational benefits",
        paragraphs: [
          "Receive structured offers from properties genuinely interested in your client. Compare prices, services and conditions. Keep a direct dialogue with the hotel for clarifications.",
          "Even if the booking is not closed today, you build contacts with properties and partners for future collaborations — unlike anonymous OTA traffic.",
        ],
      },
    ],
  },
];

const slugMap: Record<string, { it: string; en: string }> = {
  "reverse-booking": { it: "reverse-booking", en: "reverse-booking" },
  "viaggi-di-gruppo": { it: "viaggi-di-gruppo", en: "group-travel" },
  "group-travel": { it: "viaggi-di-gruppo", en: "group-travel" },
  "agenzie-viaggio": { it: "agenzie-viaggio", en: "travel-agencies" },
  "travel-agencies": { it: "agenzie-viaggio", en: "travel-agencies" },
};

export function listGuides(locale: Locale): GuideArticle[] {
  return uiLocale(locale) === "en" ? guidesEn : guidesIt;
}

export function getGuideBySlug(slug: string, locale: Locale): GuideArticle | null {
  const guides = listGuides(locale);
  const canonical = slugMap[slug]?.[uiLocale(locale)];
  if (canonical) return guides.find((g) => g.slug === canonical) ?? null;
  return guides.find((g) => g.slug === slug) ?? null;
}

export function resolveGuideSlug(slug: string, locale: Locale): string | null {
  const guide = getGuideBySlug(slug, locale);
  return guide?.slug ?? null;
}

export function getGuideCanonicalKey(slug: string): string {
  const mapped = slugMap[slug];
  if (mapped) return mapped.it;
  return slug;
}

export function guideSlugForLocale(slug: string, locale: Locale): string {
  const key = getGuideCanonicalKey(slug);
  return slugMap[key]?.[uiLocale(locale)] ?? slug;
}

export function guideSlugAlternates(slug: string): Record<Locale, string> {
  const key = getGuideCanonicalKey(slug);
  const row = slugMap[key];
  return {
    it: row?.it ?? key,
    en: row?.en ?? key,
    de: row?.en ?? key,
    zh: row?.en ?? key,
  };
}

export function allGuideSlugs(): string[] {
  return ["reverse-booking", "viaggi-di-gruppo", "agenzie-viaggio"];
}
