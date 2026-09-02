/**
 * OCR rapido su foto CIE (retro verticale) — verifica rotazioni.
 * Uso: npx tsx scripts/probe-cie-photo.mjs [path.jpg]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { createWorker, PSM } from 'tesseract.js';

const imagePath =
  process.argv[2] ??
  '/home/ubuntu/.cursor/projects/workspace/assets/4437FB5A-85B2-4332-9928-5985025B5CD6_L0_001.jpg';

if (!fs.existsSync(imagePath)) {
  console.error('File not found:', imagePath);
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const OCR_OPTS = {
  workerPath: path.join(ROOT, 'public/tesseract/worker.min.js'),
  corePath: path.join(ROOT, 'public/tesseract/'),
  langPath: path.join(ROOT, 'public/model/'),
  gzip: true,
  workerBlobURL: false,
};

const EXPECTED = {
  surname: 'ROTTINO',
  givenNames: 'ALESSANDRA',
  documentNumber: 'CA74219GP2',
};

async function ocrBuffer(buf) {
  const worker = await createWorker('mrz', 1, OCR_OPTS);
  await worker.setParameters({
    tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<',
    tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
    user_defined_dpi: '400',
  });
  const { data } = await worker.recognize(buf);
  await worker.terminate();
  return (data.text ?? '').toUpperCase().replace(/[^A-Z0-9<\n]/g, '');
}

async function main() {
  console.log('Foto:', imagePath);
  const meta = await sharp(imagePath).metadata();
  console.log('Size:', meta.width, 'x', meta.height);

  for (const rot of [0, 90, -90, 180]) {
    let pipeline = sharp(imagePath);
    if (rot) pipeline = pipeline.rotate(rot);
    const buf = await pipeline.resize({ width: 2400, withoutEnlargement: false }).jpeg().toBuffer();
    const text = await ocrBuffer(buf);
    const flat = text.replace(/\s+/g, '');
    const hit =
      flat.includes(EXPECTED.surname) &&
      flat.includes(EXPECTED.givenNames) &&
      flat.includes(EXPECTED.documentNumber);
    console.log(`\nrot=${rot} hit=${hit}`);
    console.log(text.split('\n').filter(Boolean).slice(-5).join('\n'));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
