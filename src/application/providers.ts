import type { DateCombination, Destination, SourceRecord, TravelQuery } from '../domain/travel-query.js';
export interface FlightQuote { origin: string; destinationCode: string; pricePerPerson: number; durationMinutes?: number; stops?: number; dates: DateCombination; source: SourceRecord; bookingLink?: string; }
export interface FlightProvider { readonly name: string; readonly available: boolean; discover(input: Pick<TravelQuery, 'origins' | 'availabilityStart' | 'availabilityEnd' | 'minDays' | 'maxDays'>): Promise<FlightQuote[]>; }
export interface AccommodationSearchInput { destination: Destination; checkin: string; checkout: string; adults: number; rooms: number; bookerCountry: string; }
export interface AccommodationResult { id: string; name: string; type?: string; reviewScore?: number; totalStayPrice?: number; pricePerNight?: number; currency: 'EUR'; availability: boolean; cancellation?: string; provider: string; status: 'LIVE' | 'MOCK'; retrievedAt: string; bookingUrl?: string; }
export interface AccommodationProvider { readonly name: string; readonly available: boolean; search(input: AccommodationSearchInput): Promise<AccommodationResult[]>; }
