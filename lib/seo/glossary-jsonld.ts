import type { GlossaryTerm } from "@/lib/i18n/aeo-glossary";
import type { Locale } from "@/lib/i18n/translations";
import { glossaryPageMeta } from "@/lib/i18n/aeo-glossary";

export function buildDefinedTermSetJsonLd(terms: GlossaryTerm[], pageUrl: string, locale: Locale) {
  const meta = glossaryPageMeta(locale);
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: meta.h1,
    description: meta.intro,
    url: pageUrl,
    inLanguage: locale === "en" ? "en-GB" : "it-IT",
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${pageUrl}#${term.id}`,
      name: term.term,
      description: term.definition,
      url: `${pageUrl}#${term.id}`,
    })),
  };
}
