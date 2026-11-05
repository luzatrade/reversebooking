/**
 * Applica migration Supabase su produzione.
 * Richiede SUPABASE_DB_PASSWORD (Dashboard → Project Settings → Database).
 *
 *   SUPABASE_DB_PASSWORD=... node scripts/apply-supabase-migrations.mjs
 */
import { spawnSync } from "node:child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const ref = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];
const password = process.env.SUPABASE_DB_PASSWORD?.trim();

if (!ref) {
  console.error("NEXT_PUBLIC_SUPABASE_URL non valido");
  process.exit(1);
}
if (!password) {
  console.error("Manca SUPABASE_DB_PASSWORD — impossibile supabase db push da cloud agent.");
  console.error("Aggiungi il secret in Cursor Dashboard oppure esegui npm run supabase:push in locale.");
  process.exit(1);
}

const dbUrl = `postgresql://postgres.${ref}:${encodeURIComponent(password)}@aws-0-eu-west-1.pooler.supabase.com:5432/postgres`;
const result = spawnSync("npx", ["supabase", "db", "push", "--db-url", dbUrl, "--yes"], {
  cwd: resolve(__dirname, ".."),
  stdio: "inherit",
  env: process.env,
});

process.exit(result.status ?? 1);
