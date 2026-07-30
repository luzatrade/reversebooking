import { NextResponse } from "next/server";
import { logAdminAction } from "@/lib/admin/audit";
import { requireAdminApi } from "@/lib/admin/verify";
import { getIndexNowKeyLocation, localizedCanonicalUrls, notifyIndexNow } from "@/lib/seo/indexnow";
import { publicSiteOrigin } from "@/lib/seo/site-url";

const MAX_URLS = 10_000;

function isAllowedSiteUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const allowed = new URL(publicSiteOrigin());
    return parsed.protocol === "https:" && parsed.host === allowed.host;
  } catch {
    return false;
  }
}

function resolveUrls(body: { urls?: unknown; paths?: unknown }): string[] {
  const urls = Array.isArray(body.urls)
    ? body.urls.filter((value): value is string => typeof value === "string")
    : [];

  const pathUrls = Array.isArray(body.paths)
    ? body.paths
        .filter((value): value is string => typeof value === "string")
        .flatMap((path) => {
          const normalized = path.startsWith("/") ? path : `/${path}`;
          return localizedCanonicalUrls(normalized);
        })
    : [];

  const combined = [...urls, ...pathUrls].map((url) => url.trim()).filter(Boolean);
  return [...new Set(combined)];
}

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  let body: { urls?: unknown; paths?: unknown };
  try {
    body = (await request.json()) as { urls?: unknown; paths?: unknown };
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const urls = resolveUrls(body);
  if (!urls.length) {
    return NextResponse.json({ error: "Servono urls o paths (array non vuoto)" }, { status: 400 });
  }
  if (urls.length > MAX_URLS) {
    return NextResponse.json({ error: `Massimo ${MAX_URLS} URL per richiesta` }, { status: 400 });
  }

  const invalid = urls.filter((url) => !isAllowedSiteUrl(url));
  if (invalid.length) {
    return NextResponse.json(
      {
        error: "URL non consentiti: devono essere HTTPS sul dominio del sito",
        invalid: invalid.slice(0, 5),
      },
      { status: 400 },
    );
  }

  const result = await notifyIndexNow(urls);

  await logAdminAction(gate.admin, request, {
    actor: gate.profile,
    action: "indexnow_submit",
    targetType: "seo",
    targetId: "indexnow",
    details: { submitted: result.submitted, ok: result.ok, status: result.status },
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, submitted: result.submitted, status: result.status, error: result.error },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    submitted: result.submitted,
    status: result.status ?? 202,
    keyLocation: getIndexNowKeyLocation(),
  });
}
