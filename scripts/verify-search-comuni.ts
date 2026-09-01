import assert from 'node:assert/strict';
import { searchComuni, type ComuneEntry } from '../lib/check-in/lookup/alloggiatiTables';

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

console.log('verify-search-comuni: OK');
