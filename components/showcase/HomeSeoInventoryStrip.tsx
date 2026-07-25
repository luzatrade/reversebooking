import Link from "next/link";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { destinationPublicPath, structurePublicPath } from "@/lib/i18n/routing";
import type { ShowcaseHomeInitialData } from "@/lib/showcase/homeData";

type Props = {
  initialData: ShowcaseHomeInitialData | null;
};

/** Server-rendered inventory links for crawlers and no-JS users. */
export async function HomeSeoInventoryStrip({ initialData }: Props) {
  if (!initialData) return null;
  const locale = await getServerLocale();
  const hotels = initialData.hotels.filter((h) => h.slug).slice(0, 16);
  const requests = initialData.requests.slice(0, 10);

  if (!hotels.length && !requests.length) return null;

  const title =
    locale === "en" ? "Active properties and stay requests" : "Strutture e richieste di soggiorno attive";

  return (
    <section
      aria-labelledby="home-seo-inventory-title"
      className="border-b border-zinc-200/80 bg-zinc-50/90 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950/90 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="home-seo-inventory-title" className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          {title}
        </h2>

        {hotels.length ? (
          <div className="mt-3">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              {locale === "en" ? "Properties" : "Strutture"}
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-sm">
              {hotels.map((hotel) => (
                <li key={hotel.id}>
                  <Link
                    href={structurePublicPath(hotel.slug!, locale)}
                    className="font-medium text-[#0f4c81] hover:underline"
                  >
                    {hotel.property_name}
                    <span className="font-normal text-zinc-500"> · {hotel.city_name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {requests.length ? (
          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              {locale === "en" ? "Live requests" : "Richieste live"}
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
              {requests.map((request) => (
                <li key={request.id}>
                  <Link
                    href={destinationPublicPath(request.city_name, locale)}
                    className="hover:text-[#0f4c81] hover:underline"
                  >
                    {request.city_name}
                    <span className="text-zinc-500">
                      {" "}
                      · {request.check_in} → {request.check_out}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
