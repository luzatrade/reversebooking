#!/usr/bin/env node
/**
 * Report learning dal corpus benchmark.
 *
 *   node scripts/mrz-bench/learn-report.mjs
 *   node scripts/mrz-bench/learn-report.mjs data/mrz-bench/corpus-results-v3.txt
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

const tally = { tutto: 0, nomi: 0, err: 0, no: 0, total: 0 };
const byTag = {};

function classify(result) {
  if (!result || result.startsWith('--')) return 'non_letto';
  if (result.startsWith('OK')) return 'tutto_corretto';
  if (result.startsWith('nomi')) return 'solo_nomi_errati';
  if (result.startsWith('ERR')) return 'campo_verificabile_errato';
  return 'non_letto';
}

for (const s of samples) {
  if (!s.label.includes('atteso') && s.engines.G) {
    const v = classify(s.engines.G);
    tally.total++;
    tally[v === 'tutto_corretto' ? 'tutto' : v === 'solo_nomi_errati' ? 'nomi' : v === 'campo_verificabile_errato' ? 'err' : 'no']++;
    const id = s.label.split('—')[0]?.trim().toLowerCase().replace(/\s+/g, '-') ?? s.label;
    const tag = Object.entries(tags).find(([k]) => s.label.toLowerCase().includes(k.replace(/-/g, ' ')))?.[1] ?? 'unknown';
    byTag[tag] = byTag[tag] ?? { tutto: 0, nomi: 0, err: 0, no: 0 };
    byTag[tag][v === 'tutto_corretto' ? 'tutto' : v === 'solo_nomi_errati' ? 'nomi' : v === 'campo_verificabile_errato' ? 'err' : 'no']++;
  }
}

fs.mkdirSync(RUNS_DIR, { recursive: true });
const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
const reportPath = path.join(RUNS_DIR, `report-${stamp}.txt`);

const report = [
  'MRZ Learning Report',
  `Source: ${path.basename(resultsPath)}`,
  `Generated: ${new Date().toISOString()}`,
  '',
  'ENGINE G (ottimizzato)',
  `  tutto_corretto:            ${tally.tutto}/${tally.total}`,
  `  solo_nomi_errati:          ${tally.nomi}/${tally.total}`,
  `  campo_verificabile_errato: ${tally.err}/${tally.total}`,
  `  non_letto:                 ${tally.no}/${tally.total}`,
  `  utilizzabile:              ${tally.tutto + tally.nomi}/${tally.total} (${tally.total ? Math.round(((tally.tutto + tally.nomi) / tally.total) * 100) : 0}%)`,
  '',
  'Per tag failure-tags.json:',
  ...Object.entries(byTag).map(
    ([tag, c]) =>
      `  ${tag.padEnd(22)} ok=${c.tutto} nomi=${c.nomi} err=${c.err} no=${c.no}`,
  ),
  '',
  'Campioni non letti (G):',
  ...samples
    .filter((s) => classify(s.engines.G) === 'non_letto' && !s.label.includes('PDF'))
    .map((s) => `  - ${s.label}`),
].join('\n');

fs.writeFileSync(reportPath, report + '\n');
console.log(report);
console.log(`\nSalvato: ${reportPath}`);
