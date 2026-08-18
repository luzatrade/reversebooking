import { DestinationCard } from "@/components/seo/DestinationCard";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { homePath, localizedPath } from "@/lib/i18n/routing";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { Locale } from "@/lib/i18n/translations";
import { uiLocale } from "@/lib/i18n/ui-locale";

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
            {items.map((destination) => (
              <li key={destination.slug}>
                <DestinationCard destination={destination} locale={locale} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function groupByCountry(destinations: DestinationHub[], locale: Locale): [string, DestinationHub[]][] {
  const ui = uiLocale(locale);
  const map = new Map<string, DestinationHub[]>();
  for (const destination of destinations) {
    const country = countryLabel(destination.countryCode, locale);
    const bucket = map.get(country) ?? [];
    bucket.push(destination);
    map.set(country, bucket);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b, ui));
}

function countryLabel(code: string | null, locale: Locale) {
  const ui = uiLocale(locale);
  if (code === "IT") return ui === "en" ? "Italy" : "Italia";
  if (code === "FR") return ui === "en" ? "France" : "Francia";
  if (code === "GB") return ui === "en" ? "United Kingdom" : "Regno Unito";
  if (code === "DE") return ui === "en" ? "Germany" : "Germania";
  if (code === "ES") return ui === "en" ? "Spain" : "Spagna";
  if (code === "CA") return ui === "en" ? "Canada" : "Canada";
  return ui === "en" ? "Worldwide" : "Mondo";
}

export function destinationsIndexMetadata(locale: Locale) {
  const ui = uiLocale(locale);
  const title =
    ui === "en" ? "All destinations · HotelsDrop" : "Tutte le destinazioni · HotelsDrop";
  const description =
    ui === "en"
      ? "Browse every HotelsDrop destination. Send one stay request and receive direct offers from local hotels and properties."
      : "Esplora tutte le destinazioni HotelsDrop. Invia una richiesta di soggiorno e ricevi offerte dirette da hotel e strutture locali.";
  return { title, description, internalPath: "/destinazioni" as const };
}
