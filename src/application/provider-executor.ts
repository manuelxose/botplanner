/** Shared quota-safe executor for all external providers. */
export class ProviderExecutor {
  private active = 0; private readonly pending: Array<() => void> = []; private readonly inFlight = new Map<string, Promise<unknown>>();
  constructor(private readonly concurrency = Math.max(1, Number(process.env.PROVIDER_MAX_CONCURRENCY ?? 4)), private readonly timeoutMs = 8_000) {}
  async run<T>(key: string, operation: (signal: AbortSignal) => Promise<T>, signal?: AbortSignal): Promise<T> {
    const existing = this.inFlight.get(key) as Promise<T> | undefined; if (existing) return existing;
    const request = this.execute(operation, signal).finally(() => this.inFlight.delete(key)); this.inFlight.set(key, request); return request;
  }
  private async execute<T>(operation: (signal: AbortSignal) => Promise<T>, external?: AbortSignal): Promise<T> {
    await new Promise<void>((resolve, reject) => { const enter=() => { if (external?.aborted) return reject(new Error('Request cancelled')); this.active++; resolve(); }; this.active < this.concurrency ? enter() : this.pending.push(enter); });
    const controller = new AbortController(); const abort=()=>controller.abort(); external?.addEventListener('abort', abort, { once: true }); const timer=setTimeout(abort, this.timeoutMs);
    try { return await operation(controller.signal); } finally { clearTimeout(timer); external?.removeEventListener('abort', abort); this.active--; this.pending.shift()?.(); }
  }
}
export async function retryProvider<T>(operation: () => Promise<T>, retries = 2): Promise<T> { let last: unknown; for (let attempt=0; attempt<=retries; attempt++) try { return await operation(); } catch (error) { last=error; const message=error instanceof Error?error.message:''; if (attempt===retries || !/429|5\d\d|timeout/i.test(message)) break; await new Promise(resolve=>setTimeout(resolve, (250 * 2 ** attempt) + Math.random()*150)); } throw last; }
