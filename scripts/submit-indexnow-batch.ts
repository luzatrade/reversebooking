/**
 * Invio massivo URL a IndexNow (hotel + hub destinazione, IT + EN).
 *
 * Usage:
 *   npx tsx scripts/submit-indexnow-batch.ts --dry-run
 *   npx tsx scripts/submit-indexnow-batch.ts
 *   npx tsx scripts/submit-indexnow-batch.ts --limit 100
 */

import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { collectIndexNowBatchUrls } from "../lib/seo/indexnow-batch";
import { getIndexNowKeyLocation, notifyIndexNow } from "../lib/seo/indexnow";
import { publicSiteOrigin } from "../lib/seo/site-url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local") });

type CliOptions = {
  dryRun: boolean;
  limit: number | null;
  hotelsOnly: boolean;
  destinationsOnly: boolean;
};

function parseArgs(): CliOptions {
  const limitIndex = process.argv.indexOf("--limit");
  const limitValue = limitIndex >= 0 ? Number(process.argv[limitIndex + 1]) : null;
  return {
    dryRun: process.argv.includes("--dry-run"),
    limit: Number.isFinite(limitValue) && limitValue! > 0 ? limitValue : null,
    hotelsOnly: process.argv.includes("--hotels-only"),
    destinationsOnly: process.argv.includes("--destinations-only"),
  };
}

function ensureIndexNowKey(): void {
  if (process.env.INDEXNOW_API_KEY?.trim()) return;

  const publicDir = resolve(__dirname, "../public");
  const keyFile = readdirSync(publicDir).find((name) => /^[a-f0-9]{32}\.txt$/i.test(name));
  if (!keyFile) {
    throw new Error(
      "INDEXNOW_API_KEY non configurata e nessun file di verifica in public/. Aggiungi la variabile su Vercel o in .env.local.",
    );
  }

  process.env.INDEXNOW_API_KEY = readFileSync(resolve(publicDir, keyFile), "utf8").trim();
}

async function collectUrls(options: CliOptions): Promise<string[]> {
  const urls = await collectIndexNowBatchUrls({
    limit: options.limit,
    hotelsOnly: options.hotelsOnly,
    destinationsOnly: options.destinationsOnly,
  });
  console.log(`[indexnow] URL raccolti: ${urls.length} (hotel + destinazioni, IT+EN)`);
  return urls;
}

async function main() {
  const options = parseArgs();
  ensureIndexNowKey();

  const urls = await collectUrls(options);
  const reportDir = resolve(__dirname, "../data/indexnow");
  mkdirSync(reportDir, { recursive: true });
  const reportPath = resolve(reportDir, `batch-${new Date().toISOString().slice(0, 10)}.json`);

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun: options.dryRun,
    origin: publicSiteOrigin(),
    keyLocation: getIndexNowKeyLocation(),
    totalUrls: urls.length,
    sample: urls.slice(0, 5),
  };

  if (options.dryRun) {
    console.log("\n[indexnow] DRY RUN — nessun invio");
    console.log(JSON.stringify(report, null, 2));
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\nReport salvato: ${reportPath}`);
    return;
  }

  console.log(`\n[indexnow] Invio di ${urls.length} URL a IndexNow + Bing…`);
  const result = await notifyIndexNow(urls);

  const finalReport = { ...report, result };
  writeFileSync(reportPath, JSON.stringify(finalReport, null, 2));

  if (!result.ok) {
    console.error("[indexnow] Invio fallito:", result.error ?? result.status);
    process.exit(1);
  }

  console.log(`[indexnow] OK — ${result.submitted} URL inviati (status ${result.status ?? 202})`);
  console.log(`Report: ${reportPath}`);
}

main().catch((error) => {
  console.error("[indexnow] Errore:", error instanceof Error ? error.message : error);
  process.exit(1);
});
