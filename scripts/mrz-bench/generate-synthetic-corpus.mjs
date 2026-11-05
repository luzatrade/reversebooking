#!/usr/bin/env node
/**
 * Genera varianti sintetiche degradate per campioni verificati del corpus MRZ.
 *
 *   node scripts/mrz-bench/generate-synthetic-corpus.mjs [--limit 3]
 *
 * Scrive PNG in data/mrz-bench/synthetic/ e aggiorna synthetic-manifest.json.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const MANIFEST_PATH = path.join(ROOT, 'data/mrz-bench/corpus-manifest.json');
const OUT_DIR = path.join(ROOT, 'data/mrz-bench/synthetic');
const OUT_MANIFEST = path.join(ROOT, 'data/mrz-bench/synthetic-manifest.json');

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i !== -1 ? process.argv[i + 1] : fallback;
}

const variantLimit = Number.parseInt(arg('--limit', '3'), 10);

const RECIPES = [
  { suffix: 'rot2', make: (buf) => sharp(buf).rotate(2, { background: '#808080' }).png().toBuffer() },
  { suffix: 'rot-3', make: (buf) => sharp(buf).rotate(-3, { background: '#808080' }).png().toBuffer() },
  { suffix: 'blur08', make: (buf) => sharp(buf).blur(0.8).png().toBuffer() },
  { suffix: 'dark', make: (buf) => sharp(buf).linear(0.75, 0).png().toBuffer() },
  { suffix: 'bright', make: (buf) => sharp(buf).linear(1.3, 10).png().toBuffer() },
  { suffix: 'jpeg60', make: (buf) => sharp(buf).jpeg({ quality: 60 }).toBuffer() },
  { suffix: 'jpeg35', make: (buf) => sharp(buf).jpeg({ quality: 35 }).toBuffer() },
  {
    suffix: 'small800',
    make: async (buf) => {
      const meta = await sharp(buf).metadata();
      const w = meta.width ?? 1000;
      return sharp(buf).resize({ width: Math.min(800, w) }).png().toBuffer();
    },
  },
];

async function main() {
  const manifest = JSON.parse(await fs.readFile(MANIFEST_PATH, 'utf8'));
  await fs.mkdir(OUT_DIR, { recursive: true });

  const verified = manifest.filter((s) => s.truth != null);
  const recipes = RECIPES.slice(0, variantLimit);
  const synthetic = [];

  for (const sample of verified) {
    try {
      await fs.access(sample.photo);
    } catch {
      console.warn('SKIP (file missing):', sample.id);
      continue;
    }

    const source = await sharp(sample.photo).rotate().png().toBuffer();
    for (const recipe of recipes) {
      const id = `${sample.id}__${recipe.suffix}`;
      const outPath = path.join(OUT_DIR, `${id}.png`);
      const buf = await recipe.make(source);
      await sharp(buf).png().toFile(outPath);
      synthetic.push({
        id,
        label: `${sample.label} — ${recipe.suffix}`,
        photo: outPath,
        format: sample.format ?? 'TD1',
        truth: sample.truth,
        parentId: sample.parentId ?? sample.id,
        syntheticOf: sample.id,
        variant: recipe.suffix,
      });
      console.log('→', id);
    }
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    variantLimit,
    count: synthetic.length,
    samples: synthetic,
  };
  await fs.writeFile(OUT_MANIFEST, JSON.stringify(payload, null, 2) + '\n');
  console.log(`\nSynthetic manifest: ${OUT_MANIFEST} (${synthetic.length} immagini)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
