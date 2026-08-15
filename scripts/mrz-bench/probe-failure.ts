/**
 * Diagnostica learning per un singolo campione del corpus.
 *
 *   npx tsx scripts/mrz-bench/probe-failure.ts gronchi-1
 *   npx tsx scripts/mrz-bench/probe-failure.ts --all-failed
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import {
  createMrzWorker,
  probeSample,
  scorePerField,
  ENGINE_ROOT,
} from './engine-lib.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MANIFEST = path.join(ENGINE_ROOT, 'data/mrz-bench/corpus-manifest.json');
const TAGS_PATH = path.join(ENGINE_ROOT, 'data/mrz-bench/failure-tags.json');

interface Sample {
  id?: string;
  label: string;
  photo: string;
  format?: string;
  truth: unknown;
}

function loadTags(): Record<string, string> {
  if (!fs.existsSync(TAGS_PATH)) return {};
  return JSON.parse(fs.readFileSync(TAGS_PATH, 'utf8')) as Record<string, string>;
}

function saveTag(id: string, tag: string) {
  const tags = loadTags();
  tags[id] = tag;
  fs.mkdirSync(path.dirname(TAGS_PATH), { recursive: true });
  fs.writeFileSync(TAGS_PATH, JSON.stringify(tags, null, 2) + '\n');
}

function inferTag(
  hasTruth: boolean,
  picked: ReturnType<typeof probeSample> extends Promise<infer R> ? R['picked'] : never,
  bandCount: number,
): string {
  if (!picked) {
    if (bandCount === 0) return 'no_banda';
    return 'banda_ok_ocr_ko';
  }
  if (!hasTruth) return 'scoperta';
  if (picked.namesUncertain) return 'nomi_solo';
  return 'tutto_ok';
}

async function probeOne(sample: Sample, worker: Awaited<ReturnType<typeof createMrzWorker>>) {
  const id = sample.id ?? path.basename(sample.photo, path.extname(sample.photo));
  console.log(`\n${'='.repeat(72)}`);
  console.log(`# ${sample.label} (${id})`);
  console.log(`  foto: ${sample.photo}`);
  console.log(`  formato: ${sample.format ?? 'TD1'}`);

  const source = await sharp(sample.photo).rotate().png().toBuffer();
  const { bands, bandResults, picked } = await probeSample(source, worker, {
    deskew: true,
    formatHint: sample.format,
    expectItalian: sample.format !== 'TD3',
  });

  console.log(`\n  bande rilevate: ${bands.length}`);
  for (const b of bands.slice(0, 8)) {
    console.log(
      `    score=${b.score.toFixed(1)} lineCount=${b.lineCount} view=${b.view} ` +
        `rel t=${b.top.toFixed(2)} h=${b.height.toFixed(2)} w=${b.width.toFixed(2)}`,
    );
  }

  for (const br of bandResults) {
    console.log(`\n  --- banda #${br.bandIndex} ${br.px.width}x${br.px.height}px (${br.ocrCalls} OCR) ---`);
    for (const r of br.td1) {
      const sc = scorePerField(r, { expectItalian: sample.format !== 'TD3', bandScore: br.band.score, lineCount: 3 });
      console.log(
        `    TD1 score=${sc} doc=${r.data.documentNumber} ${r.docOk ? '✓' : '✗'} ` +
          `birth=${r.data.birthDate} ${r.birthOk ? '✓' : '✗'} nat=${r.data.nationality} ` +
          `${r.data.surname} / ${r.data.givenNames}`,
      );
    }
    for (const r of br.td3) {
      const sc = scorePerField(r, { bandScore: br.band.score, lineCount: 2 });
      console.log(
        `    TD3 score=${sc} doc=${r.data.documentNumber} ${r.docOk ? '✓' : '✗'} ` +
          `birth=${r.data.birthDate} ${r.birthOk ? '✓' : '✗'} nat=${r.data.nationality} ` +
          `${r.data.surname} / ${r.data.givenNames}`,
      );
    }
  }

  if (picked) {
    const d = picked.result.data;
    console.log(`\n  >>> SCELTA FINALE score=${picked.score.toFixed(1)} namesUncertain=${picked.namesUncertain}`);
    console.log(
      `      ${d.surname} / ${d.givenNames} / ${d.documentNumber} / ${d.birthDate} / ${d.sex} / ${d.nationality}`,
    );
    console.log(`      raw MRZ:\n${d.rawMrz.split('\n').map((l) => '        ' + l).join('\n')}`);
  } else {
    console.log('\n  >>> NESSUNA LETTURA ACCETTATA');
  }

  const tag = inferTag(Boolean(sample.truth), picked, bands.length);
  saveTag(id, tag);
  console.log(`\n  tag auto: ${tag}`);
}

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error('Usage: probe-failure.ts <sample-id> | --all-failed');
    process.exit(1);
  }

  const samples = JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) as Sample[];
  const worker = await createMrzWorker();

  if (arg === '--all-failed') {
    const tags = loadTags();
    const failed = samples.filter((s) => {
      const id = s.id ?? path.basename(s.photo, path.extname(s.photo));
      const t = tags[id];
      return t && t !== 'tutto_ok' && t !== 'scoperta';
    });
    for (const s of failed.length ? failed : samples.filter((s) => s.truth)) {
      await probeOne(s, worker);
    }
  } else {
    const sample = samples.find(
      (s) =>
        s.id === arg ||
        s.label.toLowerCase().includes(arg.toLowerCase()) ||
        s.photo.includes(arg),
    );
    if (!sample) {
      console.error('Campione non trovato:', arg);
      process.exit(1);
    }
    await probeOne(sample, worker);
  }

  await worker.terminate();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
