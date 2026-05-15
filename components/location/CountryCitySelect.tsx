"use client";

import { useEffect, useMemo, useState } from "react";
import { type WorldCity } from "@/lib/constants/world-cities";
import { getCitiesByCountry, getCountriesFromMajorCities, findFirstCityByCountry, cityFromInput, cityFromStored } from "@/lib/constants/world-city-helpers";

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
  const [mounted, setMounted] = useState(false);
  const selectedCity = value ? cityFromStored(value) : findFirstCityByCountry("IT");
  const countries = useMemo(() => getCountriesFromMajorCities(), []);
  const cities = useMemo(() => getCitiesByCountry(selectedCity.country_code), [selectedCity.country_code]);
  const [cityName, setCityName] = useState(selectedCity.city_name);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCityName(selectedCity.city_name);
  }, [selectedCity.city_id, selectedCity.city_name]);

  function changeCountry(countryCode: string) {
    const firstCity = findFirstCityByCountry(countryCode);
    setCityName(firstCity.city_name);
    onChange(firstCity);
  }

  function changeCity(cityNameValue: string) {
    setCityName(cityNameValue);
    onChange(cityFromInput(selectedCity.country_code, cityNameValue));
  }

  if (!mounted) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {countryLabel}
          <div className="mt-2 h-[46px] rounded-2xl border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950" />
        </label>
        <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {cityLabel}
          <div className="mt-2 h-[46px] rounded-2xl border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950" />
        </label>
        {helpText ? <p className="text-xs text-zinc-500 md:col-span-2">{helpText}</p> : null}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {countryLabel}
        <select
          value={selectedCity.country_code}
          onChange={(event) => changeCountry(event.target.value)}
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
        <input
          value={cityName}
          onChange={(event) => changeCity(event.target.value)}
          placeholder="Scrivi qualsiasi città del mondo"
          list={`cities-${selectedCity.country_code}`}
          className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
        />
        {cities.length ? (
          <datalist id={`cities-${selectedCity.country_code}`}>
            {cities.map((city) => (
              <option key={city.city_id} value={city.city_name} />
            ))}
          </datalist>
        ) : null}
      </label>

      {helpText ? <p className="text-xs text-zinc-500 md:col-span-2">{helpText}</p> : null}
    </div>
  );
}
