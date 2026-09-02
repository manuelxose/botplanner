import { createServer } from 'node:http';
import { generateDateCombinations } from './application/date-engine.js';
import { discoverTrips, parseTravelQuery } from './application/discovery-engine.js';

const server = createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (request.method === 'GET' && request.url === '/health') {
    response.writeHead(200).end(JSON.stringify({ ok: true, service: 'botplanner' }));
    return;
  }
  if (request.method === 'GET' && request.url?.startsWith('/api/date-combinations')) {
    const url = new URL(request.url, 'http://localhost');
    try {
      const result = generateDateCombinations(
        url.searchParams.get('start') ?? '',
        url.searchParams.get('end') ?? '',
        Number(url.searchParams.get('minDays') ?? 1),
        Number(url.searchParams.get('maxDays') ?? 1),
      );
      response.writeHead(200).end(JSON.stringify({ data: result }));
    } catch (error) {
      response.writeHead(400).end(JSON.stringify({ error: error instanceof Error ? error.message : 'Invalid request' }));
    }
    return;
  }
  if (request.method === 'POST' && request.url === '/api/discover') {
    let body = '';
    request.on('data', (chunk) => { body += chunk; });
    request.on('end', () => {
      try { const query = parseTravelQuery(JSON.parse(body)); response.writeHead(200).end(JSON.stringify({ data: discoverTrips(query), meta: { sourceStatus: 'MOCK', warning: 'Configura proveedores live para precios reales.' } })); }
      catch (error) { response.writeHead(400).end(JSON.stringify({ error: error instanceof Error ? error.message : 'Invalid request' })); }
    });
    return;
  }
  if (request.method === 'GET' && request.url === '/') {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.writeHead(200).end(`<!doctype html><html lang="es"><meta name="viewport" content="width=device-width"><title>BotPlanner</title><style>body{font:16px system-ui;max-width:900px;margin:40px auto;padding:0 20px;background:#f7f8fc;color:#172033}main{background:white;padding:28px;border-radius:18px;box-shadow:0 8px 30px #17203312}form{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}label{display:grid;gap:4px}input,button{padding:10px;border:1px solid #ccd3e0;border-radius:8px}button{background:#365cf5;color:white;border:0;cursor:pointer}.results{display:grid;gap:12px;margin-top:24px}.card{border:1px solid #e2e6ef;border-radius:12px;padding:16px}.muted{color:#667085;font-size:13px}</style><main><h1>Descubre tu próximo viaje</h1><p class="muted">MVP de descubrimiento. Los resultados actuales son fixtures de desarrollo (MOCK).</p><form id="f"><label>Desde<input name="availabilityStart" type="date" required value="2026-10-03"></label><label>Hasta<input name="availabilityEnd" type="date" required value="2026-10-12"></label><label>Días mín.<input name="minDays" type="number" value="4" min="1"></label><label>Días máx.<input name="maxDays" type="number" value="6" min="1"></label><label>Viajeros<input name="travellers" type="number" value="1" min="1"></label><label>Origen<input name="origin" value="Vigo"></label><button>Descubrir viajes</button></form><section id="r" class="results"></section></main><script>f.onsubmit=async e=>{e.preventDefault();r.innerHTML='<p>Buscando…</p>';let o=Object.fromEntries(new FormData(f));o.minDays=+o.minDays;o.maxDays=+o.maxDays;o.travellers=+o.travellers;let x=await fetch('/api/discover',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(o)});let j=await x.json();r.innerHTML=j.data?.map(t=>\`<article class="card"><h2>\${t.title}</h2><b>\${t.cost.total} € · puntuación \${t.score}</b><p>\${t.dates.departureDate} → \${t.dates.returnDate} · \${t.cost.flights} € vuelos + \${t.cost.accommodation} € alojamiento</p><p class="muted">\${t.rationale.join(' · ')} · Fuente: \${t.status}</p></article>\`).join('')||'<p>'+j.error+'</p>'}</script></html>`);
    return;
  }
  response.writeHead(404).end(JSON.stringify({ error: 'Not found' }));
});

server.listen(Number(process.env.PORT ?? 4100), () => {
  console.log(`Botplanner listening on http://localhost:${process.env.PORT ?? 4100}`);
});
