#!/usr/bin/env node
/**
 * Copia asset OCR in public/ — modello MRZ da web-mrz-reader + Tesseract WASM.
 * Esegue: npm run setup:ocr (anche in postinstall / prebuild)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicTesseract = path.join(root, 'public', 'tesseract');
const publicModel = path.join(root, 'public', 'model');
const mrzReaderRoot = path.join(root, 'node_modules', 'web-mrz-reader');
const tesseractDist = path.join(root, 'node_modules', 'tesseract.js', 'dist');
const tesseractCore = path.join(root, 'node_modules', 'tesseract.js-core');

function copyFile(src, dest) {
  if (!fs.existsSync(src)) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`  ✓ ${path.relative(root, dest)}`);
  return true;
}

function isValidGzip(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const fd = fs.openSync(filePath, 'r');
  try {
    const buf = Buffer.alloc(2);
    fs.readSync(fd, buf, 0, 2, 0);
    return buf[0] === 0x1f && buf[1] === 0x8b;
  } finally {
    fs.closeSync(fd);
  }
}

console.log('Setting up OCR assets...\n');

if (!fs.existsSync(tesseractDist)) {
  console.error('❌ node_modules/tesseract.js not found. Run npm install first.');
  process.exit(1);
}

if (!fs.existsSync(mrzReaderRoot)) {
  console.error('❌ node_modules/web-mrz-reader not found. Run npm install first.');
  process.exit(1);
}

console.log('Tesseract worker + WASM cores:');
const mrzTesseract = path.join(mrzReaderRoot, 'public', 'tesseract');

for (const file of ['worker.min.js', 'tesseract-core-lstm.wasm.js', 'tesseract-core-simd-lstm.wasm.js', 'tesseract-core-simd.wasm.js', 'tesseract-core.wasm.js']) {
  const src = path.join(mrzTesseract, file);
  if (fs.existsSync(src)) {
    copyFile(src, path.join(publicTesseract, file));
  } else {
    copyFile(path.join(tesseractDist, file), path.join(publicTesseract, file));
  }
}

// Binari .wasm — da tesseract.js-core (web-mrz-reader non li include nel pacchetto npm)
for (const file of [
  'tesseract-core-lstm.wasm.js',
  'tesseract-core-lstm.wasm',
  'tesseract-core-simd-lstm.wasm.js',
  'tesseract-core-simd-lstm.wasm',
  'tesseract-core-simd.wasm.js',
  'tesseract-core-simd.wasm',
  'tesseract-core.wasm.js',
  'tesseract-core.wasm',
]) {
  const ok = copyFile(path.join(tesseractCore, file), path.join(publicTesseract, file));
  if (!ok && file.endsWith('.wasm.js')) {
    copyFile(path.join(mrzTesseract, file), path.join(publicTesseract, file));
  }
  if (!ok) console.warn(`  ⚠ missing ${file}`);
}

console.log('\nMRZ model:');
const mrzModelDest = path.join(publicModel, 'mrz.traineddata.gz');
const mrzModelSrc = path.join(mrzReaderRoot, 'public', 'model', 'mrz.traineddata.gz');

if (!fs.existsSync(mrzModelSrc)) {
  console.error('  ❌ web-mrz-reader model not found at', mrzModelSrc);
  process.exit(1);
}

const needsCopy = !isValidGzip(mrzModelDest);
if (needsCopy) {
  if (fs.existsSync(mrzModelDest)) {
    console.log('  ⚠ Modello esistente non valido (non è gzip) — sostituzione...');
  }
  copyFile(mrzModelSrc, mrzModelDest);
} else {
  console.log(`  ✓ mrz.traineddata.gz già valido (${Math.round(fs.statSync(mrzModelDest).size / 1024)} KB)`);
}

if (!isValidGzip(mrzModelDest)) {
  console.error('  ❌ Modello MRZ ancora non valido dopo la copia.');
  process.exit(1);
}

const wasmBinaries = [
  'tesseract-core-lstm.wasm',
  'tesseract-core-simd-lstm.wasm',
].filter((f) => fs.existsSync(path.join(publicTesseract, f)));

if (wasmBinaries.length === 0) {
  console.error('  ❌ Nessun binario .wasm copiato — OCR fallirà in produzione.');
  process.exit(1);
}

console.log(`  ✓ mrz.traineddata.gz (${Math.round(fs.statSync(mrzModelDest).size / 1024)} KB, gzip OK)`);
console.log(`  ✓ WASM binaries: ${wasmBinaries.join(', ')}`);
console.log('\nDone.');
