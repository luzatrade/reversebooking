import type { AdvertiserType, MealPlan, StructureType } from "@/types/app";
import { getTranslations } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/translations";

export function getMealPlanLabels(locale: Locale): Record<MealPlan, string> {
  const t = getTranslations(locale);
  return {
    room_only: t.values.roomOnly,
    breakfast: t.values.breakfast,
    half_board: t.values.halfBoard,
    full_board: t.values.fullBoard,
    all_inclusive: t.values.allInclusive,
  };
}

export function getStructureTypeLabels(locale: Locale): Record<StructureType, string> {
  const t = getTranslations(locale);
  return {
    hotel: t.values.hotel,
    bed_and_breakfast: t.values.bedAndBreakfast,
    apartment: t.values.apartment,
  };
}

export function getAdvertiserTypeLabels(locale: Locale): Record<AdvertiserType, string> {
  const t = getTranslations(locale);
  return {
    private_individual: t.values.advertiserPrivate,
    company: t.values.advertiserCompany,
    travel_agency: t.values.advertiserAgency,
    tour_operator: t.values.advertiserTourOperator,
  };
}

export function getServiceLabels(locale: Locale): Record<string, string> {
  const t = getTranslations(locale);
  return {
    wifi: t.hotelServices.wifi,
    breakfast: t.hotelServices.breakfast,
    restaurant: t.hotelServices.restaurant,
    pool: t.request.pool,
    spa: t.request.spa,
    garage: t.request.garage,
    pets_allowed: t.request.petsAllowed,
    disabled_access: t.request.disabledAccess,
    beach: t.request.beach,
    bathtub: t.request.bathtub,
    connecting_rooms: t.request.connectingRooms,
  };
}
