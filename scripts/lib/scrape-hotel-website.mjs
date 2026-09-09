/**
 * Estrae contesto da sito ufficiale hotel (meta, testo, amenities).
 */

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

const AMENITY_MAP = [
  { re: /wi-?fi|wifi|wireless/i, it: "Wi-Fi gratuito" },
  { re: /parcheggio|parking/i, it: "parcheggio" },
  { re: /colazione|breakfast/i, it: "colazione" },
  { re: /aria condizionata|climatizzat/i, it: "aria condizionata" },
  { re: /balcon/i, it: "balcone" },
  { re: /vista mare|sea view|lungomare/i, it: "vicinanza al mare" },
  { re: /piscina|pool/i, it: "piscina" },
  { re: /ristorante|restaurant/i, it: "ristorante" },
  { re: /\bbar\b/i, it: "bar" },
  { re: /terrazza|terrace/i, it: "terrazza" },
  { re: /bagno privato|private bathroom|bagno in camera/i, it: "bagno privato" },
  { re: /spiaggia|beach/i, it: "accesso alla spiaggia" },
  { re: /idromassaggio|jacuzzi/i, it: "idromassaggio" },
  { re: /barbecue|grigliat/i, it: "barbecue" },
  { re: /disabil|accessib/i, it: "accessibilità disabili" },
  { re: /mountain bike|biciclett/i, it: "mountain bike" },
  { re: /trekking|escursion/i, it: "trekking" },
];

function metaContent(html, name) {
  const re1 = new RegExp(`name=["']${name}["'][^>]*content=["']([^"']+)`, "i");
  const re2 = new RegExp(`content=["']([^"']+)["'][^>]*name=["']${name}["']`, "i");
  const re3 = new RegExp(`property=["']${name}["'][^>]*content=["']([^"']+)`, "i");
  return stripHtml(html.match(re1)?.[1] || html.match(re2)?.[1] || html.match(re3)?.[1] || "");
}

function extractAmenities(html, plain) {
  const found = [];
  for (const { re, it } of AMENITY_MAP) {
    if (re.test(html) || re.test(plain)) found.push(it);
  }
  return found;
}

function extractParagraphs(html, minLen = 80) {
  const paras = [];
  const re = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(html))) {
    const t = stripHtml(m[1]);
    if (t.length >= minLen && !/cookie|javascript|spambot/i.test(t)) paras.push(t);
  }
  return paras.slice(0, 8);
}

function extractHeadings(html) {
  const out = [];
  const re = /<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi;
  let m;
  while ((m = re.exec(html))) {
    const t = stripHtml(m[1]);
    if (t.length > 3 && t.length < 120) out.push(t);
  }
  return [...new Set(out)].slice(0, 12);
}

async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; HotelsDrop/1.0)",
        "Accept-Language": "it-IT,it;q=0.9,en;q=0.8",
      },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return null;
    const finalUrl = res.url;
    // Skip obvious aggregator redirects (spam booking funnels)
    if (/booking\.com|searchresults\.html/i.test(finalUrl) && !/booking\.com\/hotel\//i.test(finalUrl)) {
      return null;
    }
    return { url: finalUrl, html: await res.text() };
  } catch {
    return null;
  }
}

/**
 * @returns {Promise<{ pages: string[], meta: string, title: string, amenities: string[], paragraphs: string[], headings: string[], nearby: string[] } | null>}
 */
export async function scrapeHotelWebsite(websiteUrl) {
  if (!websiteUrl?.trim()) return null;

  let base = websiteUrl.trim().replace(/\/$/, "");
  const paths = ["/it/agriturismo", "/it/dintorni", "/agriturismo", "/dintorni", "/it", "", "/it/dove-siamo"];
  const pages = [];
  let mergedHtml = "";
  let title = "";
  let meta = "";

  for (const path of paths) {
    const url = path ? `${base}${path}` : base;
    const page = await fetchPage(url);
    if (!page) continue;
    pages.push(page.url);
    mergedHtml += page.html;
    if (!title) title = stripHtml(page.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]);
    if (!meta) meta = metaContent(page.html, "description") || metaContent(page.html, "og:description");
  }

  if (!mergedHtml) return null;

  const plain = stripHtml(mergedHtml).slice(0, 12000);
  const paragraphs = extractParagraphs(mergedHtml);
  const headings = extractHeadings(mergedHtml);
  const amenities = extractAmenities(mergedHtml, plain);

  const nearby = headings.filter((h) =>
    /templi|mussomeli|cammarata|sutera|andromeda|valle|monte|castello|parco/i.test(h),
  );

  return {
    pages,
    title,
    meta,
    amenities,
    paragraphs,
    headings,
    nearby,
    plainPreview: plain.slice(0, 2000),
  };
}

export function formatScrapeForPrompt(scrape) {
  if (!scrape) return "";
  const lines = [
    "CONTESTO SCRAPING SITO UFFICIALE (usa solo ciò che è verificato, non inventare):",
    scrape.title ? `Titolo sito: ${scrape.title}` : "",
    scrape.meta ? `Meta description: ${scrape.meta}` : "",
    scrape.amenities.length ? `Servizi rilevati: ${scrape.amenities.join(", ")}` : "",
    scrape.nearby.length ? `Luoghi citati sul sito: ${scrape.nearby.join("; ")}` : "",
  ];

  if (scrape.paragraphs.length) {
    lines.push("Testo estratto (estratti):");
    for (const p of scrape.paragraphs.slice(0, 4)) {
      lines.push(`- ${p.slice(0, 400)}`);
    }
  }

  return lines.filter(Boolean).join("\n");
}
