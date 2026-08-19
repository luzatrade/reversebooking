/**
 * Rispedisce notifiche/email per una richiesta già creata (fix manuale o test).
 *
 * Usage:
 *   npx tsx scripts/replay-new-request-notifications.ts --code RBNT87WX --dry-run
 *   npx tsx scripts/replay-new-request-notifications.ts --code RBNT87WX --emails-only
 *   npx tsx scripts/replay-new-request-notifications.ts --id <uuid> --only onboarding
 *
 * Flag:
 *   --dry-run      elenca i destinatari senza inviare nulla
 *   --emails-only  non reinserisce le notifiche in-app (evita duplicati)
 *   --only         partners | onboarding | all (default: all)
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
const dryRun = process.argv.includes("--dry-run");

const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const onlyFlag = process.argv.indexOf("--only");
const onlyRaw =
  onlyArg?.split("=")[1] ??
  (onlyFlag !== -1 && process.argv[onlyFlag + 1] && !process.argv[onlyFlag + 1].startsWith("--")
    ? process.argv[onlyFlag + 1]
    : "all");

if (!["all", "partners", "onboarding"].includes(onlyRaw)) {
  console.error(`--only accetta: all | partners | onboarding (ricevuto: ${onlyRaw})`);
  process.exit(1);
}

const audience = onlyRaw as "all" | "partners" | "onboarding";

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
    if (dryRun) {
      console.log(
        `[dry-run] Città da normalizzare: ${row.city_name} (${row.city_id}) → ${normalized.city_name} (${normalized.city_id})`,
      );
    } else {
      console.log(`Normalizzo città: ${row.city_name} (${row.city_id}) → ${normalized.city_name} (${normalized.city_id})`);
      await sb
        .from("travel_requests")
        .update({ city_id: normalized.city_id, city_name: normalized.city_name })
        .eq("id", row.id);
    }
  }

  console.log(
    `${dryRun ? "[dry-run] Simulazione" : "Replay"} notifiche per ${row.request_code} (${row.id}) · destinatari: ${audience}…`,
  );

  const result = await dispatchNewTravelRequestNotifications(sb, row.id, {
    emailsOnly,
    audience,
    dryRun,
  });

  console.log(`\nPartner registrati: ${result.partnerRecipients.length}`);
  for (const email of result.partnerRecipients) console.log(`  · ${email}`);

  console.log(`\nStrutture del catalogo: ${result.onboardingRecipients.length}`);
  for (const email of result.onboardingRecipients.slice(0, 15)) console.log(`  · ${email}`);
  if (result.onboardingRecipients.length > 15) {
    console.log(`  … +${result.onboardingRecipients.length - 15} altre`);
  }

  const total = result.partnerRecipients.length + result.onboardingRecipients.length;
  console.log(
    dryRun
      ? `\n[dry-run] Nessuna email inviata. Verrebbero contattati ${total} destinatari.`
      : `\nInvio completato verso ${total} destinatari.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
