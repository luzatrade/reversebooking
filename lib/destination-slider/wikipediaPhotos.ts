import { formatPoiLabel } from "@/lib/destination-slider/slideLabels";
import type { DestinationSliderSlide } from "@/types/destination-slider";

const EXCLUDE_FILE =
  /flag|logo|icon|coat of arms|stemm|seal|emblem|locator|diagram|pencil|arrow|folder|\.svg|\.ogg|\.ogv|\.pdf|\.webm|map of|location|symbol|signature|portrait|coin|banconota|moneta|louvre|british museum|metropolitan|medinex|film frames|commons-logo/i;
const MIN_THUMB_WIDTH = 500;

type WikiImage = {
  title: string;
  thumburl: string;
  width?: number;
  height?: number;
};

function wikiTitleFromCity(cityName: string) {
  return cityName.trim().replace(/\s+/g, "_");
}

function scoreImage(fileTitle: string, cityName: string) {
  const normalizedCity = cityName.toLowerCase();
  const normalizedTitle = fileTitle.toLowerCase();
  let score = 0;
  if (normalizedTitle.includes(normalizedCity)) score += 10;
  if (/vista|panorama|lungomare|cathedral|duomo|castello|museo|ponte|piazza|harbour|porto|beach|spiaggia/i.test(normalizedTitle)) {
    score += 3;
  }
  if (EXCLUDE_FILE.test(normalizedTitle)) score -= 20;
  return score;
}

function isUsableImage(image: WikiImage) {
  const title = image.title;
  if (!image.thumburl || EXCLUDE_FILE.test(title)) return false;
  if (image.width && image.width < MIN_THUMB_WIDTH) return false;
  if (/\.(svg|ogg|ogv|pdf|webm|mp3|wav)$/i.test(title)) return false;
  if (!/\.(jpe?g|png|webp|gif)$/i.test(title) && !image.thumburl.includes("/thumb/")) return false;
  return true;
}

async function fetchArticleImages(domain: string, articleTitle: string, limit: number): Promise<WikiImage[]> {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "images",
    gimlimit: String(Math.min(limit * 4, 40)),
    titles: articleTitle,
    prop: "imageinfo",
    iiurlwidth: "800",
    iiprop: "url",
  });

  const response = await fetch(`https://${domain}/w/api.php?${params.toString()}`, {
    next: { revalidate: 86400 },
    headers: { "User-Agent": "HotelsDrop/1.0 (destination showcase; contact@hotelsdrop.com)" },
  });

  if (!response.ok) return [];

  const data = (await response.json()) as {
    query?: {
      pages?: Record<
        string,
        {
          title?: string;
          imageinfo?: Array<{ thumburl?: string; thumbwidth?: number; thumbheight?: number; url?: string }>;
        }
      >;
    };
  };

  const images: WikiImage[] = [];
  for (const page of Object.values(data.query?.pages ?? {})) {
    const title = page.title ?? "";
    const info = page.imageinfo?.[0];
    if (!info) continue;
    const thumburl = info.thumburl ?? info.url;
    if (!thumburl) continue;
    images.push({
      title,
      thumburl,
      width: info.thumbwidth,
      height: info.thumbheight,
    });
  }
  return images;
}

async function fetchPageLeadThumbnail(domain: string, articleTitle: string) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    prop: "pageimages",
    piprop: "thumbnail",
    pithumbsize: "800",
    titles: articleTitle,
  });

  const response = await fetch(`https://${domain}/w/api.php?${params.toString()}`, {
    next: { revalidate: 86400 },
    headers: { "User-Agent": "HotelsDrop/1.0 (destination showcase; contact@hotelsdrop.com)" },
  });

  if (!response.ok) return null;

  const data = (await response.json()) as {
    query?: { pages?: Record<string, { thumbnail?: { source?: string } }> };
  };

  const thumb = Object.values(data.query?.pages ?? {})[0]?.thumbnail?.source;
  if (!thumb || EXCLUDE_FILE.test(thumb)) return null;
  return thumb;
}

function pickBestImages(images: WikiImage[], cityName: string, limit: number) {
  const ranked = images
    .filter(isUsableImage)
    .map((image) => ({ image, score: scoreImage(image.title, cityName) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const pool = ranked.length >= limit ? ranked : images.filter(isUsableImage).map((image) => ({ image, score: scoreImage(image.title, cityName) })).sort((a, b) => b.score - a.score);

  return pool.slice(0, limit).map((entry) => entry.image);
}

function toSlides(images: WikiImage[], cityName: string, locale: "it" | "en"): DestinationSliderSlide[] {
  const hint = locale === "it" ? "Immagine dalla voce Wikipedia" : "Image from Wikipedia";
  return images.map((image, index) => {
    const label = formatPoiLabel(image.title, cityName);
    return {
      id: `wiki-${index}-${label.slice(0, 24).replace(/\W+/g, "-")}`,
      title: label,
      photoUrl: image.thumburl,
      kind: "poi" as const,
      hint,
    };
  });
}

export async function fetchWikipediaCitySlides(input: {
  cityName: string;
  countryCode?: string | null;
  countryName?: string | null;
  locale?: "it" | "en";
  limit?: number;
}): Promise<DestinationSliderSlide[]> {
  const cityName = input.cityName.trim();
  if (!cityName) return [];

  const limit = input.limit ?? 6;
  const articleTitle = wikiTitleFromCity(cityName);
  const preferItalian = input.countryCode?.toUpperCase() === "IT" || input.locale === "it";
  const domains = preferItalian ? ["it.wikipedia.org", "en.wikipedia.org"] : ["en.wikipedia.org", "it.wikipedia.org"];

  const collected: WikiImage[] = [];
  const seenUrls = new Set<string>();

  for (const domain of domains) {
    const batch = await fetchArticleImages(domain, articleTitle, limit);
    for (const image of batch) {
      if (seenUrls.has(image.thumburl)) continue;
      seenUrls.add(image.thumburl);
      collected.push(image);
    }
    if (collected.length >= limit) break;
  }

  let best = pickBestImages(collected, cityName, limit);

  if (best.length < 2) {
    for (const domain of domains) {
      const lead = await fetchPageLeadThumbnail(domain, articleTitle);
      if (lead && !seenUrls.has(lead)) {
        best = [{ title: cityName, thumburl: lead, width: 800 }, ...best];
        break;
      }
    }
  }

  return toSlides(best, cityName, input.locale ?? "it");
}

export async function fetchWikipediaHeroImage(input: {
  cityName: string;
  countryCode?: string | null;
  locale?: "it" | "en";
}): Promise<string | null> {
  const slides = await fetchWikipediaCitySlides({ ...input, limit: 1 });
  return slides[0]?.photoUrl ?? null;
}
