/**
 * Prompt e validazione descrizioni SEO IT (LM Studio / OpenAI-compatible).
 */

const CLICHE = ["pittoresca", "pittoresco", "incontaminata", "incontaminato", "incantevole", "succulento", "idilliaco"];

function inferStructureKind(nome) {
  const n = (nome ?? "").toLowerCase();
  if (/agriturismo|country house|farm stay/i.test(n)) return "agriturismo";
  if (/b&b|b \& b|bed.?breakfast|affittacamere|guest house|rooms|camere/i.test(n)) return "B&B";
  if (/residence|resort|motel|hotel|albergo/i.test(n)) return "hotel";
  return "struttura ricettiva";
}

export function buildItalianSeoPrompt(hotel) {
  const { nome, slug, city_name, indirizzo, lat, lng, website } = hotel;
  const kind = inferStructureKind(nome);
  const coords =
    lat != null && lng != null ? `Coordinate GPS: ${lat}, ${lng}` : "Coordinate GPS: non disponibili";
  const site = website ? `Sito web (contesto): ${website}` : "";

  const system = `Sei un copywriter SEO italiano per HotelsDrop.com — marketplace di prenotazione diretta / reverse booking (zero commissioni per chi viaggia).

OBIETTIVO SEO:
- Testo indicizzabile per query tipo "${kind} ${nome} ${city_name}", "${nome} ${city_name}", "dove dormire ${city_name}"
- 150-190 parole, 2 paragrafi separati da riga vuota (chunk semantico per Google e AI)
- Paragrafo 1: nome struttura + indirizzo completo + coordinate GPS + hub ${city_name} + contesto territoriale generico deducibile da indirizzo/provincia
- Paragrafo 2: tipo di struttura (${kind}), comfort plausibili, target ospiti, invito soft al soggiorno / richiesta diretta (max 1 frase su prenotazione diretta o assenza commissioni per chi viaggia — tono directory, non pubblicitario)
- Ripeti naturalmente il nome "${nome}" 1-2 volte e "${city_name}" almeno 2 volte, senza keyword stuffing

REGOLE OBBLIGATORIE:
- Apri con: "Il/L'/La [nome] si trova in [indirizzo con sigla provincia], coordinate GPS [lat, lng]"
- Le coordinate sono latitudine/longitudine: NON scrivere "a soli [coordinate] da" né trattare coordinate come metri/km
- NON inventare musei, castelli, chiese, teatri, parchi, borghi o città per nome
- NON citare distanze o tempi verso luoghi non presenti nei dati forniti
- Se nei dati non compaiono POI verificati, descrivi solo il contesto territoriale in modo generico (centro storico, area collinare, litorale, valle, provincia, ecc.) senza nomi propri inventati
- Comfort plausibili (Wi-Fi, bagno privato, colazione) — NON inventare spa, piscina, parcheggio se non confermati
- Indica il target (coppie, famiglie, escursionisti, business, ecc.)
- Vietato: telefono, email, prezzi, markdown, titoli, elenchi puntati
- Vietato cliché: pittoresco, incontaminato, incantevole, succulento, idilliaco
- Tono professionale da directory alberghiera italiana, frasi complete e scorrevoli

OUTPUT: solo JSON valido UTF-8, senza markdown:
{"description": "paragrafo1\\n\\nparagrafo2"}`;

  const user = [
    "Genera la descrizione SEO IT per questa struttura.",
    "Usa SOLO i dati sotto. Non aggiungere luoghi turistici per nome se non sono elencati qui.",
    "",
    `Nome: ${nome}`,
    `Tipo struttura (contesto SEO): ${kind}`,
    `Slug: ${slug}`,
    `Hub partner (scheda / keyword città): ${city_name}`,
    `Indirizzo: ${indirizzo}`,
    coords,
    site,
  ]
    .filter(Boolean)
    .join("\n");

  return { system, user };
}

export function buildEnglishSeoPrompt(hotel, italianDescription) {
  const system = `You are an SEO copywriter for HotelsDrop.com — direct booking / reverse booking marketplace (no traveller commission).
Write a Property Overview in English: 2 paragraphs, 120-180 words, professional tone.
Include property name and city naturally for search; one soft mention of direct booking is enough.
Do NOT invent phone, email, unverified amenities, or named tourist attractions not present in the source Italian text.
Output only JSON: {"description_en": "paragraph1\\n\\nparagraph2"}`;

  const user = `Translate/adapt this Italian hotel SEO text to English Property Overview style for "${hotel.nome}" in ${hotel.city_name}:\n\n${italianDescription}`;

  return { system, user };
}

export function buildRetryPrompt(hotel, issues, previousText) {
  const { system, user } = buildItalianSeoPrompt(hotel);
  const fixUser = [
    user,
    "",
    "La precedente risposta NON è valida. Correggi questi problemi:",
    issues.map((i) => `- ${i}`).join("\n"),
    "",
    "Testo precedente da correggere:",
    previousText,
  ].join("\n");
  return { system, user: fixUser };
}

/** Escape raw control chars inside JSON string literals (common LM Studio quirk). */
function sanitizeJsonControlChars(jsonText) {
  let out = "";
  let inString = false;
  let escaped = false;
  for (const ch of jsonText) {
    if (inString) {
      if (escaped) {
        out += ch;
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        out += ch;
        escaped = true;
        continue;
      }
      if (ch === '"') {
        out += ch;
        inString = false;
        continue;
      }
      if (ch === "\n") {
        out += "\\n";
        continue;
      }
      if (ch === "\r") {
        out += "\\r";
        continue;
      }
      if (ch === "\t") {
        out += "\\t";
        continue;
      }
      if (ch.charCodeAt(0) < 32) continue;
      out += ch;
      continue;
    }
    if (ch === '"') inString = true;
    out += ch;
  }
  return out;
}

function tryParseJsonObject(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    try {
      return JSON.parse(sanitizeJsonControlChars(raw));
    } catch {
      return null;
    }
  }
}

function extractFieldByRegex(text, field) {
  const re = new RegExp(`"${field}"\\s*:\\s*"([\\s\\S]*?)"\\s*[,}]?\\s*$`, "i");
  // Prefer greedy capture up to the last closing quote (models often omit final })
  const greedy = text.match(new RegExp(`"${field}"\\s*:\\s*"([\\s\\S]*)"\\s*\\}?\\s*$`, "i"));
  const m = greedy || text.match(re);
  if (!m?.[1]) return null;
  return m[1]
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\")
    .trim();
}

export function parseJsonField(text, field = "description") {
  const fenced = text.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/i);
  const raw = fenced ? fenced[1] : text.match(/(\{[\s\S]*\})/)?.[1] || text.match(/(\{[\s\S]*)/)?.[1];
  if (raw) {
    const parsed = tryParseJsonObject(raw.endsWith("}") ? raw : `${raw}}`);
    if (parsed && typeof parsed === "object") {
      const value = parsed[field] ?? parsed.description ?? parsed.description_en;
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    const fromRegex =
      extractFieldByRegex(raw, field) ||
      extractFieldByRegex(raw, "description") ||
      extractFieldByRegex(raw, "description_en");
    if (fromRegex) return fromRegex;
  }
  return text.replace(/^```[\w]*\n?|```$/g, "").trim();
}

export function validateItalianDescription(text, hotel) {
  const issues = [];
  const t = text.trim();
  const words = t.split(/\s+/).filter(Boolean).length;

  if (words < 140) issues.push(`troppo corto (${words} parole, target 150-190)`);
  if (words > 240) issues.push(`troppo lungo (${words} parole)`);

  const city = hotel.city_name?.trim();
  if (city && !new RegExp(city.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(t)) {
    issues.push(`hub/città "${city}" non menzionato nel testo`);
  }

  const nameToken = hotel.nome?.split(/\s+/).find((w) => w.length > 2);
  if (nameToken && !new RegExp(nameToken.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(t)) {
    issues.push("nome struttura poco visibile nel testo");
  }

  if (/a soli\s+[\d.]+,\s*[\d.]+/i.test(t)) {
    issues.push("coordinate usate come distanza ('a soli lat, lng da')");
  }

  if (hotel.lat != null && hotel.lng != null) {
    const latStr = String(hotel.lat);
    const lngStr = String(hotel.lng);
    if (!t.includes(latStr.slice(0, 7)) && !t.includes(latStr)) {
      issues.push("coordinate GPS non presenti nel testo");
    }
    if (!/coordinate\s+gps/i.test(t)) {
      issues.push("manca la formula 'coordinate GPS'");
    }
  }

  if (!t.includes("\n\n")) {
    issues.push("mancano 2 paragrafi separati (riga vuota)");
  }

  if (!/^il\s|^l'|^la\s/i.test(t) && !new RegExp(hotel.nome?.split(/\s/)[0] ?? "", "i").test(t.slice(0, 80))) {
    issues.push("apertura: inizia con il nome della struttura (Il/L'/La …)");
  }

  if (/@[\w.-]+\.\w+|tel\.|telefono|€\s*\d/i.test(t)) {
    issues.push("possibile contatto o prezzo inventato");
  }

  for (const word of CLICHE) {
    if (t.toLowerCase().includes(word)) issues.push(`cliché vietato: ${word}`);
  }

  return issues;
}
