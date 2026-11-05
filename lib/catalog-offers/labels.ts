import type { Locale } from "@/lib/i18n/translations";
import { uiLocale } from "@/lib/i18n/ui-locale";
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

const MONTHS = {
  it: ["", "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
  en: ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
} as const;

export function localizedOfferTitle(offer: Pick<CatalogOfferListItem, "title_it" | "title_en">, locale: Locale) {
  return uiLocale(locale) === "en" ? offer.title_en : offer.title_it;
}

export function formatOfferDateRange(
  offer: Pick<
    CatalogOfferListItem,
    "date_mode" | "check_in" | "check_out" | "flexible_month" | "flexible_year" | "flexible_nights" | "valid_from" | "valid_until"
  >,
  locale: Locale,
) {
  const ui = uiLocale(locale);
  const fmt = new Intl.DateTimeFormat(ui === "en" ? "en-GB" : "it-IT", { day: "2-digit", month: "short", year: "numeric" });
  if (offer.date_mode === "fixed" && offer.check_in && offer.check_out) {
    return `${fmt.format(new Date(offer.check_in))} → ${fmt.format(new Date(offer.check_out))}`;
  }
  if (offer.date_mode === "month_flexible" && offer.flexible_month && offer.flexible_year) {
    const month = MONTHS[ui][offer.flexible_month] ?? String(offer.flexible_month);
    const nights = offer.flexible_nights ? ` · ${offer.flexible_nights} ${ui === "en" ? "nights" : "notti"}` : "";
    return `${month} ${offer.flexible_year}${nights}`;
  }
  if (offer.date_mode === "date_range" && offer.valid_from && offer.valid_until) {
    return `${fmt.format(new Date(offer.valid_from))} – ${fmt.format(new Date(offer.valid_until))}`;
  }
  return ui === "en" ? "Dates on request" : "Date su richiesta";
}

export function formatOfferPrice(offer: CatalogOfferListItem, locale: Locale) {
  const ui = uiLocale(locale);
  const fmt = new Intl.NumberFormat(ui === "en" ? "en-GB" : "it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  if (offer.offer_kind === "hotel_vacancy" && offer.hotel_details) {
    if (offer.hotel_details.pricing_model === "per_night_per_room") {
      return `${fmt.format(offer.hotel_details.price_amount)}/${ui === "en" ? "night" : "notte"}`;
    }
    return fmt.format(offer.hotel_details.price_amount);
  }
  if (offer.offer_kind === "agency_package") {
    const price = offer.min_price ?? offer.agency_details?.base_price_per_person;
    if (price) return `${ui === "en" ? "from" : "da"} ${fmt.format(price)}${ui === "en" ? "/person" : "/persona"}`;
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

export const catalogRoomTypeLabels = {
  it: { single: "Singola", double: "Doppia", twin: "Twin", triple: "Tripla", family: "Family", suite: "Suite" },
  en: { single: "Single", double: "Double", twin: "Twin", triple: "Triple", family: "Family", suite: "Suite" },
} as const;

export const catalogTripTypeLabels = {
  it: { leisure: "Svago", business: "Business", school: "Scuole", group: "Gruppi" },
  en: { leisure: "Leisure", business: "Business", school: "School", group: "Group" },
} as const;

export const transportModeLabels = {
  it: { none: "Nessuno", flight: "Volo", private_bus: "Bus privato", train: "Treno" },
  en: { none: "None", flight: "Flight", private_bus: "Private bus", train: "Train" },
} as const;

export const boardBasisShort = {
  it: { room_only: "OB", breakfast: "BB", half_board: "HB", full_board: "FB", all_inclusive: "AI" },
  en: { room_only: "RO", breakfast: "BB", half_board: "HB", full_board: "FB", all_inclusive: "AI" },
} as const;

export const mealPlanWizardDescriptions = {
  it: {
    room_only: { title: "Solo pernottamento", hint: "Camera senza pasti inclusi." },
    breakfast: { title: "Bed & Breakfast", hint: "Pernottamento e colazione." },
    half_board: { title: "Mezza pensione", hint: "Colazione e cena (bevande salvo diversa indicazione)." },
    full_board: { title: "Pensione completa", hint: "Colazione, pranzo e cena." },
    all_inclusive: { title: "All inclusive", hint: "Pasti e bevande secondo regolamento della struttura." },
  },
  en: {
    room_only: { title: "Room only", hint: "Accommodation without meals." },
    breakfast: { title: "Bed & Breakfast", hint: "Stay and breakfast." },
    half_board: { title: "Half board", hint: "Breakfast and dinner (drinks unless stated)." },
    full_board: { title: "Full board", hint: "Breakfast, lunch and dinner." },
    all_inclusive: { title: "All inclusive", hint: "Meals and drinks per property rules." },
  },
} as const;

export const targetTypeLabels = {
  it: { individual: "Individuale / coppia", group: "Gruppo organizzato" },
  en: { individual: "Individual / couple", group: "Organized group" },
} as const;

export const MONTH_OPTIONS = {
  it: [
    { value: 1, label: "Gennaio" }, { value: 2, label: "Febbraio" }, { value: 3, label: "Marzo" },
    { value: 4, label: "Aprile" }, { value: 5, label: "Maggio" }, { value: 6, label: "Giugno" },
    { value: 7, label: "Luglio" }, { value: 8, label: "Agosto" }, { value: 9, label: "Settembre" },
    { value: 10, label: "Ottobre" }, { value: 11, label: "Novembre" }, { value: 12, label: "Dicembre" },
  ],
  en: [
    { value: 1, label: "January" }, { value: 2, label: "February" }, { value: 3, label: "March" },
    { value: 4, label: "April" }, { value: 5, label: "May" }, { value: 6, label: "June" },
    { value: 7, label: "July" }, { value: 8, label: "August" }, { value: 9, label: "September" },
    { value: 10, label: "October" }, { value: 11, label: "November" }, { value: 12, label: "December" },
  ],
} as const;

export const offerKindLabels = {
  it: { hotel_vacancy: "Offerta struttura", agency_package: "Pacchetto agenzia" },
  en: { hotel_vacancy: "Property offer", agency_package: "Agency package" },
} as const;

export const dateModeLabels = {
  it: { fixed: "Date fisse", date_range: "Periodo di validità", month_flexible: "Mese flessibile" },
  en: { fixed: "Fixed dates", date_range: "Validity period", month_flexible: "Flexible month" },
} as const;

export function catalogLabelsForLocale<T extends Record<"it" | "en", unknown>>(map: T, locale: Locale): T["it"] {
  return map[uiLocale(locale)] as T["it"];
}

export const HOTEL_PERK_OPTIONS: Array<{ key: string; label_it: string; label_en: string }> = [
  { key: "wifi", label_it: "Wi-Fi gratuito", label_en: "Free Wi-Fi" },
  { key: "spa", label_it: "Accesso SPA", label_en: "SPA access" },
  { key: "welcome_drink", label_it: "Drink di benvenuto", label_en: "Welcome drink" },
  { key: "parking", label_it: "Parcheggio gratuito", label_en: "Free parking" },
  { key: "late_checkout", label_it: "Late check-out", label_en: "Late check-out" },
];
