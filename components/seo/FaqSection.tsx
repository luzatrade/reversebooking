import type { FaqItem } from "@/lib/i18n/seo-marketing";

type Props = {
  items: FaqItem[];
  title: string;
  id?: string;
  compact?: boolean;
};

/** SSR-friendly FAQ: crawlable HTML via native details/summary (no JS required). */
export function FaqSection({ items, title, id = "faq", compact = false }: Props) {
  return (
    <section aria-labelledby={id} className="scroll-mt-24">
      <div className={compact ? "max-w-2xl" : "max-w-3xl"}>
        <h2 id={id} className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className={`mt-4 space-y-2 sm:mt-5 ${compact ? "max-w-2xl" : "max-w-3xl"}`}>
        {items.map((item, index) => (
          <details
            key={item.question}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white open:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            open={index === 0}
          >
            <summary className="cursor-pointer list-none px-4 py-3.5 text-sm font-semibold text-zinc-950 marker:content-none sm:px-5 sm:py-4 sm:text-base dark:text-white [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-3">
                {item.question}
                <span className="text-zinc-400 transition group-open:rotate-180" aria-hidden="true">
                  ▾
                </span>
              </span>
            </summary>
            <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800 sm:px-5 sm:pb-5">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
