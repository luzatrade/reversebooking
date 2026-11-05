// Audit retroattivo: verifica che nessun account non autorizzato sia admin.
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: false });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const knownArg = process.argv.find((a) => a.startsWith("--known="));
const knownEmails = new Set(
  (knownArg?.split("=")[1] ?? "info@hotelsdrop.com")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean),
);

if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const admin = createClient(url, key, { auth: { persistSession: false } });

const { data: admins, error } = await admin
  .from("profiles")
  .select("user_id, email, role, created_at")
  .eq("role", "admin");

if (error) {
  console.error(error.message);
  process.exit(1);
}

const rows = admins ?? [];
const unknown = rows.filter((row) => !knownEmails.has((row.email ?? "").toLowerCase()));

console.log(`Admin totali: ${rows.length}`);
for (const row of rows) {
  console.log(`  - ${row.email ?? row.user_id} (${row.created_at})`);
}

if (unknown.length) {
  console.error(`\n⚠ Admin non in lista --known: ${unknown.map((r) => r.email).join(", ")}`);
  process.exit(1);
}

console.log("\nOK: nessun admin sospetto.");
process.exit(0);
