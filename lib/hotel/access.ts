export type HotelAccessRow = {
  subscription_active: boolean | null;
  account_status: string | null;
  onboarding_hotel_id?: string | null;
};

export type HotelAccessProfile = {
  phone_verified?: boolean | null;
};

export function needsPhoneVerification(
  hotel: HotelAccessRow | null | undefined,
  profile: HotelAccessProfile | null | undefined,
): boolean {
  if (!hotel?.onboarding_hotel_id) return false;
  return !profile?.phone_verified;
}

export function isHotelOperational(
  hotel: HotelAccessRow | null | undefined,
  profile?: HotelAccessProfile | null,
): boolean {
  if (!hotel) return false;
  if (hotel.account_status !== "active") return false;
  if (!hotel.subscription_active) return false;
  if (needsPhoneVerification(hotel, profile)) return false;
  return true;
}

export function isHotelPaused(hotel: HotelAccessRow | null | undefined): boolean {
  if (!hotel) return false;
  return hotel.account_status === "paused" || hotel.subscription_active === false;
}
