"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { StructureExploreActionSheet } from "@/components/showcase/StructureExploreActionSheet";
import { StructureExploreBrowseStrip } from "@/components/showcase/StructureExploreBrowseStrip";
import type { StructureExploreHotel } from "@/components/showcase/StructureExploreCard";
import { mapCenterForCity, resolveHotelPosition } from "@/lib/showcase/hotelMapCoords";

type HotelsExploreMapPanelProps = {
  hotels: StructureExploreHotel[];
  centerCityName: string;
  centerCityId?: string | null;
  centerCountryCode?: string | null;
  hotelIdsWithOffer: Set<string>;
  hideRequestButton?: boolean;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function markerHtml(hotel: StructureExploreHotel, hasOffer: boolean) {
  const name = escapeHtml(hotel.property_name);
  const photo = hotel.main_photo_url
    ? `<img src="${escapeHtml(hotel.main_photo_url)}" alt="" style="width:36px;height:36px;border-radius:9999px;object-fit:cover;border:2px solid #fff;box-shadow:0 2px 8px rgba(15,23,42,.18);" />`
    : `<div style="width:36px;height:36px;border-radius:9999px;background:#0f4c81;border:2px solid #fff;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:800;">${escapeHtml(hotel.property_name.slice(0, 1).toUpperCase())}</div>`;
  const badge = hasOffer
    ? `<span style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:9999px;background:#f97316;color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;border:2px solid #fff;box-shadow:0 2px 6px rgba(249,115,22,.45);">⚡</span>`
    : "";

  return `<div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;transform:translate(-50%,-100%);pointer-events:auto;">
    <div style="position:relative;">${photo}${badge}</div>
    <span style="max-width:112px;padding:2px 8px;border-radius:9999px;background:rgba(255,255,255,.96);color:#0f172a;font-size:10px;font-weight:700;line-height:1.2;text-align:center;box-shadow:0 4px 14px rgba(15,23,42,.12);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</span>
  </div>`;
}

export function HotelsExploreMapPanel({
  hotels,
  centerCityName,
  centerCityId,
  centerCountryCode,
  hotelIdsWithOffer,
  hideRequestButton = false,
}: HotelsExploreMapPanelProps) {
  const { t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const [activeHotelId, setActiveHotelId] = useState<string | null>(hotels[0]?.id ?? null);

  const positionedHotels = useMemo(
    () =>
      hotels
        .map((hotel) => {
          const position = resolveHotelPosition(hotel, {
            cityName: centerCityName,
            cityId: centerCityId,
            countryCode: centerCountryCode,
          });
          return position ? { hotel, position } : null;
        })
        .filter(Boolean) as Array<{ hotel: StructureExploreHotel; position: [number, number] }>,
    [hotels, centerCityName, centerCityId, centerCountryCode],
  );

  const activeHotel = useMemo(
    () => hotels.find((hotel) => hotel.id === activeHotelId) ?? hotels[0] ?? null,
    [activeHotelId, hotels],
  );

  const selectHotel = useCallback((hotelId: string, pan = true) => {
    setActiveHotelId(hotelId);
    const marker = markersRef.current.get(hotelId);
    const map = mapRef.current;
    if (pan && marker && map) {
      map.panTo(marker.getLatLng(), { animate: true, duration: 0.45 });
    }
  }, []);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
      markersRef.current.clear();
    }

    const { center, zoom } = mapCenterForCity(centerCityName, centerCityId, centerCountryCode);
    const map = L.map(container, {
      center,
      zoom,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
      maxZoom: 19,
    }).addTo(map);

    for (const { hotel, position } of positionedHotels) {
      const hasOffer = hotelIdsWithOffer.has(hotel.id);
      const icon = L.divIcon({
        className: "hd-map-marker-icon",
        html: markerHtml(hotel, hasOffer),
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });
      const marker = L.marker(position, { icon, riseOnHover: true }).addTo(map);
      marker.on("click", () => selectHotel(hotel.id));
      markersRef.current.set(hotel.id, marker);
    }

    if (positionedHotels.length > 1) {
      const bounds = L.latLngBounds(positionedHotels.map(({ position }) => position));
      map.fitBounds(bounds.pad(0.18), { animate: false });
    }

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, [centerCityName, centerCityId, centerCountryCode, positionedHotels, hotelIdsWithOffer, selectHotel]);

  useEffect(() => {
    if (activeHotelId && hotels.some((hotel) => hotel.id === activeHotelId)) return;
    if (hotels[0]?.id) setActiveHotelId(hotels[0].id);
  }, [activeHotelId, hotels]);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="hd-explore-map-shell relative min-h-0 flex-1">
        <div ref={mapContainerRef} className="hd-explore-map-canvas absolute inset-0" />
      </div>

      {hotels.length === 0 ? (
        <div className="shrink-0 border-t border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-sm text-zinc-500">
          {t.showcase.exploreMapEmpty}
        </div>
      ) : activeHotel ? (
        <>
          <StructureExploreActionSheet
            hotel={activeHotel}
            hideRequestButton={hideRequestButton}
            hasLastMinuteOffer={hotelIdsWithOffer.has(activeHotel.id)}
          />
          <StructureExploreBrowseStrip
            hotels={hotels}
            activeHotelId={activeHotel.id}
            hotelIdsWithOffer={hotelIdsWithOffer}
            onSelect={(hotelId) => selectHotel(hotelId)}
          />
        </>
      ) : null}
    </div>
  );
}
