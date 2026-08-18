import { DestinationCard } from "@/components/seo/DestinationCard";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { Locale } from "@/lib/i18n/translations";

type Props = {
  title: string;
  destinations: DestinationHub[];
  locale: Locale;
};

export function RelatedDestinationsStrip({ title, destinations, locale }: Props) {
  if (!destinations.length) return null;

  return (
    <section aria-label={title} className="rounded-3xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-xl">{title}</h2>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {destinations.map((destination) => (
          <li key={destination.slug}>
            <DestinationCard destination={destination} locale={locale} size="compact" />
          </li>
        ))}
      </ul>
    </section>
  );
}
