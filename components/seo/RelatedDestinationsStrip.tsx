import Link from "next/link";
import { CityHeroPlaceholder } from "@/components/seo/CityHeroPlaceholder";
import { getDestinationCityPhoto } from "@/lib/seo/destination-hero";
import type { DestinationHub } from "@/lib/seo/destination-queries";

type Props = {
  title: string;
  destinations: DestinationHub[];
  locale: "it" | "en";
};

function displayName(destination: DestinationHub, locale: "it" | "en") {
  if (locale === "en") {
    const match = destination.displayName;
    const englishNames: Record<string, string> = {
      Roma: "Rome",
      Milano: "Milan",
      Napoli: "Naples",
      Firenze: "Florence",
      Venezia: "Venice",
      Torino: "Turin",
      Genova: "Genoa",
      Bergamo: "Bergamo",
      Perugia: "Perugia",
      Palermo: "Palermo",
      Bologna: "Bologna",
      Verona: "Verona",
      Rimini: "Rimini",
      Bolzano: "Bolzano",
      Catania: "Catania",
      Bari: "Bari",
      Londra: "London",
      Parigi: "Paris",
      Berlino: "Berlin",
      Amsterdam: "Amsterdam",
      Barcelona: "Barcelona",
      Madrid: "Madrid",
      Tokyo: "Tokyo",
    };
    return englishNames[match] ?? match;
  }
  return destination.displayName;
}

export function RelatedDestinationsStrip({ title, destinations, locale }: Props) {
  if (!destinations.length) return null;

  return (
    <section aria-label={title} className="rounded-3xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-xl">{title}</h2>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {destinations.map((destination) => {
          const image = getDestinationCityPhoto(destination);
          const label = displayName(destination, locale);
          return (
            <li key={destination.slug}>
              <Link
                href={`/destinazioni/${destination.slug}`}
                className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition hover:border-[#0f4c81]/30 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                {image ? (
                  <img src={image} alt={label} className="h-20 w-full object-cover transition group-hover:scale-[1.02] sm:h-24" />
                ) : (
                  <CityHeroPlaceholder cityName={label} className="h-20 sm:h-24" />
                )}
                <div className="p-2.5 sm:p-3">
                  <p className="truncate text-sm font-semibold text-zinc-950 dark:text-white">{label}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    {locale === "en" ? `${destination.structureCount} properties` : `${destination.structureCount} strutture`}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
