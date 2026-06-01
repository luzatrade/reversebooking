// Esporta una mappa statica { cityId -> hero public_url } da city_media (position
// più bassa) in data/cityHeroImages.ts. Usata dal resolver sincrono lato client
// per le card delle richieste, senza chiamate a runtime.
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });
const { createClient } = await import("@supabase/supabase-js");

const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const { data, error } = await admin
  .from("city_media")
  .select("city_id,position,public_url")
  .order("city_id", { ascending: true })
  .order("position", { ascending: true });
if (error) {
  console.error(error.message);
  process.exit(1);
}

const heroes = {};
for (const row of data ?? []) {
  if (!heroes[row.city_id]) heroes[row.city_id] = row.public_url;
}

const entries = Object.entries(heroes)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([cityId, url]) => `  "${cityId}": "${url}",`)
  .join("\n");

const file = `// File generato automaticamente da scripts/export-city-heroes.mjs — non modificare a mano.
// Mappa cityId -> foto principale (hero) servita dal nostro storage Supabase.

export const cityHeroImages: Record<string, string> = {
${entries}
};
`;

writeFileSync(resolve(__dirname, "../data/cityHeroImages.ts"), file);
console.log(`Scritte ${Object.keys(heroes).length} hero in data/cityHeroImages.ts`);
