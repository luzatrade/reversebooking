"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Building2, MapPin, Search } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { CatalogStructureHit } from "@/lib/catalog/searchStructures";
import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";
import { cityFromInput, createWorldCity, findCityById } from "@/lib/constants/world-city-helpers";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";

type CityAutocompleteProps = {
  value: WorldCity;
  onChange: (city: WorldCity) => void;
  /** Chiamato quando l'utente sceglie un suggerimento dal menu (non su ogni keystroke). */
  onPick?: (city: WorldCity) => void;
  label?: string;
  helpText?: string;
  placeholder?: string;
  hideLabel?: boolean;
  /** Limita i suggerimenti locali e remoti al paese selezionato. */
  restrictCountryCode?: string;
  /** Mostra strutture onboarding/registrate dal catalogo HotelsDrop. */
  includeCatalogStructures?: boolean;
  onPickStructure?: (structure: CatalogStructureHit) => void;
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

const suggestionsPanelClass =
  "absolute left-0 right-0 z-[9999] mt-2 max-h-72 overflow-y-auto rounded-2xl border-2 border-zinc-300 bg-white text-zinc-950 shadow-[0_16px_40px_rgba(15,23,42,0.16)] ring-1 ring-zinc-200";

const suggestionButtonClass =
  "flex min-h-12 w-full items-start gap-3 border-b border-zinc-200 bg-white px-4 py-3 text-left text-sm last:border-b-0 hover:bg-zinc-100 active:bg-zinc-200";

function normalizeText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function cityMatchesLocalQuery(city: WorldCity, text: string) {
  if (normalizeText(city.label).includes(text)) return true;
  if (normalizeText(city.city_name).includes(text)) return true;
  const cityNorm = normalizeText(city.city_name);
  const cityAliases: Record<string, string[]> = {
    london: ["londra"],
    londra: ["london"],
    rome: ["roma"],
    roma: ["rome"],
    milan: ["milano"],
    milano: ["milan"],
  };
  for (const [key, vals] of Object.entries(cityAliases)) {
    if (text === key && vals.includes(cityNorm)) return true;
    if (cityNorm === key && vals.some((alias) => alias.includes(text) || text.includes(alias))) return true;
  }
  return false;
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

function normalizeCitySelection(city: WorldCity): WorldCity {
  const canonicalId = resolveCanonicalCityId({
    cityName: city.city_name,
    countryCode: city.country_code,
    cityId: city.city_id,
  });
  if (!canonicalId) return city;
  const known = findCityById(canonicalId);
  return known.city_id === canonicalId ? known : { ...city, city_id: canonicalId };
}

function cityFromPlace(place: NominatimPlace): Suggestion | null {
  const address = place.address;
  if (!address?.country_code || !address.country) return null;
  const cityName = address.city ?? address.town ?? address.village ?? address.municipality ?? address.county ?? "";
  if (!cityName.trim()) return null;
  const base = createWorldCity(address.country_code.toUpperCase(), cityName, address.country);
  return { ...normalizeCitySelection(base), source: "remote" as const };
}

function initialQuery(value: WorldCity) {
  return value.city_name.trim() ? value.label : "";
}

export function CityAutocomplete({
  value,
  onChange,
  onPick,
  label,
  helpText,
  placeholder,
  hideLabel = false,
  restrictCountryCode,
  includeCatalogStructures = false,
  onPickStructure,
}: CityAutocompleteProps) {
  const { t } = useLanguage();
  const resolvedLabel = label ?? t.common.destination;
  const resolvedPlaceholder = placeholder ?? t.location.cityPlaceholder;
  const defaultCountryCode = restrictCountryCode || value.country_code || "IT";
  const [query, setQuery] = useState(() => initialQuery(value));
  const [remoteSuggestions, setRemoteSuggestions] = useState<Suggestion[]>([]);
  const [catalogStructures, setCatalogStructures] = useState<CatalogStructureHit[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [structuresLoading, setStructuresLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  /** Evita che onBlur tratti il nome struttura appena scelto come città manuale. */
  const skipBlurConfirmRef = useRef(false);

  useEffect(() => {
    setQuery(initialQuery(value));
  }, [value.city_id, value.city_name, value.country_code, value.label]);

  const localSuggestions = useMemo(() => {
    const text = normalizeText(query);
    if (text.length < 2) return [];
    return majorWorldCities
      .filter((city) => {
        if (restrictCountryCode && city.country_code !== restrictCountryCode) return false;
        return cityMatchesLocalQuery(city, text);
      })
      .slice(0, 6)
      .map((city) => ({ ...city, source: "local" as const }));
  }, [query, restrictCountryCode]);

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
        if (restrictCountryCode) {
          params.set("countrycodes", restrictCountryCode.toLowerCase());
        }
        const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) return;
        const places = (await response.json()) as NominatimPlace[];
        const mapped = places.map(cityFromPlace).filter(Boolean) as Suggestion[];
        setRemoteSuggestions(
          restrictCountryCode
            ? mapped.filter((city) => city.country_code === restrictCountryCode)
            : mapped,
        );
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
  }, [query, restrictCountryCode]);

  useEffect(() => {
    if (!includeCatalogStructures) {
      setCatalogStructures([]);
      setStructuresLoading(false);
      return;
    }

    const text = query.trim();
    if (text.length < 2) {
      setCatalogStructures([]);
      setStructuresLoading(false);
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setStructuresLoading(true);
      try {
        const params = new URLSearchParams({ q: text, limit: "6" });
        const response = await fetch(`/api/search/catalog-structures?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          setCatalogStructures([]);
          return;
        }
        const data = (await response.json()) as { structures?: CatalogStructureHit[] };
        setCatalogStructures(data.structures ?? []);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setCatalogStructures([]);
      } finally {
        setStructuresLoading(false);
      }
    }, 300);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [includeCatalogStructures, query]);

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, []);

  const suggestions = uniqueSuggestions([...localSuggestions, ...remoteSuggestions]).slice(0, 8);

  function selectCity(city: Suggestion) {
    const resolved = normalizeCitySelection(city);
    setQuery(resolved.label);
    setOpen(false);
    onChange(resolved);
    onPick?.(resolved);
  }

  function selectStructure(structure: CatalogStructureHit) {
    skipBlurConfirmRef.current = true;
    setOpen(false);
    onPickStructure?.(structure);
    // Ripristina l'etichetta destinazione: il blur non deve leggere il nome hotel.
    if (value.city_name.trim()) {
      setQuery(initialQuery(value));
    }
  }

  const panelBusy = loading || structuresLoading;
  const hasStructureResults = includeCatalogStructures && catalogStructures.length > 0;
  const hasCityResults = suggestions.length > 0;
  const showEmptyHint = !panelBusy && !hasStructureResults && !hasCityResults;

  function confirmManualCity() {
    if (skipBlurConfirmRef.current) {
      skipBlurConfirmRef.current = false;
      return;
    }

    const text = query.trim();
    if (!text) {
      onChange(createWorldCity(defaultCountryCode, ""));
      return;
    }

    const exactCity = suggestions.find(
      (city) => normalizeText(city.city_name) === normalizeText(text) || normalizeText(city.label) === normalizeText(text),
    );
    if (exactCity) {
      setQuery(exactCity.label);
      onChange(exactCity);
      return;
    }

    if (includeCatalogStructures && onPickStructure) {
      const exactStructure = catalogStructures.find(
        (structure) => normalizeText(structure.name) === normalizeText(text),
      );
      if (exactStructure) {
        selectStructure(exactStructure);
        return;
      }
    }

    const manualCity = cityFromInput(defaultCountryCode, text);
    setQuery(manualCity.label);
    onChange(manualCity);
  }

  function onInputChange(text: string) {
    setQuery(text);
    setOpen(true);
    if (!text.trim()) {
      setRemoteSuggestions([]);
      setCatalogStructures([]);
      onChange(createWorldCity(defaultCountryCode, ""));
    }
  }

  return (
    <div ref={wrapperRef} className="relative z-40">
      <label className="block">
        <span className={hideLabel ? "sr-only" : "text-sm font-medium text-zinc-800"}>{resolvedLabel}</span>
        <div
          className={`flex min-h-12 items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm ring-zinc-300 focus-within:ring-2 sm:min-h-[3.25rem] sm:text-sm ${hideLabel ? "mt-0" : "mt-2"}`}
        >
          <Search className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
          <input
            value={query}
            onChange={(event) => onInputChange(event.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={confirmManualCity}
            placeholder={resolvedPlaceholder}
            className="w-full min-w-0 bg-transparent text-zinc-950 outline-none placeholder:text-sm placeholder:text-zinc-500 sm:placeholder:text-base"
            autoComplete="off"
            required
          />
        </div>
      </label>

      {open && (query.trim().length >= 2 || panelBusy) ? (
        <div className={suggestionsPanelClass} role="listbox">
          {panelBusy ? <p className="px-4 py-3 text-sm font-medium text-zinc-700">{t.location.searching}</p> : null}
          {showEmptyHint ? (
            <p className="px-4 py-3 text-sm font-medium text-zinc-700">{t.location.manualEntryHint}</p>
          ) : null}
          {hasCityResults ? (
            <>
              <p className="px-4 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                {t.location.catalogCities}
              </p>
              {suggestions.map((city) => (
                <button
                  key={`${city.source}-${city.city_id}`}
                  type="button"
                  role="option"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectCity(city)}
                  className={suggestionButtonClass}
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#4285F4]" />
                  <span>
                    <span className="block text-sm font-semibold text-zinc-950">{city.city_name}</span>
                    <span className="block text-xs font-medium text-zinc-600">{city.country_name}</span>
                  </span>
                </button>
              ))}
            </>
          ) : null}
          {hasStructureResults ? (
            <>
              <p className="px-4 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                {t.location.catalogStructures}
              </p>
              {catalogStructures.map((structure) => (
                <button
                  key={`${structure.kind}-${structure.id}`}
                  type="button"
                  role="option"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectStructure(structure)}
                  className={suggestionButtonClass}
                >
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#c2410c]" />
                  <span>
                    <span className="block text-sm font-semibold text-zinc-950">{structure.name}</span>
                    <span className="block text-xs font-medium text-zinc-600">
                      {[structure.address, structure.cityName].filter(Boolean).join(" · ")}
                    </span>
                  </span>
                </button>
              ))}
            </>
          ) : null}
        </div>
      ) : null}

      {helpText ? <p className="mt-2 text-xs text-zinc-500">{helpText}</p> : null}
    </div>
  );
}
