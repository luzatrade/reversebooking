export type HotelServiceKey =
  | "wifi"
  | "breakfast"
  | "restaurant"
  | "pool"
  | "spa"
  | "garage"
  | "beach"
  | "pets_allowed"
  | "disabled_access"
  | "connecting_rooms"
  | "bathtub";

export type HotelServiceCategoryId = "dining" | "wellness" | "access" | "outdoor" | "family" | "rooms";

export const HOTEL_SERVICE_CATEGORIES: {
  id: HotelServiceCategoryId;
  labelIt: string;
  labelEn: string;
  services: { key: HotelServiceKey; labelIt: string; labelEn: string }[];
}[] = [
  {
    id: "dining",
    labelIt: "Ristorazione",
    labelEn: "Dining",
    services: [
      { key: "restaurant", labelIt: "Ristorante", labelEn: "Restaurant" },
      { key: "breakfast", labelIt: "Colazione", labelEn: "Breakfast" },
      { key: "wifi", labelIt: "Wi‑Fi", labelEn: "Wi‑Fi" },
    ],
  },
  {
    id: "wellness",
    labelIt: "Benessere",
    labelEn: "Wellness",
    services: [
      { key: "pool", labelIt: "Piscina", labelEn: "Pool" },
      { key: "spa", labelIt: "Spa", labelEn: "Spa" },
    ],
  },
  {
    id: "access",
    labelIt: "Parcheggio e accesso",
    labelEn: "Parking & access",
    services: [
      { key: "garage", labelIt: "Garage / parcheggio", labelEn: "Garage / parking" },
      { key: "disabled_access", labelIt: "Camera accessibile disabili", labelEn: "Accessible room for disabled guests" },
    ],
  },
  {
    id: "rooms",
    labelIt: "Camere",
    labelEn: "Rooms",
    services: [
      { key: "connecting_rooms", labelIt: "Camere comunicanti", labelEn: "Connecting rooms" },
      { key: "bathtub", labelIt: "Vasca", labelEn: "Bathtub" },
    ],
  },
  {
    id: "outdoor",
    labelIt: "Esterni",
    labelEn: "Outdoors",
    services: [{ key: "beach", labelIt: "Spiaggia / mare vicino", labelEn: "Beach / seaside nearby" }],
  },
  {
    id: "family",
    labelIt: "Famiglia",
    labelEn: "Family",
    services: [{ key: "pets_allowed", labelIt: "Animali ammessi", labelEn: "Pets allowed" }],
  },
];

export const HOTEL_SERVICE_KEYS: HotelServiceKey[] = HOTEL_SERVICE_CATEGORIES.flatMap((category) =>
  category.services.map((service) => service.key),
);

export function defaultHotelServices(): Record<HotelServiceKey, boolean> {
  return Object.fromEntries(HOTEL_SERVICE_KEYS.map((key) => [key, false])) as Record<HotelServiceKey, boolean>;
}

export function normalizeHotelServices(input: Record<string, boolean> | null | undefined): Record<HotelServiceKey, boolean> {
  const base = defaultHotelServices();
  if (!input) return base;
  for (const key of HOTEL_SERVICE_KEYS) {
    if (typeof input[key] === "boolean") base[key] = input[key];
  }
  return base;
}

/** Flat list legacy (options.ts, seed scripts). */
export const hotelServices = HOTEL_SERVICE_CATEGORIES.flatMap((category) =>
  category.services.map((service) => ({ key: service.key, label: service.labelIt })),
);
