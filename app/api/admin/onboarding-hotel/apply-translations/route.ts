import { NextResponse } from "next/server";
import { logAdminAction } from "@/lib/admin/audit";
import { requireAdminApi } from "@/lib/admin/verify";

type TranslationItem = {
  id?: string;
  description_en?: string;
};

type Body = {
  items?: TranslationItem[];
};

function cleanText(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const items = body.items ?? [];
  if (!items.length) {
    return NextResponse.json({ error: "Nessuna traduzione fornita" }, { status: 400 });
  }

  const admin = gate.admin;
  let applied = 0;
  const failures: string[] = [];

  for (const item of items) {
    const id = item.id?.trim();
    const descriptionEn = cleanText(item.description_en);
    if (!id || !descriptionEn) {
      failures.push(id ?? "(id mancante)");
      continue;
    }

    const { data: existing, error: existingError } = await admin
      .from("onboarding_hotels")
      .select("id, nome")
      .eq("id", id)
      .maybeSingle();

    if (existingError || !existing) {
      failures.push(id);
      continue;
    }

    const { error: updateError } = await admin
      .from("onboarding_hotels")
      .update({ description_en: descriptionEn })
      .eq("id", id);
    if (updateError) {
      failures.push(id);
      continue;
    }

    await admin.from("hotel_accounts").update({ description_en: descriptionEn }).eq("onboarding_hotel_id", id);
    applied += 1;
  }

  await logAdminAction(admin, request, {
    actor: gate.profile,
    action: "apply_onboarding_description_translations",
    targetType: "onboarding",
    targetId: "batch",
    details: { applied, failures, total: items.length },
  });

  return NextResponse.json({ ok: true, applied, failures });
}
