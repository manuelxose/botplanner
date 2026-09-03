import type { FlightProvider, FlightQuote } from '../../../application/providers.js';
import type { TravelQuery } from '../../../domain/travel-query.js';

type ApiTicket = { origin?: string; destination?: string; origin_airport?: string; destination_airport?: string; price?: number; departure_at?: string; return_at?: string; duration?: number; transfers?: number; number_of_changes?: number; found_at?: string; link?: string; };
type ApiResponse = { success?: boolean; data?: ApiTicket[]; error?: string; };
export class AviasalesFlightProvider implements FlightProvider {
  readonly name = 'Aviasales / Travelpayouts'; readonly available: boolean;
  private readonly cache = new Map<string, { expires: number; value: FlightQuote[] }>();
  constructor(private readonly token = process.env.TRAVELPAYOUTS_TOKEN, private readonly marker = process.env.TRAVELPAYOUTS_MARKER, private readonly fetcher: typeof fetch = fetch) { this.available = Boolean(token); }
  async discover(input: Pick<TravelQuery, 'origins' | 'availabilityStart' | 'availabilityEnd' | 'minDays' | 'maxDays'>): Promise<FlightQuote[]> {
    if (!this.token) throw new Error('Proveedor Aviasales no configurado'); const key = JSON.stringify(input); const hit = this.cache.get(key); if (hit && hit.expires > Date.now()) return hit.value;
    const month = input.availabilityStart.slice(0, 7); const results = (await Promise.all(input.origins.map((origin) => this.fetchOrigin(origin, month)))).flat();
    this.cache.set(key, { expires: Date.now() + 10 * 60_000, value: results }); return results;
  }
  private async fetchOrigin(origin: string, month: string): Promise<FlightQuote[]> {
    const url = new URL('https://api.travelpayouts.com/aviasales/v3/prices_for_dates'); url.search = new URLSearchParams({ origin, departure_at: month, one_way: 'false', unique: 'true', sorting: 'price', direct: 'false', currency: 'EUR', limit: '30', page: '1' }).toString();
    const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 8_000);
    try { const response = await this.fetcher(url, { headers: { 'X-Access-Token': this.token! }, signal: controller.signal }); if (response.status === 429) throw new Error('Aviasales ha limitado temporalmente la búsqueda. Inténtalo en un minuto.'); if (!response.ok) throw new Error(`Aviasales no está disponible (${response.status})`); const payload = await response.json() as ApiResponse; if (!payload.success || !Array.isArray(payload.data)) throw new Error(payload.error || 'Respuesta no válida de Aviasales'); return payload.data.map((ticket) => this.normalize(origin, ticket)).filter((x): x is FlightQuote => x !== null); } finally { clearTimeout(timer); }
  }
  private normalize(fallbackOrigin: string, ticket: ApiTicket): FlightQuote | null {
    const departure = ticket.departure_at?.slice(0, 10), returned = ticket.return_at?.slice(0, 10), price = ticket.price; if (!departure || !returned || !price || !ticket.destination) return null;
    const nights = Math.round((Date.parse(`${returned}T00:00:00Z`) - Date.parse(`${departure}T00:00:00Z`)) / 86_400_000); if (nights < 1) return null; const code = ticket.destination_airport || ticket.destination;
    return { origin: ticket.origin_airport || ticket.origin || fallbackOrigin, destinationCode: code, pricePerPerson: price, durationMinutes: ticket.duration, stops: ticket.transfers ?? ticket.number_of_changes, dates: { departureDate: departure, returnDate: returned, nights, calendarDays: nights + 1 }, source: { provider: this.name, retrievedAt: ticket.found_at || new Date().toISOString(), status: 'RECENT', confidence: 0.8 }, bookingLink: ticket.link ? `https://www.aviasales.com/search/${ticket.link}${this.marker ? `?marker=${encodeURIComponent(this.marker)}` : ''}` : undefined };
  }
}
