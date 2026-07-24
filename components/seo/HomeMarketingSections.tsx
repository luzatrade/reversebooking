import { getServerLocale } from "@/lib/i18n/get-translations";
import { FaqSection } from "@/components/seo/FaqSection";
import { HowItWorksSteps } from "@/components/seo/HowItWorksSteps";
import { getHomeFaq, getHomeHowItWorks, getMarketingLabels } from "@/lib/i18n/seo-marketing";

export async function HomeMarketingSections() {
  const locale = await getServerLocale();
  const labels = getMarketingLabels(locale);

  return (
    <>
      <HowItWorksSteps
        title={labels.howItWorksTitle}
        subtitle={labels.howItWorksSubtitle}
        steps={getHomeHowItWorks(locale)}
      />
      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FaqSection items={getHomeFaq(locale)} title={labels.faqTitle} id="home-faq" />
        </div>
      </section>
    </>
  );
}
