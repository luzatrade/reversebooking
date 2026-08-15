#!/usr/bin/env node
/**
 * Prepara il corpus per il banco prova MRZ.
 *
 *   node scripts/mrz-bench/prepare-corpus.mjs
 *
 * Converte JPG/PDF in PNG normalizzati sotto data/mrz-bench/corpus/
 * e scrive data/mrz-bench/corpus-manifest.json.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const ASSETS =
  '/Users/lucianozavaglia/.cursor/projects/Users-lucianozavaglia-Desktop-reverseboking/assets';
const SAMPLES_PATH = path.join(ROOT, 'data/mrz-bench/samples.json');
const OUT_DIR = path.join(ROOT, 'data/mrz-bench/corpus');
const MANIFEST_PATH = path.join(ROOT, 'data/mrz-bench/corpus-manifest.json');

function resolveSource(source) {
  if (source.startsWith('assets:')) return path.join(ASSETS, source.slice('assets:'.length));
  if (source.startsWith('file:')) return source.slice('file:'.length);
  return source;
}

async function pdfToPngs(pdfPath, outPrefix) {
  const { pdf } = await import('pdf-to-img');
  const doc = await pdf(pdfPath, { scale: 2.5 });
  const paths = [];
  let page = 0;
  for await (const img of doc) {
    page++;
    const out = `${outPrefix}-p${page}.png`;
    await sharp(img).rotate().png().toFile(out);
    paths.push(out);
  }
  return paths;
}

async function rasterize(entry, outPrefix) {
  const src = resolveSource(entry.source);
  try {
    await fs.access(src);
  } catch {
    console.warn(`  SKIP ${entry.id}: file non trovato → ${src}`);
    return [];
  }

  const ext = path.extname(src).toLowerCase();
  if (ext === '.pdf') {
    return pdfToPngs(src, outPrefix);
  }

  const out = `${outPrefix}.png`;
  await sharp(src).rotate().png().toFile(out);
  return [out];
}

async function main() {
  const samples = JSON.parse(await fs.readFile(SAMPLES_PATH, 'utf8'));
  await fs.mkdir(OUT_DIR, { recursive: true });

  const manifest = [];

  for (const entry of samples) {
    const prefix = path.join(OUT_DIR, entry.id);
    console.log(`→ ${entry.id}`);
    const images = await rasterize(entry, prefix);
    for (let i = 0; i < images.length; i++) {
      manifest.push({
        id: images.length > 1 ? `${entry.id}-p${i + 1}` : entry.id,
        label: images.length > 1 ? `${entry.label} (pag. ${i + 1})` : entry.label,
        photo: images[i],
        format: entry.format ?? 'TD1',
        truth: entry.truth ?? null,
        parentId: entry.id,
      });
    }
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\nCorpus: ${manifest.length} immagini → ${MANIFEST_PATH}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
