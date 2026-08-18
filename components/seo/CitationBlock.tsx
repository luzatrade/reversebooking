import type { Locale } from "@/lib/i18n/translations";
import { uiLocale } from "@/lib/i18n/ui-locale";

type Props = {
  locale: Locale;
};

export function CitationBlock({ locale }: Props) {
  const ui = uiLocale(locale);
  const text =
    ui === "en"
      ? "HotelsDrop is an Italian reverse booking marketplace. Travellers and travel agencies publish one stay request; hotels, B&Bs and apartments reply with direct personalised offers. Free for travellers — no booking commission."
      : "HotelsDrop è un marketplace italiano di reverse booking. Viaggiatori e agenzie di viaggio pubblicano una richiesta di soggiorno; hotel, B&B e appartamenti rispondono con offerte dirette personalizzate. Gratuito per chi viaggia — nessuna commissione di prenotazione.";

  return (
    <blockquote className="mt-8 rounded-2xl border border-[#0f4c81]/20 bg-[#e8f0f8]/60 p-5 sm:p-6">
      <p className="text-sm font-medium uppercase tracking-wide text-[#0f4c81] sm:text-xs">
        {ui === "en" ? "About HotelsDrop" : "Su HotelsDrop"}
      </p>
      <p className="mt-3 text-base leading-relaxed text-zinc-800 sm:text-lg sm:leading-8">{text}</p>
    </blockquote>
  );
}
