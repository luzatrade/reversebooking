import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  searchComuni,
  searchIssuePlaces,
  searchNations,
  type ComuneEntry,
  type NationEntry,
} from '../lib/check-in/lookup/alloggiatiTables';

const sample: ComuneEntry[] = Array.from({ length: 12_000 }, (_, i) => ({
  code: String(i).padStart(9, '0'),
  name: i === 500 ? 'ROMA' : `COMUNE${i}`,
  province: 'XX',
  active: true,
}));

assert.deepEqual(searchComuni(sample, ''), []);
assert.equal(searchComuni(sample, 'ROMA').length, 1);
assert.equal(searchComuni(sample, 'ROMA')[0]?.name, 'ROMA');
assert.ok(searchComuni(sample, 'COMUNE1').length <= 20);

const comuni = JSON.parse(readFileSync('public/data/comuni.json', 'utf8')) as ComuneEntry[];
const nations = JSON.parse(readFileSync('public/data/nations.json', 'utf8')) as NationEntry[];

assert.equal(searchComuni(comuni, 'ROMA')[0]?.name, 'ROMA');
assert.equal(searchComuni(comuni, 'MILANO')[0]?.name, 'MILANO');

// Nations in Alloggiati table often lack iso3 — search must not throw.
assert.doesNotThrow(() => searchNations(nations, 'ITAL'));
assert.doesNotThrow(() => searchIssuePlaces(comuni, nations, 'ROMA'));
assert.ok(searchIssuePlaces(comuni, nations, 'ROMA').some((p) => p.label === 'ROMA'));

console.log('verify-search-comuni: OK');
