"use client";

import { useState } from "react";
import { GLOBAL_TRAVEL_FALLBACK, picsumPhoto } from "@/lib/destination-slider/cityPhotos";

type HeroSlideImageProps = {
  src: string;
  alt: string;
  slideId: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "auto";
  className?: string;
};

export function HeroSlideImage({
  src,
  alt,
  slideId,
  loading = "lazy",
  fetchPriority = "auto",
  className = "h-full w-full object-cover",
}: HeroSlideImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      draggable={false}
      onError={() => {
        setCurrentSrc((previous) => {
          const picsum = picsumPhoto(`slide-${slideId}`);
          if (previous === picsum) return GLOBAL_TRAVEL_FALLBACK;
          if (previous === GLOBAL_TRAVEL_FALLBACK) return picsum;
          return picsum;
        });
      }}
    />
  );
}
