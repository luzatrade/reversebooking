import type { Locale } from "@/lib/i18n/translations";

export type FaqItem = { question: string; answer: string };
export type HowItWorksStep = { title: string; description: string };

const PREMIUM_DESTINATION_INTROS: Record<string, { it: string; en: string }> = {
  roma: {
    it: "Roma concentra hotel, B&B e guest house tra Centro Storico, Trastevere, Termini e EUR. Su HotelsDrop pubblichi una sola richiesta con date e budget: le strutture della Capitale rispondono con proposte dirette, senza commissioni per chi viaggia.",
    en: "Rome offers hotels, B&Bs and guest houses across the historic centre, Trastevere, Termini and EUR. On HotelsDrop you publish one request with dates and budget, and local properties reply with direct offers — free for travellers.",
  },
  milano: {
    it: "Milano è ideale per soggiorni business e leisure, con strutture vicino al Duomo, Porta Garibaldi e Fiera. Con HotelsDrop confronti offerte personalizzate dagli hotel milanesi senza cercare su decine di portali.",
    en: "Milan suits business and leisure stays, with properties near the Duomo, Porta Garibaldi and the trade fair. HotelsDrop lets you compare tailored offers from Milan hotels without browsing dozens of booking sites.",
  },
  napoli: {
    it: "Napoli e il suo golfo offrono soluzioni per city break, mare e partenze verso Capri e la Costiera. Invia una richiesta su HotelsDrop e ricevi proposte dirette da hotel e B&B selezionati in città.",
    en: "Naples and its gulf suit city breaks, seaside stays and trips toward Capri and the Amalfi Coast. Send one request on HotelsDrop and receive direct proposals from local hotels and B&Bs.",
  },
  firenze: {
    it: "Firenze attira viaggiatori per arte, enogastronomia e base per la Toscana. Su HotelsDrop le strutture fiorentine rispondono alla tua richiesta con offerte su misura per date, budget e servizi desiderati.",
    en: "Florence draws travellers for art, food and Tuscany trips. On HotelsDrop Florentine properties reply to your request with tailored offers for your dates, budget and preferred services.",
  },
  torino: {
    it: "Torino unisce hotel business, boutique e B&B tra centro e Lingotto. Su HotelsDrop invii una richiesta e ricevi offerte dirette per eventi, ski trip verso le Alpi e city break.",
    en: "Turin blends business hotels, boutiques and B&Bs across the centre and Lingotto. Send one HotelsDrop request and receive direct offers for events, alpine trips and city breaks.",
  },
  bologna: {
    it: "Bologna è perfetta per food tour, università e fiere. Le strutture bolognesi su HotelsDrop rispondono con proposte su misura per budget, zona e servizi richiesti.",
    en: "Bologna suits food tours, university visits and trade fairs. Bologna properties on HotelsDrop reply with offers tailored to your budget, area and required services.",
  },
  catania: {
    it: "Catania è base ideale per Etna, mare e barocco siciliano. Pubblica la tua richiesta su HotelsDrop e confronta offerte dirette da hotel e B&B dell'area.",
    en: "Catania is a strong base for Etna, the coast and Sicilian baroque. Publish your request on HotelsDrop and compare direct offers from local hotels and B&Bs.",
  },
  palermo: {
    it: "Palermo concentra strutture tra centro storico, waterfront e aeroporto. Con HotelsDrop una richiesta raggiunge hotel e guest house compatibili con le tue date.",
    en: "Palermo offers stays across the historic centre, waterfront and airport area. One HotelsDrop request reaches compatible hotels and guest houses for your dates.",
  },
  bari: {
    it: "Bari e la Puglia attirano mare, borghi e itinerari slow. Su HotelsDrop le strutture pugliesi inviano proposte dirette senza commissioni per chi viaggia.",
    en: "Bari and Puglia attract seaside stays, villages and slow travel. On HotelsDrop Apulian properties send direct offers with no traveller commission.",
  },
  verona: {
    it: "Verona unisce Arena, romanticismo e prossimità al Lago di Garda. Invia una richiesta personalizzata e ricevi offerte da hotel e B&B veronesi.",
    en: "Verona combines the Arena, romantic breaks and Lake Garda access. Send a personalised request and receive offers from Verona hotels and B&Bs.",
  },
  rimini: {
    it: "Rimini e la Riviera romagnola sono ideali per mare, famiglie ed eventi. HotelsDrop mette in contatto la tua richiesta con hotel e residence della zona.",
    en: "Rimini and the Romagna riviera suit beach holidays, families and events. HotelsDrop connects your request with local hotels and residences.",
  },
  parigi: {
    it: "Parigi richiede scelta di quartiere: Marais, Saint-Germain, Montmartre. Su HotelsDrop invii una richiesta e ricevi proposte dirette da strutture parigine.",
    en: "Paris calls for neighbourhood choice: Marais, Saint-Germain, Montmartre. On HotelsDrop you send one request and receive direct proposals from Paris properties.",
  },
  londra: {
    it: "Londra offre hotel in City, Westminster e zone ben servite da metro. HotelsDrop semplifica il confronto con offerte dirette dalle strutture londinesi.",
    en: "London offers hotels in the City, Westminster and well-connected districts. HotelsDrop simplifies comparison with direct offers from London properties.",
  },
  barcelona: {
    it: "Barcellona combina Eixample, Barceloneta e Gràcia per ogni stile di viaggio. Pubblica la tua richiesta e ricevi offerte personalizzate dalle strutture catalane.",
    en: "Barcelona spans Eixample, Barceloneta and Gràcia for every travel style. Publish your request and receive tailored offers from Catalan properties.",
  },
  amsterdam: {
    it: "Amsterdam richiede pianificazione tra canali, musei e quartieri vivaci. Con HotelsDrop le strutture olandesi rispondono con offerte dirette alla tua richiesta.",
    en: "Amsterdam rewards planning across canals, museums and lively districts. With HotelsDrop Dutch properties reply to your request with direct offers.",
  },
  berlino: {
    it: "Berlino offre hotel creativi, business e boutique tra Mitte, Kreuzberg e Prenzlauer Berg. Su HotelsDrop confronti proposte dirette per il tuo soggiorno.",
    en: "Berlin offers creative, business and boutique stays in Mitte, Kreuzberg and Prenzlauer Berg. On HotelsDrop you compare direct proposals for your stay.",
  },
  madrid: {
    it: "Madrid concentra strutture vicino a Prado, Retiro e Gran Vía. Invia una richiesta su HotelsDrop e ricevi offerte dirette da hotel e appartamenti.",
    en: "Madrid clusters properties near the Prado, Retiro and Gran Vía. Send a HotelsDrop request and receive direct offers from hotels and apartments.",
  },
  tokyo: {
    it: "Tokyo richiede scelta di zona tra Shibuya, Shinjuku e Asakusa. HotelsDrop collega la tua richiesta con strutture giaponesi che rispondono con proposte su misura.",
    en: "Tokyo requires choosing areas like Shibuya, Shinjuku and Asakusa. HotelsDrop connects your request with Japanese properties that reply with tailored offers.",
  },
};

export function getHomeHowItWorks(locale: Locale): HowItWorksStep[] {
  if (locale === "en") {
    return [
      {
        title: "Drop your request",
        description: "Choose destination, dates, budget and preferences. One request reaches every matching property.",
      },
      {
        title: "Receive offers",
        description: "Hotels, B&Bs and apartments reply with personalised proposals. Compare and chat directly.",
      },
      {
        title: "Choose and book",
        description: "Pick the best offer with no booking commission for travellers. Transparent and direct.",
      },
    ];
  }
  return [
    {
      title: "Droppa la richiesta",
      description: "Scegli destinazione, date, budget e preferenze. Una sola richiesta raggiunge tutte le strutture compatibili.",
    },
    {
      title: "Ricevi offerte",
      description: "Hotel, B&B e appartamenti rispondono con proposte personalizzate. Confronta e chatta in diretta.",
    },
    {
      title: "Scegli e prenota",
      description: "Seleziona l'offerta migliore senza commissioni per chi viaggia. Trasparente e diretto.",
    },
  ];
}

export function getHomeFaq(locale: Locale): FaqItem[] {
  if (locale === "en") {
    return [
      {
        question: "Is HotelsDrop free for travellers?",
        answer: "Yes. Publishing a stay request and comparing offers is free for travellers. Properties join via subscription.",
      },
      {
        question: "What is reverse booking?",
        answer: "You publish where and when you want to stay. Matching hotels send you offers instead of you searching listing by listing.",
      },
      {
        question: "How does it work for hotels?",
        answer: "Properties subscribe to HotelsDrop, receive relevant requests and reply with direct offers without OTA commissions on bookings.",
      },
      {
        question: "Can I request group stays?",
        answer: "Yes. HotelsDrop works for individuals, schools, companies, events, sports groups and travel agencies.",
      },
    ];
  }
  return [
    {
      question: "HotelsDrop è gratis per chi viaggia?",
      answer: "Sì. Pubblicare una richiesta di soggiorno e confrontare le offerte è gratuito per i viaggiatori. Le strutture partecipano con abbonamento.",
    },
    {
      question: "Cos'è il reverse booking?",
      answer: "Pubblichi dove e quando vuoi soggiornare. Sono le strutture compatibili a inviarti offerte, invece di cercare hotel uno per uno.",
    },
    {
      question: "Come funziona per gli hotel?",
      answer: "Le strutture si abbonano a HotelsDrop, ricevono richieste pertinenti e rispondono con offerte dirette senza commissioni OTA sulla prenotazione.",
    },
    {
      question: "Posso usare HotelsDrop per gruppi?",
      answer: "Sì. La piattaforma è adatta a viaggi individuali, scuole, aziende, eventi, gruppi sportivi e agenzie.",
    },
  ];
}

export function getDestinationHowItWorks(locale: Locale, cityName: string): string[] {
  if (locale === "en") {
    return [
      `Create a free request for ${cityName} with dates, budget and preferences.`,
      `Compare direct offers from properties in ${cityName}.`,
      "Book with no commission for travellers.",
    ];
  }
  return [
    `Crea una richiesta gratuita per ${cityName} con date, budget e preferenze.`,
    `Confronta offerte dirette dalle strutture di ${cityName}.`,
    "Prenota senza commissioni per chi viaggia.",
  ];
}

export function getDestinationEditorial(
  slug: string,
  displayName: string,
  structureCount: number,
  locale: Locale,
): string {
  const premium = PREMIUM_DESTINATION_INTROS[slug];
  if (premium) return locale === "en" ? premium.en : premium.it;

  if (locale === "en") {
    return `Browse ${structureCount} indexed properties in ${displayName}. Send one personalised request on HotelsDrop and receive direct proposals from local hosts without browsing multiple booking sites.`;
  }
  return `Scopri ${structureCount} strutture indicizzate a ${displayName}. Invia una richiesta personalizzata su HotelsDrop e ricevi proposte dirette dalle strutture locali, senza cercare su decine di portali.`;
}

export function getHotelFaq(locale: Locale): FaqItem[] {
  if (locale === "en") {
    return [
      {
        question: "How do I request an offer?",
        answer: "Create a stay request with your dates and budget, or contact the property directly from this page.",
      },
      {
        question: "Is there a fee for me?",
        answer: "No. HotelsDrop is free for travellers. You compare direct offers without booking commission.",
      },
    ];
  }
  return [
    {
      question: "Come chiedo un'offerta?",
      answer: "Crea una richiesta di soggiorno con date e budget, oppure contatta la struttura direttamente da questa pagina.",
    },
    {
      question: "Ci sono costi per me?",
      answer: "No. HotelsDrop è gratuito per chi viaggia. Confronti offerte dirette senza commissioni di prenotazione.",
    },
  ];
}

export function getAboutAudienceBlocks(locale: Locale) {
  if (locale === "en") {
    return {
      travellersTitle: "For travellers",
      travellersBody: "Publish one request, receive tailored offers, compare and book with no commission.",
      partnersTitle: "For properties",
      partnersBody: "Subscribe, receive relevant requests and fill your calendar with direct bookings.",
    };
  }
  return {
    travellersTitle: "Per chi viaggia",
    travellersBody: "Pubblica una richiesta, ricevi offerte su misura, confronta e prenota senza commissioni.",
    partnersTitle: "Per le strutture",
    partnersBody: "Abbonati, ricevi richieste pertinenti e riempi il calendario con prenotazioni dirette.",
  };
}

export function getMarketingLabels(locale: Locale) {
  if (locale === "en") {
    return {
      howItWorksTitle: "How HotelsDrop works",
      howItWorksSubtitle: "Reverse booking in three steps",
      faqTitle: "Frequently asked questions",
      relatedDestinations: "Explore more destinations",
      destinationHowItWorks: "How it works here",
      otherHotels: "More properties in this area",
      footerTagline: "Reverse booking: properties send you offers. Free for travellers.",
      faqNav: "FAQ",
      destinationsNav: "Destinations",
    };
  }
  return {
    howItWorksTitle: "Come funziona HotelsDrop",
    howItWorksSubtitle: "Il reverse booking in tre passaggi",
    faqTitle: "Domande frequenti",
    relatedDestinations: "Esplora altre destinazioni",
    destinationHowItWorks: "Come funziona qui",
    otherHotels: "Altre strutture in zona",
    footerTagline: "Reverse booking: le strutture ti fanno offerte. Gratis per chi viaggia.",
    faqNav: "FAQ",
    destinationsNav: "Destinazioni",
  };
}
