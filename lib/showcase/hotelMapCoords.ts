import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";

/** Coordinate centro città per city_id canonico (majorWorldCities + alias). */
const CITY_COORDS_BY_ID: Record<string, [number, number]> = {
  // Italy
  "IT-AGR": [37.311, 13.5765],
  "IT-ALB": [44.6908, 8.0351],
  "IT-ABB": [40.7865, 17.2364],
  "IT-AHO": [40.5579, 8.3196],
  "IT-AOI": [43.6158, 13.5189],
  "IT-AOT": [45.7375, 7.3206],
  "IT-ARZ": [43.4632, 11.8796],
  "IT-ASS": [43.0708, 12.6195],
  "IT-BRI": [41.1171, 16.8719],
  "IT-BGY": [45.6983, 9.6773],
  "IT-BLQ": [44.4949, 11.3426],
  "IT-BZO": [46.4983, 11.3548],
  "IT-BSC": [45.5416, 10.2118],
  "IT-BDS": [40.6327, 17.9418],
  "IT-CAG": [39.2238, 9.1217],
  "IT-CAP": [40.5507, 14.2224],
  "IT-CTA": [37.5079, 15.09],
  "IT-CEF": [38.0386, 14.0187],
  "IT-CQT": [44.1347, 9.6847],
  "IT-CMO": [45.808, 9.0852],
  "IT-COR": [46.5369, 12.1357],
  "IT-DES": [45.4712, 10.5356],
  "IT-FER": [44.8381, 11.6199],
  "IT-FLR": [43.7696, 11.2558],
  "IT-GAR": [45.5845, 10.7122],
  "IT-GOA": [44.4056, 8.9463],
  "IT-JES": [45.5369, 12.6387],
  "IT-LCC": [40.3516, 18.175],
  "IT-LIV": [43.5485, 10.3106],
  "IT-LUC": [43.8429, 10.5027],
  "IT-MNT": [45.1564, 10.7914],
  "IT-MAT": [40.6664, 16.6044],
  "IT-MER": [46.6682, 11.1596],
  "IT-MIL": [45.4642, 9.19],
  "IT-MOD": [44.6471, 10.9252],
  "IT-MON": [40.9526, 17.2972],
  "IT-NAP": [40.8518, 14.2681],
  "IT-OLB": [40.9238, 9.4963],
  "IT-PAD": [45.4064, 11.8768],
  "IT-PMO": [38.1157, 13.3615],
  "IT-PMF": [44.8015, 11.3269],
  "IT-PEG": [43.1107, 12.3908],
  "IT-PSR": [42.4618, 14.2161],
  "IT-PSA": [43.7228, 10.4017],
  "IT-POL": [40.9955, 17.2175],
  "IT-POF": [44.3033, 9.2097],
  "IT-RAV": [44.4184, 12.2035],
  "IT-REG": [38.1113, 15.647],
  "IT-RMI": [44.0678, 12.5695],
  "IT-ROM": [41.9028, 12.4964],
  "IT-SAL": [40.6824, 14.7681],
  "IT-SGI": [43.4677, 11.0431],
  "IT-SRM": [43.8177, 7.7765],
  "IT-SIE": [43.3188, 11.3308],
  "IT-SIR": [45.4929, 10.6083],
  "IT-SOR": [40.6263, 14.3758],
  "IT-TAO": [37.8516, 15.2881],
  "IT-TAR": [40.4647, 17.247],
  "IT-TRS": [45.6495, 13.7768],
  "IT-TRN": [45.0703, 7.6869],
  "IT-VCE": [45.4408, 12.3155],
  "IT-VRN": [45.4384, 10.9916],
  "IT-VIA": [43.8668, 10.2513],
  "IT-VIC": [45.5455, 11.5353],
  // International
  "US-NYC": [40.7128, -74.006],
  "US-LAX": [34.0522, -118.2437],
  "US-MIA": [25.7617, -80.1918],
  "GB-LON": [51.5074, -0.1278],
  "FR-PAR": [48.8566, 2.3522],
  "ES-MAD": [40.4168, -3.7038],
  "ES-BCN": [41.3851, 2.1734],
  "DE-BER": [52.52, 13.405],
  "NL-AMS": [52.3676, 4.9041],
  "PT-LIS": [38.7223, -9.1393],
  "AE-DXB": [25.2048, 55.2708],
  "QA-DOH": [25.2854, 51.531],
  "TR-IST": [41.0082, 28.9784],
  "TH-BKK": [13.7563, 100.5018],
  "TH-HKT": [7.8804, 98.3923],
  "SG-SIN": [1.3521, 103.8198],
  "JP-TYO": [35.6762, 139.6503],
  "KR-SEL": [37.5665, 126.978],
  "HK-HKG": [22.3193, 114.1694],
  "CN-SHA": [31.2304, 121.4737],
  "CN-BJS": [39.9042, 116.4074],
  "AU-SYD": [-33.8688, 151.2093],
  "AU-MEL": [-37.8136, 144.9631],
  "CA-TOR": [43.6532, -79.3832],
  "CA-YVR": [49.2827, -123.1207],
  "MX-MEX": [19.4326, -99.1332],
  "BR-RIO": [-22.9068, -43.1729],
  "BR-SAO": [-23.5505, -46.6333],
  "AR-BUE": [-34.6037, -58.3816],
  "ZA-CPT": [-33.9249, 18.4241],
  "MA-RAK": [31.6295, -7.9811],
  "EG-CAI": [30.0444, 31.2357],
};

/** Alias nome città (IT/EN) → coordinate, per onboarding e nomi locali. */
const CITY_COORDS_BY_NAME: Record<string, [number, number]> = {
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
  paris: [48.8566, 2.3522],
  parigi: [48.8566, 2.3522],
  london: [51.5074, -0.1278],
  londra: [51.5074, -0.1278],
  barcelona: [41.3851, 2.1734],
  barcellona: [41.3851, 2.1734],
  madrid: [40.4168, -3.7038],
  berlin: [52.52, 13.405],
  berlino: [52.52, 13.405],
  amsterdam: [52.3676, 4.9041],
  lisbon: [38.7223, -9.1393],
  lisbona: [38.7223, -9.1393],
  dubai: [25.2048, 55.2708],
  doha: [25.2854, 51.531],
  istanbul: [41.0082, 28.9784],
  bangkok: [13.7563, 100.5018],
  phuket: [7.8804, 98.3923],
  singapore: [1.3521, 103.8198],
  tokyo: [35.6762, 139.6503],
  seoul: [37.5665, 126.978],
  "hong kong": [22.3193, 114.1694],
  shanghai: [31.2304, 121.4737],
  beijing: [39.9042, 116.4074],
  sydney: [-33.8688, 151.2093],
  melbourne: [-37.8136, 144.9631],
  toronto: [43.6532, -79.3832],
  vancouver: [49.2827, -123.1207],
  "mexico city": [19.4326, -99.1332],
  "rio de janeiro": [-22.9068, -43.1729],
  "sao paulo": [-23.5505, -46.6333],
  "são paulo": [-23.5505, -46.6333],
  "buenos aires": [-34.6037, -58.3816],
  "cape town": [-33.9249, 18.4241],
  marrakesh: [31.6295, -7.9811],
  cairo: [30.0444, 31.2357],
  "new york": [40.7128, -74.006],
  "los angeles": [34.0522, -118.2437],
  miami: [25.7617, -80.1918],
};

export const DEFAULT_MAP_CENTER: [number, number] = [41.9, 12.5];
export const DEFAULT_MAP_ZOOM = 6;
export const CITY_MAP_ZOOM = 13;

function normalizeCityName(value: string) {
  return value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function cityCoordinates(
  cityName: string,
  cityId?: string | null,
  countryCode?: string | null,
): [number, number] | null {
  const canonicalId = resolveCanonicalCityId({
    cityName,
    cityId: cityId ?? undefined,
    countryCode: countryCode ?? undefined,
  });
  if (canonicalId && CITY_COORDS_BY_ID[canonicalId]) {
    return CITY_COORDS_BY_ID[canonicalId];
  }

  const key = normalizeCityName(cityName);
  if (key && CITY_COORDS_BY_NAME[key]) {
    return CITY_COORDS_BY_NAME[key];
  }

  return null;
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

export function parseStoredCoords(
  lat: number | string | null | undefined,
  lng: number | string | null | undefined,
): { latitude: number | null; longitude: number | null } {
  const latitude = lat != null ? Number(lat) : null;
  const longitude = lng != null ? Number(lng) : null;
  if (
    latitude != null &&
    longitude != null &&
    Number.isFinite(latitude) &&
    Number.isFinite(longitude)
  ) {
    return { latitude, longitude };
  }
  return { latitude: null, longitude: null };
}

export function resolveHotelPosition(
  hotel: {
    id: string;
    city_name: string;
    city_id?: string | null;
    country_code?: string | null;
    latitude?: number | null;
    longitude?: number | null;
  },
  fallback?: { cityName?: string; cityId?: string | null; countryCode?: string | null },
): [number, number] | null {
  const lat = hotel.latitude != null ? Number(hotel.latitude) : null;
  const lng = hotel.longitude != null ? Number(hotel.longitude) : null;
  if (lat != null && lng != null && Number.isFinite(lat) && Number.isFinite(lng)) {
    return [lat, lng];
  }

  const cityCenter =
    cityCoordinates(hotel.city_name, hotel.city_id, hotel.country_code) ??
    cityCoordinates(fallback?.cityName ?? "", fallback?.cityId, fallback?.countryCode) ??
    null;
  if (!cityCenter) return null;
  return jitterForHotelId(hotel.id, cityCenter[0], cityCenter[1]);
}

export function mapCenterForCity(
  cityName: string,
  cityId?: string | null,
  countryCode?: string | null,
): { center: [number, number]; zoom: number } {
  const coords = cityCoordinates(cityName, cityId, countryCode);
  if (coords) return { center: coords, zoom: CITY_MAP_ZOOM };
  return { center: DEFAULT_MAP_CENTER, zoom: DEFAULT_MAP_ZOOM };
}
