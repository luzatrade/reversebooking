const USER_AGENT = "HotelsDrop/1.0 (destination showcase; contact@hotelsdrop.com)";

const EXCLUDE =
  /flag|logo|icon|coat|svg|\.pdf|\.ogg|cartello|schizzo|diagram|pencil|commons-logo|film frames/i;

export async function fetchCommonsPhotoUrl(searchQuery: string): Promise<string | null> {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrsearch: searchQuery,
    gsrnamespace: "6",
    gsrlimit: "8",
    prop: "imageinfo",
    iiurlwidth: "800",
    iiprop: "url",
  });

  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params.toString()}`, {
    next: { revalidate: 86400 },
    headers: { "User-Agent": USER_AGENT },
  });

  if (!response.ok) return null;

  const data = (await response.json()) as {
    query?: {
      pages?: Record<string, { title?: string; imageinfo?: Array<{ thumburl?: string; url?: string }> }>;
    };
  };

  for (const page of Object.values(data.query?.pages ?? {})) {
    const title = page.title ?? "";
    if (EXCLUDE.test(title)) continue;
    const info = page.imageinfo?.[0];
    const url = info?.thumburl ?? info?.url;
    if (url && !EXCLUDE.test(url)) return url;
  }

  return null;
}
