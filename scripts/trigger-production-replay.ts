/**
 * Invoca il replay email in produzione (usa RESEND reale su Vercel).
 *
 * Usage:
 *   npx tsx scripts/trigger-production-replay.ts --dry-run
 *   npx tsx scripts/trigger-production-replay.ts
 */

import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: false });

const dryRun = process.argv.includes("--dry-run");
const sinceDays = process.argv.find((a) => a.startsWith("--since-days="))?.split("=")[1] ?? "7";
const audience = process.argv.find((a) => a.startsWith("--audience="))?.split("=")[1] ?? "all";

const baseUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "https://www.hotelsdrop.com").replace(/\/$/, "");
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

if (!serviceKey) {
  console.error("SUPABASE_SERVICE_ROLE_KEY mancante.");
  process.exit(1);
}

const params = new URLSearchParams({
  "since-days": sinceDays,
  audience,
});
if (dryRun) params.set("dry-run", "1");

const url = `${baseUrl}/api/cron/replay-request-emails?${params.toString()}`;

console.log(`${dryRun ? "[dry-run] " : ""}POST ${url}`);

const response = await fetch(url, {
  method: "POST",
  headers: { Authorization: `Bearer ${serviceKey}` },
});

const body = await response.json().catch(() => ({}));
console.log(JSON.stringify(body, null, 2));

if (!response.ok) process.exit(1);
