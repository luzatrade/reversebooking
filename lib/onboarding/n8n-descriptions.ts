import type { SupabaseClient } from "@supabase/supabase-js";
import { validateItalianDescription } from "@/lib/seo/description-validation";
import { computeOnboardingSeoIndexable } from "@/lib/onboarding/seo-indexable-onboarding";

export type N8nHotelInput = {
  id?: string;
  slug?: string;
  name?: string;
  city?: string;
  address?: string;
  email?: string;
  description_it?: string;
  description_en?: string;
  description?: string;
  indirizzo?: string;
};

export type N8nImportPayload = {
  batch_id?: string;
  source?: string;
  hotels?: N8nHotelInput[];
};

export type N8nExportHotel = {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  coordinates: { latitude: number | null; longitude: number | null };
  email: string;
  website: string | null;
  phone: string | null;
};

type DbRow = {
  id: string;
  slug: string;
  nome: string;
  city_name: string;
  indirizzo: string;
  lat: number | null;
  lng: number | null;
  website: string | null;
  phone: string | null;
  email: string | null;
  main_photo_url: string | null;
  status: string;
  description: string | null;
  description_en: string | null;
};

export async function exportMissingDescriptionHotels(
  admin: SupabaseClient,
  limit = 10,
): Promise<N8nExportHotel[]> {
  const cap = Math.min(Math.max(limit, 1), 50);
  const rows: DbRow[] = [];
  let from = 0;

  while (rows.length < cap) {
    const { data, error } = await admin
      .from("onboarding_hotels")
      .select(
        "id, slug, nome, city_name, indirizzo, lat, lng, website, phone, email, main_photo_url, status, description, description_en",
      )
      .not("main_photo_url", "is", null)
      .not("indirizzo", "is", null)
      .order("city_name", { ascending: true })
      .order("nome", { ascending: true })
      .range(from, from + 499);

    if (error) throw error;
    if (!data?.length) break;

    for (const row of data as DbRow[]) {
      if (!(row.description ?? "").trim()) {
        rows.push(row);
        if (rows.length >= cap) break;
      }
    }

    if (data.length < 500) break;
    from += 500;
  }

  return rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    name: row.nome,
    city: row.city_name,
    address: row.indirizzo,
    coordinates: { latitude: row.lat, longitude: row.lng },
    email: row.email ?? "",
    website: row.website,
    phone: row.phone,
  }));
}

export type N8nImportReport = {
  batchId: string;
  ok: string[];
  invalid: Array<{ slug: string; issues: string[] }>;
  skipped: Array<{ slug?: string; id?: string; reason: string; issues?: string[] }>;
  imported: Array<{ slug: string; seo_indexable: boolean }>;
};

async function fetchById(admin: SupabaseClient, id: string): Promise<DbRow | null> {
  const { data, error } = await admin
    .from("onboarding_hotels")
    .select(
      "id, slug, nome, city_name, indirizzo, lat, lng, website, phone, email, main_photo_url, status, description, description_en",
    )
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data as DbRow | null;
}

async function fetchBySlug(admin: SupabaseClient, slug: string): Promise<DbRow | null> {
  const { data, error } = await admin
    .from("onboarding_hotels")
    .select(
      "id, slug, nome, city_name, indirizzo, lat, lng, website, phone, email, main_photo_url, status, description, description_en",
    )
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data as DbRow | null;
}

export async function importN8nDescriptionBatch(
  admin: SupabaseClient,
  payload: N8nImportPayload,
  options: { validateOnly?: boolean; withContacts?: boolean } = {},
): Promise<N8nImportReport> {
  const hotels = payload.hotels ?? [];
  const batchId = payload.batch_id?.trim() || new Date().toISOString();

  const report: N8nImportReport = {
    batchId,
    ok: [],
    invalid: [],
    skipped: [],
    imported: [],
  };

  for (const row of hotels) {
    const id = row.id?.trim();
    const slugInput = row.slug?.trim();
    let dbRow: DbRow | null = null;

    if (id) dbRow = await fetchById(admin, id);
    if (!dbRow && slugInput) dbRow = await fetchBySlug(admin, slugInput);

    if (!dbRow) {
      report.skipped.push({ id, slug: slugInput, reason: "hotel non trovato" });
      continue;
    }

    const description = (row.description_it ?? row.description ?? "").trim();
    const description_en = (row.description_en ?? "").trim();
    const indirizzo = (row.address ?? row.indirizzo ?? dbRow.indirizzo).trim();
    const email = (row.email ?? "").trim();

    if (!description && !description_en) {
      report.skipped.push({ slug: dbRow.slug, reason: "nessuna descrizione nel payload" });
      continue;
    }

    const issues = description
      ? validateItalianDescription(description, {
          nome: dbRow.nome,
          lat: dbRow.lat,
          lng: dbRow.lng,
        })
      : [];

    if (issues.length > 0) {
      report.invalid.push({ slug: dbRow.slug, issues });
      if (description) {
        report.skipped.push({ slug: dbRow.slug, reason: "validazione IT fallita", issues });
        continue;
      }
    }

    if (options.validateOnly) {
      report.ok.push(dbRow.slug);
      continue;
    }

    const patch: Record<string, string | boolean> = { indirizzo };
    if (description) patch.description = description;
    if (description_en) patch.description_en = description_en;
    if (options.withContacts && email) patch.email = email;

    const seoRow = { ...dbRow, ...patch };
    patch.seo_indexable = computeOnboardingSeoIndexable(seoRow);

    const { data: updated, error } = await admin
      .from("onboarding_hotels")
      .update(patch)
      .eq("id", dbRow.id)
      .select("slug, seo_indexable")
      .single();

    if (error) throw error;

    report.ok.push(dbRow.slug);
    report.imported.push({
      slug: updated.slug,
      seo_indexable: updated.seo_indexable ?? false,
    });
  }

  return report;
}
