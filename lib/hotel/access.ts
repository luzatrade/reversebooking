export type HotelAccessRow = {
  subscription_active: boolean | null;
  account_status: string | null;
};

export function isHotelOperational(hotel: HotelAccessRow | null | undefined): boolean {
  if (!hotel) return false;
  return hotel.subscription_active === true && hotel.account_status === "active";
}

export function isHotelPaused(hotel: HotelAccessRow | null | undefined): boolean {
  if (!hotel) return false;
  return hotel.account_status === "paused" || hotel.subscription_active === false;
}
