"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/i18n/seo-marketing";

type Props = {
  items: FaqItem[];
  title: string;
  id?: string;
  compact?: boolean;
};

export function FaqAccordion({ items, title, id, compact = false }: Props) {
  const generatedId = useId();
  const sectionId = id ?? generatedId;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby={sectionId} className="scroll-mt-24">
      <div className={compact ? "max-w-2xl" : "max-w-3xl"}>
        <h2 id={sectionId} className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className={`mt-4 space-y-2 sm:mt-5 ${compact ? "max-w-2xl" : "max-w-3xl"}`}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${sectionId}-panel-${index}`;
          const buttonId = `${sectionId}-button-${index}`;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
              >
                <span className="text-sm font-semibold text-zinc-950 dark:text-white sm:text-base">{item.question}</span>
                <ChevronDown
                  className={`mt-0.5 h-4 w-4 shrink-0 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {isOpen ? (
                <div id={panelId} role="region" aria-labelledby={buttonId} className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800 sm:px-5 sm:pb-5">
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
