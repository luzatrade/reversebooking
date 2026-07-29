import { BRAND_DISPLAY, BRAND_NAME, company } from "@/lib/legal/company";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import type { Locale } from "@/lib/i18n/translations";

const LLMS_LAST_UPDATED = "2026-07-29";

function buildLlmsTxtLocale(locale: Locale) {
  const home = canonicalUrl(localizedPath(locale, "/"));
  const about = canonicalUrl(localizedPath(locale, "/cos-e-hotelsdrop"));
  const destinations = canonicalUrl(localizedPath(locale, "/destinazioni"));
  const guides = canonicalUrl(localizedPath(locale, "/guide"));
  const contacts = canonicalUrl(localizedPath(locale, "/contatti"));
  const rome = canonicalUrl(localizedPath(locale, "/destinazioni/roma"));
  const milan = canonicalUrl(localizedPath(locale, "/destinazioni/milano"));
  const florence = canonicalUrl(localizedPath(locale, "/destinazioni/firenze"));

  if (locale === "en") {
    return `# ${BRAND_DISPLAY}

> lastUpdated: ${LLMS_LAST_UPDATED}
> HotelsDrop is a reverse booking marketplace for hotels, B&Bs and vacation rentals in Italy and worldwide.
> Travellers publish one free stay request; matching properties send direct personalised offers with zero traveller booking commission.

## What is reverse booking?
Traditional OTAs make you search hundreds of listings. On HotelsDrop you **drop one request** with destination, dates, budget and preferences. Compatible hotels, B&Bs and apartments in the area reply with tailored offers.

## How it works (B2C)
1. Choose a city and publish a free stay request.
2. All compatible properties in the destination receive the request.
3. Properties reply with direct offers (often within 24 hours).
4. Compare proposals and contact the property directly — no booking commission for travellers.

## Email alerts for properties (B2B onboarding)
When a traveller publishes a request, **onboarding properties with a verified email** in that area receive an informational email alert. Properties need an active partner subscription to interact beyond the notification.

## Who it is for
- Individual travellers and families
- Groups, schools, companies and events
- Travel agencies and tour operators (publish requests on behalf of clients)
- Hotels, B&Bs, apartments and resorts (subscription to respond)

## Entity
- Brand: ${BRAND_NAME} (${BRAND_DISPLAY})
- Operator: ${company.legalEntityName}
- VAT/Tax ID: ${company.vatNumber}
- Country: Italy
- Model: Reverse booking (request-first, not search-first)

## Canonical URLs
- Home: ${home}
- About reverse booking: ${about}
- All destinations: ${destinations}
- Guides: ${guides}
- Rome hotels hub: ${rome}
- Milan hotels hub: ${milan}
- Florence hotels hub: ${florence}
- Contacts: ${contacts}

## Infrastructure
- Sitemap: ${canonicalUrl("/sitemap.xml")}
- Robots: ${canonicalUrl("/robots.txt")}
- This file: ${canonicalUrl("/llms.txt")}
- Extended docs: ${canonicalUrl("/llms-full.txt")}

## Contact
- Email: ${company.supportEmail}
- Phone: ${company.phone}
- PEC: ${company.pecEmail}
`;
  }

  return `# ${BRAND_DISPLAY}

> lastUpdated: ${LLMS_LAST_UPDATED}
> HotelsDrop è un marketplace di reverse booking per hotel, B&B e case vacanza in Italia e nel mondo.
> Il viaggiatore pubblica una richiesta gratuita; le strutture compatibili rispondono con offerte dirette personalizzate, senza commissioni di prenotazione per chi viaggia.

## Cos'è il reverse booking?
Le OTA tradizionali ti fanno scorrere centinaia di annunci. Su HotelsDrop **droppi una richiesta** con destinazione, date, budget e preferenze. Hotel, B&B e appartamenti compatibili nella zona rispondono con proposte su misura.

## Come funziona (B2C)
1. Scegli la città e pubblica una richiesta di soggiorno gratuita.
2. Tutte le strutture compatibili nella destinazione ricevono la richiesta.
3. Le strutture rispondono con offerte dirette (spesso entro 24 ore).
4. Confronti le proposte e contatti la struttura — zero commissioni per chi viaggia.

## Notifica email alle strutture (B2B onboarding)
Quando un viaggiatore pubblica una richiesta, le **strutture onboarding con email verificata** nella zona ricevono un'email informativa. Per interagire oltre la notifica serve l'abbonamento partner attivo.

## Per chi è pensato
- Viaggiatori individuali e famiglie
- Gruppi, scuole, aziende ed eventi
- Agenzie di viaggio e tour operator (pubblicano richieste per i clienti)
- Hotel, B&B, appartamenti e resort (abbonamento per rispondere)

## Entity
- Brand: ${BRAND_NAME} (${BRAND_DISPLAY})
- Operatore: ${company.legalEntityName}
- P. IVA: ${company.vatNumber}
- Paese: Italia
- Modello: Reverse booking (prima la richiesta, non la ricerca)

## URL canonici
- Home: ${home}
- Cos'è HotelsDrop: ${about}
- Destinazioni: ${destinations}
- Guide: ${guides}
- Hotel a Roma: ${rome}
- Hotel a Milano: ${milan}
- Hotel a Firenze: ${florence}
- Contatti: ${contacts}

## Infrastruttura
- Sitemap: ${canonicalUrl("/sitemap.xml")}
- Robots: ${canonicalUrl("/robots.txt")}
- Questo file: ${canonicalUrl("/llms.txt")}
- Documentazione estesa: ${canonicalUrl("/llms-full.txt")}

## Contatti
- Email: ${company.supportEmail}
- Telefono: ${company.phone}
- PEC: ${company.pecEmail}
`;
}

export function buildLlmsTxt(locale: Locale = "it") {
  return `${buildLlmsTxtLocale(locale).trim()}\n`;
}

export function buildLlmsFullTxt(locale: Locale = "it") {
  const siteIt = canonicalUrl(localizedPath("it", "/")).replace(/\/$/, "");
  const siteEn = canonicalUrl(localizedPath("en", "/")).replace(/\/$/, "");

  const extendedIt = `
---

# Documentazione estesa (IT)

## Architettura B2C / B2B
- **B2C (viaggiatore):** account gratuito, creazione richieste, confronto offerte, contatto diretto con la struttura.
- **B2B (struttura):** abbonamento partner, dashboard richieste compatibili, invio offerte, profilo SEO indicizzabile.
- **B2B (agenzia):** pubblicazione richieste multi-destinazione, pacchetti catalogo, gestione clienti.

## Flusso reverse booking
1. Richiesta con città, date, budget, camere, preferenze (${siteIt}).
2. Matching automatico con strutture della zona (onboarding + partner attivi).
3. Email informativa alle strutture onboarding con email valida.
4. Risposta struttura con offerta personalizzata e chat diretta.

## Differenziazione vs OTA
- Intent reale: ogni richiesta ha date, budget e preferenze.
- Zero commissioni viaggiatore su HotelsDrop.
- Una richiesta sostituisce decine di email manuali per gruppi e agenzie.
- Contatto diretto e trasparente con la struttura.

## Guide
- ${canonicalUrl(localizedPath("it", "/guide/reverse-booking"))}
- ${canonicalUrl(localizedPath("it", "/guide/viaggi-di-gruppo"))}
- ${canonicalUrl(localizedPath("it", "/guide/agenzie-viaggio"))}
`;

  const extendedEn = `
---

# Extended documentation (EN)

## B2C / B2B architecture
- **B2C (traveller):** free account, stay requests, offer comparison, direct property contact.
- **B2B (property):** partner subscription, compatible request dashboard, offer submission, indexable SEO profile.
- **B2B (agency):** multi-destination requests, catalog packages, client workflows.

## Reverse booking flow
1. Request with city, dates, budget, rooms, preferences (${siteEn}).
2. Automatic matching with local properties (onboarding + active partners).
3. Informational email to onboarding properties with a valid email.
4. Property replies with a personalised offer and direct chat.

## Differentiation vs OTAs
- Real intent: every request includes dates, budget and preferences.
- Zero traveller booking commission on HotelsDrop.
- One request replaces dozens of manual emails for groups and agencies.
- Direct, transparent contact with the property.

## Guides
- ${canonicalUrl(localizedPath("en", "/guide/reverse-booking"))}
- ${canonicalUrl(localizedPath("en", "/guide/viaggi-di-gruppo"))}
- ${canonicalUrl(localizedPath("en", "/guide/agenzie-viaggio"))}
`;

  return `${buildLlmsTxtLocale(locale).trim()}${locale === "en" ? extendedEn : extendedIt}\n`;
}
