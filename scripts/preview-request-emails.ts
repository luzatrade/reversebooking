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
  getRequestEmailPreviews,
  wrapRequestEmailPreviewDocument,
} from "@/lib/console/request-email-previews";
import { resolveNotificationEmailFrom } from "@/lib/email/from";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: false });

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

const previews = getRequestEmailPreviews().map((preview) => ({
  file: `${preview.id}.html`,
  audience: preview.audience,
  subject: preview.subject,
  html: preview.bodyHtml,
}));

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
  const document = wrapRequestEmailPreviewDocument({
    subject: preview.subject,
    audience: preview.audience,
    bodyHtml: preview.html,
  });

  writeFileSync(resolve(outDir, preview.file), document, "utf8");

  console.log("=".repeat(72));
  console.log(preview.audience);
  console.log("=".repeat(72));
  console.log(`Oggetto: ${preview.subject}\n`);
  console.log(toPlainText(preview.html));
  console.log("");
}

console.log(`Anteprime HTML salvate in: ${outDir}`);
