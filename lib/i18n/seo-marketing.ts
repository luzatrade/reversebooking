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
  venezia: {
    it: "Venezia richiede pianificazione tra sestieri, isole e Mestre. Con HotelsDrop invii una richiesta chiara e le strutture veneziane ti propongono soluzioni dirette, senza commissioni sul viaggiatore.",
    en: "Venice calls for planning across districts, islands and Mestre. With HotelsDrop you send a clear request and Venetian properties propose direct solutions, with no traveller commission.",
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
