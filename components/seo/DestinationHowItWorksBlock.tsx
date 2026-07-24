import { CheckCircle2 } from "lucide-react";

type Props = {
  title: string;
  bullets: string[];
};

export function DestinationHowItWorksBlock({ title, bullets }: Props) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-xl">{title}</h2>
      <ul className="mt-4 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f4c81]" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
