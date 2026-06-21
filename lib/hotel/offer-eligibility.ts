export const OFFER_MSG_PROFILE_INCOMPLETE =
  "Per inviare un'offerta è necessario completare prima il profilo della struttura.";

export const OFFER_MSG_SUBSCRIPTION_INACTIVE = "Abbonamento non attivo";

const PLACEHOLDER_PROPERTY_NAMES = new Set([
  "",
  "Struttura da completare",
  "Struttura test",
]);

const PLACEHOLDER_ADDRESSES = new Set(["", "Indirizzo da completare"]);

export type HotelOfferEligibilityRow = {
  property_name?: string | null;
  full_address?: string | null;
  main_photo_url?: string | null;
  subscription_active?: boolean | null;
};

/** Campi minimi da selezionare prima di chiamare getHotelOfferBlockMessage. */
export const HOTEL_OFFER_ELIGIBILITY_SELECT =
  "id, property_name, full_address, main_photo_url, subscription_active, account_status, provider_kind, city_id, city_name, country_code, structure_type";

/** Allineato alla logica DB `prevent_hotel_city_change` (profilo placeholder). */
export function isHotelProfileIncomplete(hotel: HotelOfferEligibilityRow | null | undefined): boolean {
  if (!hotel) return true;
  const propertyName = (hotel.property_name ?? "").trim();
  const fullAddress = (hotel.full_address ?? "").trim();
  if (PLACEHOLDER_PROPERTY_NAMES.has(propertyName)) return true;
  if (PLACEHOLDER_ADDRESSES.has(fullAddress)) return true;
  if (!hotel.main_photo_url?.trim()) return true;
  return false;
}

export function getHotelProfileIncompleteHint(hotel: HotelOfferEligibilityRow | null | undefined): string | null {
  if (!hotel) return "Profilo struttura non trovato.";
  const propertyName = (hotel.property_name ?? "").trim();
  const fullAddress = (hotel.full_address ?? "").trim();
  if (PLACEHOLDER_PROPERTY_NAMES.has(propertyName)) return "Inserisci il nome della struttura nel profilo.";
  if (PLACEHOLDER_ADDRESSES.has(fullAddress)) return "Inserisci l'indirizzo completo nel profilo.";
  if (!hotel.main_photo_url?.trim()) return "Carica la foto principale nel profilo struttura.";
  return null;
}

/** Messaggio blocco invio offerta, oppure null se la struttura può procedere. */
export function getHotelOfferBlockMessage(hotel: HotelOfferEligibilityRow | null | undefined): string | null {
  const profileHint = getHotelProfileIncompleteHint(hotel);
  if (profileHint) {
    return profileHint === "Profilo struttura non trovato."
      ? OFFER_MSG_PROFILE_INCOMPLETE
      : `${OFFER_MSG_PROFILE_INCOMPLETE} ${profileHint}`;
  }
  if (!hotel?.subscription_active) return OFFER_MSG_SUBSCRIPTION_INACTIVE;
  return null;
}

export function mapOfferSubmitError(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("on conflict") || lower.includes("exclusion constraint")) {
    return "Hai già inviato un'offerta per questo annuncio.";
  }
  if (lower.includes("duplicate key") || lower.includes("unique constraint")) {
    return "Hai già inviato un'offerta per questo annuncio.";
  }
  if (lower.includes("row-level security") || lower.includes("permission denied")) {
    return OFFER_MSG_PROFILE_INCOMPLETE;
  }
  return "Non è stato possibile inviare l'offerta. Riprova tra qualche istante.";
}
