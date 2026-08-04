/**
 * IndexNow per blocco 004 (50 hotel × IT+EN).
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

if (!process.env.INDEXNOW_API_KEY?.trim()) {
  const { readdirSync, readFileSync: readFs } = await import("fs");
  const publicDir = resolve(__dirname, "../public");
  const keyFile = readdirSync(publicDir).find((name) => /^[a-f0-9]{32}\.txt$/i.test(name));
  if (keyFile) process.env.INDEXNOW_API_KEY = readFs(resolve(publicDir, keyFile), "utf8").trim();
}

const { structureIndexNowUrls, notifyIndexNow } = await import("../lib/seo/indexnow.ts");

const slugs = JSON.parse(
  readFileSync(resolve(__dirname, "../data/gemini-master-cards/block-004.json"), "utf8")
).hotels.map((h) => h.slug);

const urls = slugs.flatMap((s) => [...structureIndexNowUrls(s)]);
console.log(`[indexnow] block 4: ${slugs.length} slug → ${urls.length} URL`);

const result = await notifyIndexNow(urls);
const reportDir = resolve(__dirname, "../data/indexnow");
mkdirSync(reportDir, { recursive: true });
writeFileSync(
  resolve(reportDir, "block-004-indexnow.json"),
  JSON.stringify({ submitted: urls.length, result, slugs }, null, 2) + "\n"
);

if (!result.ok) {
  console.error("[indexnow] failed:", result.error ?? result.status);
  process.exit(1);
}
console.log(`[indexnow] OK — ${result.submitted ?? urls.length} URL (status ${result.status ?? 202})`);
