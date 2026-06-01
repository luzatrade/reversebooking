import type { Locale } from "@/lib/i18n/translations";
import type {
  CatalogDateMode,
  CatalogOfferDetail,
  CatalogOfferKind,
  CatalogOfferListItem,
  CatalogRoomType,
  CatalogTripType,
  TransportMode,
} from "@/types/catalog-offers";
import type { MealPlan } from "@/types/app";

const MONTHS: Record<Locale, string[]> = {
  it: ["", "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
  en: ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

export function localizedOfferTitle(offer: Pick<CatalogOfferListItem, "title_it" | "title_en">, locale: Locale) {
  return locale === "en" ? offer.title_en : offer.title_it;
}

export function formatOfferDateRange(
  offer: Pick<
    CatalogOfferListItem,
    "date_mode" | "check_in" | "check_out" | "flexible_month" | "flexible_year" | "flexible_nights" | "valid_from" | "valid_until"
  >,
  locale: Locale,
) {
  const fmt = new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", { day: "2-digit", month: "short", year: "numeric" });
  if (offer.date_mode === "fixed" && offer.check_in && offer.check_out) {
    return `${fmt.format(new Date(offer.check_in))} → ${fmt.format(new Date(offer.check_out))}`;
  }
  if (offer.date_mode === "month_flexible" && offer.flexible_month && offer.flexible_year) {
    const month = MONTHS[locale][offer.flexible_month] ?? String(offer.flexible_month);
    const nights = offer.flexible_nights ? ` · ${offer.flexible_nights} ${locale === "en" ? "nights" : "notti"}` : "";
    return `${month} ${offer.flexible_year}${nights}`;
  }
  if (offer.date_mode === "date_range" && offer.valid_from && offer.valid_until) {
    return `${fmt.format(new Date(offer.valid_from))} – ${fmt.format(new Date(offer.valid_until))}`;
  }
  return locale === "en" ? "Dates on request" : "Date su richiesta";
}

export function formatOfferPrice(offer: CatalogOfferListItem, locale: Locale) {
  const fmt = new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  if (offer.offer_kind === "hotel_vacancy" && offer.hotel_details) {
    if (offer.hotel_details.pricing_model === "per_night_per_room") {
      return `${fmt.format(offer.hotel_details.price_amount)}/${locale === "en" ? "night" : "notte"}`;
    }
    return fmt.format(offer.hotel_details.price_amount);
  }
  if (offer.offer_kind === "agency_package") {
    const price = offer.min_price ?? offer.agency_details?.base_price_per_person;
    if (price) return `${locale === "en" ? "from" : "da"} ${fmt.format(price)}${locale === "en" ? "/person" : "/persona"}`;
  }
  return "—";
}

export function destinationLine(destinations: CatalogOfferListItem["destinations"], locale: Locale) {
  if (!destinations.length) return "";
  return destinations
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((d) => d.city_name)
    .join(locale === "en" ? " · " : " · ");
}

export function offerCoverUrl(offer: Pick<CatalogOfferListItem, "cover_public_url" | "provider">) {
  return offer.cover_public_url || offer.provider.main_photo_url || null;
}

export function computeMinAgencyPrice(detail: Pick<CatalogOfferDetail, "agency_details_full" | "agency_details">) {
  const tiers = detail.agency_details_full?.price_tiers ?? [];
  if (tiers.length) return Math.min(...tiers.map((t) => Number(t.price_per_person)));
  return detail.agency_details?.base_price_per_person ?? detail.agency_details_full?.base_price_per_person ?? null;
}

export const catalogRoomTypeLabels: Record<Locale, Record<CatalogRoomType, string>> = {
  it: { single: "Singola", double: "Doppia", twin: "Twin", triple: "Tripla", family: "Family", suite: "Suite" },
  en: { single: "Single", double: "Double", twin: "Twin", triple: "Triple", family: "Family", suite: "Suite" },
};

export const catalogTripTypeLabels: Record<Locale, Record<CatalogTripType, string>> = {
  it: { leisure: "Svago", business: "Business", school: "Scuole", group: "Gruppi" },
  en: { leisure: "Leisure", business: "Business", school: "School", group: "Group" },
};

export const transportModeLabels: Record<Locale, Record<TransportMode, string>> = {
  it: { none: "Nessuno", flight: "Volo", private_bus: "Bus privato", train: "Treno" },
  en: { none: "None", flight: "Flight", private_bus: "Private bus", train: "Train" },
};

export const boardBasisShort: Record<Locale, Record<MealPlan, string>> = {
  it: { room_only: "OB", breakfast: "BB", half_board: "HB", full_board: "FB", all_inclusive: "AI" },
  en: { room_only: "RO", breakfast: "BB", half_board: "HB", full_board: "FB", all_inclusive: "AI" },
};

export const offerKindLabels: Record<Locale, Record<CatalogOfferKind, string>> = {
  it: { hotel_vacancy: "Offerta struttura", agency_package: "Pacchetto agenzia" },
  en: { hotel_vacancy: "Property offer", agency_package: "Agency package" },
};

export const dateModeLabels: Record<Locale, Record<CatalogDateMode, string>> = {
  it: { fixed: "Date fisse", date_range: "Periodo di validità", month_flexible: "Mese flessibile" },
  en: { fixed: "Fixed dates", date_range: "Validity period", month_flexible: "Flexible month" },
};

export const HOTEL_PERK_OPTIONS: Array<{ key: string; label_it: string; label_en: string }> = [
  { key: "wifi", label_it: "Wi-Fi gratuito", label_en: "Free Wi-Fi" },
  { key: "spa", label_it: "Accesso SPA", label_en: "SPA access" },
  { key: "welcome_drink", label_it: "Drink di benvenuto", label_en: "Welcome drink" },
  { key: "parking", label_it: "Parcheggio gratuito", label_en: "Free parking" },
  { key: "late_checkout", label_it: "Late check-out", label_en: "Late check-out" },
];
