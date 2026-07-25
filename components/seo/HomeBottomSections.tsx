import { HomeSeoInventoryStrip } from "@/components/showcase/HomeSeoInventoryStrip";
import { FaqSection } from "@/components/seo/FaqSection";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { getHomeFaqSections, getMarketingLabels } from "@/lib/i18n/seo-marketing";
import type { ShowcaseHomeInitialData } from "@/lib/showcase/homeData";

type Props = {
  initialData: ShowcaseHomeInitialData | null;
};

export async function HomeBottomSections({ initialData }: Props) {
  const locale = await getServerLocale();
  const labels = getMarketingLabels(locale);

  return (
    <section
      id="home-faq"
      className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 px-4 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <HomeSeoInventoryStrip initialData={initialData} />
        <FaqSection
          sections={getHomeFaqSections(locale)}
          title={labels.faqTitle}
          id="home-faq-list"
          collapseAll
        />
      </div>
    </section>
  );
}
