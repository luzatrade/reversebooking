export type UserRole = "advertiser" | "hotel" | "agency" | "admin";

/** Discrimina i fornitori in `hotel_accounts`: strutture ricettive vs agenzie viaggi. */
export type ProviderKind = "structure" | "agency";

export type AdvertiserType =
  | "private_individual"
  | "company"
  | "travel_agency"
  | "tour_operator";

export type StructureType = "hotel" | "bed_and_breakfast" | "apartment";

export type MealPlan = "room_only" | "breakfast" | "half_board" | "full_board" | "all_inclusive";

export type RequestStatus = "active" | "expired" | "deleted" | "completed";

export type OfferStatus = "pending" | "accepted" | "rejected" | "expired";

export type SubscriptionStatus =
  | "inactive"
  | "trialing"
  | "active"
  | "past_due"
  | "unpaid"
  | "canceled";

export type AccountStatus = "pending_verification" | "active" | "paused" | "suspended" | "banned";

export type PreferredStructureType = "all" | StructureType;

export type NotificationRecipientType = "advertiser" | "hotel";

export const mealPlanLabels: Record<MealPlan, string> = {
  room_only: "Solo pernottamento",
  breakfast: "Colazione",
  half_board: "Mezza pensione",
  full_board: "Pensione completa",
  all_inclusive: "All inclusive",
};

export const structureTypeLabels: Record<StructureType, string> = {
  hotel: "Hotel",
  bed_and_breakfast: "B&B",
  apartment: "Appartamento",
};

export const advertiserTypeLabels: Record<AdvertiserType, string> = {
  private_individual: "Privato",
  company: "Azienda",
  travel_agency: "Agenzia Viaggi",
  tour_operator: "Tour Operator",
};
