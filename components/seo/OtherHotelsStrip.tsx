import Link from "next/link";
import { Building2, MapPin } from "lucide-react";
import { SeoImage } from "@/components/seo/SeoImage";
import { structurePublicPath } from "@/lib/i18n/routing";
import type { DestinationStructureItem } from "@/lib/seo/destination-queries";

type Props = {
  title: string;
  items: DestinationStructureItem[];
  excludeSlug?: string;
  locale: "it" | "en";
};

export function OtherHotelsStrip({ title, items, excludeSlug, locale }: Props) {
  const visible = items.filter((item) => item.slug !== excludeSlug).slice(0, 6);
  if (!visible.length) return null;

  return (
    <section aria-label={title} className="rounded-3xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-xl">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.slug}>
            <Link
              href={structurePublicPath(item.slug, locale)}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition hover:border-[#0f4c81]/30 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              {item.mainPhotoUrl ? (
                <SeoImage src={item.mainPhotoUrl} alt={item.name} className="h-32 w-full object-cover sm:h-36" />
              ) : (
                <div className="flex h-32 items-center justify-center bg-zinc-100 text-zinc-400 dark:bg-zinc-900 sm:h-36">
                  <Building2 className="h-8 w-8" aria-hidden="true" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <p className="font-semibold text-zinc-950 dark:text-white">{item.name}</p>
                {item.address ? (
                  <p className="mt-1 line-clamp-2 text-xs text-zinc-500 sm:text-sm">
                    <MapPin className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                    {item.address}
                  </p>
                ) : null}
                <span className="mt-3 text-xs font-semibold text-[#0f4c81] sm:text-sm">
                  {locale === "en" ? "View property" : "Vedi struttura"}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
