import { getServerLocale } from "@/lib/i18n/get-translations";
import { HowItWorksSteps } from "@/components/seo/HowItWorksSteps";
import { getHomeHowItWorks, getMarketingLabels } from "@/lib/i18n/seo-marketing";

export async function HomeMarketingSections() {
  const locale = await getServerLocale();
  const labels = getMarketingLabels(locale);

  return (
    <HowItWorksSteps
      title={labels.howItWorksTitle}
      subtitle={labels.howItWorksSubtitle}
      steps={getHomeHowItWorks(locale)}
    />
  );
}
