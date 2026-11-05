/**
 * Rimuove email aggregatori / placeholder da onboarding_hotels.
 *
 * Usage:
 *   node scripts/clean-suspicious-onboarding-emails.mjs --dry-run
 *   node scripts/clean-suspicious-onboarding-emails.mjs --apply
 *   node scripts/clean-suspicious-onboarding-emails.mjs --apply --blocks 001-017
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { isSuspiciousOnboardingEmail } from "./lib/onboarding-email.mjs";

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const blocks = get("--blocks");
  let slugsFilter = null;
  if (blocks) {
    const [from, to] = blocks.split("-").map((n) => Number.parseInt(n, 10));
    slugsFilter = new Set();
    for (let b = from; b <= to; b++) {
      const path = resolve(
        __dirname,
        `../data/missing-descriptions/blocks/block-${String(b).padStart(3, "0")}.json`,
      );
      if (!existsSync(path)) continue;
      const block = JSON.parse(readFileSync(path, "utf8"));
      for (const h of block.hotels ?? []) slugsFilter.add(h.slug);
    }
  }
  return {
    apply: process.argv.includes("--apply"),
    slugsFilter,
  };
}

async function main() {
  const { apply, slugsFilter } = parseArgs();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env missing");

  const { createClient } = await import("@supabase/supabase-js");
  const sb = createClient(url, key, { auth: { persistSession: false } });

  const PAGE = 1000;
  const flagged = [];

  for (let from = 0; ; from += PAGE) {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .select("id, slug, nome, email, website")
      .not("email", "is", null)
      .order("slug")
      .range(from, from + PAGE - 1);
    if (error) throw error;
    if (!data?.length) break;

    for (const row of data) {
      if (slugsFilter && !slugsFilter.has(row.slug)) continue;
      if (!row.email?.trim()) continue;
      if (!isSuspiciousOnboardingEmail(row.email, row.website)) continue;
      flagged.push({
        id: row.id,
        slug: row.slug,
        nome: row.nome,
        email: row.email,
        website: row.website,
      });
    }
    if (data.length < PAGE) break;
  }

  console.log(`Email sospette: ${flagged.length}${apply ? " → rimozione" : " (dry-run)"}`);
  for (const row of flagged) {
    console.log(`  ${row.slug} | ${row.email} | ${row.website ?? "—"}`);
  }

  if (apply && flagged.length) {
    for (const row of flagged) {
      const { error } = await sb.from("onboarding_hotels").update({ email: null }).eq("id", row.id);
      if (error) console.error(`ERR ${row.slug}: ${error.message}`);
    }
    console.log(`Rimosse ${flagged.length} email da Supabase.`);
  }

  const outDir = resolve(__dirname, "../data/gemini-responses");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(
    resolve(outDir, "email-cleanup-removed.json"),
    JSON.stringify({ removed: flagged, applied: apply }, null, 2) + "\n",
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
