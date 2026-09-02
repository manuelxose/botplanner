import test from 'node:test';
import assert from 'node:assert/strict';
import { generateDateCombinations } from '../src/application/date-engine.js';

test('generates every valid duration inside the availability window', () => {
  const result = generateDateCombinations('2026-10-03', '2026-10-06', 2, 3);
  assert.deepEqual(result.map(({ departureDate, returnDate }) => [departureDate, returnDate]), [
    ['2026-10-03', '2026-10-05'], ['2026-10-03', '2026-10-06'], ['2026-10-04', '2026-10-06'],
  ]);
});
