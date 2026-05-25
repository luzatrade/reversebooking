/**
 * CLI — Assegna claim token e invia inviti email agli hotel unclaimed.
 *
 * Uso:
 *   npx tsx scripts/onboarding/send-invites.ts                       (tutti, batch 50)
 *   npx tsx scripts/onboarding/send-invites.ts --city "015146"       (solo codice ISTAT)
 *   npx tsx scripts/onboarding/send-invites.ts --limit 10 --dry-run
 */

import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { assignClaimTokensAndInvite } from "../../lib/onboarding/assignClaimTokens";

dotenv.config({ path: resolve(__dirname, "../../.env.local"), override: true });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const cityIdx = args.indexOf("--city");
const cityIstat = cityIdx >= 0 ? args[cityIdx + 1] : undefined;
const limitIdx = args.indexOf("--limit");
const limit = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : undefined;

async function main() {
  console.log("═══ HotelsDrop — Invio inviti onboarding ═══");
  if (dryRun) console.log("(dry-run — nessuna email verrà inviata)\n");

  const result = await assignClaimTokensAndInvite(supabase, {
    cityIstat,
    dryRun,
    limit,
  });

  console.log("\n═══════════════════════════════════════");
  console.log(`Processati: ${result.processed}`);
  console.log(`Inviti inviati: ${result.invited}`);
  console.log(`Saltati (no email): ${result.skippedNoEmail}`);
  if (result.errors.length) {
    console.log(`Errori (${result.errors.length}):`);
    result.errors.forEach((e) => console.log(`  • ${e}`));
  }
}

main().catch(console.error);
