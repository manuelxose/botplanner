import test from 'node:test';
import assert from 'node:assert/strict';
import { discoverTrips, parseTravelQuery } from '../src/application/discovery-engine.js';

test('discovery returns ordered, explicitly mocked candidates', () => {
  const trips = discoverTrips(parseTravelQuery({ availabilityStart: '2026-10-03', availabilityEnd: '2026-10-06', minDays: 2, maxDays: 2 }));
  assert.ok(trips.length > 0);
  assert.equal(trips[0].status, 'MOCK');
  assert.ok(trips.every((trip) => trip.cost.total > 0));
});
