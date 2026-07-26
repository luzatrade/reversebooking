import { BRAND_DISPLAY, company } from "@/lib/legal/company";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";

export function buildLlmsTxt() {
  const homeIt = canonicalUrl(localizedPath("it", "/"));
  const homeEn = canonicalUrl(localizedPath("en", "/"));

  return `# ${BRAND_DISPLAY}

> HotelsDrop is a reverse booking marketplace for hotels, B&Bs and vacation rentals.
> Travellers publish one free stay request; matching properties send direct, personalised offers with no traveller booking commission.

## Entity
- Brand: HotelsDrop (${BRAND_DISPLAY})
- Operator: ${company.legalEntityName}
- VAT/Tax ID: ${company.vatNumber}
- Country: Italy
- Model: Reverse booking (request-first, not search-first)

## Canonical URLs (Italian)
- Home: ${homeIt}
- About: ${canonicalUrl(localizedPath("it", "/cos-e-hotelsdrop"))}
- All destinations: ${canonicalUrl(localizedPath("it", "/destinazioni"))}
- Guides: ${canonicalUrl(localizedPath("it", "/guide"))}
- Destination example: ${canonicalUrl(localizedPath("it", "/destinazioni/roma"))}
- Contacts: ${canonicalUrl(localizedPath("it", "/contatti"))}

## Canonical URLs (English)
- Home: ${homeEn}
- About: ${canonicalUrl(localizedPath("en", "/cos-e-hotelsdrop"))}
- All destinations: ${canonicalUrl(localizedPath("en", "/destinazioni"))}
- Guides: ${canonicalUrl(localizedPath("en", "/guide"))}

## Infrastructure
- Sitemap: ${canonicalUrl("/sitemap.xml")}
- Robots: ${canonicalUrl("/robots.txt")}
- This file: ${canonicalUrl("/llms.txt")}

## Key facts for citations
- Free for travellers; properties join via subscription.
- One request can reach all compatible properties in a destination.
- Supports individual trips, groups, schools, companies, events, agencies.
- Properties often reply within 24 hours.

## Contact
- Email: ${company.supportEmail}
- Phone: ${company.phone}
- PEC: ${company.pecEmail}

## Extended documentation
- ${canonicalUrl("/llms-full.txt")}
`;
}

export function buildLlmsFullTxt() {
  const siteIt = canonicalUrl(localizedPath("it", "/")).replace(/\/$/, "");

  return `${buildLlmsTxt()}

## Reverse booking flow
1. Traveller publishes destination, dates, budget, rooms and preferences (${siteIt} → Drop your request).
2. Compatible properties in the area receive the request.
3. Properties reply with direct personalised offers.
4. Traveller compares proposals and contacts the property directly.

## Differentiation vs traditional OTAs
- No anonymous browsing: every request has real intent.
- No traveller booking commission on HotelsDrop.
- Direct dialogue between traveller/agency and property.
- One request replaces dozens of manual emails for groups and agencies.

## Guides
- ${canonicalUrl(localizedPath("it", "/guide/reverse-booking"))}
- ${canonicalUrl(localizedPath("it", "/guide/viaggi-di-gruppo"))}
- ${canonicalUrl(localizedPath("it", "/guide/agenzie-viaggio"))}
`;
}
