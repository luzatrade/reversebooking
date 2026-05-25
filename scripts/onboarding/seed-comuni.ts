/**
 * Popola la tabella comuni_italiani su Supabase dal JSON generato.
 *
 * Prerequisiti:
 *   1. npx tsx scripts/onboarding/fetch-comuni-istat.ts  (genera data/comuni_italiani.json)
 *   2. SUPABASE_SERVICE_ROLE_KEY e NEXT_PUBLIC_SUPABASE_URL in .env.local
 *
 * Uso: npx tsx scripts/onboarding/seed-comuni.ts
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: resolve(__dirname, "../../.env.local"), override: true });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

type ComuneJson = {
  codice_istat: string;
  nome: string;
  provincia: string;
  sigla_provincia: string;
  regione: string;
  lat?: number;
  lng?: number;
};

const BATCH_SIZE = 500;

async function main() {
  const jsonPath = resolve(__dirname, "../../data/comuni_italiani.json");
  let comuni: ComuneJson[];
  try {
    comuni = JSON.parse(readFileSync(jsonPath, "utf-8"));
  } catch {
    console.error(`File non trovato: ${jsonPath}`);
    console.error("Esegui prima: npx tsx scripts/onboarding/fetch-comuni-istat.ts");
    process.exit(1);
  }

  console.log(`Caricamento ${comuni.length} comuni su Supabase ...`);

  let inserted = 0;
  let skipped = 0;

  for (let i = 0; i < comuni.length; i += BATCH_SIZE) {
    const batch = comuni.slice(i, i + BATCH_SIZE).map((c) => ({
      codice_istat: c.codice_istat,
      nome: c.nome,
      provincia: c.provincia,
      sigla_provincia: c.sigla_provincia,
      regione: c.regione,
      lat: c.lat ?? null,
      lng: c.lng ?? null,
    }));

    const { error } = await supabase
      .from("comuni_italiani")
      .upsert(batch, { onConflict: "codice_istat", ignoreDuplicates: true });

    if (error) {
      console.error(`Errore batch ${i}–${i + batch.length}:`, error.message);
      skipped += batch.length;
    } else {
      inserted += batch.length;
    }

    if ((i / BATCH_SIZE) % 5 === 0) {
      console.log(`  ... ${i + batch.length}/${comuni.length}`);
    }
  }

  console.log(`✓ Seed completato: ${inserted} inseriti, ${skipped} saltati`);
}

main().catch(console.error);
