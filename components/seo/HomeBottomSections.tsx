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
  const faqSections = getHomeFaqSections(locale);
  const faqCount = faqSections.reduce((total, section) => total + section.items.length, 0);
  const faqSummaryHint =
    locale === "en" ? `${faqCount} questions` : `${faqCount} domande`;

  return (
    <section
      id="home-faq"
      className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 px-4 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-4 sm:space-y-5">
        <HomeSeoInventoryStrip initialData={initialData} />

        <details className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <summary className="cursor-pointer list-none px-4 py-3.5 marker:content-none sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              <span>
                <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {labels.faqTitle}
                </span>
                <span className="mt-0.5 block text-xs text-zinc-500">{faqSummaryHint}</span>
              </span>
              <span className="shrink-0 text-zinc-400 transition group-open:rotate-180" aria-hidden="true">
                ▾
              </span>
            </span>
          </summary>

          <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800 sm:px-5 sm:pb-5">
            <FaqSection
              sections={faqSections}
              title={labels.faqTitle}
              id="home-faq-list"
              collapseAll
              hideTitle
            />
          </div>
        </details>
      </div>
    </section>
  );
}
