import type { Metadata } from "next";
import { HotelsDropAboutMarkup } from "@/components/legal/HotelsDropAboutMarkup";
import { CitationBlock } from "@/components/seo/CitationBlock";
import { FaqSection } from "@/components/seo/FaqSection";
import { HowItWorksSteps } from "@/components/seo/HowItWorksSteps";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { OtaComparisonTable } from "@/components/seo/OtaComparisonTable";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import {
  getAboutAudienceBlocks,
  getHomeFaq,
  getHomeFaqSections,
  getHomeHowItWorks,
  getMarketingLabels,
} from "@/lib/i18n/seo-marketing";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildFaqPageJsonLd } from "@/lib/seo/faq-jsonld";
import { buildHowToJsonLd } from "@/lib/seo/howto-jsonld";
import { buildMarketplaceServiceJsonLd } from "@/lib/seo/service-jsonld";
import { BRAND_NAME } from "@/lib/legal/company";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const title = `${t.metadata.aboutPageTitle} · ${BRAND_NAME}`;
  const description = t.metadata.aboutPageDescription;

  return {
    title: { absolute: title },
    description,
    alternates: buildLanguageAlternates("/cos-e-hotelsdrop", locale),
    openGraph: buildOpenGraph({ title, description, path: "/cos-e-hotelsdrop", locale }),
    twitter: buildTwitterCard({ title, description }),
  };
}

export default async function CosEHotelsDropPage() {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const labels = getMarketingLabels(locale);
  const audience = getAboutAudienceBlocks(locale);
  const faqItems = getHomeFaq(locale);
  const steps = getHomeHowItWorks(locale);
  const pageUrl = canonicalUrl(localizedPath(locale, "/cos-e-hotelsdrop"));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <JsonLdScript data={buildFaqPageJsonLd(faqItems, pageUrl)} />
      <JsonLdScript data={buildHowToJsonLd(steps, locale, "/cos-e-hotelsdrop")} />
      <JsonLdScript data={buildMarketplaceServiceJsonLd(locale, "/cos-e-hotelsdrop")} />
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          {t.showcase.dropYourRequestModal.title}
        </h1>
      </header>

      <CitationBlock locale={locale} />

      <HowItWorksSteps
        variant="inline"
        title={labels.howItWorksTitle}
        subtitle={labels.howItWorksSubtitle}
        steps={steps}
      />

      <HotelsDropAboutMarkup
        className="mt-8 sm:mt-10"
        content={t.showcase.dropYourRequestModal}
        showActions
      />

      <OtaComparisonTable locale={locale} />

      <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
        <section className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5">
          <h2 className="text-base font-bold text-zinc-900 sm:text-lg">{audience.travellersTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">{audience.travellersBody}</p>
        </section>
        <section className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5">
          <h2 className="text-base font-bold text-zinc-900 sm:text-lg">{audience.partnersTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">{audience.partnersBody}</p>
        </section>
      </div>

      <div className="mt-8 sm:mt-10">
        <FaqSection sections={getHomeFaqSections(locale)} title={labels.faqTitle} id="about-faq" compact />
      </div>
    </div>
  );
}
