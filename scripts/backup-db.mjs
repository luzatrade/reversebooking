import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync, writeFileSync } from "fs";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

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

const dump = { exported_at: new Date().toISOString(), tables: {} };

for (const table of TABLES) {
  const { data, error } = await sb.from(table).select("*");
  if (error) {
    console.warn(`  ! ${table}: ${error.message} (saltata)`);
    dump.tables[table] = { error: error.message };
    continue;
  }
  dump.tables[table] = data;
  console.log(`  + ${table}: ${data.length} righe`);
}

const dir = resolve(__dirname, "../backups");
mkdirSync(dir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const file = resolve(dir, `db-backup-${stamp}.json`);
writeFileSync(file, JSON.stringify(dump, null, 2), "utf8");

console.log(`\nBackup salvato in: ${file}`);
process.exit(0);
