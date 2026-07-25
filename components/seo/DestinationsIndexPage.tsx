import Link from "next/link";
import { CityHeroPlaceholder } from "@/components/seo/CityHeroPlaceholder";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { SeoImage } from "@/components/seo/SeoImage";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { destinationPublicPath, homePath, localizedPath } from "@/lib/i18n/routing";
import { getDestinationCityPhoto } from "@/lib/seo/destination-hero";
import type { DestinationHub } from "@/lib/seo/destination-queries";

type Props = {
  destinations: DestinationHub[];
};

export async function DestinationsIndexPage({ destinations }: Props) {
  const locale = await getServerLocale();
  const title = locale === "en" ? "All destinations" : "Tutte le destinazioni";
  const subtitle =
    locale === "en"
      ? "Browse hotels and properties by city. Send one personalised request and receive direct offers."
      : "Esplora hotel e strutture per città. Invia una richiesta personalizzata e ricevi offerte dirette.";

  const grouped = groupByCountry(destinations, locale);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SeoBreadcrumb
        items={[
          { label: "Home", href: homePath(locale) },
          { label: locale === "en" ? "Destinations" : "Destinazioni" },
        ]}
      />

      <header className="max-w-3xl">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">{subtitle}</p>
      </header>

      {grouped.map(([country, items]) => (
        <section key={country} aria-labelledby={`dest-country-${country}`}>
          <h2 id={`dest-country-${country}`} className="text-lg font-semibold text-[#0f4c81]">
            {country}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((destination) => {
              const image = getDestinationCityPhoto(destination);
              const label =
                locale === "en" ? englishDisplayName(destination.displayName, destination.cityId) : destination.displayName;
              return (
                <li key={destination.slug}>
                  <Link
                    href={destinationPublicPath(destination.slug, locale)}
                    className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition hover:border-[#0f4c81]/30 hover:shadow-sm"
                  >
                    {image ? (
                      <SeoImage
                        src={image}
                        alt={label}
                        className="h-28 w-full object-cover transition group-hover:scale-[1.02]"
                      />
                    ) : (
                      <CityHeroPlaceholder cityName={label} />
                    )}
                    <div className="p-3">
                      <p className="font-semibold text-zinc-950">{label}</p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {locale === "en"
                          ? `${destination.structureCount} properties`
                          : `${destination.structureCount} strutture`}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

function groupByCountry(destinations: DestinationHub[], locale: "it" | "en"): [string, DestinationHub[]][] {
  const map = new Map<string, DestinationHub[]>();
  for (const destination of destinations) {
    const country = countryLabel(destination.countryCode, locale);
    const bucket = map.get(country) ?? [];
    bucket.push(destination);
    map.set(country, bucket);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b, locale));
}

function countryLabel(code: string | null, locale: "it" | "en") {
  if (code === "IT") return locale === "en" ? "Italy" : "Italia";
  if (code === "FR") return locale === "en" ? "France" : "Francia";
  if (code === "GB") return locale === "en" ? "United Kingdom" : "Regno Unito";
  if (code === "DE") return locale === "en" ? "Germany" : "Germania";
  if (code === "ES") return locale === "en" ? "Spain" : "Spagna";
  return locale === "en" ? "Worldwide" : "Mondo";
}

function englishDisplayName(displayName: string, cityId: string | null) {
  const map: Record<string, string> = {
    "IT-ROM": "Rome",
    "IT-MIL": "Milan",
    "IT-NAP": "Naples",
    "IT-FLR": "Florence",
    "IT-VCE": "Venice",
    "FR-PAR": "Paris",
    "GB-LON": "London",
    "DE-BER": "Berlin",
    "ES-MAD": "Madrid",
  };
  if (cityId && map[cityId]) return map[cityId];
  return displayName;
}

export function destinationsIndexMetadata(locale: "it" | "en") {
  const title =
    locale === "en" ? "All destinations · HotelsDrop" : "Tutte le destinazioni · HotelsDrop";
  const description =
    locale === "en"
      ? "Browse every HotelsDrop destination. Send one stay request and receive direct offers from local hotels and properties."
      : "Esplora tutte le destinazioni HotelsDrop. Invia una richiesta di soggiorno e ricevi offerte dirette da hotel e strutture locali.";
  return { title, description, internalPath: "/destinazioni" as const };
}
