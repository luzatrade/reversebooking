/**
 * Processa batch in coda da n8n (validazione + import su onboarding_hotels).
 *
 * Usage:
 *   node scripts/process-n8n-description-queue.mjs
 *   node scripts/process-n8n-description-queue.mjs --queue-id <uuid>
 */

import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const secret = process.env.CRON_SECRET?.trim();
if (!secret) {
  console.error("CRON_SECRET non configurato");
  process.exit(1);
}

const base = process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://www.hotelsdrop.com";
const queueIdArg = process.argv.find((a, i) => process.argv[i - 1] === "--queue-id");

const params = new URLSearchParams({ secret, process_queue: "true" });
if (queueIdArg) params.set("queue_id", queueIdArg);

const url = `${base.replace(/\/$/, "")}/api/cron/n8n-descriptions?${params}`;

const res = await fetch(url, { method: "POST" });
const data = await res.json();
console.log(JSON.stringify(data, null, 2));
process.exit(res.ok ? 0 : 1);
