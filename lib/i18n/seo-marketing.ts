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
    it: "Tokyo richiede scelta di zona tra Shibuya, Shinjuku e Asakusa. HotelsDrop collega la tua richiesta con strutture giapponesi che rispondono con proposte su misura.",
    en: "Tokyo requires choosing areas like Shibuya, Shinjuku and Asakusa. HotelsDrop connects your request with Japanese properties that reply with tailored offers.",
  },
  venezia: {
    it: "Venezia offre hotel e B&B tra San Marco, Cannaregio e Mestre. Su HotelsDrop invii una richiesta e ricevi offerte dirette dalle strutture venete.",
    en: "Venice offers hotels and B&Bs across San Marco, Cannaregio and Mestre. Send one HotelsDrop request and receive direct offers from Venetian properties.",
  },
  genova: {
    it: "Genova unisce porto, centro storico e Riviera di Levante. HotelsDrop mette in contatto la tua richiesta con hotel e B&B della Superba.",
    en: "Genoa blends its port, historic centre and the Levante riviera. HotelsDrop connects your request with local hotels and B&Bs.",
  },
  padova: {
    it: "Padova è ideale per università, cultura e prossimità a Venezia. Le strutture padovane su HotelsDrop rispondono con offerte su misura.",
    en: "Padua suits university visits, culture and Venice day trips. Padua properties on HotelsDrop reply with tailored offers.",
  },
  trieste: {
    it: "Trieste unisce Europa centrale e Adriatico. Su HotelsDrop confronti proposte dirette da hotel e B&B della città.",
    en: "Trieste blends Central European charm and the Adriatic. Compare direct proposals from Trieste hotels and B&Bs on HotelsDrop.",
  },
  salerno: {
    it: "Salerno è porta d'accesso alla Costiera Amalfitana. Invia una richiesta su HotelsDrop e ricevi offerte da strutture campane.",
    en: "Salerno is the gateway to the Amalfi Coast. Send a HotelsDrop request and receive offers from Campania properties.",
  },
  perugia: {
    it: "Perugia e l'Umbria attirano enogastronomia e borghi medievali. HotelsDrop collega la tua richiesta con strutture umbre.",
    en: "Perugia and Umbria attract food lovers and medieval villages. HotelsDrop connects your request with Umbrian properties.",
  },
  siracusa: {
    it: "Siracusa unisce barocco, mare e archeologia. Su HotelsDrop le strutture siracusane rispondono con proposte personalizzate.",
    en: "Syracuse blends baroque architecture, sea and archaeology. Syracuse properties reply with personalised offers on HotelsDrop.",
  },
  lecce: {
    it: "Lecce è la capitale del barocco pugliese. HotelsDrop inoltra la tua richiesta a B&B e hotel del Salento.",
    en: "Lecce is the capital of Apulian baroque. HotelsDrop forwards your request to Salento B&Bs and hotels.",
  },
  bergamo: {
    it: "Bergamo offre Città Alta, aeroporto Orio al Serio e prossimità ai laghi. Richiedi offerte dirette su HotelsDrop.",
    en: "Bergamo offers the Upper Town, Orio al Serio airport and lake access. Request direct offers on HotelsDrop.",
  },
  bolzano: {
    it: "Bolzano è ideale per Dolomiti, enogastronomia e city break alpini. Su HotelsDrop ricevi proposte dirette dalle strutture altoatesine.",
    en: "Bolzano suits Dolomites trips, food and alpine city breaks. Receive direct proposals from South Tyrol properties on HotelsDrop.",
  },
  lisbona: {
    it: "Lisbona combina Alfama, Baixa e quartieri creativi. Su HotelsDrop invii una richiesta e ricevi offerte da strutture lusitane.",
    en: "Lisbon spans Alfama, Baixa and creative districts. Send one HotelsDrop request and receive offers from Portuguese properties.",
  },
  vienna: {
    it: "Vienna unisce musei, opera e quartieri imperiali. HotelsDrop semplifica il confronto con offerte dirette dagli hotel viennesi.",
    en: "Vienna blends museums, opera and imperial districts. HotelsDrop simplifies comparing direct offers from Viennese hotels.",
  },
  zurigo: {
    it: "Zurigo è hub business e base per i laghi svizzeri. Su HotelsDrop ricevi proposte dirette da strutture zurighesi.",
    en: "Zurich is a business hub and base for Swiss lakes. Receive direct offers from Zurich properties on HotelsDrop.",
  },
  praga: {
    it: "Praga attira per il centro storico, la cultura e i prezzi competitivi. Invia una richiesta HotelsDrop e confronta offerte dirette.",
    en: "Prague attracts visitors for its historic centre, culture and value. Send a HotelsDrop request and compare direct offers.",
  },
  lisbon: {
    it: "Lisbona combina Alfama, Baixa e quartieri creativi. Su HotelsDrop invii una richiesta e ricevi offerte da strutture lusitane.",
    en: "Lisbon spans Alfama, Baixa and creative districts. Send one HotelsDrop request and receive offers from Portuguese properties.",
  },
  dublin: {
    it: "Dublino è ideale per city break, pub culture e base verso l'Irlanda. HotelsDrop collega la tua richiesta con hotel e B&B irlandesi.",
    en: "Dublin suits city breaks, pub culture and Ireland trips. HotelsDrop connects your request with Irish hotels and B&Bs.",
  },
  bruxelles: {
    it: "Bruxelles concentra istituzioni europee, gastronomia e quartieri Art Nouveau. Richiedi offerte dirette su HotelsDrop.",
    en: "Brussels clusters EU institutions, food and Art Nouveau districts. Request direct offers on HotelsDrop.",
  },
  monaco: {
    it: "Monaco e la Costa Azzurra attirano leisure e eventi premium. Su HotelsDrop ricevi proposte dirette da strutture della zona.",
    en: "Monaco and the French Riviera attract premium leisure and events. Receive direct proposals from local properties on HotelsDrop.",
  },
  santorini: {
    it: "Santorini è iconica per tramonti, boutique e mare. Invia una richiesta personalizzata e confronta offerte dirette.",
    en: "Santorini is iconic for sunsets, boutiques and the caldera. Send a personalised request and compare direct offers.",
  },
  mykonos: {
    it: "Mykonos unisce nightlife, spiagge e hotel di charme. Su HotelsDrop le strutture greche rispondono con proposte su misura.",
    en: "Mykonos blends nightlife, beaches and boutique hotels. Greek properties reply with tailored offers on HotelsDrop.",
  },
  crete: {
    it: "Creta offre mare, borghi e itinerari slow. HotelsDrop inoltra la tua richiesta a hotel e residence dell'isola.",
    en: "Crete offers beaches, villages and slow travel. HotelsDrop forwards your request to island hotels and residences.",
  },
  ibiza: {
    it: "Ibiza combina movida, spiagge e hotel boutique. Pubblica una richiesta su HotelsDrop e ricevi offerte dirette.",
    en: "Ibiza combines nightlife, beaches and boutique stays. Publish a request on HotelsDrop and receive direct offers.",
  },
  malta: {
    it: "Malta è compatta e ricca di storia, ideale per city break mediterranei. Su HotelsDrop confronti proposte dirette.",
    en: "Malta is compact and historic, ideal for Mediterranean city breaks. Compare direct proposals on HotelsDrop.",
  },
  copenhagen: {
    it: "Copenhagen unisce design, canali e ristorazione nordica. HotelsDrop semplifica il contatto con strutture danesi.",
    en: "Copenhagen blends design, canals and Nordic dining. HotelsDrop simplifies contact with Danish properties.",
  },
  stockholm: {
    it: "Stoccolma offre archipelago, musei e quartieri creativi. Invia una richiesta e ricevi offerte dirette.",
    en: "Stockholm offers archipelago trips, museums and creative districts. Send a request and receive direct offers.",
  },
  oslo: {
    it: "Oslo è base per fiordi, cultura nordica e soggiorni business. Su HotelsDrop ricevi proposte da strutture norvegesi.",
    en: "Oslo is a base for fjords, Nordic culture and business stays. Receive proposals from Norwegian properties on HotelsDrop.",
  },
  helsinki: {
    it: "Helsinki unisce design finlandese, mare Baltico e sauna culture. HotelsDrop collega la tua richiesta con strutture locali.",
    en: "Helsinki blends Finnish design, the Baltic and sauna culture. HotelsDrop connects your request with local properties.",
  },
  athens: {
    it: "Atene concentra Acropoli, Plaka e base per isole greche. Su HotelsDrop invii una richiesta e ricevi offerte dirette.",
    en: "Athens clusters the Acropolis, Plaka and island-hopping access. Send a HotelsDrop request and receive direct offers.",
  },
  dubai: {
    it: "Dubai offre hotel luxury, business e mare. HotelsDrop mette in contatto la tua richiesta con strutture degli Emirati.",
    en: "Dubai offers luxury hotels, business stays and seaside resorts. HotelsDrop connects your request with UAE properties.",
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
      {
        question: "How do I create a stay request?",
        answer:
          "Click “Drop your request”, choose destination, check-in and check-out dates, budget, number of rooms and guests, then add any preferences (meal plan, area, special needs). One click sends the request to every compatible property in the selected area.",
      },
      {
        question: "How long does it take to receive offers?",
        answer:
          "Properties reply based on their availability; you often receive the first offers within 24 hours.",
      },
      {
        question: "Can I chat with a hotel before choosing?",
        answer:
          "Yes. When a property sends you an offer, you can compare proposals and communicate directly to clarify details, services and conditions before deciding.",
      },
      {
        question: "What if no hotel replies?",
        answer:
          "You can adjust your budget or dates and republish the request, or browse the catalogue and contact properties directly from their profile page.",
      },
      {
        question: "How is HotelsDrop different from Booking or Expedia?",
        answer:
          "On OTAs you search and book anonymously. On HotelsDrop you publish one request and hotels send you direct, personalised offers — with no booking commission for travellers and real contact with the property.",
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
    {
      question: "Come creo una richiesta di soggiorno?",
      answer:
        "Clicca su “Droppa la tua richiesta”, scegli destinazione, date di check-in e check-out, budget, numero camere e ospiti, poi aggiungi eventuali preferenze (trattamento, zona, esigenze particolari). Un click e la richiesta parte verso tutte le strutture compatibili della zona.",
    },
    {
      question: "Quanto tempo ci vuole per ricevere le offerte?",
      answer:
        "Le strutture rispondono in base alla disponibilità; spesso entro 24 ore ricevi le prime proposte.",
    },
    {
      question: "Posso parlare con l'hotel prima di scegliere?",
      answer:
        "Sì. Quando una struttura ti invia un'offerta, puoi confrontare le proposte e comunicare direttamente con loro per chiarire dettagli, servizi e condizioni prima di decidere.",
    },
    {
      question: "Cosa succede se nessun hotel risponde?",
      answer:
        "Puoi modificare budget o date e ripubblicare la richiesta, oppure esplorare il catalogo e contattare le strutture direttamente dalla loro scheda.",
    },
    {
      question: "In cosa HotelsDrop è diverso da Booking o Expedia?",
      answer:
        "Sui portali OTA cerchi e prenoti in anonimo. Su HotelsDrop pubblichi una richiesta e gli hotel ti inviano offerte dirette e personalizzate — senza commissioni di prenotazione per chi viaggia e con un contatto reale con la struttura.",
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
      {
        question: "How does a group request work (school, company, event)?",
        answer:
          "You publish one request with the number of rooms, guests and specific requirements (meals, accessibility, parking, etc.). Every compatible property in the destination receives it and replies with a tailored group offer.",
      },
      {
        question: "Can a travel agency manage multiple client requests?",
        answer:
          "Yes. From your dashboard you can publish and track several stay requests for different clients, compare incoming offers and choose the best proposal for each trip.",
      },
      {
        question: "Can I specify special requirements in the request?",
        answer:
          "Yes. You can indicate meal plan, preferred area, accessibility, pool, parking and other filters so only suitable properties receive your request and reply with compatible offers.",
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
    {
      question: "Come funziona una richiesta di gruppo (scuola, azienda, evento)?",
      answer:
        "Pubblichi una richiesta con numero camere, ospiti e requisiti specifici (vitto, accessibilità, parcheggio, ecc.). Tutte le strutture compatibili della destinazione la ricevono e rispondono con un'offerta su misura per il gruppo.",
    },
    {
      question: "Un'agenzia può gestire più richieste di clienti diversi?",
      answer:
        "Sì. Dalla dashboard puoi pubblicare e seguire più richieste di soggiorno per clienti diversi, confrontare le offerte ricevute e scegliere la proposta migliore per ogni viaggio.",
    },
    {
      question: "Posso indicare requisiti speciali nella richiesta?",
      answer:
        "Sì. Puoi indicare trattamento, zona preferita, accessibilità, piscina, parcheggio e altri filtri, così solo le strutture adatte ricevono la richiesta e rispondono con offerte compatibili.",
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
      {
        question: "Do I have to reply to every request?",
        answer:
          "No. You only reply to requests that match your property, availability and commercial strategy. Requests outside your target can simply be ignored.",
      },
      {
        question: "Can I publish last-minute offers?",
        answer:
          "Yes. Active properties can publish last-minute promotions on HotelsDrop to fill empty dates and reach travellers looking for immediate deals.",
      },
      {
        question: "Do I only receive requests for my city?",
        answer:
          "Yes. Requests are forwarded based on the destination and criteria set by the traveller or agency, so you receive only relevant opportunities for your area.",
      },
      {
        question: "Can I see who sent the request before replying?",
        answer:
          "Yes. Each request shows whether it comes from a traveller or an agency, so you know who you are dealing with and can start a direct, transparent dialogue.",
      },
      {
        question: "Does contact remain even if the booking is not closed today?",
        answer:
          "Yes. Unlike anonymous OTA traffic, every HotelsDrop request creates a real relationship. Even without an immediate booking, you have met a traveller or agency you can work with in the future.",
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
    {
      question: "Devo rispondere a ogni richiesta?",
      answer:
        "No. Rispondi solo alle richieste compatibili con la tua struttura, disponibilità e strategia commerciale. Quelle fuori target puoi semplicemente ignorarle.",
    },
    {
      question: "Posso pubblicare offerte last minute?",
      answer:
        "Sì. Le strutture attive possono pubblicare promozioni last minute su HotelsDrop per riempire date vacanti e raggiungere viaggiatori in cerca di offerte immediate.",
    },
    {
      question: "Ricevo richieste solo della mia città?",
      answer:
        "Sì. Le richieste vengono inoltrate in base alla destinazione e ai criteri indicati dal viaggiatore o dall'agenzia, quindi ricevi solo opportunità pertinenti per la tua zona.",
    },
    {
      question: "Posso sapere chi ha inviato la richiesta prima di rispondere?",
      answer:
        "Sì. Ogni richiesta indica se proviene da un viaggiatore o da un'agenzia, così sai con chi stai trattando e puoi aprire un dialogo diretto e trasparente.",
    },
    {
      question: "Il contatto resta anche se oggi non si conclude la prenotazione?",
      answer:
        "Sì. A differenza del traffico anonimo delle OTA, ogni richiesta su HotelsDrop crea un rapporto reale. Anche senza prenotazione immediata, hai conosciuto un viaggiatore o un'agenzia con cui potrai collaborare in futuro.",
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

export type HomeComparisonRow = {
  topic: string;
  traditional: string;
  hotelsdrop: string;
};

export type HomeComparisonTable = {
  title: string;
  subtitle: string;
  headers: [string, string, string];
  rows: HomeComparisonRow[];
};

export function getHomeComparisonTable(locale: Locale): HomeComparisonTable {
  if (locale === "en") {
    return {
      title: "HotelsDrop vs traditional OTAs",
      subtitle: "Why reverse booking saves time for travellers, groups and agencies.",
      headers: ["Topic", "Booking / Expedia", "HotelsDrop"],
      rows: [
        {
          topic: "Who searches",
          traditional: "You browse hundreds of listings",
          hotelsdrop: "You publish one stay request",
        },
        {
          topic: "Pricing",
          traditional: "Traveller fees and markups are common",
          hotelsdrop: "Zero booking commission for travellers",
        },
        {
          topic: "Groups & agencies",
          traditional: "Manual emails to many properties",
          hotelsdrop: "One request reaches all compatible hotels",
        },
        {
          topic: "Property alerts",
          traditional: "Properties wait for anonymous traffic",
          hotelsdrop: "Local hotels get an email when a request matches",
        },
      ],
    };
  }

  return {
    title: "HotelsDrop vs OTA tradizionali",
    subtitle: "Perché il reverse booking fa risparmiare tempo a viaggiatori, gruppi e agenzie.",
    headers: ["Aspetto", "Booking / Expedia", "HotelsDrop"],
    rows: [
      {
        topic: "Chi cerca",
        traditional: "Scorri centinaia di annunci",
        hotelsdrop: "Pubblichi una richiesta di soggiorno",
      },
      {
        topic: "Prezzo",
        traditional: "Spesso commissioni e markup per il viaggiatore",
        hotelsdrop: "Zero commissioni di prenotazione per chi viaggia",
      },
      {
        topic: "Gruppi e agenzie",
        traditional: "Email manuali a molte strutture",
        hotelsdrop: "Una richiesta raggiunge tutti gli hotel compatibili",
      },
      {
        topic: "Allerta strutture",
        traditional: "Le strutture aspettano traffico anonimo",
        hotelsdrop: "Gli hotel della zona ricevono email quando c'è una richiesta",
      },
    ],
  };
}
