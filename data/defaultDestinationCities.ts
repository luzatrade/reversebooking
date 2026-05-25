import { getCityHeroImage, resolveCanonicalCityId } from "@/lib/destination-slider/cityPhotos";

export type DefaultDestinationCity = {
  id: string;
  cityId: string;
  countryCode: string;
  cityNameIt: string;
  cityNameEn: string;
  countryNameIt: string;
  countryNameEn: string;
  imageUrl: string;
};

export const defaultDestinationCities: DefaultDestinationCity[] = [
  {
    id: "rome",
    cityId: "IT-ROM",
    countryCode: "IT",
    cityNameIt: "Roma",
    cityNameEn: "Rome",
    countryNameIt: "Italia",
    countryNameEn: "Italy",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "milan",
    cityId: "IT-MIL",
    countryCode: "IT",
    cityNameIt: "Milano",
    cityNameEn: "Milan",
    countryNameIt: "Italia",
    countryNameEn: "Italy",
    imageUrl: "https://images.unsplash.com/photo-1513581166391-887a96dde669?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "venice",
    cityId: "IT-VCE",
    countryCode: "IT",
    cityNameIt: "Venezia",
    cityNameEn: "Venice",
    countryNameIt: "Italia",
    countryNameEn: "Italy",
    imageUrl: "",
  },
  {
    id: "naples",
    cityId: "IT-NAP",
    countryCode: "IT",
    cityNameIt: "Napoli",
    cityNameEn: "Naples",
    countryNameIt: "Italia",
    countryNameEn: "Italy",
    imageUrl: "",
  },
  {
    id: "florence",
    cityId: "IT-FLR",
    countryCode: "IT",
    cityNameIt: "Firenze",
    cityNameEn: "Florence",
    countryNameIt: "Italia",
    countryNameEn: "Italy",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "paris",
    cityId: "FR-PAR",
    countryCode: "FR",
    cityNameIt: "Parigi",
    cityNameEn: "Paris",
    countryNameIt: "Francia",
    countryNameEn: "France",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "tokyo",
    cityId: "JP-TYO",
    countryCode: "JP",
    cityNameIt: "Tokyo",
    cityNameEn: "Tokyo",
    countryNameIt: "Giappone",
    countryNameEn: "Japan",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "new-york",
    cityId: "US-NYC",
    countryCode: "US",
    cityNameIt: "New York",
    cityNameEn: "New York",
    countryNameIt: "Stati Uniti",
    countryNameEn: "United States",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "bangkok",
    cityId: "TH-BKK",
    countryCode: "TH",
    cityNameIt: "Bangkok",
    cityNameEn: "Bangkok",
    countryNameIt: "Thailandia",
    countryNameEn: "Thailand",
    imageUrl: "",
  },
  {
    id: "phuket",
    cityId: "TH-HKT",
    countryCode: "TH",
    cityNameIt: "Phuket",
    cityNameEn: "Phuket",
    countryNameIt: "Thailandia",
    countryNameEn: "Thailand",
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "london",
    cityId: "GB-LON",
    countryCode: "GB",
    cityNameIt: "Londra",
    cityNameEn: "London",
    countryNameIt: "Regno Unito",
    countryNameEn: "United Kingdom",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "madrid",
    cityId: "ES-MAD",
    countryCode: "ES",
    cityNameIt: "Madrid",
    cityNameEn: "Madrid",
    countryNameIt: "Spagna",
    countryNameEn: "Spain",
    imageUrl: "",
  },
  {
    id: "amsterdam",
    cityId: "NL-AMS",
    countryCode: "NL",
    cityNameIt: "Amsterdam",
    cityNameEn: "Amsterdam",
    countryNameIt: "Paesi Bassi",
    countryNameEn: "Netherlands",
    imageUrl: "",
  },
  {
    id: "berlin",
    cityId: "DE-BER",
    countryCode: "DE",
    cityNameIt: "Berlino",
    cityNameEn: "Berlin",
    countryNameIt: "Germania",
    countryNameEn: "Germany",
    imageUrl: "",
  },
  {
    id: "barcelona",
    cityId: "ES-BCN",
    countryCode: "ES",
    cityNameIt: "Barcellona",
    cityNameEn: "Barcelona",
    countryNameIt: "Spagna",
    countryNameEn: "Spain",
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77ac313?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "dubai",
    cityId: "AE-DXB",
    countryCode: "AE",
    cityNameIt: "Dubai",
    cityNameEn: "Dubai",
    countryNameIt: "Emirati Arabi",
    countryNameEn: "United Arab Emirates",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&h=500&q=80",
  },
];

export function findDefaultCityImage(
  cityName: string,
  countryCode?: string | null,
  cityId?: string | null,
) {
  const canonicalId = resolveCanonicalCityId({ cityName, countryCode, cityId });
  const match = defaultDestinationCities.find((city) => city.cityId === canonicalId);
  if (match?.imageUrl) return match.imageUrl;

  return getCityHeroImage({ cityName, countryCode, cityId: canonicalId ?? cityId });
}
