import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";

export function getCountriesFromMajorCities() {
  const countries = new Map<string, { country_code: string; country_name: string }>();

  for (const city of majorWorldCities) {
    countries.set(city.country_code, {
      country_code: city.country_code,
      country_name: city.country_name,
    });
  }

  return Array.from(countries.values()).sort((a, b) => a.country_name.localeCompare(b.country_name));
}

export function getCitiesByCountry(countryCode: string) {
  return majorWorldCities
    .filter((city) => city.country_code === countryCode)
    .sort((a, b) => a.city_name.localeCompare(b.city_name));
}

export function findCityById(cityId?: string | null): WorldCity {
  return majorWorldCities.find((city) => city.city_id === cityId) ?? majorWorldCities[0];
}

export function findFirstCityByCountry(countryCode?: string | null): WorldCity {
  return majorWorldCities.find((city) => city.country_code === countryCode) ?? majorWorldCities[0];
}
