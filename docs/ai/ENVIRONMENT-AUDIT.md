# BotPlanner — Auditoría del entorno AI

Fecha de auditoría: 2026-09-02 (revisada tras los prompts 01–03)

## Herramientas detectadas

| Herramienta | Estado | Versión / detalle |
|---|---|---|
| OpenAI Codex CLI | Detectado | 0.151.0-alpha.7.2 (extensión VS Code) |
| VS Code | Detectado | 1.136.0 (servidor remoto) |
| Claude Code CLI | No detectado en PATH | Existe configuración/skill de Claude en Windows |
| Cursor | No detectado | — |
| Gemini CLI | No detectado | — |
| Caveman | No detectado en PATH | Hay hooks/configuración de Claude asociada |
| Graphify | Instalado durante este bootstrap | 0.9.53, mediante `uv tool` |
| Node.js / npm | Detectado | Node 22.22.0 / npm 10.9.4 |
| Python | Detectado | Python 3.12.3 (`python3`) |
| uv | Detectado | 0.12.9 |
| Docker / Compose | Detectado | Docker 29.7.2 / Docker Compose disponible |
| Git | Detectado | 2.43.0 |
| PostgreSQL client | Detectado | psql 16.15 |
| Redis client | No detectado | — |
| Playwright CLI | No detectado | — |
| GitHub CLI | No detectado | — |

## Configuración existente

- El MVP actual usa TypeScript y Node HTTP: `src/server.ts`, motor de fechas,
  descubrimiento y contratos de proveedores, con pruebas nativas de Node.
- `AGENTS.md` y `.github/copilot-instructions.md` contienen la política común
  Graphify-first. La fuente portátil de skills es `.agents/skills/`.
- No hay configuración MCP con secretos; Graphify puede exponerse localmente por
  stdio si un cliente compatible lo necesita.
- Se detectó Graphify 0.9.53 instalado mediante `uv tool`.
- No se detectaron configuraciones duplicadas que requieran consolidación.

## Graphify

- Instalación: `uv tool install --upgrade graphifyy`.
- Versión verificada: `graphify 0.9.53`.
- El índice actual contiene 497 nodos e incluye código, pruebas, documentación y
  prompts. La actualización incremental es `graphify update .`.
- No se ha creado ni solicitado ninguna credencial para indexación semántica.

## Ausencias y riesgos

- No hay todavía persistencia, Docker, CI/CD ni adaptadores live; las búsquedas usan
  fixtures `MOCK` y no constituyen datos comerciales reales.
- No se han creado credenciales ni se han inspeccionado valores secretos.
- No se han instalado plugins, skills, agentes ni servidores MCP de terceros.
