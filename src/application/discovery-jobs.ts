import type { DiscoveryResult } from './discovery-engine.js';
import { discoverTrips, parseTravelQuery } from './discovery-engine.js';
import type { AccommodationProvider, FlightProvider } from './providers.js';
import { DestinationService } from '../infrastructure/destination/destination-service.js';
import type { TravelQuery } from '../domain/travel-query.js';

export type DiscoveryStage = 'DATES' | 'AIRPORTS' | 'FLIGHTS' | 'ACCOMMODATION' | 'RANKING' | 'COMPLETE' | 'FAILED';
export interface DiscoveryEvent { stage: DiscoveryStage; label: string; at: string; }
export interface DiscoveryJob { id: string; query: TravelQuery; status: 'RUNNING' | 'COMPLETE' | 'FAILED'; events: DiscoveryEvent[]; result?: DiscoveryResult; error?: string; createdAt: string; expiresAt: string; }
type Listener = (event: DiscoveryEvent) => void;
const labels: Record<DiscoveryStage, string> = { DATES: 'Calculando combinaciones de fechas', AIRPORTS: 'Comprobando aeropuertos de salida', FLIGHTS: 'Buscando vuelos compatibles', ACCOMMODATION: 'Consultando alojamiento disponible', RANKING: 'Comparando el valor de cada viaje', COMPLETE: 'Búsqueda terminada', FAILED: 'La búsqueda no se ha podido completar' };

export class DiscoveryJobService {
  private readonly jobs = new Map<string, DiscoveryJob>(); private readonly listeners = new Map<string, Set<Listener>>();
  constructor(private readonly flights: FlightProvider, private readonly accommodation: AccommodationProvider, private readonly destinations: DestinationService, private readonly ttlMs = 15 * 60 * 1000) {}
  create(input: Partial<TravelQuery>): DiscoveryJob { const query = parseTravelQuery(input); const now = new Date(); const job: DiscoveryJob = { id: crypto.randomUUID(), query, status: 'RUNNING', events: [], createdAt: now.toISOString(), expiresAt: new Date(now.getTime() + this.ttlMs).toISOString() }; this.jobs.set(job.id, job); void this.run(job); return job; }
  get(id: string) { const job = this.jobs.get(id); if (!job || Date.parse(job.expiresAt) < Date.now()) { this.jobs.delete(id); return undefined; } return job; }
  subscribe(id: string, listener: Listener) { const set = this.listeners.get(id) ?? new Set<Listener>(); set.add(listener); this.listeners.set(id, set); return () => set.delete(listener); }
  refine(id: string, input: Partial<TravelQuery> & { message?: string }) { const old = this.get(id); if (!old) return undefined; const budget = input.message?.match(/(?:€|eur\s*)(\d+)/i)?.[1]; return this.create({ ...old.query, ...input, budgetPerPerson: input.budgetPerPerson ?? (budget ? Number(budget) : old.query.budgetPerPerson) }); }
  async refresh(tripId: string) { const old = [...this.jobs.values()].find((job) => job.result?.data.some((trip) => trip.id === tripId)); if (!old) return undefined; const refreshed = this.create(old.query); while (refreshed.status === 'RUNNING') await new Promise((resolve) => setTimeout(resolve, 20)); const previous = old.result?.data.find((trip) => trip.id === tripId); const current = refreshed.result?.data.find((trip) => trip.id === tripId); return { previous: previous?.cost.knownPerPerson, current: current?.cost.knownPerPerson, verifiedAt: refreshed.result?.meta.generatedAt, status: current?.status ?? previous?.status ?? 'UNAVAILABLE' }; }
  private emit(job: DiscoveryJob, stage: DiscoveryStage) { const event = { stage, label: labels[stage], at: new Date().toISOString() }; job.events.push(event); this.listeners.get(job.id)?.forEach((listener) => listener(event)); }
  private async run(job: DiscoveryJob) { try { for (const stage of ['DATES', 'AIRPORTS', 'FLIGHTS', 'ACCOMMODATION', 'RANKING'] as DiscoveryStage[]) this.emit(job, stage); job.result = await discoverTrips(job.query, this.flights, this.accommodation, this.destinations); job.status = 'COMPLETE'; this.emit(job, 'COMPLETE'); } catch (error) { job.status = 'FAILED'; job.error = error instanceof Error ? error.message : 'Error inesperado'; this.emit(job, 'FAILED'); } }
}
