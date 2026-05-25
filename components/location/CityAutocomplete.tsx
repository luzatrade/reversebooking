"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";
import { cityFromInput, createWorldCity } from "@/lib/constants/world-city-helpers";

type CityAutocompleteProps = {
  value: WorldCity;
  onChange: (city: WorldCity) => void;
  label?: string;
  helpText?: string;
};

type Suggestion = WorldCity & { source: "local" | "remote" };

type NominatimPlace = {
  display_name?: string;
  address?: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    county?: string;
    state?: string;
    country?: string;
    country_code?: string;
  };
};

function normalizeText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function uniqueSuggestions(items: Suggestion[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = `${item.country_code}-${normalizeText(item.city_name)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function cityFromPlace(place: NominatimPlace): Suggestion | null {
  const address = place.address;
  if (!address?.country_code || !address.country) return null;
  const cityName = address.city ?? address.town ?? address.village ?? address.municipality ?? address.county ?? "";
  if (!cityName.trim()) return null;
  return { ...createWorldCity(address.country_code.toUpperCase(), cityName, address.country), source: "remote" };
}

function initialQuery(value: WorldCity) {
  return value.city_name.trim() ? value.label : "";
}

export function CityAutocomplete({ value, onChange, label = "Destinazione", helpText }: CityAutocompleteProps) {
  const [query, setQuery] = useState(() => initialQuery(value));
  const [remoteSuggestions, setRemoteSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const localSuggestions = useMemo(() => {
    const text = normalizeText(query);
    if (text.length < 2) return [];
    return majorWorldCities
      .filter((city) => normalizeText(city.label).includes(text) || normalizeText(city.city_name).includes(text))
      .slice(0, 6)
      .map((city) => ({ ...city, source: "local" as const }));
  }, [query]);

  useEffect(() => {
    const text = query.trim();
    if (text.length < 3) {
      setRemoteSuggestions([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({ format: "jsonv2", addressdetails: "1", limit: "8", q: text });
        const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, { signal: controller.signal });
        if (!response.ok) return;
        const places = (await response.json()) as NominatimPlace[];
        setRemoteSuggestions(places.map(cityFromPlace).filter(Boolean) as Suggestion[]);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setRemoteSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, []);

  const suggestions = uniqueSuggestions([...localSuggestions, ...remoteSuggestions]).slice(0, 8);

  function selectCity(city: Suggestion) {
    setQuery(city.label);
    setOpen(false);
    onChange(city);
  }

  function confirmManualCity() {
    const text = query.trim();
    if (!text) {
      onChange(createWorldCity("IT", ""));
      return;
    }

    const exactCity = suggestions.find((city) => normalizeText(city.city_name) === normalizeText(text) || normalizeText(city.label) === normalizeText(text));
    if (exactCity) {
      setQuery(exactCity.label);
      onChange(exactCity);
      return;
    }

    const manualCity = cityFromInput(value.country_code || "IT", text);
    setQuery(manualCity.label);
    onChange(manualCity);
  }

  function onInputChange(text: string) {
    setQuery(text);
    setOpen(true);
    if (!text.trim()) {
      setRemoteSuggestions([]);
      onChange(createWorldCity("IT", ""));
    }
  }

  return (
    <div ref={wrapperRef} className="relative z-40">
      <label className="block text-sm font-medium text-zinc-800">
        {label}
        <div className="mt-2 flex min-h-12 items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm ring-zinc-300 focus-within:ring-2 sm:text-sm">
          <Search className="h-4 w-4 text-zinc-400" />
          <input
            value={query}
            onChange={(event) => onInputChange(event.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={confirmManualCity}
            placeholder="Scrivi una città, es. Roma, Parigi, Bangkok..."
            className="w-full bg-transparent text-zinc-950 outline-none placeholder:text-zinc-400"
            autoComplete="off"
            required
          />
        </div>
      </label>

      {open && (query.trim().length >= 2 || loading) ? (
        <div className="absolute left-0 right-0 z-[9999] mt-2 max-h-72 overflow-y-auto rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-2xl">
          {loading ? <p className="px-4 py-3 text-sm text-zinc-500">Ricerca città...</p> : null}
          {!loading && suggestions.length === 0 ? <p className="px-4 py-3 text-sm text-zinc-500">Continua a scrivere o inserisci la città manualmente.</p> : null}
          {suggestions.map((city) => (
            <button
              key={`${city.source}-${city.city_id}`}
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => selectCity(city)}
              className="flex min-h-12 w-full items-start gap-3 border-b border-zinc-100 px-4 py-3 text-left text-sm last:border-b-0 hover:bg-zinc-50"
            >
              <MapPin className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                <span className="block font-semibold text-zinc-950">{city.city_name}</span>
                <span className="block text-xs text-zinc-500">{city.country_name}</span>
              </span>
            </button>
          ))}
        </div>
      ) : null}

      {helpText ? <p className="mt-2 text-xs text-zinc-500">{helpText}</p> : null}
    </div>
  );
}
