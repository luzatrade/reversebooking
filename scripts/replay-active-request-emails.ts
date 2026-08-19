/**
 * Rilancia le email (nuovo template) per tutte le richieste attive con check-in futuro.
 *
 * Usage:
 *   npx tsx scripts/replay-active-request-emails.ts --dry-run
 *   npx tsx scripts/replay-active-request-emails.ts --only onboarding
 *   npx tsx scripts/replay-active-request-emails.ts --since-days 7
 *   npx tsx scripts/replay-active-request-emails.ts --pause-ms 3000
 */

import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";
import { dispatchNewTravelRequestNotifications, type DispatchAudience } from "@/lib/notifications/dispatch-new-request";
import { getResendApiKey } from "@/lib/notifications/resend-env";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: false });

const dryRun = process.argv.includes("--dry-run");
const emailsOnly = !process.argv.includes("--with-notifications");

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

const audience = onlyRaw as DispatchAudience;

const pauseArg = process.argv.find((a) => a.startsWith("--pause-ms="));
const pauseFlag = process.argv.indexOf("--pause-ms");
const pauseMs = Number(
  pauseArg?.split("=")[1] ??
    (pauseFlag !== -1 && process.argv[pauseFlag + 1] && !process.argv[pauseFlag + 1].startsWith("--")
      ? process.argv[pauseFlag + 1]
      : "2500"),
);

const sinceArg = process.argv.find((a) => a.startsWith("--since-days="));
const sinceFlag = process.argv.indexOf("--since-days");
const sinceDays = Number(
  sinceArg?.split("=")[1] ??
    (sinceFlag !== -1 && process.argv[sinceFlag + 1] && !process.argv[sinceFlag + 1].startsWith("--")
      ? process.argv[sinceFlag + 1]
      : "7"),
);

function sleep(ms: number) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
}

async function main() {
  if (!dryRun && !getResendApiKey()) {
    console.error("RESEND_API_KEY mancante. Esegui: vercel env pull .env.local --environment=production");
    process.exit(1);
  }

  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });

  const today = new Date().toISOString().slice(0, 10);
  const sinceIso = new Date(Date.now() - sinceDays * 86400000).toISOString();

  const { data: requests, error } = await sb
    .from("travel_requests")
    .select("id, request_code, city_name, check_in, created_at")
    .eq("status", "active")
    .gte("check_in", today)
    .gte("created_at", sinceIso)
    .order("created_at", { ascending: true });

  if (error) throw error;
  if (!requests?.length) {
    console.log("Nessuna richiesta attiva con check-in futuro.");
    return;
  }

  console.log(
    `${dryRun ? "[dry-run]" : "Replay"} ${requests.length} richieste (ultimi ${sinceDays} giorni) · audience=${audience} · pause=${pauseMs}ms\n`,
  );

  let totalRecipients = 0;

  for (let i = 0; i < requests.length; i++) {
    const row = requests[i];
    console.log(`[${i + 1}/${requests.length}] ${row.request_code} · ${row.city_name} · check-in ${row.check_in}`);

    const result = await dispatchNewTravelRequestNotifications(sb, row.id, {
      emailsOnly,
      audience,
      dryRun,
    });

    const count = result.partnerRecipients.length + result.onboardingRecipients.length;
    totalRecipients += count;

    const sent = result.emailResults.filter((r) => r && typeof r === "object" && "ok" in r && (r as { ok: boolean }).ok).length;
    const failed = result.emailResults.length - sent;

    console.log(`  partner=${result.partnerRecipients.length} onboarding=${result.onboardingRecipients.length} email_ok=${sent}${failed ? ` email_fail=${failed}` : ""}`);

    if (!dryRun && i < requests.length - 1 && pauseMs > 0) {
      await sleep(pauseMs);
    }
  }

  console.log(
    dryRun
      ? `\n[dry-run] Totale destinatari simulati: ${totalRecipients}`
      : `\nInvio completato. Totale destinatari contattati: ${totalRecipients}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
