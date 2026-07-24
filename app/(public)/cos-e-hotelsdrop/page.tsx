import type { Metadata } from "next";
import { HotelsDropAboutMarkup } from "@/components/legal/HotelsDropAboutMarkup";
import { FaqAccordion } from "@/components/seo/FaqAccordion";
import { HowItWorksSteps } from "@/components/seo/HowItWorksSteps";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import {
  getAboutAudienceBlocks,
  getHomeFaq,
  getHomeHowItWorks,
  getMarketingLabels,
} from "@/lib/i18n/seo-marketing";
import { canonicalUrl } from "@/lib/seo/canonical";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  return {
    title: t.metadata.aboutPageTitle,
    description: t.metadata.aboutPageDescription,
    alternates: {
      canonical: canonicalUrl("/cos-e-hotelsdrop"),
    },
  };
}

export default async function CosEHotelsDropPage() {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const labels = getMarketingLabels(locale);
  const audience = getAboutAudienceBlocks(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          {t.showcase.dropYourRequestModal.title}
        </h1>
      </header>

      <HowItWorksSteps
        variant="inline"
        title={labels.howItWorksTitle}
        subtitle={labels.howItWorksSubtitle}
        steps={getHomeHowItWorks(locale)}
      />

      <HotelsDropAboutMarkup
        className="mt-8 sm:mt-10"
        content={t.showcase.dropYourRequestModal}
        showActions
      />

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
        <FaqAccordion items={getHomeFaq(locale)} title={labels.faqTitle} id="about-faq" compact />
      </div>
    </div>
  );
}
