export type TravelMode = 'SEARCH' | 'DISCOVER';
export type CarPreference = 'NO' | 'YES' | 'IF_WORTH_IT';

export interface TravelQuery {
  mode: TravelMode;
  availabilityStart: string;
  availabilityEnd: string;
  minDays: number;
  maxDays: number;
  travellers: number;
  origin: string;
  budgetPerPerson?: number;
  region?: string;
  excludedDestinations?: string[];
  interests?: string[];
  car: CarPreference;
  pace?: 'RELAXED' | 'BALANCED' | 'FAST';
}

export type DataStatus = 'LIVE' | 'RECENT' | 'ESTIMATED' | 'MOCK' | 'UNAVAILABLE';
export interface SourceRecord { provider: string; retrievedAt: string; status: DataStatus; confidence: number; }
export interface TripCostBreakdown { flights: number; accommodation: number; transport: number; access: number; total: number; currency: 'EUR'; }
export interface TripCandidate extends SourceRecord {
  id: string; destination: string; country: string; dates: DateCombination;
  type: 'CITY' | 'NATURE' | 'ROADTRIP' | 'MULTI_STOP'; title: string;
  cost: TripCostBreakdown; score: number; rationale: string[]; bookingLinks: string[];
}

export interface DateCombination {
  departureDate: string;
  returnDate: string;
  nights: number;
  calendarDays: number;
}
