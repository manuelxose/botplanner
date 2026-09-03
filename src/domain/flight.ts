import type { DataStatus, DateCombination, SourceRecord } from './travel-query.js';

export type FlightItineraryType = 'ONE_WAY' | 'ROUND_TRIP' | 'OPEN_JAW' | 'MULTI_CITY';
export type TicketType = 'SINGLE_TICKET' | 'MULTI_TICKET' | 'UNKNOWN';
export interface FlightSegment { origin: string; destination: string; departureDateTime?: string; arrivalDateTime?: string; durationMinutes?: number; carrier?: string; flightNumber?: string; }
/** A user-requested direction. Segments/connections are optional provider detail. */
export interface FlightLeg { origin: string; destination: string; departureDate: string; departureDateTime?: string; arrivalDateTime?: string; durationMinutes?: number; stops?: number; carriers?: string[]; segments?: FlightSegment[]; }
export interface FlightConnection { airport: string; durationMinutes: number; isPotentialStopover?: boolean; }
export interface FlightItinerary extends SourceRecord { id: string; type: FlightItineraryType; legs: FlightLeg[]; pricePerPerson: number; groupAmount: number; currency: 'EUR'; bookingUrl?: string; ticketType?: TicketType; connections?: FlightConnection[]; warnings?: string[]; }
export interface FlightSearchLeg { origins: string[]; destinations: string[]; date: string; flexibleDaysBefore?: number; flexibleDaysAfter?: number; }
export interface FlightSearchRequest { legs: FlightSearchLeg[]; adults: number; cabinClass?: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST'; }
export interface FlightProviderCapabilities { indicative: boolean; live: boolean; oneWay: boolean; roundTrip: boolean; openJaw: boolean; multiCity: boolean; flexibleDates: boolean; maxLegs?: number; }
export const itineraryDates = (itinerary: FlightItinerary): DateCombination | undefined => { if (itinerary.legs.length < 2) return undefined; const departureDate = itinerary.legs[0].departureDate, returnDate = itinerary.legs.at(-1)!.departureDate, nights = Math.round((Date.parse(`${returnDate}T00:00:00Z`) - Date.parse(`${departureDate}T00:00:00Z`)) / 86_400_000); return nights < 1 ? undefined : { departureDate, returnDate, nights, calendarDays: nights + 1 }; };
export const itineraryKey = (itinerary: Pick<FlightItinerary, 'type' | 'legs'>) => `${itinerary.type}:${itinerary.legs.map((leg) => `${leg.origin}-${leg.destination}-${leg.departureDate}`).join('|')}`;
export const combinedStatus = (statuses: DataStatus[]): DataStatus => statuses.every((status) => status === 'LIVE') ? 'LIVE' : statuses.includes('RECENT') ? 'RECENT' : statuses.includes('ESTIMATED') ? 'ESTIMATED' : statuses.includes('MOCK') ? 'MOCK' : 'UNAVAILABLE';
