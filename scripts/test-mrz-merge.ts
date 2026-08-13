/**
 * Test end-to-end MRZ sulla foto CIE (stessa logica di ocrWorker + parseMrz).
 * Uso: npx tsx scripts/test-mrz-merge.ts [path-immagine]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { createWorker, PSM } from 'tesseract.js';
import { parse } from 'mrz';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const imagePath =
  process.argv[2] ??
  '/Users/lucianozavaglia/.cursor/projects/Users-lucianozavaglia-Desktop-reverseboking/assets/PHOTO-2026-08-13-22-13-39-26f4505f-e315-4c2e-b5d4-f909411dce96.png';

const ITALIAN_CIE_DOC = /^[A-Z]{2}\d{5}[A-Z]{2}\d$/;
const WL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<';

type LineIndex = 0 | 1 | 2;

function padLine(line: string, len = 30): string {
  const c = line.toUpperCase().replace(/\s+/g, '').replace(/[^A-Z0-9<]/g, '');
  return c.length >= len ? c.slice(0, len) : c.padEnd(len, '<');
}

function scoreLine(line: string, i: LineIndex): number {
  const l = padLine(line);
  if (i === 0) {
    return (/^[PIAC]/.test(l) ? 4 : 0) + (l.slice(2, 5) === 'ITA' ? 4 : 0) + (/^[PIAC]<ITA[A-Z0-9]{9}/.test(l) ? 6 : 0);
  }
  if (i === 1) {
    return (/^\d{6}\d[MFHX<]\d\d{6}[A-Z]{3}/.test(l) ? 10 : 0) + (l.slice(15, 18) === 'ITA' ? 4 : 0);
  }
  return (/[A-Z]{3,}<<[A-Z]{2,}/.test(l) ? 10 : 0) + (l.includes('<<') ? 2 : 0);
}

function classifyLine(line: string): LineIndex | null {
  const l = padLine(line);
  if (/[A-Z]{3,}<<[A-Z]{2,}/.test(l) && !/^\d/.test(l)) return 2;
  if (/^\d{6}\d[MFHX<]\d/.test(l)) return 1;
  if (/^[PIAC]/.test(l) || (l.includes('ITA') && /[A-Z0-9]{6,}/.test(l.slice(5)))) return 0;
  const ranked = ([0, 1, 2] as LineIndex[]).map((i) => ({ i, s: scoreLine(l, i) })).sort((a, b) => b.s - a.s)[0]!;
  return ranked.s >= 6 ? ranked.i : null;
}

function fixSex(line: string): string {
  const l = padLine(line);
  if (l[7] === 'H' || l[7] === 'N') return l.slice(0, 7) + 'M' + l.slice(8);
  return l;
}

function extractTd1Doc(rawMrz: string): string | null {
  const line1 = rawMrz.split(/\r?\n/)[0];
  if (!line1) return null;
  const l = padLine(line1);
  const num = l.slice(5, 15).replace(/<+$/, '');
  return /^[A-Z0-9]{8,10}$/.test(num) ? num : null;
}

function formatMrzDate(mrzDate: string): string {
  if (!/^\d{6}$/.test(mrzDate)) return '';
  const yy = parseInt(mrzDate.slice(0, 2), 10);
  const mm = mrzDate.slice(2, 4);
  const dd = mrzDate.slice(4, 6);
  return `${yy >= 30 ? 1900 : 2000}${yy}-${mm}-${dd}`;
}

function assemble(pool: Array<{ line: string; lineIndex: LineIndex }>) {
  const best = ['', '', ''];
  const bs = [0, 0, 0];
  for (const { line, lineIndex } of pool) {
    const sc = scoreLine(line, lineIndex);
    if (sc > bs[lineIndex]) {
      bs[lineIndex] = sc;
      best[lineIndex] = lineIndex === 1 ? fixSex(line) : line;
    }
  }
  if (bs[0]! < 8 || bs[1]! < 8 || bs[2]! < 8) return null;

  const sized = best.map((l) => padLine(l));
  const rawMrz = sized.join('\n');
  let mrzValid = false;
  let data: Record<string, string> = {};

  try {
    const r = parse(sized, { autocorrect: true });
    mrzValid = r.valid === true;
    const doc = extractTd1Doc(rawMrz) ?? r.fields.documentNumber ?? '';
    data = {
      documentNumber: doc + (doc && !doc.endsWith(r.fields.documentNumberCheckDigit ?? '') && r.fields.documentNumberCheckDigit ? r.fields.documentNumberCheckDigit : doc === r.fields.documentNumber ? (r.fields.documentNumberCheckDigit ?? '') : ''),
      surname: r.fields.lastName ?? '',
      givenNames: (r.fields.firstName ?? '').replace(/</g, ' ').trim(),
      birthDate: formatMrzDate(r.fields.birthDate ?? ''),
      sex: r.fields.sex === 'female' ? 'F' : r.fields.sex === 'male' ? 'M' : 'X',
      nationality: r.fields.nationality ?? 'ITA',
    };
    if (extractTd1Doc(rawMrz)) data.documentNumber = extractTd1Doc(rawMrz)!;
  } catch {
    return null;
  }

  const strong =
    mrzValid &&
    ITALIAN_CIE_DOC.test(data.documentNumber ?? '') &&
    (data.surname?.length ?? 0) >= 2 &&
    (data.givenNames?.length ?? 0) >= 2 &&
    /^\d{4}-\d{2}-\d{2}$/.test(data.birthDate ?? '');

  return { rawMrz, mrzValid, strong, data };
}

async function getLines(worker: Awaited<ReturnType<typeof createWorker>>, buf: Buffer): Promise<string[]> {
  buf = await sharp(buf)
    .resize({ width: 2000, kernel: 'nearest' })
    .grayscale()
    .linear(1.45, -(128 * 0.45))
    .png()
    .toBuffer();
  const meta = await sharp(buf).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  const lh = Math.max(1, Math.floor(h / 3));
  const lines: string[] = [];
  for (let i = 0; i < 3; i++) {
    const slice = await sharp(buf)
      .extract({ left: 0, top: i * lh, width: w, height: lh })
      .png()
      .toBuffer();
    await worker.setParameters({
      tessedit_char_whitelist: WL,
      tessedit_pageseg_mode: PSM.SINGLE_LINE,
      user_defined_dpi: '400',
    });
    const { data } = await worker.recognize(slice);
    lines.push(padLine(data.text ?? ''));
  }
  return lines;
}

async function main() {
  if (!fs.existsSync(imagePath)) {
    console.error('File non trovato:', imagePath);
    process.exit(1);
  }

  console.log('Foto:', imagePath);
  const source = await sharp(imagePath).rotate().png().toBuffer();
  const meta = await sharp(source).metadata();
  console.log(`Size: ${meta.width}x${meta.height}`);

  const worker = await createWorker('mrz', 1, {
    langPath: path.join(ROOT, 'public/model'),
    corePath: path.join(ROOT, 'public/tesseract'),
    gzip: true,
  });

  const pool: Array<{ line: string; lineIndex: LineIndex }> = [];

  for (const deg of [90, -90, 0]) {
    const base = deg === 0 ? source : await sharp(source).rotate(deg).png().toBuffer();
    const m = await sharp(base).metadata();
    const w = m.width ?? 0;
    const h = m.height ?? 0;

    for (const top of [0.74, 0.68, 0.62, 0.55]) {
      const crop = await sharp(base)
        .extract({
          left: Math.floor(w * 0.01),
          top: Math.floor(h * top),
          width: Math.floor(w * 0.98),
          height: Math.floor(h * (0.995 - top)),
        })
        .png()
        .toBuffer();

      for (const line of await getLines(worker, crop)) {
        const idx = classifyLine(line);
        if (idx !== null && scoreLine(line, idx) >= 6) {
          pool.push({ line, lineIndex: idx });
        }
      }
    }
  }

  const result = assemble(pool);

  console.log('\n--- MRZ merge ---');
  if (result) {
    console.log(result.rawMrz.replace(/\n/g, ' | '));
    console.log('\n--- RISULTATO ---');
    console.log(JSON.stringify({ ...result.data, mrzValid: result.mrzValid, accepted: result.strong }, null, 2));
  } else {
    console.log('NESSUN RISULTATO');
  }

  console.log('\n--- ATTESO ---');
  console.log('ZAVAGLIA / LUCIANO / CB19477AA9 / 1983-05-26 / M / mrzValid=true');

  await worker.terminate();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
