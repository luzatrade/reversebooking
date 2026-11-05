/**
 * Lista batch n8n in coda (per revisione agente / utente).
 *
 * Usage: node scripts/n8n-list-pending.mjs
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

const url = `${base}/api/cron/n8n-descriptions?queue=pending&limit=10&secret=${secret}`;
const res = await fetch(url);
const data = await res.json();
console.log(JSON.stringify(data, null, 2));
process.exit(res.ok ? 0 : 1);
