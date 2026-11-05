import assert from 'node:assert/strict';
import {
  mrzCheckDigit,
  validateItalianCieDocumentNumber,
} from '../lib/check-in/mrz/cieCheckDigit';

console.log('=== CIE check digit (ICAO 9303) ===');

assert.equal(mrzCheckDigit('CA74219GP'), '2');
assert.equal(mrzCheckDigit('CB19477AA'), '9');
assert.equal(mrzCheckDigit('CA32060FA'), '2');

assert.equal(validateItalianCieDocumentNumber('CA74219GP2'), true);
assert.equal(validateItalianCieDocumentNumber('CB19477AA9'), true);
assert.equal(validateItalianCieDocumentNumber('CA32060FA2'), true);
assert.equal(validateItalianCieDocumentNumber('CA74219GP3'), false);
assert.equal(validateItalianCieDocumentNumber('INVALID'), false);

console.log('PASS verify-cie-check-digit');
