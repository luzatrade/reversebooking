import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";
import { logAdminAction } from "@/lib/admin/audit";

type Body = {
  entity: "user" | "hotel" | "advertiser" | "request" | "offer" | "onboarding";
  id: string;
};

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  const body = (await request.json()) as Body;
  if (!body.entity || !body.id) {
    return NextResponse.json({ error: "Parametri mancanti" }, { status: 400 });
  }

  const admin = gate.admin;

  switch (body.entity) {
    case "user": {
      const { data: profile } = await admin.from("profiles").select("user_id, role").eq("user_id", body.id).maybeSingle();
      if (!profile) return NextResponse.json({ error: "Utente non trovato" }, { status: 404 });
      if (profile.role === "admin") return NextResponse.json({ error: "Non puoi eliminare un admin" }, { status: 403 });

      await admin.from("user_consents").delete().eq("user_id", body.id);
      await admin.from("offers").delete().eq("hotel_account_id", body.id);
      await admin.from("hotel_accounts").delete().eq("user_id", body.id);
      await admin.from("advertiser_profiles").delete().eq("user_id", body.id);
      await admin.from("profiles").delete().eq("user_id", body.id);
      await admin.auth.admin.deleteUser(body.id);
      break;
    }
    case "hotel": {
      await admin.from("offers").delete().eq("hotel_account_id", body.id);
      await admin.from("hotel_accounts").delete().eq("id", body.id);
      break;
    }
    case "advertiser": {
      await admin.from("advertiser_profiles").delete().eq("id", body.id);
      break;
    }
    case "request": {
      await admin.from("offers").delete().eq("travel_request_id", body.id);
      await admin.from("travel_requests").delete().eq("id", body.id);
      break;
    }
    case "offer": {
      await admin.from("offers").delete().eq("id", body.id);
      break;
    }
    case "onboarding": {
      await admin.from("onboarding_hotels").delete().eq("id", body.id);
      break;
    }
    default:
      return NextResponse.json({ error: "Entità non valida" }, { status: 400 });
  }

  await logAdminAction(admin, request, {
    actor: gate.profile,
    action: "delete_entity",
    targetType: body.entity,
    targetId: body.id,
  });

  return NextResponse.json({ ok: true });
}
