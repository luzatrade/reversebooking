#!/usr/bin/env node
/**
 * Scarica tabelle ufficiali Alloggiati Web e genera JSON in public/data/.
 *
 *   node scripts/import-alloggiati-tables.mjs
 *   node scripts/import-alloggiati-tables.mjs --comuni-only
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'public', 'data');

const BASE = 'https://alloggiatiweb.poliziadistato.it/portalealloggiati/ashx/Download.ashx';

/** ISO-3 per preffill MRZ — mapping per nome ufficiale Alloggiati */
const MRZ_ISO3_BY_NAME = {
  ITALIA: 'ITA',
  FRANCIA: 'FRA',
  GERMANIA: 'DEU',
  'REGNO UNITO': 'GBR',
  SPAGNA: 'ESP',
  BELGIO: 'BEL',
  'PAESI BASSI': 'NLD',
  SVIZZERA: 'CHE',
  AUSTRIA: 'AUT',
  PORTOGALLO: 'PRT',
  GRECIA: 'GRC',
  POLONIA: 'POL',
  ROMANIA: 'ROU',
  UNGHERIA: 'HUN',
  'REPUBBLICA CECA': 'CZE',
  SLOVACCHIA: 'SVK',
  CROAZIA: 'HRV',
  SLOVENIA: 'SVN',
  BULGARIA: 'BGR',
  DANIMARCA: 'DNK',
  SVEZIA: 'SWE',
  NORVEGIA: 'NOR',
  FINLANDIA: 'FIN',
  IRLANDA: 'IRL',
  RUSSIA: 'RUS',
  UCRAINA: 'UKR',
  TURCHIA: 'TUR',
  'STATI UNITI': 'USA',
  'STATI UNITI D AMERICA': 'USA',
  CANADA: 'CAN',
  BRASILE: 'BRA',
  ARGENTINA: 'ARG',
  MESSICO: 'MEX',
  CINA: 'CHN',
  GIAPPONE: 'JPN',
  INDIA: 'IND',
  AUSTRALIA: 'AUS',
  'COREA DEL SUD': 'KOR',
  EGITTO: 'EGY',
  'SUD AFRICA': 'ZAF',
  MAROCCO: 'MAR',
  TUNISIA: 'TUN',
  NIGERIA: 'NGA',
  'EMIRATI ARABI UNITI': 'ARE',
  'BOSNIA ERZEGOVINA': 'BIH',
};

const ISO3_ALIASES = MRZ_ISO3_BY_NAME;

function normalizeName(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().trim();
}

async function downloadTable(id, name) {
  const url = `${BASE}?ID=${id}&N=${name}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${name}: ${res.status}`);
  return res.text();
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const header = lines.shift()?.split(',') ?? [];
  return lines
    .filter(Boolean)
    .map((line) => {
      const parts = [];
      let cur = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') inQuotes = !inQuotes;
        else if (ch === ',' && !inQuotes) {
          parts.push(cur);
          cur = '';
        } else cur += ch;
      }
      parts.push(cur);
      const row = {};
      header.forEach((h, i) => {
        row[h.trim()] = (parts[i] ?? '').trim();
      });
      return row;
    });
}

async function importComuni() {
  const text = await downloadTable(0, 'COMUNI');
  const rows = parseCsv(text);
  const comuni = rows.map((r) => ({
    code: r.Codice,
    name: r.Descrizione,
    province: r.Provincia,
    active: !r.DataFineVal,
  }));
  comuni.sort((a, b) => {
    if (a.active !== b.active) return a.active ? -1 : 1;
    return a.name.localeCompare(b.name, 'it');
  });
  const out = path.join(DATA_DIR, 'comuni.json');
  fs.writeFileSync(out, JSON.stringify(comuni));
  console.log(`comuni.json → ${comuni.length} righe (${comuni.filter((c) => c.active).length} attivi)`);
}

async function importNations() {
  const text = await downloadTable(1, 'STATI');
  const rows = parseCsv(text);
  const nations = rows
    .filter((r) => !r.DataFineVal)
    .map((r) => {
      const iso3 = ISO3_ALIASES[normalizeName(r.Descrizione)] ?? '';
      return {
        code: r.Codice,
        name: r.Descrizione,
        ...(iso3 ? { iso3 } : {}),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'it'));

  const out = path.join(DATA_DIR, 'nations.json');
  fs.writeFileSync(out, JSON.stringify(nations, null, 2));
  const withIso = nations.filter((n) => n.iso3).length;
  console.log(`nations.json → ${nations.length} righe (${withIso} con ISO-3)`);
}

async function importDocumentTypes() {
  const text = await downloadTable(2, 'DOCUMENTI');
  const rows = parseCsv(text);
  const docs = rows.map((r) => ({ code: r.Codice, name: r.Descrizione }));
  const out = path.join(DATA_DIR, 'document-types.json');
  fs.writeFileSync(out, JSON.stringify(docs, null, 2));
  console.log(`document-types.json → ${docs.length} righe`);
}

const comuniOnly = process.argv.includes('--comuni-only');

await importComuni();
if (!comuniOnly) {
  await importNations();
  await importDocumentTypes();
}

console.log('Done.');
