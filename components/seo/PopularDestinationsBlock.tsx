import Link from "next/link";
import { getCityHeroImage } from "@/lib/destination-slider/cityPhotos";
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
      aria-labelledby="popular-destinations-title"
      className="border-t border-zinc-200 bg-white px-4 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 id="popular-destinations-title" className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {destinations.map((destination) => {
            const image = getCityHeroImage({ cityName: destination.displayName });
            return (
              <li key={destination.slug}>
                <Link
                  href={`/destinazioni/${destination.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition hover:border-[#0f4c81]/30 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <img
                    src={image}
                    alt={destination.displayName}
                    className="h-28 w-full object-cover transition group-hover:scale-[1.02]"
                  />
                  <div className="p-3">
                    <p className="font-semibold text-zinc-950 dark:text-white">{destination.displayName}</p>
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
      </div>
    </section>
  );
}
