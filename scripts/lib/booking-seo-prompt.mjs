/**
 * Prompt Booking.com SEO — allineato al template utente.
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function getBookingSeoSystemPrompt() {
  return readFileSync(
    resolve(__dirname, "../../data/missing-descriptions/booking-seo-system-prompt.md"),
    "utf8",
  ).trim();
}

export function buildBookingBatchUserPrompt(hotels, { blockNum, totalBlocks } = {}) {
  const header =
    blockNum != null
      ? `Elenco strutture — blocco ${blockNum}${totalBlocks ? `/${totalBlocks}` : ""} (${hotels.length} hotel):\n\n`
      : `Elenco strutture (${hotels.length} hotel):\n\n`;

  const lines = hotels.map((h, i) => {
    const lat = h.lat ?? h.coordinates?.latitude ?? "—";
    const lng = h.lng ?? h.coordinates?.longitude ?? "—";
    return [
      `${i + 1}. ${h.nome ?? h.name}`,
      `ID: ${h.id}`,
      `Slug: ${h.slug ?? "—"}`,
      `Nome: ${h.nome ?? h.name}`,
      `Comune / Provincia: ${h.city_name ?? h.city ?? "—"}`,
      `Indirizzo: ${h.indirizzo ?? h.address ?? "—"}`,
      `Coordinate: Lat ${lat}, Lng ${lng}`,
      `Website: ${h.website ?? "—"}`,
      `Email: ${h.email ?? ""}`,
      "",
    ].join("\n");
  });

  return header + lines.join("\n");
}

/** Prompt monolinea per n8n HTTP Gemini (singolo hotel). */
export function buildN8nGeminiPrompt(hotel) {
  const system = getBookingSeoSystemPrompt();
  const user = buildBookingBatchUserPrompt([hotel]);
  return { system, user };
}
