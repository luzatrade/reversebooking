import Link from "next/link";
import { CitationBlock } from "@/components/seo/CitationBlock";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getAeoGlossaryTerms, glossaryPageMeta } from "@/lib/i18n/aeo-glossary";
import { localizedPath } from "@/lib/i18n/routing";
import type { Locale } from "@/lib/i18n/translations";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildDefinedTermSetJsonLd } from "@/lib/seo/glossary-jsonld";

type Props = {
  locale: Locale;
};

export function GlossaryPage({ locale }: Props) {
  const meta = glossaryPageMeta(locale);
  const terms = getAeoGlossaryTerms(locale);
  const pageUrl = canonicalUrl(localizedPath(locale, "/glossario"));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <JsonLdScript data={buildDefinedTermSetJsonLd(terms, pageUrl, locale)} />
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{meta.h1}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">{meta.intro}</p>
      </header>

      <CitationBlock locale={locale} />

      <section aria-labelledby="glossary-terms-heading" className="mt-10">
        <h2 id="glossary-terms-heading" className="text-lg font-semibold text-zinc-900">
          {locale === "en" ? "Terms" : "Termini"}
        </h2>
        <dl className="mt-6 space-y-8">
          {terms.map((term) => (
            <div key={term.id} id={term.id} className="scroll-mt-24 border-b border-zinc-100 pb-8 last:border-0 dark:border-zinc-800">
              <dt className="text-base font-semibold text-[#0f4c81]">{term.term}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{term.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-10 text-sm text-zinc-600">
        <Link href={localizedPath(locale, "/cos-e-hotelsdrop")} className="font-semibold text-[#0f4c81] hover:underline">
          {locale === "en" ? "What is HotelsDrop" : "Cos'è HotelsDrop"}
        </Link>
        {" · "}
        <Link href={localizedPath(locale, "/")} className="font-semibold text-[#0f4c81] hover:underline">
          {locale === "en" ? "Home" : "Home"}
        </Link>
      </p>
    </div>
  );
}
