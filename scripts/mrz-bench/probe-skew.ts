/**
 * Diagnostica della stima dell'inclinazione su una banda MRZ ritagliata.
 *
 *   npx tsx scripts/mrz-bench/probe-skew.ts <foto> <rotBase> <tiltSintetico>
 *
 * Ogni angolo candidato subisce ESATTAMENTE le stesse operazioni (rotazione,
 * ritaglio centrale, ridimensionamento, soglia): confrontare un'immagine
 * ricampionata con una intatta premia sistematicamente l'angolo 0.
 */
import sharp from 'sharp';

const photo = process.argv[2]!;
const rotBase = Number.parseInt(process.argv[3] ?? '-90', 10);
const tilt = Number.parseFloat(process.argv[4] ?? '2');

async function rowTransitions(buf: Buffer, angle: number): Promise<number[]> {
  // Anche a 0° si ruota di un'inezia, così il ricampionamento è identico per tutti
  const rotated = await sharp(buf)
    .rotate(angle === 0 ? 0.001 : angle, { background: '#ffffff' })
    .png()
    .toBuffer();
  const m = await sharp(rotated).metadata();
  const w = m.width!;
  const h = m.height!;

  // Ritaglio centrale: esclude il bordo bianco introdotto dalla rotazione
  const { data, info } = await sharp(rotated)
    .extract({
      left: Math.floor(w * 0.06),
      top: Math.floor(h * 0.12),
      width: Math.floor(w * 0.88),
      height: Math.floor(h * 0.76),
    })
    .grayscale()
    .normalize()
    .resize({ width: 700, height: 200, fit: 'fill' })
    .blur(0.4)
    .threshold(140)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const trans: number[] = [];
  for (let y = 0; y < info.height; y++) {
    let t = 0;
    const row = y * info.width;
    for (let x = 1; x < info.width; x++) {
      if ((data[row + x - 1]! < 128) !== (data[row + x]! < 128)) t++;
    }
    trans.push(t);
  }
  return trans;
}

function metricSquares(t: number[]): number {
  return t.reduce((a, b) => a + b * b, 0);
}

function metricVariance(t: number[]): number {
  const mean = t.reduce((a, b) => a + b, 0) / t.length;
  return t.reduce((a, b) => a + (b - mean) ** 2, 0) / t.length;
}

/** Gradiente del profilo: alto quando le righe hanno bordi netti */
function metricGradient(t: number[]): number {
  let s = 0;
  for (let i = 1; i < t.length; i++) s += (t[i]! - t[i - 1]!) ** 2;
  return s;
}

async function main() {
  let src = await sharp(photo).rotate().png().toBuffer();
  if (tilt !== 0) {
    src = await sharp(src).rotate(tilt, { background: '#808080' }).png().toBuffer();
  }
  const view = await sharp(src).rotate(rotBase).png().toBuffer();
  const meta = await sharp(view).metadata();
  const w = meta.width!;
  const h = meta.height!;

  const top = rotBase === -90 ? 0.58 : 0.05;
  const crop = await sharp(view)
    .extract({ left: 0, top: Math.floor(h * top), width: w, height: Math.floor(h * 0.34) })
    .png()
    .toBuffer();

  console.log(`banda ${w}x${Math.floor(h * 0.34)} · inclinazione sintetica ${tilt}°`);
  console.log('angolo   quadrati      varianza      gradiente');

  const rows: Array<[number, number, number, number]> = [];
  for (let a = -8; a <= 8; a++) {
    const t = await rowTransitions(crop, a);
    rows.push([a, metricSquares(t), metricVariance(t), metricGradient(t)]);
  }

  const best = (i: 1 | 2 | 3) => rows.reduce((m, r) => (r[i] > m[i] ? r : m))[0];
  const bSq = best(1);
  const bVar = best(2);
  const bGr = best(3);

  for (const [a, sq, va, gr] of rows) {
    console.log(
      `${String(a).padStart(4)}°  ${sq.toExponential(2)}${a === bSq ? ' *' : '  '}   ` +
        `${va.toExponential(2)}${a === bVar ? ' *' : '  '}   ` +
        `${gr.toExponential(2)}${a === bGr ? ' *' : '  '}`,
    );
  }

  console.log(`\nAtteso: massimo su ${-tilt}°`);
  console.log(`Trovato: quadrati ${bSq}° · varianza ${bVar}° · gradiente ${bGr}°`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
