/**
 * Rispedisce notifiche/email per una richiesta già creata (fix manuale o test).
 *
 * Usage:
 *   npx tsx scripts/replay-new-request-notifications.ts --code RBNT87WX
 *   npx tsx scripts/replay-new-request-notifications.ts --id <uuid>
 */

import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";
import { dispatchNewTravelRequestNotifications } from "@/lib/notifications/dispatch-new-request";
import { normalizeWorldCitySelection } from "@/lib/constants/world-city-helpers";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const codeArg = process.argv.find((a) => a.startsWith("--code="));
const idArg = process.argv.find((a) => a.startsWith("--id="));
const codeFlag = process.argv.indexOf("--code");
const idFlag = process.argv.indexOf("--id");
const requestCode =
  codeArg?.split("=")[1] ??
  (codeFlag !== -1 && process.argv[codeFlag + 1] && !process.argv[codeFlag + 1].startsWith("--")
    ? process.argv[codeFlag + 1]
    : null);
const requestId =
  idArg?.split("=")[1] ??
  (idFlag !== -1 && process.argv[idFlag + 1] && !process.argv[idFlag + 1].startsWith("--")
    ? process.argv[idFlag + 1]
    : null);

if (!requestCode && !requestId) {
  console.error("Servono --code RBXXXXXX oppure --id <uuid>");
  process.exit(1);
}

const emailsOnly = process.argv.includes("--emails-only");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: { persistSession: false },
});

async function main() {
  let q = sb.from("travel_requests").select("id, request_code, city_id, city_name, country_code, country_name");
  if (requestId) q = q.eq("id", requestId);
  else q = q.eq("request_code", requestCode!);

  const { data: row, error } = await q.maybeSingle();
  if (error) throw error;
  if (!row) throw new Error("Richiesta non trovata");

  const normalized = normalizeWorldCitySelection({
    label: "",
    city_id: row.city_id,
    city_name: row.city_name,
    country_code: row.country_code ?? "IT",
    country_name: row.country_name ?? "Italy",
  });

  if (normalized.city_id !== row.city_id || normalized.city_name !== row.city_name) {
    console.log(`Normalizzo città: ${row.city_name} (${row.city_id}) → ${normalized.city_name} (${normalized.city_id})`);
    await sb
      .from("travel_requests")
      .update({ city_id: normalized.city_id, city_name: normalized.city_name })
      .eq("id", row.id);
  }

  console.log(`Replay notifiche per ${row.request_code} (${row.id})…`);
  const result = await dispatchNewTravelRequestNotifications(sb, row.id, { emailsOnly });
  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
