/**
 * Verifica title SERP strutture: intento booking/prenotazione, senza stuffing "BOOKING".
 * Esegui: npx tsx scripts/verify-structure-seo-title.ts
 */
import { buildStructureSeoTitle } from "../lib/seo/structure-title";

const cases: Array<{
  name: string;
  cityName: string;
  it: string;
  en: string;
}> = [
  {
    name: "B&B Bergamo Bassa",
    cityName: "Bergamo",
    it: "B&B Bergamo Bassa a Bergamo — Prenotazione diretta senza commissioni",
    en: "B&B Bergamo Bassa in Bergamo — Book direct, no commission",
  },
  {
    name: "Jenka",
    cityName: "Caltabellotta",
    it: "Jenka a Caltabellotta — Prenotazione diretta senza commissioni",
    en: "Jenka in Caltabellotta — Book direct, no commission",
  },
  {
    name: "Correttori House",
    cityName: "Reggio di Calabria",
    it: "Correttori House a Reggio di Calabria — Prenotazione diretta",
    en: "Correttori House in Reggio di Calabria — Book direct, no commission",
  },
];

let failed = 0;

for (const row of cases) {
  for (const locale of ["it", "en"] as const) {
    const got = buildStructureSeoTitle(row, locale);
    const expected = row[locale];
    const hasBookingStuff = /BOOKING/.test(got);
    const hasIntent = locale === "en" ? /book direct/i.test(got) : /prenotazione diretta/i.test(got);
    const ok = got === expected && !hasBookingStuff && hasIntent && got.length <= 72;
    if (!ok) {
      failed += 1;
      console.error(`FAIL ${locale} ${row.name}`);
      console.error(`  expected: ${expected} (${expected.length})`);
      console.error(`  got:      ${got} (${got.length})`);
    } else {
      console.log(`OK  ${locale} [${got.length}] ${got}`);
    }
  }
}

const longIt = buildStructureSeoTitle(
  { name: "Maison Blanche Taormina Luxury B&B", cityName: "Taormina" },
  "it",
);
const longEn = buildStructureSeoTitle(
  { name: "Maison Blanche Taormina Luxury B&B", cityName: "Taormina" },
  "en",
);

for (const [locale, got] of [
  ["it", longIt],
  ["en", longEn],
] as const) {
  const hasStuff = /BOOKING/.test(got);
  const hasIntent = locale === "en" ? /book direct/i.test(got) : /prenotazione diretta/i.test(got);
  if (hasStuff || !hasIntent || got.length > 72) {
    failed += 1;
    console.error(`FAIL long ${locale}: ${got} (${got.length})`);
  } else {
    console.log(`OK  ${locale} long [${got.length}] ${got}`);
  }
}

if (failed) {
  console.error(`\n${failed} assertion(s) failed`);
  process.exit(1);
}

console.log("\nAll structure SEO title checks passed.");
