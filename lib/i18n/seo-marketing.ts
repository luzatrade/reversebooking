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
        description: "Pick a destination, dates, budget and preferences. One request reaches every matching hotel, B&B and apartment in the area.",
      },
      {
        title: "Receive offers",
        description: "Properties reply with personalised proposals. Compare prices, services and conditions, then chat directly.",
      },
      {
        title: "Choose the best deal",
        description: "Select the offer that suits you — no booking commission for travellers. Direct, transparent contact.",
      },
    ];
  }
  return [
    {
      title: "Droppa la richiesta",
      description: "Scegli destinazione, date, budget e preferenze. Una sola richiesta raggiunge tutti gli hotel e le strutture compatibili della zona.",
    },
    {
      title: "Ricevi offerte",
      description: "Le strutture rispondono con proposte personalizzate. Confronta prezzi, servizi e condizioni, poi parla direttamente con loro.",
    },
    {
      title: "Scegli la migliore",
      description: "Seleziona l'offerta più adatta a te — senza commissioni per chi viaggia. Contatto diretto e trasparente.",
    },
  ];
}

export type FaqSectionGroup = { title: string; items: FaqItem[] };

function getTravellerFaq(locale: Locale): FaqItem[] {
  if (locale === "en") {
    return [
      {
        question: "What is HotelsDrop and how does it help me find a property?",
        answer:
          "HotelsDrop is a reverse booking platform. Instead of searching hotel by hotel, you publish one stay request with destination, dates, budget and preferences. Every compatible property in the selected area receives it and can reply with a direct, personalised offer. You compare proposals and choose the best one for you — free of charge.",
      },
      {
        question: "Can I find a property and contact it directly?",
        answer:
          "Yes. You can browse the catalogue, open a property profile and contact it directly by email, phone or WhatsApp. You can also start a tailored negotiation by sending a stay request linked to that property or to the whole destination.",
      },
      {
        question: "How does a stay request reach hotels in my chosen area?",
        answer:
          "When you publish a request, HotelsDrop automatically forwards it to all active properties in the selected destination that match your dates, budget, room count and preferences. You do not need to write to each hotel separately: one request, many replies.",
      },
      {
        question: "Is HotelsDrop free for travellers?",
        answer:
          "Yes. Publishing requests, comparing offers and contacting properties is completely free for travellers. There are no booking commissions on the traveller side. Properties participate through a simple monthly subscription.",
      },
      {
        question: "What is reverse booking?",
        answer:
          "Reverse booking reverses the traditional flow: you do not hunt for the best rate across dozens of sites. You state what you need, and hotels compete to offer you the best direct proposal. Less time searching, more tailored deals.",
      },
    ];
  }
  return [
    {
      question: "Cos'è HotelsDrop e come mi aiuta a trovare una struttura?",
      answer:
        "HotelsDrop è una piattaforma di reverse booking. Invece di cercare hotel uno per uno, pubblichi una sola richiesta di soggiorno con destinazione, date, budget e preferenze. Tutte le strutture compatibili della zona selezionata la ricevono e possono risponderti con un'offerta diretta e personalizzata. Confronti le proposte e scegli quella migliore per te — gratuitamente.",
    },
    {
      question: "Posso trovare una struttura e contattarla direttamente?",
      answer:
        "Sì. Puoi esplorare il catalogo, aprire la scheda di un hotel, B&B o appartamento e contattarlo subito via email, telefono o WhatsApp. Oppure avviare una trattativa personalizzata inviando una richiesta di soggiorno collegata a quella struttura o all'intera destinazione.",
    },
    {
      question: "Come funziona l'invio di una richiesta agli hotel della zona?",
      answer:
        "Quando pubblichi una richiesta, HotelsDrop la inoltra automaticamente a tutte le strutture attive nella destinazione scelta che corrispondono a date, budget, numero camere e preferenze indicate. Non devi scrivere a ogni hotel singolarmente: una richiesta, molte risposte.",
    },
    {
      question: "HotelsDrop è gratis per chi viaggia?",
      answer:
        "Sì. Pubblicare richieste, confrontare offerte e contattare le strutture è completamente gratuito per i viaggiatori. Non ci sono commissioni di prenotazione a carico di chi viaggia. Le strutture partecipano con un abbonamento mensile.",
    },
    {
      question: "Cos'è il reverse booking?",
      answer:
        "Il reverse booking inverte il flusso tradizionale: non sei tu a cacciare la tariffa migliore su decine di siti. Sei tu a dire cosa ti serve, e sono gli hotel a proporti la miglior offerta diretta. Meno tempo perso a cercare, più proposte su misura.",
    },
  ];
}

function getAgencyGroupFaq(locale: Locale): FaqItem[] {
  if (locale === "en") {
    return [
      {
        question: "Can I use HotelsDrop for schools, groups, events or organised trips?",
        answer:
          "Yes. HotelsDrop is built for individual travellers and group requests alike: schools, companies, sports teams, associations, weddings, conferences and organised tours. You publish one detailed request and receive comparable offers from multiple properties.",
      },
      {
        question: "How does HotelsDrop help travel agencies?",
        answer:
          "Agencies often waste hours emailing hotels one by one. With HotelsDrop, a single click sends your request to every compatible property in the destination. You receive structured offers, compare them side by side and pick the best deal for your client — without a flood of manual emails.",
      },
      {
        question: "Do I still need to contact each hotel separately?",
        answer:
          "No. That is the core advantage. One request reaches all matching hotels in the selected area. Each property replies with its own proposal. You save time, reduce errors and keep every negotiation in one place.",
      },
    ];
  }
  return [
    {
      question: "Posso usare HotelsDrop per scuole, gruppi, eventi o viaggi organizzati?",
      answer:
        "Sì. HotelsDrop è pensato sia per viaggi individuali sia per richieste di gruppo: scuole, aziende, gruppi sportivi, associazioni, matrimoni, convention e tour organizzati. Pubblichi una richiesta dettagliata e ricevi offerte comparabili da più strutture.",
    },
    {
      question: "Come aiuta HotelsDrop le agenzie di viaggio?",
      answer:
        "Le agenzie spesso perdono ore a mandare email hotel per hotel. Con HotelsDrop, un solo click invia la richiesta a tutte le strutture compatibili della destinazione. Ricevi offerte strutturate, le confronti e scegli la migliore per il cliente — senza mille email manuali.",
    },
    {
      question: "Devo ancora contattare ogni hotel singolarmente?",
      answer:
        "No, è il vantaggio principale. Una sola richiesta raggiunge tutti gli hotel della zona selezionata che corrispondono ai criteri. Ogni struttura risponde con la propria proposta. Risparmi tempo, riduci errori e tieni tutto il processo in un unico posto.",
    },
  ];
}

function getPropertyFaq(locale: Locale): FaqItem[] {
  if (locale === "en") {
    return [
      {
        question: "What are the benefits for hotels and B&Bs?",
        answer:
          "You receive qualified stay requests instead of paying high OTA commissions on every booking. You reply with direct offers, fill empty dates, and keep the full value of the reservation. No commission on the booking itself — just a flat monthly subscription.",
      },
      {
        question: "Why are OTA visitors 'ghosts' for properties?",
        answer:
          "On traditional OTAs, travellers often browse anonymously and disappear after comparing prices. The property never builds a real relationship. On HotelsDrop every request comes with genuine intent: the traveller or agency wants a proposal, opens a dialogue and lets you showcase your offer and working style.",
      },
      {
        question: "Can I gain new agency contacts even if I do not close immediately?",
        answer:
          "Exactly. Every request — from a traveller or an agency — is a real contact, not anonymous traffic. Even if the deal is not closed today, you have met a new partner, shown your proposal and started a relationship that can become a future collaboration.",
      },
      {
        question: "How does the subscription work for properties?",
        answer:
          "Properties join HotelsDrop with a simple monthly subscription. They receive relevant requests for their destination, reply with direct offers and negotiate without OTA commissions on bookings. Ideal for filling last-minute dates and building a direct client base.",
      },
    ];
  }
  return [
    {
      question: "Quali vantaggi ha un hotel o un B&B?",
      answer:
        "Ricevi richieste di soggiorno qualificate invece di pagare alte commissioni OTA su ogni prenotazione. Rispondi con offerte dirette, riempi le date vacanti e mantieni il valore pieno della prenotazione. Nessuna commissione sulla prenotazione — solo un abbonamento mensile fisso.",
    },
    {
      question: "Perché sui portali OTA il viaggiatore è un 'fantasma' per le strutture?",
      answer:
        "Sui portali tradizionali spesso il viaggiatore naviga in anonimo e sparisce dopo aver comparato i prezzi. La struttura non costruisce un rapporto vero. Su HotelsDrop ogni richiesta ha intenzione reale: il viaggiatore o l'agenzia vuole una proposta, apre un dialogo e ti permette di mostrare la tua offerta e il tuo modo di lavorare.",
    },
    {
      question: "Posso conoscere nuove agenzie anche se non chiudo subito l'offerta?",
      answer:
        "Proprio così. Ogni richiesta — da un viaggiatore o da un'agenzia — è un contatto reale, non traffico anonimo. Anche se oggi non si conclude, hai conosciuto un nuovo partner, presentato la tua proposta e avviato un rapporto che può diventare una collaborazione futura.",
    },
    {
      question: "Come funziona l'abbonamento per le strutture?",
      answer:
        "Le strutture aderiscono a HotelsDrop con un abbonamento mensile semplice. Ricevono richieste pertinenti per la propria destinazione, rispondono con offerte dirette e trattano senza commissioni OTA sulle prenotazioni. Ideale per riempire date last minute e costruire una base clienti diretta.",
    },
  ];
}

export function getHomeFaqSections(locale: Locale): FaqSectionGroup[] {
  if (locale === "en") {
    return [
      { title: "For travellers", items: getTravellerFaq(locale) },
      { title: "For groups and travel agencies", items: getAgencyGroupFaq(locale) },
      { title: "For properties", items: getPropertyFaq(locale) },
    ];
  }
  return [
    { title: "Per chi viaggia", items: getTravellerFaq(locale) },
    { title: "Per gruppi e agenzie di viaggio", items: getAgencyGroupFaq(locale) },
    { title: "Per le strutture ricettive", items: getPropertyFaq(locale) },
  ];
}

/** Flat list for JSON-LD FAQPage schema. */
export function getHomeFaq(locale: Locale): FaqItem[] {
  return getHomeFaqSections(locale).flatMap((section) => section.items);
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

export function getDestinationFaq(locale: Locale, cityName: string): FaqItem[] {
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
  ];
}

export function getHotelFaq(locale: Locale): FaqItem[] {
  if (locale === "en") {
    return [
      {
        question: "How do I request an offer from this property?",
        answer:
          "Create a stay request with your dates, budget and preferences — it will reach this property and other compatible ones in the area. Or contact the property directly from this page via email, phone or WhatsApp.",
      },
      {
        question: "Does one request reach all hotels in the area?",
        answer:
          "Yes. When you publish a request for a destination, HotelsDrop forwards it to every active property that matches your criteria. You receive multiple offers and choose the best one for you.",
      },
      {
        question: "Is HotelsDrop free for me?",
        answer:
          "Yes. Publishing requests and comparing offers is free for travellers and agencies. There are no booking commissions on your side.",
      },
      {
        question: "Why is this different from booking on an OTA?",
        answer:
          "On OTAs you search anonymously and often never speak to the hotel. On HotelsDrop you start a real dialogue: the property sends a tailored offer, you know who you are dealing with, and even if you do not book today, you have opened a direct relationship.",
      },
    ];
  }
  return [
    {
      question: "Come chiedo un'offerta a questa struttura?",
      answer:
        "Crea una richiesta di soggiorno con date, budget e preferenze — arriverà a questa struttura e alle altre compatibili della zona. Oppure contattala direttamente da questa pagina via email, telefono o WhatsApp.",
    },
    {
      question: "Una richiesta raggiunge tutti gli hotel della zona?",
      answer:
        "Sì. Quando pubblichi una richiesta per una destinazione, HotelsDrop la inoltra a tutte le strutture attive che corrispondono ai tuoi criteri. Ricevi più offerte e scegli quella migliore per te.",
    },
    {
      question: "HotelsDrop è gratis per me?",
      answer:
        "Sì. Pubblicare richieste e confrontare offerte è gratuito per viaggiatori e agenzie. Non ci sono commissioni di prenotazione a tuo carico.",
    },
    {
      question: "Perché è diverso dalla prenotazione su un portale OTA?",
      answer:
        "Sui portali OTA cerchi in anonimo e spesso non parli mai con l'hotel. Su HotelsDrop avvii un dialogo reale: la struttura ti manda un'offerta su misura, sai con chi stai trattando e, anche se non prenoti oggi, hai aperto un rapporto diretto.",
    },
  ];
}

export function getAboutAudienceBlocks(locale: Locale) {
  if (locale === "en") {
    return {
      travellersTitle: "For travellers",
      travellersBody:
        "Find a property, contact it directly or send one request to every hotel in your destination. Compare offers and pick the best deal — free, with no booking commission.",
      partnersTitle: "For properties",
      partnersBody:
        "Receive real requests from travellers and agencies — not anonymous OTA traffic. Build direct relationships, fill your calendar and discover new partners for future collaborations.",
    };
  }
  return {
    travellersTitle: "Per chi viaggia",
    travellersBody:
      "Trova una struttura, contattala direttamente o invia una richiesta a tutti gli hotel della destinazione. Confronta le offerte e scegli la migliore — gratis, senza commissioni.",
    partnersTitle: "Per le strutture",
    partnersBody:
      "Ricevi richieste vere da viaggiatori e agenzie — non traffico anonimo da OTA. Costruisci relazioni dirette, riempi il calendario e scopri nuovi partner per collaborazioni future.",
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
