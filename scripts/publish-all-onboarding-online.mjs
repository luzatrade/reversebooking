/**
 * Mette online (seo_indexable) tutte le strutture onboarding con foto + indirizzo + coordinate.
 * Aggiunge descrizioni/ foto placeholder dove mancano, poi ricalcola slug e seo_indexable.
 *
 * Usage:
 *   node scripts/publish-all-onboarding-online.mjs --dry-run
 *   node scripts/publish-all-onboarding-online.mjs
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const dryRun = process.argv.includes("--dry-run");

function run(label, script, extraArgs = []) {
  console.log(`\n=== ${label} ===`);
  if (dryRun) {
    console.log(`[dry-run] node scripts/${script} ${extraArgs.join(" ")}`.trim());
    return;
  }
  const args = [resolve(__dirname, script), ...extraArgs];
  const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: resolve(__dirname, "..") });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

async function summary() {
  const { createClient } = await import("@supabase/supabase-js");
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });
  let total = 0;
  let indexable = 0;
  let noEmail = 0;
  let noEmailIndexable = 0;
  for (let from = 0; ; from += 1000) {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .select("seo_indexable, email")
      .range(from, from + 999);
    if (error) throw error;
    if (!data?.length) break;
    for (const row of data) {
      total += 1;
      if (row.seo_indexable) indexable += 1;
      const email = (row.email ?? "").trim();
      if (!email) {
        noEmail += 1;
        if (row.seo_indexable) noEmailIndexable += 1;
      }
    }
    if (data.length < 1000) break;
  }
  console.log("\n=== RIEPILOGO DB ===");
  console.log(`Totale onboarding: ${total}`);
  console.log(`seo_indexable (online): ${indexable}`);
  console.log(`Senza email: ${noEmail} (di cui online: ${noEmailIndexable})`);
}

async function main() {
  console.log(dryRun ? "DRY RUN publish-all" : "Publish all onboarding online");
  run("Backfill foto + descrizioni + indexable", "backfill-onboarding-indexable.mjs", dryRun ? ["--dry-run"] : []);
  run("Backfill slug SEO", "backfill-structure-slugs.mjs", dryRun ? ["--dry-run"] : []);
  if (!dryRun) await summary();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
