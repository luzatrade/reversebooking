#!/usr/bin/env node
/**
 * Importa PDF Downloads + foto WhatsApp nel corpus MRZ.
 *
 *   node scripts/mrz-bench/import-batch2.mjs
 *   node scripts/mrz-bench/import-batch2.mjs --dry-run
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const ASSETS =
  '/Users/lucianozavaglia/.cursor/projects/Users-lucianozavaglia-Desktop-reverseboking/assets';
const DOWNLOADS = '/Users/lucianozavaglia/Downloads';
const SAMPLES_PATH = path.join(ROOT, 'data/mrz-bench/samples.json');
const TRUTHS_PATH = path.join(ROOT, 'data/mrz-bench/truths-batch2.json');

const PDFS = [
  { id: 'pdf-camscanner-030325', label: 'PDF CamScanner 03-03-2025', file: 'CamScanner 03-03-2025 11.24_1.pdf' },
  { id: 'pdf-camscanner-101720', label: 'PDF CamScanner 10-17-2020', file: 'CamScanner 10-17-2020 12.04.51.pdf' },
  { id: 'pdf-camscanner-130426', label: 'PDF CamScanner 13-04-2026', file: 'CamScanner 13-04-2026 16.42.pdf' },
  { id: 'pdf-camscanner-140425', label: 'PDF CamScanner 14-04-2025', file: 'CamScanner 14-04-2025 14.08.pdf' },
  { id: 'pdf-camscanner-231025', label: 'PDF CamScanner 23-10-2025', file: 'CamScanner 23-10-25 19.45.pdf' },
  { id: 'pdf-carta-identita-apostrofo', label: "PDF carta d'identità", file: "carta d'identità.pdf" },
  { id: 'pdf-carta-identita', label: 'PDF carta identità', file: 'carta identità.pdf' },
  { id: 'pdf-bigatti-cinzia', label: 'PDF Documenti identità Bigatti Cinzia', file: 'Documenti identita Bigatti Cinzia.pdf' },
  { id: 'pdf-freya-roberts', label: 'PDF Freya Roberts', file: 'Freya Roberts.pdf' },
  { id: 'pdf-passport-ca', label: 'PDF passaporto canadese Villa', file: 'passport.pdf', format: 'TD3' },
  { id: 'pdf-whatsapp-scan-0604', label: 'PDF WhatsApp Scan 2026-06-04', file: 'WhatsApp Scan 2026-06-04 at 21.09.41.pdf' },
];

function shortHash(filename) {
  const m = filename.match(/-([a-f0-9]{8})-/i);
  return m ? m[1].toLowerCase() : filename.replace(/\.[^.]+$/, '').slice(-8).toLowerCase();
}

function slugId(prefix, name) {
  return `${prefix}-${shortHash(name)}`;
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const existing = JSON.parse(await fs.readFile(SAMPLES_PATH, 'utf8'));
  const existingIds = new Set(existing.map((s) => s.id));
  let truthsObj = {};
  try {
    truthsObj = JSON.parse(await fs.readFile(TRUTHS_PATH, 'utf8'));
  } catch {
    truthsObj = {};
  }

  const added = [];

  for (const pdf of PDFS) {
    const full = path.join(DOWNLOADS, pdf.file);
    const id = pdf.id;
    if (existingIds.has(id)) continue;
    added.push({
      id,
      label: pdf.label,
      source: `file:${full}`,
      format: pdf.format ?? 'TD1',
      pdfPages: 'all',
      truth: truthsObj[id] ?? null,
    });
  }

  const assets = await fs.readdir(ASSETS);
  const whatsapp = assets.filter((f) => f.startsWith('WhatsApp_Image_') && f.endsWith('.png')).sort();

  for (const file of whatsapp) {
    const id = slugId('wa', file);
    if (existingIds.has(id)) continue;
    const truth = truthsObj[id] ?? null;
    const label = `WhatsApp ${file.replace(/^WhatsApp_Image_/, '').replace(/-[a-f0-9-]+\.png$/i, '')}`;
    added.push({
      id,
      label,
      source: `assets:${file}`,
      format: 'TD1',
      truth,
    });
  }

  // Fix format for known TD3
  for (const entry of added) {
    if (entry.id === 'pdf-passport-ca') entry.format = 'TD3';
    if (entry.truth && entry.id.startsWith('pdf-passport')) entry.format = 'TD3';
  }

  console.log(`Nuovi campioni: ${added.length} (${PDFS.length} PDF max, ${whatsapp.length} WhatsApp in assets)`);
  console.log(`  con verità annotata: ${added.filter((a) => a.truth).length}`);
  console.log(`  scoperta (truth null): ${added.filter((a) => !a.truth).length}`);

  if (dryRun) {
    for (const a of added.slice(0, 15)) console.log(`  + ${a.id}  ${a.label}`);
    if (added.length > 15) console.log(`  ... +${added.length - 15} altri`);
    return;
  }

  const merged = [...existing, ...added];
  await fs.writeFile(SAMPLES_PATH, JSON.stringify(merged, null, 2) + '\n');
  console.log(`samples.json aggiornato: ${existing.length} → ${merged.length} campioni`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
