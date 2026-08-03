/**
 * Ripristina phone/email harvest da block-00N.json (liste originali).
 * Usage: node scripts/restore-block-harvest-contacts.mjs --block 2
 *        node scripts/restore-block-harvest-contacts.mjs --block 3
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

function parseBlock() {
  const i = process.argv.indexOf("--block");
  if (i === -1 || !process.argv[i + 1]) {
    console.error("Servono --block N");
    process.exit(1);
  }
  const n = String(process.argv[i + 1]).padStart(3, "0");
  return JSON.parse(readFileSync(resolve(process.cwd(), `data/gemini-master-cards/block-${n}.json`), "utf8"));
}

async function main() {
  const block = parseBlock();
  console.log(`Ripristino contatti harvest: blocco ${block.block} (${block.hotels.length} hotel)\n`);

  let ok = 0;
  for (const [i, h] of block.hotels.entries()) {
    const patch = {
      email: h.email ?? null,
    };
    if (h.phone) patch.phone = h.phone;

    const { data, error } = await sb
      .from("onboarding_hotels")
      .update(patch)
      .eq("slug", h.slug)
      .select("nome, phone, email")
      .maybeSingle();

    if (error) throw error;
    if (!data) {
      console.warn(`[${i + 1}] SKIP slug: ${h.slug}`);
      continue;
    }
    ok++;
    console.log(`[${i + 1}] ✓ ${data.nome} | tel: ${data.phone ?? "—"} | email: ${data.email ?? "—"}`);
  }
  console.log(`\nRipristinati: ${ok}/${block.hotels.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
