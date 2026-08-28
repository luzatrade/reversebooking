import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync, writeFileSync } from "fs";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const PAGE_SIZE = 1000;

const TABLES = [
  "profiles",
  "advertiser_profiles",
  "hotel_accounts",
  "travel_requests",
  "offers",
  "offer_messages",
  "notifications",
  "subscriptions",
  "billing_invoices",
  "user_consents",
  "onboarding_hotels",
];

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY (.env.local o env)");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function fetchAllRows(table) {
  const rows = [];
  for (let from = 0; ; from += PAGE_SIZE) {
    const { data, error } = await sb.from(table).select("*").range(from, from + PAGE_SIZE - 1);
    if (error) throw new Error(error.message);
    if (!data?.length) break;
    rows.push(...data);
    if (data.length < PAGE_SIZE) break;
  }
  return rows;
}

const dump = { exported_at: new Date().toISOString(), tables: {} };

for (const table of TABLES) {
  try {
    const data = await fetchAllRows(table);
    dump.tables[table] = data;
    console.log(`  + ${table}: ${data.length} righe`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`  ! ${table}: ${message} (saltata)`);
    dump.tables[table] = { error: message };
  }
}

const dir = resolve(__dirname, "../backups");
mkdirSync(dir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const file = resolve(dir, `db-backup-${stamp}.json`);
const json = JSON.stringify(dump, null, 2);
writeFileSync(file, json, "utf8");

const sizeMb = (Buffer.byteLength(json, "utf8") / (1024 * 1024)).toFixed(2);
const totalRows = Object.values(dump.tables).reduce(
  (sum, value) => sum + (Array.isArray(value) ? value.length : 0),
  0,
);

console.log(`\nBackup salvato in: ${file}`);
console.log(`Dimensione: ${sizeMb} MB | Righe totali: ${totalRows}`);
process.exit(0);
