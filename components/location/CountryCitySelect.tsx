"use client";

import { useEffect, useMemo, useState } from "react";
import { CityAutocomplete } from "@/components/location/CityAutocomplete";
import { type WorldCity } from "@/lib/constants/world-cities";
import { cityFromStored, findFirstCityByCountry, getCountriesFromMajorCities } from "@/lib/constants/world-city-helpers";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  function changeCountry(countryCode: string) {
    onChange(findFirstCityByCountry(countryCode));
  }

  if (!mounted) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-zinc-800">
          {countryLabel}
          <div className="mt-2 h-[46px] rounded-2xl border border-zinc-300 bg-white" />
        </label>
        <label className="block text-sm font-medium text-zinc-800">
          {cityLabel}
          <div className="mt-2 h-[46px] rounded-2xl border border-zinc-300 bg-white" />
        </label>
        {helpText ? <p className="text-xs text-zinc-500 md:col-span-2">{helpText}</p> : null}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <label className="block text-sm font-medium text-zinc-800">
        {countryLabel}
        <select
          value={selectedCity.country_code}
          onChange={(event) => changeCountry(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-zinc-400 focus:ring-2"
        >
          {countries.map((country) => (
            <option key={country.country_code} value={country.country_code}>
              {country.country_name}
            </option>
          ))}
        </select>
      </label>

      <CityAutocomplete
        value={selectedCity}
        onChange={onChange}
        label={cityLabel}
        restrictCountryCode={selectedCity.country_code}
      />

      {helpText ? <p className="text-xs text-zinc-500 md:col-span-2">{helpText}</p> : null}
    </div>
  );
}
