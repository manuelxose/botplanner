export type TravelMode = 'SEARCH' | 'DISCOVER';
export type CarPreference = 'NO' | 'YES' | 'IF_WORTH_IT';
export type DataStatus = 'LIVE' | 'RECENT' | 'ESTIMATED' | 'MOCK' | 'UNAVAILABLE';
export interface TravelQuery { mode: TravelMode; availabilityStart: string; availabilityEnd: string; minDays: number; maxDays: number; travellers: number; rooms: number; origin?: string; origins: string[]; budgetPerPerson?: number; region?: string; excludedDestinations?: string[]; interests?: string[]; car: CarPreference; pace?: 'RELAXED' | 'BALANCED' | 'FAST'; }
export interface SourceRecord { provider: string; retrievedAt?: string; status: DataStatus; confidence: number; }
export interface PricePart { amountPerPerson?: number; groupAmount?: number; currency: 'EUR'; status: DataStatus; provider: string; retrievedAt?: string; note?: string; }
export interface TripCostBreakdown { flights: PricePart; accommodation: PricePart; transport: PricePart; access: PricePart; knownTotal?: number; knownPerPerson?: number; currency: 'EUR'; }
export interface DateCombination { departureDate: string; returnDate: string; nights: number; calendarDays: number; }
export interface Destination { id: string; airportCode: string; airportName?: string; city: string; country?: string; countryCode?: string; latitude?: number; longitude?: number; timezone?: string; bookingCityId?: number; }
export interface BookingLink { label: string; url: string; provider: string; }
export interface TripCandidate extends SourceRecord { id: string; destination: Destination; origin: string; dates: DateCombination; travellers: number; rooms: number; type: 'CITY' | 'NATURE' | 'ROADTRIP' | 'MULTI_STOP'; title: string; cost: TripCostBreakdown; score: number; rationale: string[]; stops?: number; hotel?: { id: string; name: string; type?: string; reviewScore?: number; totalStayPrice?: number; pricePerNight?: number; currency: 'EUR'; status: DataStatus; provider: string; retrievedAt?: string; bookingUrl?: string; cancellation?: string; }; bookingLinks: BookingLink[]; }
