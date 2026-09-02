#!/usr/bin/env node
/**
 * Report learning JSON dal corpus benchmark (Engine G).
 *
 *   node scripts/mrz-bench/learn-report-json.mjs
 *   node scripts/mrz-bench/learn-report-json.mjs data/mrz-bench/corpus-results-v5.txt
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const DEFAULT_RESULTS = path.join(ROOT, 'data/mrz-bench/corpus-results-v5.txt');
const TAGS_PATH = path.join(ROOT, 'data/mrz-bench/failure-tags.json');
const RUNS_DIR = path.join(ROOT, 'data/mrz-bench/runs');

const resultsPath = process.argv[2] ?? DEFAULT_RESULTS;
if (!fs.existsSync(resultsPath)) {
  console.error('File risultati non trovato:', resultsPath);
  process.exit(1);
}

const text = fs.readFileSync(resultsPath, 'utf8');
const tags = fs.existsSync(TAGS_PATH)
  ? JSON.parse(fs.readFileSync(TAGS_PATH, 'utf8'))
  : {};

const lines = text.split('\n');
const samples = [];
let current = null;

for (const line of lines) {
  if (line.startsWith('### ')) {
    current = { label: line.slice(4), engines: {} };
    samples.push(current);
  } else if (line.startsWith('originale')) {
    const gMatch = line.match(/originale\s+(\S.*?)(?:\s{2,}|$)/);
    if (current && gMatch) current.engines.G = gMatch[1]?.trim() ?? '--';
  } else if (line.includes('TOTALE su')) {
    current = null;
  }
}

function classify(result) {
  if (!result || result.startsWith('--')) return 'non_letto';
  if (result.startsWith('OK')) return 'tutto_corretto';
  if (result.startsWith('nomi')) return 'solo_nomi_errati';
  if (result.startsWith('ERR')) return 'campo_verificabile_errato';
  return 'non_letto';
}

const tally = {
  tutto_corretto: 0,
  solo_nomi_errati: 0,
  campo_verificabile_errato: 0,
  non_letto: 0,
  total: 0,
};
const byTag = {};
const unread = [];

for (const s of samples) {
  if (s.label.includes('atteso') || !s.engines.G) continue;
  const verdict = classify(s.engines.G);
  tally.total++;
  tally[verdict]++;
  const tag =
    Object.entries(tags).find(([k]) => s.label.toLowerCase().includes(k.replace(/-/g, ' ')))?.[1] ??
    'unknown';
  byTag[tag] = byTag[tag] ?? {
    tutto_corretto: 0,
    solo_nomi_errati: 0,
    campo_verificabile_errato: 0,
    non_letto: 0,
  };
  byTag[tag][verdict]++;
  if (verdict === 'non_letto' && !s.label.includes('PDF')) unread.push(s.label);
}

const report = {
  source: path.basename(resultsPath),
  generatedAt: new Date().toISOString(),
  engine: 'G',
  tally,
  utilizzabile: tally.tutto_corretto + tally.solo_nomi_errati,
  utilizzabilePct: tally.total
    ? Math.round(((tally.tutto_corretto + tally.solo_nomi_errati) / tally.total) * 100)
    : 0,
  byTag,
  unread,
};

fs.mkdirSync(RUNS_DIR, { recursive: true });
const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
const outPath = path.join(RUNS_DIR, `report-${stamp}.json`);
fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + '\n');

console.log(JSON.stringify(report, null, 2));
console.error(`\nSalvato: ${outPath}`);
