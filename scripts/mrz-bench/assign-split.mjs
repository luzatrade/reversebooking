#!/usr/bin/env node
/**
 * Assegna split dev/holdout ai campioni verificati del corpus MRZ.
 *
 *   node scripts/mrz-bench/assign-split.mjs [--ratio 0.75] [--seed hotelsdrop]
 *
 * Scrive data/mrz-bench/split-assignments.json (id → dev|holdout).
 * Holdout = campioni con truth usati solo per valutazione finale.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const MANIFEST_PATH = path.join(ROOT, 'data/mrz-bench/corpus-manifest.json');
const OUT_PATH = path.join(ROOT, 'data/mrz-bench/split-assignments.json');

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i !== -1 ? process.argv[i + 1] : fallback;
}

const ratio = Number.parseFloat(arg('--ratio', '0.75'));
const seed = arg('--seed', 'hotelsdrop-mrz');

if (!fs.existsSync(MANIFEST_PATH)) {
  console.error('Manifest assente:', MANIFEST_PATH);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

/** Raggruppa per parentId per evitare leakage tra varianti della stessa CIE. */
const groups = new Map();
for (const entry of manifest) {
  if (!entry.truth) continue;
  const key = entry.parentId ?? entry.id;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(entry.id);
}

const groupKeys = [...groups.keys()].sort((a, b) => {
  const ha = createHash('sha256').update(`${seed}:${a}`).digest();
  const hb = createHash('sha256').update(`${seed}:${b}`).digest();
  return ha.compare(hb);
});

const holdoutCount = Math.max(1, Math.round(groupKeys.length * (1 - ratio)));
const holdoutGroups = new Set(groupKeys.slice(-holdoutCount));

const assignments = {};
for (const [groupId, ids] of groups) {
  const split = holdoutGroups.has(groupId) ? 'holdout' : 'dev';
  for (const id of ids) assignments[id] = split;
}

const meta = {
  generatedAt: new Date().toISOString(),
  seed,
  ratio,
  verifiedGroups: groupKeys.length,
  holdoutGroups: holdoutGroups.size,
  devGroups: groupKeys.length - holdoutGroups.size,
  sampleCount: Object.keys(assignments).length,
};

fs.writeFileSync(OUT_PATH, JSON.stringify({ meta, assignments }, null, 2) + '\n');

console.log('Split assignments written:', OUT_PATH);
console.log(JSON.stringify(meta, null, 2));
