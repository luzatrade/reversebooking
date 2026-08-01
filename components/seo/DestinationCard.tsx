import Link from "next/link";
import { CityHeroPlaceholder } from "@/components/seo/CityHeroPlaceholder";
import { SeoImage } from "@/components/seo/SeoImage";
import { destinationPublicPath } from "@/lib/i18n/routing";
import { getDestinationCardHint } from "@/lib/seo/destination-card-hint";
import { getDestinationDisplayName } from "@/lib/seo/destination-display-name";
import { getDestinationCityPhoto } from "@/lib/seo/destination-hero";
import type { DestinationHub } from "@/lib/seo/destination-queries";

type Props = {
  destination: DestinationHub;
  locale: "it" | "en";
  size?: "default" | "compact";
};

export function DestinationCard({ destination, locale, size = "default" }: Props) {
  const image = getDestinationCityPhoto(destination);
  const label = getDestinationDisplayName(destination, locale);
  const hint = getDestinationCardHint(destination, locale);
  const countLabel =
    locale === "en"
      ? `${destination.structureCount} ${destination.structureCount === 1 ? "property" : "properties"}`
      : `${destination.structureCount} ${destination.structureCount === 1 ? "struttura" : "strutture"}`;

  const imageClass = size === "compact" ? "h-20 w-full object-cover sm:h-24" : "h-28 w-full object-cover";
  const placeholderClass = size === "compact" ? "h-20 sm:h-24" : undefined;
  const bodyClass = size === "compact" ? "p-2.5 sm:p-3" : "p-3";
  const titleClass =
    size === "compact"
      ? "truncate text-sm font-semibold text-zinc-950 dark:text-white"
      : "font-semibold text-zinc-950 dark:text-white";

  return (
    <Link
      href={destinationPublicPath(destination.slug, locale)}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition hover:border-[#0f4c81]/30 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      {image ? (
        <SeoImage
          src={image}
          alt={label}
          className={`${imageClass} transition group-hover:scale-[1.02]`}
        />
      ) : (
        <CityHeroPlaceholder cityName={label} className={placeholderClass} />
      )}
      <div className={bodyClass}>
        <p className={titleClass}>{label}</p>
        {destination.structureCount > 0 ? (
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{countLabel}</p>
        ) : null}
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{hint}</p>
      </div>
    </Link>
  );
}
