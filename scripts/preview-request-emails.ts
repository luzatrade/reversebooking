/**
 * Genera l'anteprima delle email inviate alla pubblicazione di una richiesta.
 *
 * Non invia nulla e non tocca il database: usa gli stessi template del codice
 * di produzione con dati di esempio, così il testo mostrato è esattamente
 * quello che ricevono le strutture.
 *
 * Usage:
 *   npx tsx scripts/preview-request-emails.ts
 *   npx tsx scripts/preview-request-emails.ts --out data/email-previews
 */

import { mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import {
  buildCityRequestHtml,
  buildDirectRequestHtml,
} from "@/lib/notifications/dispatch-new-request";
import {
  buildOnboardingCityRequestHtml,
  buildOnboardingDirectRequestHtml,
  type TravelRequestNotifyPayload,
} from "@/lib/notifications/onboarding-new-request";
import { resolveNotificationEmailFrom } from "@/lib/email/from";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const outArg = process.argv.find((a) => a.startsWith("--out="));
const outFlag = process.argv.indexOf("--out");
const outDir = resolve(
  __dirname,
  "..",
  outArg?.split("=")[1] ??
    (outFlag !== -1 && process.argv[outFlag + 1] && !process.argv[outFlag + 1].startsWith("--")
      ? process.argv[outFlag + 1]
      : "data/email-previews"),
);

const sample: TravelRequestNotifyPayload = {
  id: "00000000-0000-0000-0000-000000000000",
  request_code: "RBNT87WX",
  city_id: "3164527",
  city_name: "Verona",
  country_code: "IT",
  preferred_area: "Centro storico",
  check_in: "2026-09-12",
  check_out: "2026-09-15",
  guests_count: 4,
  rooms_count: 2,
};

const hotelName = "Hotel Aurora";
const onboardingId = "11111111-2222-3333-4444-555555555555";

const previews = [
  {
    file: "partner-citta.html",
    audience: "Struttura partner (abbonata) — richiesta nella sua città",
    subject: `Nuova richiesta soggiorno ${sample.request_code} — ${sample.city_name}`,
    html: buildCityRequestHtml(sample),
  },
  {
    file: "partner-diretta.html",
    audience: "Struttura partner (abbonata) — richiesta diretta a lei",
    subject: `Richiesta diretta ${sample.request_code} — ${sample.city_name}`,
    html: buildDirectRequestHtml(sample, hotelName),
  },
  {
    file: "catalogo-citta.html",
    audience: "Struttura del catalogo (non abbonata) — richiesta nella sua città",
    subject: `Nuova richiesta soggiorno ${sample.request_code} — ${sample.city_name}`,
    html: buildOnboardingCityRequestHtml(sample, onboardingId, hotelName),
  },
  {
    file: "catalogo-diretta.html",
    audience: "Struttura del catalogo (non abbonata) — richiesta diretta a lei",
    subject: `Richiesta diretta ${sample.request_code} — ${sample.city_name}`,
    html: buildOnboardingDirectRequestHtml(sample, onboardingId, hotelName),
  },
];

function toPlainText(html: string) {
  return html
    .replace(/<a [^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "$2 <$1>")
    .replace(/<\/p>|<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

mkdirSync(outDir, { recursive: true });

console.log(`Mittente configurato: ${resolveNotificationEmailFrom()}\n`);

for (const preview of previews) {
  const document = `<!doctype html><html lang="it"><head><meta charset="utf-8"><title>${preview.subject}</title></head><body style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:620px;margin:32px auto;padding:0 16px;color:#18181b">
<div style="border:1px solid #e4e4e7;border-radius:12px;padding:16px;margin-bottom:24px;background:#fafafa;font-size:13px;color:#52525b">
<div><strong>Da:</strong> ${resolveNotificationEmailFrom()}</div>
<div><strong>Oggetto:</strong> ${preview.subject}</div>
<div><strong>Destinatario tipo:</strong> ${preview.audience}</div>
</div>
${preview.html}
</body></html>`;

  writeFileSync(resolve(outDir, preview.file), document, "utf8");

  console.log("=".repeat(72));
  console.log(preview.audience);
  console.log("=".repeat(72));
  console.log(`Oggetto: ${preview.subject}\n`);
  console.log(toPlainText(preview.html));
  console.log("");
}

console.log(`Anteprime HTML salvate in: ${outDir}`);
