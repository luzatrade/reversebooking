/**
 * Applica tutte le migration pendenti (incluso seo_google_indexing).
 * Richiede SUPABASE_DB_PASSWORD nei secret.
 */
import { spawnSync } from "node:child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const result = spawnSync(process.execPath, [resolve(__dirname, "apply-supabase-migrations.mjs")], {
  stdio: "inherit",
  env: process.env,
});
process.exit(result.status ?? 1);