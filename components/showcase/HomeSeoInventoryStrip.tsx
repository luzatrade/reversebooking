import Link from "next/link";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { destinationPublicPath, structurePublicPath } from "@/lib/i18n/routing";
import type { ShowcaseHomeInitialData } from "@/lib/showcase/homeData";

type Props = {
  initialData: ShowcaseHomeInitialData | null;
};

/** Server-rendered inventory links — collapsible, closed by default. */
export async function HomeSeoInventoryStrip({ initialData }: Props) {
  if (!initialData) return null;
  const locale = await getServerLocale();
  const hotels = initialData.hotels.filter((h) => h.slug).slice(0, 16);
  const requests = initialData.requests.slice(0, 10);

  if (!hotels.length && !requests.length) return null;

  const title =
    locale === "en" ? "Active properties and stay requests" : "Strutture e richieste di soggiorno attive";
  const summaryHint =
    locale === "en"
      ? `${hotels.length} properties · ${requests.length} live requests`
      : `${hotels.length} strutture · ${requests.length} richieste live`;

  return (
    <details className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <summary className="cursor-pointer list-none px-4 py-3.5 marker:content-none sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-3">
          <span>
            <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</span>
            <span className="mt-0.5 block text-xs text-zinc-500">{summaryHint}</span>
          </span>
          <span className="shrink-0 text-zinc-400 transition group-open:rotate-180" aria-hidden="true">
            ▾
          </span>
        </span>
      </summary>

      <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800 sm:px-5 sm:pb-5">
        {hotels.length ? (
          <div>
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
          <div className={hotels.length ? "mt-4" : ""}>
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
    </details>
  );
}
