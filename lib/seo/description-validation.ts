/** Validazione descrizioni SEO IT (allineata a scripts/lib/seo-description-prompt.mjs). */

const CLICHE = ["pittoresca", "pittoresco", "incontaminata", "incontaminato", "incantevole", "succulento", "idilliaco"];

export type DescriptionHotelContext = {
  nome?: string | null;
  lat?: number | null;
  lng?: number | null;
};

export function validateItalianDescription(text: string, hotel: DescriptionHotelContext): string[] {
  const issues: string[] = [];
  const t = text.trim();
  const words = t.split(/\s+/).filter(Boolean).length;

  if (words < 110) issues.push(`troppo corto (${words} parole, target 150-190)`);
  if (words > 240) issues.push(`troppo lungo (${words} parole)`);

  if (/a soli\s+[\d.]+,\s*[\d.]+/i.test(t)) {
    issues.push("coordinate usate come distanza ('a soli lat, lng da')");
  }

  if (hotel.lat != null && hotel.lng != null) {
    const latStr = String(hotel.lat);
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

  const nomeFirst = hotel.nome?.split(/\s/)[0] ?? "";
  if (!/^il\s|^l'|^la\s/i.test(t) && !new RegExp(nomeFirst, "i").test(t.slice(0, 80))) {
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
