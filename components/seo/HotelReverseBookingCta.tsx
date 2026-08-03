import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles, Wallet } from "lucide-react";
import type { Locale } from "@/lib/i18n/translations";
import { localizedPath } from "@/lib/i18n/routing";

type Copy = {
  title: string;
  subtitle: string;
  cta: string;
  trustFree: string;
  trustNoCommission: string;
  trustOffers: string;
  howItWorks: string;
};

type Props = {
  locale: Locale;
  cityName: string;
  requestHref: string;
  copy: Copy;
  className?: string;
};

const trustItems = [
  { key: "trustFree" as const, icon: Wallet },
  { key: "trustNoCommission" as const, icon: BadgeCheck },
  { key: "trustOffers" as const, icon: Sparkles },
];

export function HotelReverseBookingCta({ locale, cityName, requestHref, copy, className = "" }: Props) {
  const subtitle = copy.subtitle.replace("{city}", cityName);

  return (
    <section
      className={`overflow-hidden rounded-3xl border border-[#0f4c81]/20 bg-gradient-to-br from-[#e8f0f8] via-white to-[#f8fafc] p-5 shadow-sm dark:border-[#0f4c81]/30 dark:from-[#0f4c81]/10 dark:via-zinc-900 dark:to-zinc-950 sm:p-6 ${className}`}
      aria-labelledby="hotel-reverse-booking-cta"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-[#0f4c81]">HotelsDrop</p>
      <h2 id="hotel-reverse-booking-cta" className="mt-2 text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-xl">
        {copy.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{subtitle}</p>

      <ul className="mt-4 space-y-2.5">
        {trustItems.map(({ key, icon: Icon }) => (
          <li key={key} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-200">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#0f4c81]" aria-hidden />
            <span>{copy[key]}</span>
          </li>
        ))}
      </ul>

      <Link
        href={requestHref}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f4c81] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0c3d66] sm:py-3"
      >
        {copy.cta}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>

      <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <Link href={localizedPath(locale, "/")} className="font-medium text-[#0f4c81] hover:underline">
          {copy.howItWorks}
        </Link>
      </p>
    </section>
  );
}
