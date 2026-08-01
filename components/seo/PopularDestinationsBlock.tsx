import Link from "next/link";
import { DestinationCard } from "@/components/seo/DestinationCard";
import { localizedPath } from "@/lib/i18n/routing";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { listPopularDestinations } from "@/lib/seo/destination-queries";

export async function PopularDestinationsBlock() {
  const locale = await getServerLocale();
  const destinations = await listPopularDestinations();

  if (!destinations.length) return null;

  const title = locale === "en" ? "Popular destinations" : "Destinazioni popolari";
  const subtitle =
    locale === "en"
      ? "Browse hotels by city and send a personalized offer request."
      : "Esplora hotel per città e invia una richiesta personalizzata.";

  return (
    <section
      id="destinazioni-popolari"
      aria-labelledby="popular-destinations-title"
      className="border-t border-zinc-200 bg-white px-4 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 id="popular-destinations-title" className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          <Link
            href={localizedPath(locale, "/destinazioni")}
            className="mt-3 inline-flex text-sm font-semibold text-[#0f4c81] hover:underline"
          >
            {locale === "en" ? "View all destinations →" : "Vedi tutte le destinazioni →"}
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {destinations.map((destination) => (
            <li key={destination.slug}>
              <DestinationCard destination={destination} locale={locale} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
