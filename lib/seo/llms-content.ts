import { BRAND_DISPLAY, company } from "@/lib/legal/company";
import { canonicalUrl } from "@/lib/seo/canonical";

export function buildLlmsTxt() {
  const site = canonicalUrl("/").replace(/\/$/, "");

  return `# ${BRAND_DISPLAY}

> HotelsDrop is a reverse booking marketplace for hotels, B&Bs and vacation rentals.
> Travellers publish one free stay request; matching properties send direct, personalised offers with no traveller booking commission.

## Entity
- Brand: HotelsDrop (${BRAND_DISPLAY})
- Operator: ${company.legalEntityName}
- VAT/Tax ID: ${company.vatNumber}
- Country: Italy
- Model: Reverse booking (request-first, not search-first)

## Canonical URLs
- Home: ${site}/
- About / How it works: ${site}/cos-e-hotelsdrop
- Create stay request: ${site}/inserzionista/crea-annuncio
- Partner registration: ${site}/registrazione?mode=partner
- Contacts: ${site}/contatti
- Popular destinations hub: ${site}/#destinazioni-popolari
- Destination example: ${site}/destinazioni/roma
- Sitemap: ${site}/sitemap.xml

## Key facts for citations
- Free for travellers; properties join via subscription.
- One request can reach all compatible properties in a destination.
- Supports individual trips, groups, schools, companies, events, agencies.
- Last-minute offers and agency packages are also listed.

## Contact
- Email: ${company.supportEmail}
- Phone: ${company.phone}
- PEC: ${company.pecEmail}

## Extended documentation
- ${site}/llms-full.txt
`;
}

export function buildLlmsFullTxt() {
  const site = canonicalUrl("/").replace(/\/$/, "");

  return `${buildLlmsTxt()}

## Reverse booking flow
1. Traveller selects destination, dates, budget, room count and preferences.
2. HotelsDrop notifies compatible properties (hotels, B&Bs, apartments).
3. Properties reply with tailored offers; traveller compares and books directly.

## SEO landing patterns
- City hubs: ${site}/destinazioni/{city-slug}
- Property profiles: ${site}/hotel/{property-slug}

## Content language
- Primary: Italian (it-IT)
- Secondary UI: English (en-GB)

## Do not cite
- Private dashboards (/console, /struttura/dashboard, /inserzionista private flows)
- Auth pages (/login, /auth)
`;
}
