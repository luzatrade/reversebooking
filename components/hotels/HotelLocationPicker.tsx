"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapCenterForCity } from "@/lib/showcase/hotelMapCoords";

type HotelLocationPickerProps = {
  latitude: number | null;
  longitude: number | null;
  cityName: string;
  cityId: string;
  countryCode: string;
  onChange: (coords: { latitude: number; longitude: number }) => void;
  className?: string;
};

function roundCoord(value: number): number {
  return Math.round(value * 1e7) / 1e7;
}

function isValidCoords(lat: number | null, lng: number | null): boolean {
  return (
    lat != null &&
    lng != null &&
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

export function HotelLocationPicker({
  latitude,
  longitude,
  cityName,
  cityId,
  countryCode,
  onChange,
  className = "",
}: HotelLocationPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
      markerRef.current = null;
    }

    const { center, zoom } = mapCenterForCity(cityName, cityId, countryCode);
    const hasCoords = isValidCoords(latitude, longitude);
    const initialPosition: [number, number] = hasCoords ? [latitude as number, longitude as number] : center;

    const map = L.map(container, {
      center: initialPosition,
      zoom: hasCoords ? 16 : zoom,
      scrollWheelZoom: true,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
      maxZoom: 19,
    }).addTo(map);

    const marker = L.marker(initialPosition, {
      draggable: true,
      autoPan: true,
    }).addTo(map);

    marker.on("dragend", () => {
      const { lat, lng } = marker.getLatLng();
      onChangeRef.current({
        latitude: roundCoord(lat),
        longitude: roundCoord(lng),
      });
    });

    map.on("click", (event) => {
      marker.setLatLng(event.latlng);
      onChangeRef.current({
        latitude: roundCoord(event.latlng.lat),
        longitude: roundCoord(event.latlng.lng),
      });
    });

    mapRef.current = map;
    markerRef.current = marker;

    return () => {
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, cityId, countryCode]);

  useEffect(() => {
    if (!isValidCoords(latitude, longitude)) return;
    const map = mapRef.current;
    const marker = markerRef.current;
    if (!map || !marker) return;

    const next: [number, number] = [latitude as number, longitude as number];
    const current = marker.getLatLng();
    if (
      Math.abs(current.lat - next[0]) < 0.0000001 &&
      Math.abs(current.lng - next[1]) < 0.0000001
    ) {
      return;
    }

    marker.setLatLng(next);
    map.setView(next, Math.max(map.getZoom(), 15), { animate: true });
  }, [latitude, longitude]);

  return (
    <div
      ref={containerRef}
      className={`h-72 w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 ${className}`}
    />
  );
}
