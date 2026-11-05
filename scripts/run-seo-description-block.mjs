/**
 * Orchestrator: Gemini generate → import Supabase per un blocco.
 *
 * Usage:
 *   node scripts/run-seo-description-block.mjs --block 011
 *   node scripts/run-seo-description-block.mjs --from 011 --to 015
 */

import { spawnSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const block = get("--block");
  const from = get("--from") ? String(get("--from")).padStart(3, "0") : block ? String(block).padStart(3, "0") : null;
  const to = get("--to") ? String(get("--to")).padStart(3, "0") : from;
  if (!from) {
    console.error("Servono --block NNN oppure --from / --to");
    process.exit(1);
  }
  return { from: Number(from), to: Number(to), withEn: process.argv.includes("--en") };
}

function runNode(script, args) {
  const r = spawnSync("node", [resolve(__dirname, script), ...args], {
    stdio: "inherit",
    cwd: resolve(__dirname, ".."),
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

function main() {
  const { from, to, withEn } = parseArgs();
  for (let n = from; n <= to; n++) {
    const block = String(n).padStart(3, "0");
    console.log(`\n========== BLOCCO ${block} ==========\n`);
    const genArgs = [`--block`, block, `--import`];
    if (withEn) genArgs.push("--en");
    runNode("generate-block-descriptions-gemini.mjs", genArgs);
  }
  console.log("\n✓ Blocchi completati");
}

main();
