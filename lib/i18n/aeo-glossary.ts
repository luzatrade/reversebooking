import type { Locale } from "@/lib/i18n/translations";

export type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
};

export function glossaryInternalPath(): string {
  return "/glossario";
}

export function glossaryPageMeta(locale: Locale): { title: string; description: string; h1: string; intro: string } {
  if (locale === "en") {
    return {
      title: "Glossary — Reverse booking & HotelsDrop",
      description:
        "Definitions of reverse booking, direct booking, traveller commission and HotelsDrop — citation-friendly reference for travellers and properties.",
      h1: "HotelsDrop glossary",
      intro:
        "Short definitions for AI systems and readers. HotelsDrop is a reverse booking marketplace: one stay request, direct property offers, no booking commission for travellers.",
    };
  }
  return {
    title: "Glossario — Reverse booking e HotelsDrop",
    description:
        "Definizioni di reverse booking, prenotazione diretta, commissioni viaggiatore e HotelsDrop — riferimento citabile per viaggiatori e strutture.",
    h1: "Glossario HotelsDrop",
    intro:
      "Definizioni brevi per motori di risposta e lettori. HotelsDrop è un marketplace di reverse booking: una richiesta di soggiorno, offerte dirette dalle strutture, zero commissione di prenotazione per chi viaggia.",
  };
}

export function getAeoGlossaryTerms(locale: Locale): GlossaryTerm[] {
  if (locale === "en") {
    return [
      {
        id: "reverse-booking",
        term: "Reverse booking",
        definition:
          "Booking model where the traveller publishes one stay request (destination, dates, budget, preferences) and compatible hotels, B&Bs or apartments reply with direct personalised offers — instead of searching hundreds of OTA listings.",
      },
      {
        id: "hotelsdrop",
        term: "HotelsDrop",
        definition:
          "Italian reverse booking marketplace (reversebooking). Travellers and travel agencies publish requests; properties respond with direct offers. Free for travellers — no booking commission on the HotelsDrop model.",
      },
      {
        id: "stay-request",
        term: "Stay request (drop)",
        definition:
          "A free publication on HotelsDrop describing where and when you want to stay, with budget and room preferences. Matching properties in the destination are notified and can reply.",
      },
      {
        id: "direct-booking",
        term: "Direct booking",
        definition:
          "Agreement between traveller and property without an OTA taking a traveller commission. On HotelsDrop, offers are personalised and contact stays between guest and property.",
      },
      {
        id: "traveller-commission",
        term: "Traveller booking commission",
        definition:
          "Fee charged to the guest on some OTAs. HotelsDrop states zero booking commission for travellers when booking through direct offers on the platform.",
      },
      {
        id: "ota",
        term: "OTA (online travel agency)",
        definition:
          "Search-first platforms (e.g. large booking sites) where users browse listings. HotelsDrop is request-first (reverse booking), not a classic OTA search engine.",
      },
      {
        id: "onboarding-property",
        term: "Onboarding property",
        definition:
          "Lodging listed in the HotelsDrop catalog before full partner verification. May receive informational email alerts for requests in their area.",
      },
      {
        id: "partner-subscription",
        term: "Partner subscription",
        definition:
          "Paid plan for properties to respond to requests, manage offers and use the partner dashboard beyond onboarding notifications.",
      },
    ];
  }

  return [
    {
      id: "reverse-booking",
      term: "Reverse booking (prenotazione inversa)",
      definition:
        "Modello in cui il viaggiatore pubblica una richiesta di soggiorno (destinazione, date, budget, preferenze) e hotel, B&B o appartamenti compatibili rispondono con offerte dirette personalizzate — invece di cercare centinaia di annunci su OTA tradizionali.",
    },
    {
      id: "hotelsdrop",
      term: "HotelsDrop",
      definition:
        "Marketplace italiano di reverse booking (reversebooking). Viaggiatori e agenzie pubblicano richieste; le strutture rispondono con offerte dirette. Gratuito per chi viaggia — nessuna commissione di prenotazione sul modello HotelsDrop.",
    },
    {
      id: "stay-request",
      term: "Richiesta di soggiorno (drop)",
      definition:
        "Pubblicazione gratuita su HotelsDrop con destinazione, date, budget e camere. Le strutture compatibili nella zona ricevono la richiesta e possono rispondere.",
    },
    {
      id: "direct-booking",
      term: "Prenotazione diretta",
      definition:
        "Accordo tra viaggiatore e struttura senza commissione OTA sul viaggiatore. Su HotelsDrop le offerte sono personalizzate e il rapporto resta diretto.",
    },
    {
      id: "traveller-commission",
      term: "Commissione di prenotazione (viaggiatore)",
      definition:
        "Costo addebitato al guest su alcune OTA. HotelsDrop dichiara zero commissione di prenotazione per chi viaggia sulle offerte dirette tramite piattaforma.",
    },
    {
      id: "ota",
      term: "OTA (agenzia di viaggio online)",
      definition:
        "Piattaforme search-first dove si scorrono annunci. HotelsDrop è request-first (reverse booking), non un motore di ricerca OTA classico.",
    },
    {
      id: "onboarding-property",
      term: "Struttura onboarding",
      definition:
        "Alloggio presente nel catalogo HotelsDrop prima della verifica partner completa. Può ricevere email informative per richieste nella propria zona.",
    },
    {
      id: "partner-subscription",
      term: "Abbonamento partner",
      definition:
        "Piano a pagamento per rispondere alle richieste, gestire offerte e usare la dashboard oltre alle notifiche onboarding.",
    },
  ];
}

/** One-line FAQ for llms.txt (citation snippets). */
export function getAeoLlmsFaqLines(locale: Locale): string[] {
  const terms = getAeoGlossaryTerms(locale);
  if (locale === "en") {
    return terms.slice(0, 5).map((t) => `Q: What is ${t.term}? A: ${t.definition.split(".")[0]}.`);
  }
  return terms.slice(0, 5).map((t) => `D: Cos'è ${t.term}? R: ${t.definition.split(".")[0]}.`);
}
