export type DataStatus = 'LIVE' | 'RECENT' | 'ESTIMATED' | 'MOCK';

export interface SourcedResult {
  provider: string;
  retrievedAt: string;
  status: DataStatus;
  confidence: number;
}

export interface FlightProvider {
  searchIndicative(input: { origin: string; departureDate: string; returnDate: string }): Promise<SourcedResult[]>;
}

export interface AccommodationProvider {
  search(input: { destination: string; checkIn: string; checkOut: string }): Promise<SourcedResult[]>;
}

export interface FlightQuote { destination: string; country: string; price: number; durationMinutes: number; source: SourceRecord; }
export interface AccommodationQuote { nightly: number; source: SourceRecord; }
import type { SourceRecord } from '../domain/travel-query.js';
