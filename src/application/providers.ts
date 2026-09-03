import type { DateCombination, SourceRecord, TravelQuery } from '../domain/travel-query.js';
export interface FlightQuote { origin: string; destination: string; destinationCode: string; country?: string; price: number; durationMinutes?: number; stops?: number; dates: DateCombination; source: SourceRecord; bookingLink?: string; }
export interface FlightProvider { readonly name: string; readonly available: boolean; discover(input: Pick<TravelQuery, 'origins' | 'availabilityStart' | 'availabilityEnd' | 'minDays' | 'maxDays'>): Promise<FlightQuote[]>; }
