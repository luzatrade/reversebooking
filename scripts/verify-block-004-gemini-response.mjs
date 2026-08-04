/**
 * QA campione blocco 004: parse risposta Gemini master card vs seed block-004.json
 * Usage: node scripts/verify-block-004-gemini-response.mjs --response data/gemini-responses/block-004-response-full.md
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs() {
  const i = process.argv.indexOf("--response");
  if (i === -1 || !process.argv[i + 1]) {
    console.error("Servono --response path/to/block-004-response-full.md");
    process.exit(1);
  }
  return { response: resolve(process.cwd(), process.argv[i + 1]) };
}

function normPhone(p) {
  if (!p) return "";
  return String(p).replace(/\D/g, "").replace(/^39/, "");
}

function phonesMatch(a, b) {
  const na = normPhone(a);
  const nb = normPhone(b);
  if (!na && !nb) return true;
  if (!na || !nb) return false;
  return na === nb || na.endsWith(nb) || nb.endsWith(na);
}

function parseGps(text) {
  const m = text.match(/Lat\.\s*([-\d.]+),\s*Long\.\s*([-\d.]+)/i);
  if (!m) return null;
  return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
}

function gpsClose(a, b, tol = 0.002) {
  if (a == null || b == null) return a == null && b == null;
  return Math.abs(a.lat - b.lat) <= tol && Math.abs(a.lng - b.lng) <= tol;
}

function parseHotels(text) {
  const sections = text.split(/^### \d+\.\s+/m).slice(1);
  return sections.map((section) => {
    const firstLine = section.trim().split("\n")[0].trim();
    const nome = firstLine.replace(/\s*\([^)]+\)\s*$/, "").trim();

    const slug = section.match(/\*\*Slug:\*\*\s*`([^`]+)`/)?.[1]?.trim() ?? null;
    const metaTitle = section.match(/\*\*Meta Title:\*\*\s*(.+)/)?.[1]?.trim() ?? null;
    const metaDesc = section.match(/\*\*Meta Description:\*\*\s*(.+)/)?.[1]?.trim() ?? null;
    const h1 = section.match(/\*\*H1:\*\*\s*(.+)/)?.[1]?.trim() ?? null;

    const laScenaBlock = section.match(/\*\*La Scena:\*\*\s*([\s\S]*?)(?=\n\*\*Property Overview\*\*)/)?.[1]?.trim() ?? "";
    const propertyOverview = section.match(/\*\*Property Overview\*\*\s*([\s\S]*?)(?=\n\*\*Key Amenities\*\*)/)?.[1]?.trim() ?? "";
    const amenitiesBlock = section.match(/\*\*Key Amenities\*\*\s*([\s\S]*?)(?=\n\*\*Location)/)?.[1]?.trim() ?? "";
    const locationBlock = section.match(/\*\*Location[^*]*\*\*\s*([\s\S]*?)(?=\n---|\n### |$)/)?.[1]?.trim() ?? "";

    const indirizzo = locationBlock.match(/\*\*Indirizzo:\*\*\s*(.+)/)?.[1]?.trim() ?? null;
    const telefono = locationBlock.match(/\*\*Telefono:\*\*\s*(.+)/)?.[1]?.trim() ?? "";
    const email = locationBlock.match(/\*\*Email:\*\*\s*(.*)$/m)?.[1]?.trim() ?? "";
    const gps = parseGps(locationBlock);

    const amenities = [...amenitiesBlock.matchAll(/^\*\s+(.+)$/gm)].map((m) => m[1].trim());
    const attractions = [...locationBlock.matchAll(/^\*\s+(?!(\*\*Indirizzo|\*\*Coordinate|\*\*Telefono|\*\*Email))(.+)$/gm)].map(
      (m) => m[2].trim()
    );

    return {
      nome,
      slug,
      metaTitle,
      metaDesc,
      h1,
      laScenaBlock,
      propertyOverview,
      amenities,
      attractions,
      indirizzo,
      telefono: telefono.replace(/\s+$/, ""),
      email,
      gps,
    };
  });
}

function qaHotel(gemini, seed, index) {
  const issues = [];
  const warnings = [];

  if (gemini.slug !== seed.slug) {
    issues.push(`slug mismatch: gemini="${gemini.slug}" seed="${seed.slug}"`);
  }

  if (seed.phone && !phonesMatch(gemini.telefono, seed.phone)) {
    issues.push(`phone mismatch: gemini="${gemini.telefono}" seed="${seed.phone}"`);
  }
  if (!seed.phone && gemini.telefono && gemini.telefono !== "—" && gemini.telefono !== "-") {
    warnings.push(`phone added by Gemini (seed empty): "${gemini.telefono}"`);
  }

  const seedGps = seed.lat != null ? { lat: seed.lat, lng: seed.lng } : null;
  if (seedGps && gemini.gps && !gpsClose(gemini.gps, seedGps)) {
    const dlat = Math.abs(gemini.gps.lat - seedGps.lat);
    const dlng = Math.abs(gemini.gps.lng - seedGps.lng);
    if (dlat > 0.01 || dlng > 0.01) {
      issues.push(
        `GPS far from seed: gemini=${gemini.gps.lat},${gemini.gps.lng} seed=${seedGps.lat},${seedGps.lng}`
      );
    } else {
      warnings.push(`GPS minor drift: gemini=${gemini.gps.lat},${gemini.gps.lng} seed=${seedGps.lat},${seedGps.lng}`);
    }
  }

  if (!gemini.metaDesc?.includes("HotelsDrop.com")) {
    issues.push("meta description missing HotelsDrop.com");
  }
  if (gemini.metaDesc && gemini.metaDesc.length > 165) {
    warnings.push(`meta description long (${gemini.metaDesc.length} chars)`);
  }
  if (!gemini.laScenaBlock || gemini.laScenaBlock.length < 40) {
    issues.push("La Scena too short or missing");
  }
  if (!/[àèéìòù]|Immerso|Ti |Goditi|Sentirai|Respirerai|Assaporerai/i.test(gemini.laScenaBlock)) {
    warnings.push("La Scena may not be Italian editorial tone");
  }
  if (!gemini.propertyOverview || gemini.propertyOverview.length < 80) {
    issues.push("Property Overview too short or missing");
  }
  if (/àèéìòù|nel cuore|immerso/i.test(gemini.propertyOverview)) {
    warnings.push("Property Overview may contain Italian");
  }
  if (gemini.amenities.length < 4) {
    issues.push(`only ${gemini.amenities.length} amenities (expected 5)`);
  }
  if (gemini.attractions.length < 3) {
    issues.push(`only ${gemini.attractions.length} attractions (expected 4+)`);
  }
  if (gemini.email && gemini.email !== "" && gemini.email !== "—") {
    warnings.push(`email provided by Gemini: "${gemini.email}" — verify before import`);
  }

  return { index, nome: seed.nome, slug: seed.slug, issues, warnings };
}

function main() {
  const { response } = parseArgs();
  const text = readFileSync(response, "utf8");
  const block = JSON.parse(readFileSync(resolve(__dirname, "../data/gemini-master-cards/block-004.json"), "utf8"));
  const seeds = block.hotels;

  const parsed = parseHotels(text);
  console.log(`Parsed ${parsed.length} hotels from Gemini response\n`);

  if (parsed.length !== seeds.length) {
    console.error(`ERRORE: parsed ${parsed.length} != seed ${seeds.length}`);
    process.exit(1);
  }

  const rows = parsed.map((g, i) => qaHotel(g, seeds[i], seeds[i].index));
  const withIssues = rows.filter((r) => r.issues.length);
  const withWarnings = rows.filter((r) => r.warnings.length);

  const summary = {
    total: rows.length,
    issues_count: withIssues.length,
    warnings_count: withWarnings.length,
    phones_all_blank_emails: parsed.every((p) => !p.email?.trim()),
    meta_hotelsdrop_ok: parsed.filter((p) => p.metaDesc?.includes("HotelsDrop.com")).length,
    amenities_avg: (parsed.reduce((s, p) => s + p.amenities.length, 0) / parsed.length).toFixed(1),
  };

  console.log("=== SUMMARY ===");
  console.log(JSON.stringify(summary, null, 2));
  console.log();

  if (withIssues.length) {
    console.log(`=== ISSUES (${withIssues.length}) ===`);
    for (const r of withIssues) {
      console.log(`#${r.index} ${r.slug}`);
      for (const i of r.issues) console.log(`  ✗ ${i}`);
    }
    console.log();
  }

  if (withWarnings.length) {
    console.log(`=== WARNINGS (${withWarnings.length}) ===`);
    for (const r of withWarnings.slice(0, 20)) {
      console.log(`#${r.index} ${r.slug}`);
      for (const w of r.warnings) console.log(`  ⚠ ${w}`);
    }
    if (withWarnings.length > 20) console.log(`  ... +${withWarnings.length - 20} more`);
    console.log();
  }

  const outPath = resolve(__dirname, "../data/gemini-responses/block-004-qa-report.json");
  writeFileSync(outPath, JSON.stringify({ summary, rows, parsed: parsed.map((p) => ({ slug: p.slug, telefono: p.telefono, gps: p.gps })) }, null, 2) + "\n");
  console.log(`Report → ${outPath}`);

  process.exit(withIssues.length ? 1 : 0);
}

main();
