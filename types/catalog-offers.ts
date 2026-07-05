import type { MealPlan, ProviderKind, StructureType } from "@/types/app";

export type CatalogOfferKind = "hotel_vacancy" | "agency_package";
export type CatalogOfferStatus = "draft" | "published" | "expired" | "sold_out" | "archived";
export type CatalogDateMode = "fixed" | "date_range" | "month_flexible";
export type CatalogTripType = "leisure" | "business" | "school" | "group";
export type CatalogTargetType = "individual" | "group";
export type CatalogCityTax = "included" | "excluded" | "not_applicable";
export type CatalogPricingModel = "per_night_per_room" | "total_package";
export type CatalogRoomType = "single" | "double" | "twin" | "triple" | "family" | "suite";
export type CatalogDestinationRole = "primary" | "stop" | "final";
export type CatalogInclusionKind = "included" | "excluded";
export type CatalogInterestStatus = "open" | "replied" | "closed";
export type CatalogAcceptanceStatus = "pending" | "confirmed" | "cancelled" | "completed";
export type TransportMode = "none" | "flight" | "private_bus" | "train";

export type CatalogOfferDestination = {
  id?: string;
  city_id: string;
  country_code: string;
  city_name: string;
  role: CatalogDestinationRole;
  sort_order: number;
  nights_at_destination?: number | null;
};

export type HotelOfferRoom = {
  id?: string;
  room_type: CatalogRoomType;
  rooms_available: number;
  max_occupancy?: number | null;
  price_override?: number | null;
  sort_order: number;
};

export type AgencyItineraryDay = {
  id?: string;
  day_number: number;
  title_it: string;
  title_en: string;
  description_it: string;
  description_en: string;
  meal_plan: MealPlan;
  destination_city_id?: string | null;
  sort_order: number;
};

export type AgencyPriceTier = {
  id?: string;
  tier_kind: CatalogTargetType;
  min_pax: number;
  max_pax?: number | null;
  price_per_person: number;
  label_it: string;
  label_en: string;
  sort_order: number;
};

export type AgencyInclusion = {
  id?: string;
  kind: CatalogInclusionKind;
  label_it: string;
  label_en: string;
  sort_order: number;
};

export type CatalogOfferPerk = {
  key: string;
  label_it: string;
  label_en: string;
};

export type CatalogOfferListItem = {
  id: string;
  offer_code: string;
  offer_kind: CatalogOfferKind;
  provider_kind: ProviderKind;
  title_it: string;
  title_en: string;
  status: CatalogOfferStatus;
  date_mode: CatalogDateMode;
  check_in: string | null;
  check_out: string | null;
  valid_from: string | null;
  valid_until: string | null;
  flexible_month: number | null;
  flexible_year: number | null;
  flexible_nights: number | null;
  cover_public_url: string | null;
  published_at: string | null;
  provider: {
    id: string;
    property_name: string;
    main_photo_url: string | null;
    provider_kind: ProviderKind;
    city_name: string;
  };
  destinations: CatalogOfferDestination[];
  hotel_details?: {
    board_basis: MealPlan;
    pricing_model: CatalogPricingModel;
    price_amount: number;
    currency: string;
    is_weekend_offer: boolean;
  } | null;
  agency_details?: {
    trip_type: CatalogTripType;
    duration_days: number;
    duration_nights: number;
    base_price_per_person: number;
    target_type: CatalogTargetType;
    board_basis?: MealPlan;
  } | null;
  min_price?: number | null;
};

export type CatalogOfferDetail = CatalogOfferListItem & {
  gallery_paths: string[];
  hotel_details_full?: {
    accommodation_type: StructureType;
    board_basis: MealPlan;
    pricing_model: CatalogPricingModel;
    price_amount: number;
    currency: string;
    min_stay_nights: number;
    max_occupancy_per_room: number | null;
    cancellation_policy_it: string;
    cancellation_policy_en: string;
    city_tax: CatalogCityTax;
    perks: CatalogOfferPerk[];
    is_weekend_offer: boolean;
    rooms: HotelOfferRoom[];
  } | null;
  agency_details_full?: {
    trip_type: CatalogTripType;
    duration_days: number;
    duration_nights: number;
    target_type: CatalogTargetType;
    min_participants: number | null;
    date_type: CatalogDateMode;
    board_basis: MealPlan;
    primary_hotel_name: string | null;
    hotel_category: string | null;
    transport_modes: string[];
    base_price_per_person: number;
    single_supplement: number | null;
    pricing_notes_it: string | null;
    pricing_notes_en: string | null;
    payment_terms_it: string | null;
    payment_terms_en: string | null;
    cancellation_terms_it: string | null;
    cancellation_terms_en: string | null;
    itinerary: AgencyItineraryDay[];
    price_tiers: AgencyPriceTier[];
    inclusions: AgencyInclusion[];
  } | null;
};

export type CatalogAcceptanceSnapshot = {
  offer_code: string;
  offer_kind: CatalogOfferKind;
  title_it: string;
  title_en: string;
  provider_name: string;
  destinations: CatalogOfferDestination[];
  check_in: string | null;
  check_out: string | null;
  date_mode: CatalogDateMode;
  flexible_month: number | null;
  flexible_year: number | null;
  flexible_nights: number | null;
  total_price: number;
  currency: string;
  board_basis?: MealPlan;
  cancellation_policy_it?: string;
  cancellation_policy_en?: string;
  payment_terms_it?: string;
  payment_terms_en?: string;
  itinerary?: AgencyItineraryDay[];
  inclusions?: AgencyInclusion[];
};
