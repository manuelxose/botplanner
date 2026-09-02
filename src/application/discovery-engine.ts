import type { TravelQuery, TripCandidate, DateCombination } from '../domain/travel-query.js';
import type { FlightQuote, AccommodationQuote } from './providers.js';
import { generateDateCombinations } from './date-engine.js';

const mockSource = { provider: 'fixture-flights', retrievedAt: new Date().toISOString(), status: 'MOCK' as const, confidence: 0.1 };
const destinations: Array<FlightQuote & { type: TripCandidate['type']; title: string }> = [
  { destination: 'Lisboa', country: 'Portugal', price: 89, durationMinutes: 75, type: 'CITY', title: 'Lisboa gastronómica', source: mockSource },
  { destination: 'Istanbul', country: 'Turquía', price: 215, durationMinutes: 290, type: 'CITY', title: 'Istanbul histórica', source: mockSource },
  { destination: 'Azores', country: 'Portugal', price: 155, durationMinutes: 150, type: 'NATURE', title: 'Azores volcánicas', source: mockSource },
  { destination: 'Marrakech', country: 'Marruecos', price: 175, durationMinutes: 190, type: 'ROADTRIP', title: 'Marrakech y Atlas', source: mockSource },
];

export function discoverTrips(query: TravelQuery): TripCandidate[] {
  const dates = generateDateCombinations(query.availabilityStart, query.availabilityEnd, query.minDays, query.maxDays);
  const wanted = new Set((query.interests ?? []).map((x) => x.toLowerCase()));
  return dates.flatMap((date) => destinations.filter((d) => !query.region || d.country.toLowerCase().includes(query.region.toLowerCase()) || d.destination.toLowerCase().includes(query.region.toLowerCase()))
    .filter((d) => !query.excludedDestinations?.some((x) => x.toLowerCase() === d.destination.toLowerCase()))
    .map((d) => {
      const accommodation: AccommodationQuote = { nightly: d.type === 'CITY' ? 72 : 58, source: { provider: 'fixture-accommodation', retrievedAt: new Date().toISOString(), status: 'MOCK', confidence: 0.1 } };
      const cost = { flights: d.price * query.travellers, accommodation: accommodation.nightly * date.nights, transport: d.type === 'ROADTRIP' ? 120 : 35, access: 0, total: d.price * query.travellers + accommodation.nightly * date.nights + (d.type === 'ROADTRIP' ? 120 : 35), currency: 'EUR' as const };
      const score: number = Math.max(0, Math.round(100 - cost.total / 15 - d.durationMinutes / 20 + (wanted.has(d.type.toLowerCase()) ? 12 : 0)));
      return { id: `${d.destination}-${date.departureDate}`, destination: d.destination, country: d.country, dates: date, type: d.type, title: d.title, cost, score, rationale: ['Precio y disponibilidad son fixtures de desarrollo', `${d.durationMinutes} minutos de vuelo`, d.type === 'ROADTRIP' ? 'Incluye transporte terrestre estimado' : 'Alternativa sin coche'], provider: d.source.provider, retrievedAt: d.source.retrievedAt, status: 'MOCK' as const, confidence: 0.1, bookingLinks: [] };
    })).sort((a, b) => b.score - a.score);
}

export function parseTravelQuery(input: Partial<TravelQuery>): TravelQuery {
  const query = { mode: 'DISCOVER' as const, travellers: 1, origin: 'Vigo', car: 'IF_WORTH_IT' as const, minDays: 2, maxDays: 6, ...input } as TravelQuery;
  if (!query.availabilityStart || !query.availabilityEnd) throw new Error('availabilityStart y availabilityEnd son obligatorias');
  if (query.travellers < 1 || query.travellers > 12) throw new Error('travellers debe estar entre 1 y 12');
  return query;
}
