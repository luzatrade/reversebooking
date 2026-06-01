export type DestinationSliderSlide = {
  id: string;
  title: string;
  subtitle?: string;
  hint?: string;
  photoUrl: string;
  cityId?: string;
  kind: "city" | "poi" | "generic";
};

export type DestinationSliderMode = "browse" | "focus";

export type DestinationSliderResponse = {
  mode: DestinationSliderMode;
  slides: DestinationSliderSlide[];
  source: "client" | "foursquare" | "curated" | "wikipedia" | "mixed" | "fallback" | "commons";
  description?: string;
};
