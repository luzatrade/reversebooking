import type { FaqItem, FaqSectionGroup } from "@/lib/i18n/seo-marketing";

type Props = {
  items?: FaqItem[];
  sections?: FaqSectionGroup[];
  title: string;
  id?: string;
  compact?: boolean;
  /** When true, all FAQ items start collapsed (homepage bottom). */
  collapseAll?: boolean;
  /** Hide the section heading (e.g. when title is in a parent collapsible summary). */
  hideTitle?: boolean;
};

function FaqList({
  items,
  compact,
  collapseAll,
}: {
  items: FaqItem[];
  compact: boolean;
  collapseAll?: boolean;
}) {
  return (
    <div className={`space-y-2 ${compact ? "max-w-2xl" : "max-w-3xl"}`}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white open:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          {...(!collapseAll && index === 0 ? { defaultOpen: true } : {})}
        >
          <summary className="cursor-pointer list-none px-4 py-3.5 text-sm font-semibold text-zinc-950 marker:content-none sm:px-5 sm:py-4 sm:text-base dark:text-white [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-3">
              {item.question}
              <span className="shrink-0 text-zinc-400 transition group-open:rotate-180" aria-hidden="true">
                ▾
              </span>
            </span>
          </summary>
          <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800 sm:px-5 sm:pb-5">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-[15px] sm:leading-7">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

/** SSR-friendly FAQ: crawlable HTML via native details/summary (no JS required). */
export function FaqSection({
  items,
  sections,
  title,
  id = "faq",
  compact = false,
  collapseAll = false,
  hideTitle = false,
}: Props) {
  const hasSections = Boolean(sections?.length);

  return (
    <section aria-labelledby={hideTitle ? undefined : id} className="scroll-mt-24">
      {hideTitle ? null : (
        <div className={compact ? "max-w-2xl" : "max-w-3xl"}>
          <h2 id={id} className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
            {title}
          </h2>
        </div>
      )}

      {hasSections ? (
        <div className={`mt-4 space-y-8 sm:mt-6 ${compact ? "max-w-2xl" : "max-w-3xl"}`}>
          {sections!.map((section) => (
            <div key={section.title}>
              <h3 className="text-base font-semibold text-[#0f4c81] sm:text-lg">{section.title}</h3>
              <div className="mt-3">
                <FaqList items={section.items} compact={compact} collapseAll={collapseAll} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`mt-4 sm:mt-5 ${compact ? "max-w-2xl" : "max-w-3xl"}`}>
          <FaqList items={items ?? []} compact={compact} collapseAll={collapseAll} />
        </div>
      )}
    </section>
  );
}
