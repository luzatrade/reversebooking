/**
 * Diagnostica del rilevamento banda MRZ: stampa il profilo di densità
 * riga per riga e salva le immagini binarizzate per ispezione visiva.
 *
 *   npx tsx scripts/mrz-bench/probe-bands.ts <foto> [rotazione]
 */
import path from 'node:path';
import sharp from 'sharp';

const photo = process.argv[2]!;
const rot = Number.parseInt(process.argv[3] ?? '-90', 10) as 0 | 90 | -90;
const OUT = path.resolve('/tmp/mrz-probe');

async function main() {
  const source = await sharp(photo).rotate().png().toBuffer();
  const rotated = rot === 0 ? source : await sharp(source).rotate(rot).png().toBuffer();

  const pre = sharp(rotated).grayscale().normalize().resize({ width: 900, withoutEnlargement: true });
  const gray = await pre.clone().raw().toBuffer({ resolveWithObject: true });
  console.log(`grigio ${gray.info.width}x${gray.info.height}`);

  const stats = await sharp(rotated).grayscale().stats();
  const ch = stats.channels[0]!;
  console.log(`luminosità: min=${ch.min} max=${ch.max} media=${ch.mean.toFixed(1)} sd=${ch.stdev.toFixed(1)}`);

  await sharp(rotated).png().toFile(path.join(OUT, `rot${rot}-source.png`));

  for (const th of [160, 140, 120, 100, 80]) {
    const { data, info } = await pre
      .clone()
      .blur(0.5)
      .threshold(th)
      .raw()
      .toBuffer({ resolveWithObject: true });
    const w = info.width;
    const h = info.height;

    await pre.clone().blur(0.5).threshold(th).png().toFile(path.join(OUT, `rot${rot}-th${th}.png`));

    // Transizioni chiaro→scuro per riga: il tavolo scuro non ne produce,
    // il testo stampato ne produce molte e regolari.
    const trans: number[] = [];
    for (let y = 0; y < h; y++) {
      let t = 0;
      for (let x = 1; x < w; x++) {
        const a = data[y * w + x - 1]! < 128;
        const b = data[y * w + x]! < 128;
        if (a !== b) t++;
      }
      trans.push(t);
    }

    const maxT = Math.max(...trans);
    console.log(`\nth=${th}: transizioni max per riga = ${maxT}`);

    const step = Math.max(1, Math.floor(h / 50));
    let profile = '';
    for (let y = 0; y < h; y += step) {
      const t = Math.max(...trans.slice(y, y + step));
      profile += t < 8 ? '.' : t < 20 ? '-' : t < 40 ? '+' : '#';
    }
    console.log(`  ${profile}`);
    console.log('  (. niente  - poche  + testo  # testo denso tipo MRZ)');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
