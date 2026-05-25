export type HotelSearchResult = {
  source: "google" | "foursquare";
  source_id: string;
  nome: string;
  indirizzo: string | null;
  lat: number | null;
  lng: number | null;
  google_maps_url: string | null;
  website: string | null;
  phone: string | null;
  email: string | null;
  main_photo_url: string | null;
};

export type ComuneRecord = {
  codice_istat: string;
  nome: string;
  provincia: string;
  sigla_provincia: string;
  regione: string;
  lat: number | null;
  lng: number | null;
};
