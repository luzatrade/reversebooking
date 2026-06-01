import type { MealPlan, PreferredStructureType } from "@/types/app";

export type PublicRequest = {
  id: string;
  advertiserType: string;
  countryName: string;
  cityName: string;
  preferredArea: string;
  preferredStructureType: PreferredStructureType;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  roomsCount: number;
  budget: number;
  mealPlan: MealPlan;
  notes: string;
  createdAt: string;
};

export const publicRequests: PublicRequest[] = [
  {
    id: "verona-stazione-giugno-2026",
    advertiserType: "Privato",
    countryName: "Italia",
    cityName: "Verona",
    preferredArea: "Vicino alla stazione",
    preferredStructureType: "hotel",
    checkIn: "2026-06-20",
    checkOut: "2026-06-23",
    guestsCount: 2,
    roomsCount: 1,
    budget: 450,
    mealPlan: "breakfast",
    notes: "Preferenza per struttura comoda alla stazione e con garage.",
    createdAt: "2026-05-14",
  },
  {
    id: "verona-fiera-luglio-2026",
    advertiserType: "Famiglia",
    countryName: "Italia",
    cityName: "Verona",
    preferredArea: "Zona fiera",
    preferredStructureType: "all",
    checkIn: "2026-07-05",
    checkOut: "2026-07-07",
    guestsCount: 4,
    roomsCount: 2,
    budget: 700,
    mealPlan: "half_board",
    notes: "Richiesta per famiglia, preferenza zona fiera o zona ben collegata.",
    createdAt: "2026-05-14",
  },
  {
    id: "venezia-laguna-business-2026",
    advertiserType: "Azienda",
    countryName: "Italia",
    cityName: "Venezia",
    preferredArea: "Laguna / Mestre ben collegata",
    preferredStructureType: "hotel",
    checkIn: "2026-06-10",
    checkOut: "2026-06-12",
    guestsCount: 3,
    roomsCount: 3,
    budget: 900,
    mealPlan: "breakfast",
    notes: "Trasferta di lavoro, richieste camere singole e fattura aziendale.",
    createdAt: "2026-05-14",
  },
];

export const mealPlanLabels: Record<MealPlan, string> = {
  room_only: "Solo pernottamento",
  breakfast: "Colazione",
  half_board: "Mezza pensione",
  full_board: "Pensione completa",
  all_inclusive: "All inclusive",
};

export const preferredStructureLabels: Record<PreferredStructureType, string> = {
  all: "Tutte le strutture",
  hotel: "Hotel",
  bed_and_breakfast: "B&B",
  apartment: "Appartamento",
};
