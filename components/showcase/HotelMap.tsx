"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Hotel = {
  id: string;
  property_name: string;
  city_name: string;
  specific_area: string | null;
  main_photo_url: string | null;
  public_email: string | null;
  public_phone: string | null;
  lat?: number | null;
  lng?: number | null;
};

type Props = {
  hotels: Hotel[];
  centerCity?: string;
};

const CITY_COORDS: Record<string, [number, number]> = {
  roma: [41.9028, 12.4964], rome: [41.9028, 12.4964],
  milano: [45.4642, 9.19], milan: [45.4642, 9.19],
  firenze: [43.7696, 11.2558], florence: [43.7696, 11.2558],
  venezia: [45.4408, 12.3155], venice: [45.4408, 12.3155],
  napoli: [40.8518, 14.2681], naples: [40.8518, 14.2681],
  torino: [45.0703, 7.6869], turin: [45.0703, 7.6869],
  bologna: [44.4949, 11.3426], verona: [45.4384, 10.9916],
  palermo: [38.1157, 13.3615], catania: [37.5079, 15.09],
  genova: [44.4056, 8.9463], genoa: [44.4056, 8.9463],
  bari: [41.1171, 16.8719], cagliari: [39.2238, 9.1217],
  trieste: [45.6495, 13.7768], padova: [45.4064, 11.8768], padua: [45.4064, 11.8768],
  brescia: [45.5416, 10.2118], parma: [44.8015, 11.3269],
  modena: [44.6471, 10.9252], ferrara: [44.8381, 11.6199],
  perugia: [43.1107, 12.3908], pisa: [43.7228, 10.4017],
  siena: [43.3188, 11.3308], lecce: [40.3516, 18.175],
  ravenna: [44.4184, 12.2035], rimini: [44.0678, 12.5695],
  bergamo: [45.6983, 9.6773], como: [45.808, 9.0852],
  trento: [46.0748, 11.1217], matera: [40.6664, 16.6044],
  amalfi: [40.6341, 13.5738], positano: [40.628, 14.485],
  sorrento: [40.6263, 14.3758], capri: [40.5507, 14.2224],
  taormina: [37.8516, 15.2881], siracusa: [37.0755, 15.2866], syracuse: [37.0755, 15.2866],
  trapani: [38.0174, 12.537], agrigento: [37.311, 13.5765],
  olbia: [40.9238, 9.4963], sassari: [40.7259, 8.5559],
  alghero: [40.5579, 8.3196], ischia: [40.7309, 13.8982],
  lucca: [43.8429, 10.5027], orvieto: [42.7185, 12.1108],
  assisi: [43.0708, 12.6195], alba: [44.6908, 8.0351],
  tropea: [38.6762, 15.8971], "cortina d'ampezzo": [46.5369, 12.1357],
  "san gimignano": [43.4677, 11.0431],
};

const DEFAULT_CENTER: [number, number] = [41.9, 12.5];
const DEFAULT_ZOOM = 6;
const CITY_ZOOM = 13;

function jitter(base: number, range: number) {
  return base + (Math.random() - 0.5) * range;
}

export function HotelMap({ hotels, centerCity }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const norm = (centerCity ?? "").trim().toLowerCase();
    const center = CITY_COORDS[norm] ?? DEFAULT_CENTER;
    const zoom = norm && CITY_COORDS[norm] ? CITY_ZOOM : DEFAULT_ZOOM;

    const map = L.map(containerRef.current, {
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

    const icon = L.divIcon({
      className: "",
      html: '<div style="width:28px;height:28px;border-radius:50%;background:#0f4c81;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,.35);"></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    for (const hotel of hotels) {
      let lat = hotel.lat;
      let lng = hotel.lng;

      if (!lat || !lng) {
        const cn = (hotel.city_name ?? "").trim().toLowerCase();
        const cityCoord = CITY_COORDS[cn];
        if (cityCoord) {
          lat = jitter(cityCoord[0], 0.02);
          lng = jitter(cityCoord[1], 0.02);
        } else {
          continue;
        }
      }

      const photoHtml = hotel.main_photo_url
        ? `<img src="${hotel.main_photo_url}" style="width:100%;height:90px;object-fit:cover;border-radius:8px 8px 0 0;" />`
        : "";

      const popup = L.popup({ maxWidth: 220, closeButton: true }).setContent(
        `<div style="font-family:system-ui;min-width:180px;">
          ${photoHtml}
          <div style="padding:8px 10px;">
            <strong style="font-size:13px;">${hotel.property_name}</strong>
            <p style="font-size:11px;color:#71717a;margin:4px 0 0;">${hotel.specific_area ?? hotel.city_name}</p>
          </div>
        </div>`
      );

      L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
    }

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [hotels, centerCity]);

  return <div ref={containerRef} className="h-[350px] w-full rounded-2xl" style={{ zIndex: 0 }} />;
}
