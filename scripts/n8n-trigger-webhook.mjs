/**
 * Avvia workflow n8n (webhook trigger).
 *
 * Secret Cursor: N8N_WEBHOOK_URL = URL webhook produzione n8n
 *
 * Usage:
 *   node scripts/n8n-trigger-webhook.mjs
 *   node scripts/n8n-trigger-webhook.mjs --limit 5
 */

import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const url = process.env.N8N_WEBHOOK_URL?.trim();
if (!url) {
  console.error("N8N_WEBHOOK_URL non configurata (Dashboard Cursor → Secrets)");
  process.exit(1);
}

const limitArg = process.argv.find((a, i) => process.argv[i - 1] === "--limit");
const limit = limitArg ? Number.parseInt(limitArg, 10) : 5;

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    source: "cursor-agent",
    limit,
    at: new Date().toISOString(),
  }),
});

const text = await res.text();
console.log(`HTTP ${res.status}`);
try {
  console.log(JSON.stringify(JSON.parse(text), null, 2));
} catch {
  console.log(text.slice(0, 2000));
}
process.exit(res.ok ? 0 : 1);
