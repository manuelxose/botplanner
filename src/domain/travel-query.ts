export type TravelMode = 'SEARCH' | 'DISCOVER';
export type CarPreference = 'NO' | 'YES' | 'IF_WORTH_IT';
export type DataStatus = 'LIVE' | 'RECENT' | 'ESTIMATED' | 'MOCK' | 'UNAVAILABLE';
export interface TravelQuery { mode: TravelMode; availabilityStart: string; availabilityEnd: string; minDays: number; maxDays: number; travellers: number; origin?: string; origins: string[]; budgetPerPerson?: number; region?: string; excludedDestinations?: string[]; interests?: string[]; car: CarPreference; pace?: 'RELAXED' | 'BALANCED' | 'FAST'; }
export interface SourceRecord { provider: string; retrievedAt: string; status: DataStatus; confidence: number; }
export interface PricePart { amount?: number; status: DataStatus; provider: string; note?: string; }
export interface TripCostBreakdown { flights: PricePart; accommodation: PricePart; transport: PricePart; access: PricePart; knownTotal: number; estimatedTotal?: number; currency: 'EUR'; }
export interface DateCombination { departureDate: string; returnDate: string; nights: number; calendarDays: number; }
export interface TripCandidate extends SourceRecord { id: string; destination: string; destinationCode: string; country?: string; origin: string; dates: DateCombination; type: 'CITY' | 'NATURE' | 'ROADTRIP' | 'MULTI_STOP'; title: string; cost: TripCostBreakdown; score: number; rationale: string[]; stops?: number; bookingLinks: string[]; }
