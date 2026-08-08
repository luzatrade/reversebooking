/**
 * Pubblica batch approvato dalla coda n8n (solo dopo ok utente).
 *
 * Usage:
 *   node scripts/n8n-publish-approved.mjs --queue-id <uuid>
 *   node scripts/n8n-publish-approved.mjs --all   # max 5 pending
 */

import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const secret = process.env.CRON_SECRET?.trim();
const base = (process.env.NEXT_PUBLIC_APP_URL || "https://www.hotelsdrop.com").replace(/\/$/, "");

if (!secret) {
  console.error("CRON_SECRET non configurata");
  process.exit(1);
}

const queueId = process.argv.find((a, i) => process.argv[i - 1] === "--queue-id");
const all = process.argv.includes("--all");

const params = new URLSearchParams({ secret, process_queue: "true" });
if (queueId) params.set("queue_id", queueId);

const url = `${base}/api/cron/n8n-descriptions?${params}`;
const res = await fetch(url, { method: "POST" });
const data = await res.json();
console.log(JSON.stringify(data, null, 2));
process.exit(res.ok ? 0 : 1);
