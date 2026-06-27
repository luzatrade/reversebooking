"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { mapCenterForCity, resolveHotelPosition } from "@/lib/showcase/hotelMapCoords";
import { StructureExploreCard, type StructureExploreHotel } from "@/components/showcase/StructureExploreCard";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const syncingFromMapRef = useRef(false);
  const syncingFromSliderRef = useRef(false);
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

  const focusMarker = useCallback((hotelId: string, pan = true) => {
    const marker = markersRef.current.get(hotelId);
    const map = mapRef.current;
    if (!marker || !map) return;
    setActiveHotelId(hotelId);
    if (pan) {
      map.panTo(marker.getLatLng(), { animate: true, duration: 0.45 });
    }
  }, []);

  const focusCard = useCallback((hotelId: string) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector(`[data-hotel-id="${hotelId}"]`);
    if (!(card instanceof HTMLElement)) return;
    syncingFromMapRef.current = true;
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    window.setTimeout(() => {
      syncingFromMapRef.current = false;
    }, 450);
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
      marker.on("click", () => {
        if (syncingFromSliderRef.current) return;
        focusMarker(hotel.id);
        focusCard(hotel.id);
      });
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
  }, [centerCityName, centerCityId, centerCountryCode, positionedHotels, hotelIdsWithOffer, focusCard, focusMarker]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || positionedHotels.length === 0) return;

    const cards = Array.from(slider.querySelectorAll("[data-hotel-id]")) as HTMLElement[];
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (syncingFromMapRef.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target) return;
        const hotelId = visible.target.getAttribute("data-hotel-id");
        if (!hotelId) return;
        syncingFromSliderRef.current = true;
        focusMarker(hotelId);
        window.setTimeout(() => {
          syncingFromSliderRef.current = false;
        }, 450);
      },
      {
        root: slider,
        threshold: [0.55, 0.7, 0.85],
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [positionedHotels, focusMarker]);

  useEffect(() => {
    if (activeHotelId) return;
    if (hotels[0]?.id) setActiveHotelId(hotels[0].id);
  }, [activeHotelId, hotels]);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="hd-explore-map-shell min-h-0 flex-[1_1_50%] border-b border-zinc-200">
        <div ref={mapContainerRef} className="hd-explore-map-canvas h-full w-full" />
      </div>

      <div className="flex min-h-0 flex-[1_1_50%] flex-col bg-zinc-50">
        <div className="border-b border-zinc-200 px-4 py-3">
          <p className="text-sm font-semibold text-zinc-900">{t.showcase.exploreMapSliderTitle}</p>
          <p className="text-xs text-zinc-500">{t.showcase.exploreMapSliderHint}</p>
        </div>
        <div
          ref={sliderRef}
          className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {hotels.length === 0 ? (
            <div className="flex w-full items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-sm text-zinc-500">
              {t.showcase.exploreMapEmpty}
            </div>
          ) : (
            hotels.map((hotel) => (
              <StructureExploreCard
                key={hotel.id}
                hotel={hotel}
                hideRequestButton={hideRequestButton}
                className={activeHotelId === hotel.id ? "ring-2 ring-[#f97316]/70 ring-offset-2" : ""}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
