"use client";

import { useMemo } from "react";
import { type WorldCity } from "@/lib/constants/world-cities";
import { getCitiesByCountry, getCountriesFromMajorCities, findFirstCityByCountry, findCityById } from "@/lib/constants/world-city-helpers";

type CountryCitySelectProps = {
  value?: WorldCity | null;
  onChange: (city: WorldCity) => void;
  countryLabel?: string;
  cityLabel?: string;
  helpText?: string;
};

export function CountryCitySelect({
  value,
  onChange,
  countryLabel = "Nazione",
  cityLabel = "Città principale",
  helpText,
}: CountryCitySelectProps) {
  const selectedCity = value ? findCityById(value.city_id) : findCityById(null);
  const countries = useMemo(() => getCountriesFromMajorCities(), []);
  const cities = useMemo(() => getCitiesByCountry(selectedCity.country_code), [selectedCity.country_code]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {countryLabel}
        <select
          value={selectedCity.country_code}
          onChange={(event) => onChange(findFirstCityByCountry(event.target.value))}
          className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
        >
          {countries.map((country) => (
            <option key={country.country_code} value={country.country_code}>
              {country.country_name}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {cityLabel}
        <select
          value={selectedCity.city_id}
          onChange={(event) => onChange(findCityById(event.target.value))}
          className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
        >
          {cities.map((city) => (
            <option key={city.city_id} value={city.city_id}>
              {city.city_name}
            </option>
          ))}
        </select>
      </label>

      {helpText ? <p className="text-xs text-zinc-500 md:col-span-2">{helpText}</p> : null}
    </div>
  );
}
