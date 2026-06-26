import { createServiceRoleClient } from "@/lib/supabase/admin";

export type HotelShowcaseScope = {
  cityId: string;
  countryCode: string | null;
  cityName: string;
  structureType: string;
};

const CITY_NAME_ALIASES: Record<string, string[]> = {
  rome: ["roma"],
  roma: ["rome"],
  florence: ["firenze"],
  firenze: ["florence"],
  milan: ["milano"],
  milano: ["milan"],
  naples: ["napoli"],
  napoli: ["naples"],
  venice: ["venezia"],
  venezia: ["venice"],
  turin: ["torino"],
  torino: ["turin"],
  "reggio calabria": ["reggio di calabria"],
  "reggio di calabria": ["reggio calabria"],
};

function normalize(value: string | null | undefined) {
  return (value ?? "").trim().toLowerCase();
}

function cityNamesMatch(a: string | null | undefined, b: string | null | undefined) {
  const na = normalize(a);
  const nb = normalize(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  if (CITY_NAME_ALIASES[na]?.includes(nb)) return true;
  if (CITY_NAME_ALIASES[nb]?.includes(na)) return true;
  return false;
}

export async function resolveHotelShowcaseScope(userId: string): Promise<HotelShowcaseScope | null> {
  const admin = createServiceRoleClient();
  if (!admin) return null;

  const { data: hotel, error } = await admin
    .from("hotel_accounts")
    .select("city_id, country_code, city_name, structure_type")
    .eq("user_id", userId)
    .maybeSingle();

  if (error || !hotel?.city_id?.trim()) return null;

  return {
    cityId: hotel.city_id.trim(),
    countryCode: hotel.country_code?.trim().toUpperCase() ?? null,
    cityName: hotel.city_name?.trim() ?? "",
    structureType: hotel.structure_type ?? "hotel",
  };
}

export function requestMatchesHotelScope(
  request: {
    city_id?: string | null;
    country_code?: string | null;
    city_name?: string | null;
    preferred_structure_type?: string | null;
  },
  scope: HotelShowcaseScope,
) {
  const requestCountry = request.country_code?.trim().toUpperCase();
  if (scope.countryCode && requestCountry && requestCountry !== scope.countryCode) return false;

  const cityOk =
    Boolean(request.city_id && request.city_id === scope.cityId) ||
    cityNamesMatch(request.city_name, scope.cityName);

  if (!cityOk) return false;

  const preferred = request.preferred_structure_type ?? "all";
  if (preferred !== "all" && preferred !== scope.structureType) return false;

  return true;
}
