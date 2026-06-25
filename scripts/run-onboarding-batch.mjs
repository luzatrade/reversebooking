/**
 * Pipeline onboarding standard:
 * 1) harvest strutture (chiave search, di solito TEMP)
 * 2) backfill foto mancanti (chiave PHOTOS, di solito prod)
 *
 * Usage:
 *   GOOGLE_PLACES_API_KEY_TEMP=... GOOGLE_PLACES_PHOTOS_KEY=... \
 *     node scripts/run-onboarding-batch.mjs --limit 25
 *
 *   node scripts/run-onboarding-batch.mjs --region Sicilia --limit 10
 *   node scripts/run-onboarding-batch.mjs --comune Noto
 */

import { spawn } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const extraArgs = process.argv.slice(2);

function run(script, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn("node", [resolve(__dirname, script), ...args], {
      cwd: root,
      env: process.env,
      stdio: "inherit",
    });
    child.on("exit", (code) => {
      if (code === 0) resolvePromise();
      else reject(new Error(`${script} exit ${code}`));
    });
  });
}

async function main() {
  console.log("=== STEP 1/2: harvest strutture ===");
  await run("harvest-onboarding-hotels.mjs", extraArgs);

  const backfillArgs = [];
  const comuneIdx = extraArgs.indexOf("--comune");
  if (comuneIdx >= 0 && extraArgs[comuneIdx + 1]) {
    backfillArgs.push("--comune", extraArgs[comuneIdx + 1]);
  }
  const regionIdx = extraArgs.indexOf("--region");
  if (regionIdx >= 0 && extraArgs[regionIdx + 1]) {
    console.log("=== STEP 2/2: backfill foto (tutta la regione/comune appena harvestati) ===");
  } else {
    console.log("=== STEP 2/2: backfill foto mancanti (batch globale limitato) ===");
  }
  const limitIdx = extraArgs.indexOf("--limit");
  if (limitIdx >= 0 && extraArgs[limitIdx + 1]) {
    backfillArgs.push("--limit", String(Number(extraArgs[limitIdx + 1]) * 25));
  } else {
    backfillArgs.push("--limit", "500");
  }

  await run("backfill-onboarding-photos.mjs", backfillArgs);
  console.log("=== BATCH ONBOARDING COMPLETATO ===");
}

main().catch((err) => {
  console.error(`FATAL: ${err.message ?? err}`);
  process.exit(1);
});
