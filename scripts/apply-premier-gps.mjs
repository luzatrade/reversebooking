/**
 * Applica coordinate GPS premier fornite dall'utente.
 * Usage: node scripts/apply-premier-gps.mjs
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");
const { setPlaceholderPhotoForHotel } = await import("./lib/onboarding-placeholder-photo.mjs");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  const data = JSON.parse(
    readFileSync(resolve(process.cwd(), "data/gemini-responses/blocks-missing-data-user-provided.json"), "utf8")
  );

  console.log("Applicazione GPS premier (16 hotel)\n");

  for (const [i, h] of data.premier_gps.entries()) {
    const { data: row, error: fetchErr } = await sb
      .from("onboarding_hotels")
      .select("*")
      .eq("slug", h.slug)
      .maybeSingle();

    if (fetchErr) throw fetchErr;
    if (!row) {
      console.warn(`[${i + 1}] SKIP non in DB: ${h.slug}`);
      continue;
    }

    const patch = {
      lat: h.lat,
      lng: h.lng,
      seo_indexable: isOnboardingSeoIndexable({ ...row, lat: h.lat, lng: h.lng }),
    };

    const { error } = await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
    if (error) throw error;
    console.log(`[${i + 1}] ✓ ${h.nome} → ${h.lat}, ${h.lng}`);
  }

  // Foto placeholder per le 3 strutture senza foto (se mancante)
  const photoSlugs = [
    "due-torri-hotel-verona",
    "bed-and-breakfast-le-palme-ficarazzi",
    "casa-della-seta-abbadia-lariana",
  ];

  console.log("\nFoto placeholder (se mancanti)\n");
  for (const slug of photoSlugs) {
    const { data: row } = await sb
      .from("onboarding_hotels")
      .select("id, nome, city_name, city_istat, indirizzo, main_photo_url, status")
      .eq("slug", slug)
      .maybeSingle();
    if (!row) {
      console.warn(`SKIP foto: ${slug}`);
      continue;
    }
    if (row.main_photo_url) {
      console.log(`— ${row.nome}: foto già presente`);
      continue;
    }
    try {
      const result = await setPlaceholderPhotoForHotel(sb, row, { force: true });
      if (result.updated) {
        const { data: seo } = await sb.from("onboarding_hotels").select("*").eq("id", row.id).single();
        await sb
          .from("onboarding_hotels")
          .update({ seo_indexable: isOnboardingSeoIndexable(seo) })
          .eq("id", row.id);
        console.log(`✓ ${row.nome}: placeholder caricata`);
      } else {
        console.warn(`✗ ${row.nome}: placeholder non aggiornata`);
      }
    } catch (err) {
      console.warn(`✗ ${row.nome}: ${err.message}`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
