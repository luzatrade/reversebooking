import { MessageSquareQuote, SearchCheck, Send } from "lucide-react";
import type { HowItWorksStep } from "@/lib/i18n/seo-marketing";

const icons = [Send, MessageSquareQuote, SearchCheck];

type Props = {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
  variant?: "home" | "inline";
};

export function HowItWorksSteps({ title, subtitle, steps, variant = "home" }: Props) {
  const isHome = variant === "home";

  return (
    <section className={isHome ? "border-t border-zinc-200 bg-white px-4 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 lg:px-8" : ""}>
      <div className={isHome ? "mx-auto max-w-7xl" : ""}>
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">{title}</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>

        <ol className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {steps.map((step, index) => {
            const Icon = icons[index] ?? Send;
            return (
              <li
                key={step.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f4c81]/10 text-[#0f4c81]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#0f4c81]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-zinc-950 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
