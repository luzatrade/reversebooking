/**
 * Setup rapido su Mac per generazione descrizioni via LM Studio.
 *
 * Usage (dopo git clone):
 *   node scripts/setup-mac-lmstudio.mjs
 *   node scripts/setup-mac-lmstudio.mjs --open
 */

import { copyFileSync, existsSync, readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const envLocal = resolve(root, ".env.local");
const envExample = resolve(root, ".env.example");

const LM_DEFAULTS = {
  LMSTUDIO_BASE_URL: "http://192.168.1.6:1234/v1",
  LMSTUDIO_MODEL: "qwen2.5-7b-instruct-uncensored",
};

function parseEnv(text) {
  const map = new Map();
  for (const line of text.split("\n")) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m) map.set(m[1], m[2]);
  }
  return map;
}

function serializeEnv(map, originalText) {
  const lines = originalText.split("\n");
  const seen = new Set();
  const out = [];

  for (const line of lines) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=/);
    if (m && map.has(m[1])) {
      out.push(`${m[1]}=${map.get(m[1])}`);
      seen.add(m[1]);
    } else {
      out.push(line);
    }
  }

  for (const [key, value] of map) {
    if (!seen.has(key)) out.push(`${key}=${value}`);
  }

  return out.join("\n").replace(/\n*$/, "\n");
}

function main() {
  if (!existsSync(envExample)) {
    console.error("Manca .env.example nel progetto.");
    process.exit(1);
  }

  if (!existsSync(envLocal)) {
    copyFileSync(envExample, envLocal);
    console.log("Creato .env.local da .env.example");
  } else {
    console.log(".env.local già presente — aggiorno solo LMSTUDIO_* se vuoti");
  }

  const text = readFileSync(envLocal, "utf8");
  const map = parseEnv(text);

  for (const [key, value] of Object.entries(LM_DEFAULTS)) {
    if (!map.get(key)?.trim()) map.set(key, value);
  }

  writeFileSync(envLocal, serializeEnv(map, text));
  console.log("\nPercorso progetto:", root);
  console.log("File env:", envLocal);
  console.log("\nCompila in .env.local:");
  console.log("  LMSTUDIO_API_KEY     → LM Studio → Server Settings → token");
  console.log("  NEXT_PUBLIC_SUPABASE_URL");
  console.log("  SUPABASE_SERVICE_ROLE_KEY");
  console.log("\nPoi:");
  console.log("  npm run lmstudio:probe");
  console.log("  node scripts/generate-block-descriptions-lmstudio.mjs --block 011 --import");

  if (process.argv.includes("--open")) {
    spawnSync("open", ["-e", envLocal], { stdio: "inherit" });
  }
}

main();
