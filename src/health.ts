import type { IncomingMessage, ServerResponse } from 'node:http';
import { probeCycle } from './probe-cycle.ts';

// Minimale Beispiel-App der Vorlage: nur /health. Ersetzen, sobald das Projekt eigene Endpunkte hat.
export function handle(request: IncomingMessage, response: ServerResponse): void {
  const ok = request.method === 'GET' && request.url === '/health';
  response.writeHead(ok ? 200 : 404, { 'content-type': 'application/json', 'x-probe': probeCycle });
  response.end(JSON.stringify(ok ? { status: 'ok' } : { error: 'not found' }));
}
