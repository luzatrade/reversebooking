"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export type AddressSelection = {
  fullAddress: string;
  latitude: number | null;
  longitude: number | null;
  googleMapsUrl?: string | null;
};

type AddressSearchSuggestion = {
  id: string;
  label: string;
  subtitle: string;
  placeId: string | null;
  fullAddress: string;
  latitude: number | null;
  longitude: number | null;
  googleMapsUrl: string | null;
  source: "google_places" | "google_geocode" | "nominatim";
};

type AddressAutocompleteProps = {
  value: string;
  latitude: number | null;
  longitude: number | null;
  onChange: (selection: AddressSelection) => void;
  cityName: string;
  cityId: string;
  countryName: string;
  countryCode: string;
  propertyName?: string;
  label?: string;
  helpText?: string;
  placeholder?: string;
  onPositioned?: () => void;
  onError?: (message: string) => void;
};

const suggestionsPanelClass =
  "absolute left-0 right-0 z-[9999] mt-2 max-h-72 overflow-y-auto rounded-2xl border-2 border-zinc-300 bg-white text-zinc-950 shadow-[0_16px_40px_rgba(15,23,42,0.16)] ring-1 ring-zinc-200 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50 dark:ring-zinc-700";

const suggestionButtonClass =
  "flex min-h-12 w-full items-start gap-3 border-b border-zinc-200 bg-white px-4 py-3 text-left text-sm last:border-b-0 hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900";

async function getAccessToken(): Promise<string | null> {
  const supabase = createBrowserSupabaseClient();
  const session = await supabase.auth.getSession();
  return session.data.session?.access_token ?? null;
}

export function AddressAutocomplete({
  value,
  latitude,
  longitude,
  onChange,
  cityName,
  cityId,
  countryName,
  countryCode,
  propertyName,
  label,
  helpText,
  placeholder,
  onPositioned,
  onError,
}: AddressAutocompleteProps) {
  const { t } = useLanguage();
  const resolvedLabel = label ?? t.forms.hotelProfile.fullAddress;
  const resolvedPlaceholder = placeholder ?? t.location.addressPlaceholder;
  const resolvedHelp = helpText ?? t.location.addressHelp;
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<AddressSearchSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resolving, setResolving] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const text = query.trim();
    if (text.length < 3) {
      setSuggestions([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const token = await getAccessToken();
        if (!token) {
          setSuggestions([]);
          onError?.(t.forms.hotelProfile.loginRequired);
          return;
        }

        const response = await fetch("/api/hotel/search-address", {
          method: "POST",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: text,
            propertyName,
            cityName,
            countryName,
            countryCode,
            cityId,
          }),
        });

        const data = (await response.json()) as {
          suggestions?: AddressSearchSuggestion[];
          error?: string;
        };

        if (!response.ok) {
          setSuggestions([]);
          onError?.(data.error ?? t.location.addressManualHint);
          return;
        }

        setSuggestions(data.suggestions ?? []);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [query, propertyName, cityName, countryName, countryCode, cityId, onError, t]);

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, []);

  async function selectSuggestion(suggestion: AddressSearchSuggestion) {
    setResolving(true);
    setOpen(false);
    try {
      const token = await getAccessToken();
      if (!token) {
        onError?.(t.forms.hotelProfile.loginRequired);
        return;
      }

      const response = await fetch("/api/hotel/search-address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ suggestion }),
      });

      const data = (await response.json()) as {
        fullAddress?: string;
        latitude?: number;
        longitude?: number;
        googleMapsUrl?: string | null;
        error?: string;
      };

      if (!response.ok || data.latitude == null || data.longitude == null || !data.fullAddress) {
        onError?.(data.error ?? t.forms.hotelProfile.mapsExtractAddressFail);
        return;
      }

      setQuery(data.fullAddress);
      onChange({
        fullAddress: data.fullAddress,
        latitude: data.latitude,
        longitude: data.longitude,
        googleMapsUrl: data.googleMapsUrl ?? null,
      });
      onPositioned?.();
    } catch {
      onError?.(t.forms.hotelProfile.mapsExtractAddressFail);
    } finally {
      setResolving(false);
    }
  }

  function confirmManualAddress() {
    const text = query.trim();
    onChange({
      fullAddress: text,
      latitude,
      longitude,
    });
  }

  function onInputChange(text: string) {
    setQuery(text);
    setOpen(true);
    onChange({
      fullAddress: text,
      latitude: null,
      longitude: null,
    });
  }

  return (
    <div ref={wrapperRef} className="relative z-30 md:col-span-2">
      <label className="block text-sm font-medium">
        {resolvedLabel}
        <div className="mt-2 flex min-h-12 items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm ring-zinc-300 focus-within:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 sm:min-h-[3.25rem] sm:text-sm">
          <Search className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
          <input
            value={query}
            onChange={(event) => onInputChange(event.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={confirmManualAddress}
            placeholder={resolvedPlaceholder}
            className="w-full min-w-0 bg-transparent text-zinc-950 outline-none placeholder:text-sm placeholder:text-zinc-500 dark:text-zinc-50 sm:placeholder:text-base"
            autoComplete="street-address"
            required
            disabled={resolving}
          />
        </div>
      </label>

      {open && (query.trim().length >= 3 || loading || resolving) ? (
        <div className={suggestionsPanelClass} role="listbox">
          {loading || resolving ? (
            <p className="px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {resolving ? t.forms.hotelProfile.mapsExtracting : t.location.addressSearching}
            </p>
          ) : null}
          {!loading && !resolving && suggestions.length === 0 ? (
            <p className="px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.location.addressManualHint}</p>
          ) : null}
          {!loading &&
            !resolving &&
            suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                type="button"
                role="option"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => void selectSuggestion(suggestion)}
                className={suggestionButtonClass}
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#4285F4]" />
                <span>
                  <span className="block text-sm font-semibold text-zinc-950 dark:text-zinc-50">{suggestion.label}</span>
                  {suggestion.subtitle ? (
                    <span className="block text-xs font-medium text-zinc-600 dark:text-zinc-400">{suggestion.subtitle}</span>
                  ) : null}
                </span>
              </button>
            ))}
        </div>
      ) : null}

      {resolvedHelp ? <p className="mt-2 text-xs text-zinc-500">{resolvedHelp}</p> : null}
    </div>
  );
}
