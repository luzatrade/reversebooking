import type { AdvertiserType, MealPlan, PreferredStructureType, StructureType} from "@/types/app";

export const advertiserTypes: { value: AdvertiserType; label: string; description: string}[] = [
  { value: "private_individual", label: "Privato", description: "Richieste personali o familiari"},
  { value: "company", label: "Azienda", description: "Trasferte e soggiorni aziendali"},
  { value: "travel_agency", label: "Agenzia Viaggi", description: "Richieste per clienti o gruppi"},
  { value: "tour_operator", label: "Tour Operator", description: "Programmazione gruppi e pacchetti"},
];

export const structureTypes: { value: StructureType; label: string; description: string}[] = [
  { value: "hotel", label: "Hotel", description: "Strutture alberghiere"},
  { value: "bed_and_breakfast", label: "B&B", description: "Bed & breakfast e guest house"},
  { value: "apartment", label: "Appartamento", description: "Appartamenti e unità ricettive"},
];

export const preferredStructureTypes: { value: PreferredStructureType; label: string}[] = [
  { value: "all", label: "Tutte"},
  { value: "hotel", label: "Hotel"},
  { value: "bed_and_breakfast", label: "B&B"},
  { value: "apartment", label: "Appartamento"},
];

export const mealPlans: { value: MealPlan; label: string}[] = [
  { value: "room_only", label: "Solo Pernottamento"},
  { value: "breakfast", label: "Colazione"},
  { value: "half_board", label: "Mezza Pensione"},
  { value: "full_board", label: "Pensione Completa"},
];

export const hotelServices = [
  { key: "pool", label: "Piscina"},
  { key: "spa", label: "Spa"},
  { key: "garage", label: "Garage"},
  { key: "pets_allowed", label: "Animali ammessi"},
  { key: "disabled_access", label: "Accesso disabili"},
] as const;
