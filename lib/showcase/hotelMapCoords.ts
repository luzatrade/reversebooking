const CITY_COORDS: Record<string, [number, number]> = {
  roma: [41.9028, 12.4964],
  rome: [41.9028, 12.4964],
  milano: [45.4642, 9.19],
  milan: [45.4642, 9.19],
  firenze: [43.7696, 11.2558],
  florence: [43.7696, 11.2558],
  venezia: [45.4408, 12.3155],
  venice: [45.4408, 12.3155],
  napoli: [40.8518, 14.2681],
  naples: [40.8518, 14.2681],
  torino: [45.0703, 7.6869],
  turin: [45.0703, 7.6869],
  bologna: [44.4949, 11.3426],
  verona: [45.4384, 10.9916],
  palermo: [38.1157, 13.3615],
  catania: [37.5079, 15.09],
  genova: [44.4056, 8.9463],
  genoa: [44.4056, 8.9463],
  bari: [41.1171, 16.8719],
  cagliari: [39.2238, 9.1217],
  trieste: [45.6495, 13.7768],
  padova: [45.4064, 11.8768],
  padua: [45.4064, 11.8768],
  brescia: [45.5416, 10.2118],
  parma: [44.8015, 11.3269],
  modena: [44.6471, 10.9252],
  ferrara: [44.8381, 11.6199],
  perugia: [43.1107, 12.3908],
  pisa: [43.7228, 10.4017],
  siena: [43.3188, 11.3308],
  lecce: [40.3516, 18.175],
  ravenna: [44.4184, 12.2035],
  rimini: [44.0678, 12.5695],
  bergamo: [45.6983, 9.6773],
  como: [45.808, 9.0852],
  trento: [46.0748, 11.1217],
  matera: [40.6664, 16.6044],
  amalfi: [40.6341, 13.5738],
  positano: [40.628, 14.485],
  sorrento: [40.6263, 14.3758],
  capri: [40.5507, 14.2224],
  taormina: [37.8516, 15.2881],
  siracusa: [37.0755, 15.2866],
  syracuse: [37.0755, 15.2866],
  trapani: [38.0174, 12.537],
  agrigento: [37.311, 13.5765],
  olbia: [40.9238, 9.4963],
  sassari: [40.7259, 8.5559],
  alghero: [40.5579, 8.3196],
  ischia: [40.7309, 13.8982],
  lucca: [43.8429, 10.5027],
  orvieto: [42.7185, 12.1108],
  assisi: [43.0708, 12.6195],
  alba: [44.6908, 8.0351],
  tropea: [38.6762, 15.8971],
  "cortina d'ampezzo": [46.5369, 12.1357],
  "san gimignano": [43.4677, 11.0431],
  "reggio calabria": [38.1113, 15.647],
  "reggio di calabria": [38.1113, 15.647],
};

export const DEFAULT_MAP_CENTER: [number, number] = [41.9, 12.5];
export const DEFAULT_MAP_ZOOM = 6;
export const CITY_MAP_ZOOM = 13;

export function cityCoordinates(cityName: string): [number, number] | null {
  const key = cityName.trim().toLowerCase();
  if (!key) return null;
  return CITY_COORDS[key] ?? null;
}

function jitterForHotelId(hotelId: string, baseLat: number, baseLng: number, range = 0.02): [number, number] {
  let hash = 0;
  for (let i = 0; i < hotelId.length; i += 1) {
    hash = (hash * 31 + hotelId.charCodeAt(i)) | 0;
  }
  const offsetLat = ((Math.abs(hash) % 1000) / 1000 - 0.5) * range;
  const offsetLng = ((Math.abs(hash >> 10) % 1000) / 1000 - 0.5) * range;
  return [baseLat + offsetLat, baseLng + offsetLng];
}

export function resolveHotelPosition(
  hotel: {
    id: string;
    city_name: string;
    latitude?: number | null;
    longitude?: number | null;
  },
  fallbackCityName?: string,
): [number, number] | null {
  const lat = hotel.latitude != null ? Number(hotel.latitude) : null;
  const lng = hotel.longitude != null ? Number(hotel.longitude) : null;
  if (lat != null && lng != null && Number.isFinite(lat) && Number.isFinite(lng)) {
    return [lat, lng];
  }

  const cityCenter =
    cityCoordinates(hotel.city_name) ??
    cityCoordinates(fallbackCityName ?? "") ??
    null;
  if (!cityCenter) return null;
  return jitterForHotelId(hotel.id, cityCenter[0], cityCenter[1]);
}

export function mapCenterForCity(cityName: string): { center: [number, number]; zoom: number } {
  const coords = cityCoordinates(cityName);
  if (coords) return { center: coords, zoom: CITY_MAP_ZOOM };
  return { center: DEFAULT_MAP_CENTER, zoom: DEFAULT_MAP_ZOOM };
}
