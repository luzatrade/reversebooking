import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { NextResponse } from "next/server";
import { logAdminAction } from "@/lib/admin/audit";
import { requireAdminApi } from "@/lib/admin/verify";
import { createServiceRoleClient } from "@/lib/supabase/admin";

export const maxDuration = 120;

async function schemaAlreadyReady(): Promise<boolean> {
  const admin = createServiceRoleClient();
  if (!admin) return false;
  const { error } = await admin.from("seo_google_indexing_log").select("id", { count: "exact", head: true });
  return !error;
}

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  if (await schemaAlreadyReady()) {
    return NextResponse.json({ ok: true, message: "Schema già presente" });
  }

  if (!process.env.SUPABASE_DB_PASSWORD?.trim()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Aggiungi SUPABASE_DB_PASSWORD su Vercel oppure esegui supabase/migrations/20261128140000_seo_google_indexing.sql nel SQL Editor.",
      },
      { status: 503 },
    );
  }

  const script = resolve(process.cwd(), "scripts/apply-supabase-migrations.mjs");

  const exitCode = await new Promise<number>((resolvePromise, reject) => {
    const child = spawn(process.execPath, [script], {
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    child.stdout?.on("data", (c) => {
      out += String(c);
    });
    child.stderr?.on("data", (c) => {
      out += String(c);
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0) console.warn("[google-indexing schema]", out.slice(0, 2000));
      resolvePromise(code ?? 1);
    });
  });

  await logAdminAction(gate.admin, request, {
    actor: gate.profile,
    action: "google_indexing_schema",
    targetType: "seo",
    targetId: "google-indexing",
    details: { exitCode },
  });

  if (exitCode !== 0) {
    return NextResponse.json({ ok: false, error: "Migration fallita — controlla log Vercel" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "Migration applicata" });
}