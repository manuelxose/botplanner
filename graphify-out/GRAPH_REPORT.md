# Graph Report - botplanner  (2026-09-03)

## Corpus Check
- 66 files · ~86,240 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1047 nodes · 1034 edges · 85 communities (60 shown, 24 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7580bfba`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- PROMPT 00 — BOTPLANNER AI ENGINEERING BOOTSTRAP, GRAPHIFY KNOWLEDGE BASE, SKILLS & MULTI-AGENT SETUP.md
- PROMPT 1 — MASTER ARCHITECTURE, REPOSITORY BOOTSTRAP & EXECUTION PLAN.md
- PROMPT 3 — COMPLETE MVP UX-UI, CONVERSATIONAL REFINEMENT, VALIDATION & PRODUCTION READINESS.md
- PROMPT 2 — REAL DATA PROVIDERS, DISCOVERY ENGINE, PRICING & TRIP GENERATION.md
- init.md
- What You Must Do When Invoked
- scripts
- 13. INSTALL / CREATE BOTPLANNER-SPECIFIC SKILLS
- 8. Tipos de viaje que debe generar
- 2. MAIN DISCOVER EXPERIENCE
- 42. Ejemplo de respuesta ideal
- 7. TRIP DETAIL PAGE
- compilerOptions
- discovery-engine.ts
- 31. FINAL DELIVERABLE
- graphify reference: extra exports and benchmark
- 28. Ranking de oportunidades
- 55. FINAL REPORT
- 46. Estrategia importante de costes técnicos
- README.md
- graphify reference: query, path, explain
- BotPlanner — Auditoría del entorno AI
- 14. Precio total real
- Opción descubierta: Eslovenia
- Eslovenia — 5 días
- 26. PLATFORM-SPECIFIC AGENT CONFIGURATION
- 44. VALIDATION OF THE AI TOOLCHAIN
- 33. Alternativas dentro del resultado
- manifest.json
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- 19. Ritmo del viaje
- 34. Nivel de confianza del precio
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- 12. Evitar la falsa ganga del hotel
- 15. Costes opcionales
- 16. Alquiler de coche
- 32. Presentación de resultados
- 21. Métrica €/hora útil
- 39. Explicabilidad
- 3. Modos de búsqueda
- 8. TOKEN-EFFICIENCY POLICY
- BotPlanner
- extraction-spec.md
- GRAPHIFY-SETUP.md
- Historia de Usuario Maestra — Travel Discovery Engine
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- 4) Rules (generation + audit)
- Components
- Playwright CLI Skill
- security-best-practices/SKILL.md
- Playwright CLI Reference
- Playwright CLI Workflows
- Revisión y optimización del bootstrap AI
- 8. VARIANT SELECTOR
- doctor.mjs
- botplanner-architecture/SKILL.md
- botplanner-requirements/SKILL.md
- playwright_cli.sh
- price-provenance/SKILL.md
- provider-contract-testing/SKILL.md
- provider-integration/SKILL.md
- travel-discovery-domain/SKILL.md
- travel-ui-ux/SKILL.md
- typescript-node-backend/SKILL.md
- AGENT-REGISTRY.md
- GRAPH-FIRST-POLICY.md
- GRAPHIFY-BASELINE.md
- MCP-REGISTRY.md
- PROVIDER-RESEARCH-POLICY.md
- SKILL-REGISTRY.md
- TOKEN-EFFICIENCY.md
- bootstrap.mjs
- app.js

## God Nodes (most connected - your core abstractions)
1. `Components` - 34 edges
2. `4) Rules (generation + audit)` - 31 edges
3. `4) Rules (generation + audit)` - 30 edges
4. `4) Rules (generation + audit)` - 28 edges
5. `4) Rules (generation + audit)` - 25 edges
6. `4) Rules (generation + audit)` - 24 edges
7. `4) Rules (generation + audit)` - 22 edges
8. `4) Rules (generation + audit)` - 22 edges
9. `4) Rules (generation + audit)` - 21 edges
10. `4) Rules (generation + audit)` - 15 edges

## Surprising Connections (you probably didn't know these)
- `discoverTrips()` --calls--> `generateDateCombinations()`  [EXTRACTED]
  src/application/discovery-engine.ts → src/application/date-engine.ts
- `server` --calls--> `generateDateCombinations()`  [EXTRACTED]
  src/server.ts → src/application/date-engine.ts
- `DiscoveryResult` --references--> `TripCandidate`  [EXTRACTED]
  src/application/discovery-engine.ts → src/domain/travel-query.ts
- `server` --calls--> `discoverTrips()`  [EXTRACTED]
  src/server.ts → src/application/discovery-engine.ts
- `server` --calls--> `parseTravelQuery()`  [EXTRACTED]
  src/server.ts → src/application/discovery-engine.ts

## Import Cycles
- None detected.

## Communities (85 total, 24 thin omitted)

### Community 0 - "PROMPT 00 — BOTPLANNER AI ENGINEERING BOOTSTRAP, GRAPHIFY KNOWLEDGE BASE, SKILLS & MULTI-AGENT SETUP.md"
Cohesion: 0.04
Nodes (55): 0. HARD RULES, 10. DO NOT INSTALL A SECOND PRIMARY CODE GRAPH, 11. INSTALL A PORTABLE SKILL SYSTEM, 12. INSTALL SUPERPOWERS, 14. SKILL SOURCE POLICY, 15. SKILL CREATOR, 16. CREATE SPECIALIZED AGENTS, 17. ARCHITECT AGENT (+47 more)

### Community 1 - "PROMPT 1 — MASTER ARCHITECTURE, REPOSITORY BOOTSTRAP & EXECUTION PLAN.md"
Cohesion: 0.05
Nodes (39): 10. DATE ENGINE, 11. ORIGIN AIRPORT ENGINE, 12. TRIP TYPES, 13. ACCOMMODATION QUALITY FLOOR, 14. REAL TOTAL COST MODEL, 15. ROADTRIP DECISION ENGINE, 16. ITINERARY REALISM, 17. USABLE TIME (+31 more)

### Community 2 - "PROMPT 3 — COMPLETE MVP UX-UI, CONVERSATIONAL REFINEMENT, VALIDATION & PRODUCTION READINESS.md"
Cohesion: 0.07
Nodes (28): 10. NO-CAR ALTERNATIVE, 11. MULTI-COUNTRY / OPEN-JAW, 12. NATURE/HIKING EXPERIENCE, 13. CITY TRIP EXPERIENCE, 14. CONVERSATIONAL REFINEMENT, 15. CHAT SAFETY AGAINST INVENTED DATA, 16. COMPARISON EXPERIENCE, 17. REAL PRICE REFRESH UX (+20 more)

### Community 3 - "PROMPT 2 — REAL DATA PROVIDERS, DISCOVERY ENGINE, PRICING & TRIP GENERATION.md"
Cohesion: 0.06
Nodes (32): 10. USABLE TIME ENGINE, 11. TRIP STRUCTURE GENERATOR, 12. DESTINATION INTELLIGENCE, 13. ROUTE ENGINE, 14. CAR DECISION, 15. NO-CAR VARIANTS, 16. MULTI-STOP OPTIMIZATION, 17. OPEN-JAW ENGINE (+24 more)

### Community 4 - "init.md"
Cohesion: 0.06
Nodes (31): 10. Motor de vuelos, 11. Motor de alojamiento, 13. Umbral de alojamiento razonable, 17. Comparación coche vs transporte público, 18. Número de paradas, 20. Horas útiles, 22. Escalas, 23. Clima (+23 more)

### Community 5 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 6 - "scripts"
Cohesion: 0.11
Nodes (18): devDependencies, tsx, @types/node, typescript, name, private, scripts, ai:bootstrap (+10 more)

### Community 7 - "13. INSTALL / CREATE BOTPLANNER-SPECIFIC SKILLS"
Cohesion: 0.13
Nodes (15): 13. INSTALL / CREATE BOTPLANNER-SPECIFIC SKILLS, Architecture, Backend, Code Quality, Database, DevOps, Documentation, Frontend (+7 more)

### Community 8 - "8. Tipos de viaje que debe generar"
Cohesion: 0.17
Nodes (12): 8. Tipos de viaje que debe generar, A. Una sola ciudad, B. Ciudad + excursiones, C. Una región con coche, D. Roadtrip circular, E. Open-jaw, F. Dos países, G. Multi-país (+4 more)

### Community 9 - "2. MAIN DISCOVER EXPERIENCE"
Cohesion: 0.17
Nodes (12): 2. MAIN DISCOVER EXPERIENCE, Accommodation, Availability, Budget, Car preference, Destination, Duration, Flights (+4 more)

### Community 10 - "42. Ejemplo de respuesta ideal"
Cohesion: 0.18
Nodes (11): 42. Ejemplo de respuesta ideal, Alternativa roadtrip, Alternativa tranquila, Budapest, Eslovenia — 5 días, Estambul, Mejor city break, Mejor multi-país (+3 more)

### Community 11 - "7. TRIP DETAIL PAGE"
Cohesion: 0.18
Nodes (11): 7. TRIP DETAIL PAGE, Accommodation, Flights, Hero, Itinerary, Map, Price breakdown, Risks / tradeoffs (+3 more)

### Community 12 - "compilerOptions"
Cohesion: 0.18
Nodes (10): src, tests, compilerOptions, module, moduleResolution, noEmit, skipLibCheck, strict (+2 more)

### Community 13 - "discovery-engine.ts"
Cohesion: 0.11
Nodes (26): generateDateCombinations(), parseDate(), discoverTrips(), DiscoveryResult, parseTravelQuery(), rank(), FlightProvider, FlightQuote (+18 more)

### Community 14 - "31. FINAL DELIVERABLE"
Cohesion: 0.20
Nodes (10): 31. FINAL DELIVERABLE, Demo scenario, Deployment, Environment variables, Estimated data, Implemented, Known limitations, Live-data coverage (+2 more)

### Community 15 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 16 - "28. Ranking de oportunidades"
Cohesion: 0.22
Nodes (9): 28. Ranking de oportunidades, Mejor city break, Mejor experiencia, Mejor multi-país, Mejor naturaleza, Mejor relación calidad/precio, Mejor roadtrip, Mejor sin coche (+1 more)

### Community 17 - "55. FINAL REPORT"
Cohesion: 0.22
Nodes (9): 55. FINAL REPORT, Detected AI assistants, Graphify, Installed agents, Installed skills, Missing capabilities, Prompt system, Token optimization (+1 more)

### Community 18 - "46. Estrategia importante de costes técnicos"
Cohesion: 0.29
Nodes (7): 46. Estrategia importante de costes técnicos, Stage 1, Stage 2, Stage 3, Stage 4, Stage 5, Stage 6

### Community 20 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 21 - "BotPlanner — Auditoría del entorno AI"
Cohesion: 0.33
Nodes (5): Ausencias y riesgos, BotPlanner — Auditoría del entorno AI, Configuración existente, Graphify, Herramientas detectadas

### Community 22 - "14. Precio total real"
Cohesion: 0.33
Nodes (6): 14. Precio total real, Alojamiento, Roadtrip, Transporte destino, Transporte origen, Vuelo

### Community 23 - "Opción descubierta: Eslovenia"
Cohesion: 0.33
Nodes (6): 9. Generación de variantes, Opción descubierta: Eslovenia, Variante 1 — Tranquila, Variante 2 — Naturaleza, Variante 3 — Roadtrip, Variante 4 — Multi-país

### Community 24 - "Eslovenia — 5 días"
Cohesion: 0.33
Nodes (6): Día 1, Día 2, Día 3, Día 4, Día 5, Eslovenia — 5 días

### Community 25 - "26. PLATFORM-SPECIFIC AGENT CONFIGURATION"
Cohesion: 0.33
Nodes (6): 26. PLATFORM-SPECIFIC AGENT CONFIGURATION, Claude Code, Cursor, Gemini CLI, GitHub Copilot, OpenAI Codex

### Community 26 - "44. VALIDATION OF THE AI TOOLCHAIN"
Cohesion: 0.33
Nodes (6): 44. VALIDATION OF THE AI TOOLCHAIN, Claude Code, Codex, Copilot, Cursor, Gemini

### Community 27 - "33. Alternativas dentro del resultado"
Cohesion: 0.40
Nodes (5): 33. Alternativas dentro del resultado, Con coche, Roadtrip completo, Sin coche, Solo Ljubljana + Bled

### Community 28 - "manifest.json"
Cohesion: 0.40
Nodes (4): currentPrompt, executionMode, project, prompts

### Community 29 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 30 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 31 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 32 - "19. Ritmo del viaje"
Cohesion: 0.50
Nodes (4): 19. Ritmo del viaje, Equilibrado, Intenso, Tranquilo

### Community 33 - "34. Nivel de confianza del precio"
Cohesion: 0.50
Nodes (4): 34. Nivel de confianza del precio, ESTIMATED, LIVE, RECENT

### Community 36 - "12. Evitar la falsa ganga del hotel"
Cohesion: 0.67
Nodes (3): 12. Evitar la falsa ganga del hotel, Destino A, Destino B

### Community 37 - "15. Costes opcionales"
Cohesion: 0.67
Nodes (3): 15. Costes opcionales, Coste mínimo real de reserva, Presupuesto realista recomendado

### Community 38 - "16. Alquiler de coche"
Cohesion: 0.67
Nodes (3): 16. Alquiler de coche, Dolomitas, Estambul

### Community 39 - "32. Presentación de resultados"
Cohesion: 0.67
Nodes (3): #1 — Eslovenia, 32. Presentación de resultados, Las mejores 5-10 oportunidades

### Community 40 - "21. Métrica €/hora útil"
Cohesion: 0.67
Nodes (3): 21. Métrica €/hora útil, Viaje A, Viaje B

### Community 41 - "39. Explicabilidad"
Cohesion: 0.67
Nodes (3): 39. Explicabilidad, Por qué está arriba, Por qué no recomendamos otra opción

### Community 42 - "3. Modos de búsqueda"
Cohesion: 0.67
Nodes (3): 3. Modos de búsqueda, Modo A — Destination Search, Modo B — Travel Discovery

### Community 43 - "8. TOKEN-EFFICIENCY POLICY"
Cohesion: 0.67
Nodes (3): 8. TOKEN-EFFICIENCY POLICY, Avoid, Prefer

### Community 44 - "BotPlanner"
Cohesion: 0.40
Nodes (4): AI workspace, BotPlanner, Graphify-first, Product and safety rules

### Community 49 - "4) Rules (generation + audit)"
Cohesion: 0.05
Nodes (43): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 State-changing request, 2.3 Required audit finding format (+35 more)

### Community 50 - "4) Rules (generation + audit)"
Cohesion: 0.05
Nodes (41): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 State-changing request, 2.3 Required audit finding format (+33 more)

### Community 51 - "4) Rules (generation + audit)"
Cohesion: 0.05
Nodes (40): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 State-changing request, 2.3 Required audit finding format (+32 more)

### Community 52 - "4) Rules (generation + audit)"
Cohesion: 0.05
Nodes (39): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 State-changing request, 2.3 Required audit finding format (+31 more)

### Community 53 - "4) Rules (generation + audit)"
Cohesion: 0.05
Nodes (37): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 State-changing request (frontend perspective), 2.3 Required audit finding format (+29 more)

### Community 54 - "4) Rules (generation + audit)"
Cohesion: 0.05
Nodes (36): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 State-changing request, 2.3 Required audit finding format (+28 more)

### Community 55 - "4) Rules (generation + audit)"
Cohesion: 0.06
Nodes (35): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 State-changing action (frontend perspective), 2.3 Required audit finding format (+27 more)

### Community 56 - "4) Rules (generation + audit)"
Cohesion: 0.06
Nodes (31): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 Dangerous sink (DOM XSS / code execution sink), 2.3 Required audit finding format (+23 more)

### Community 57 - "4) Rules (generation + audit)"
Cohesion: 0.06
Nodes (31): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 High-risk “sinks” in jQuery contexts, 2.3 Required audit finding format (+23 more)

### Community 58 - "4) Rules (generation + audit)"
Cohesion: 0.04
Nodes (48): 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW), 1.1 Generation mode (default), 1.2 Passive review mode (always on while editing), 1.3 Active audit mode (explicit scan request), 1) Operating modes, 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise), 2.2 State-changing request, 2.3 Required audit finding format (+40 more)

### Community 59 - "Components"
Cohesion: 0.04
Nodes (48): 'Airbnb Cereal VF', Circular, -apple-system, system-ui, Roboto, 'Helvetica Neue', sans-serif · `--font-primary`, 'Airbnb Cereal VF', Circular, sans-serif · `--font-family-2`, Airbnb — Style Reference, amenity row, Border Radius, button pill rausch, button primary, button primary active (+40 more)

### Community 60 - "Playwright CLI Skill"
Cohesion: 0.14
Nodes (13): Core workflow, Debug a UI flow with traces, Form fill and submit, Guardrails, Multi-tab work, Playwright CLI Skill, Prerequisite check (required), Quick start (+5 more)

### Community 61 - "security-best-practices/SKILL.md"
Cohesion: 0.18
Nodes (10): A note on TLS, Avoid Using Incrementing IDs for Public IDs of Resources, Fixes, General Security Advice, Overrides, Overview, Report Format, Security Best Practices (+2 more)

### Community 62 - "Playwright CLI Reference"
Cohesion: 0.20
Nodes (9): Core, DevTools, Keyboard, Mouse, Navigation, Playwright CLI Reference, Save as, Sessions (+1 more)

### Community 63 - "Playwright CLI Workflows"
Cohesion: 0.22
Nodes (8): Configuration file, Data extraction, Debugging and inspection, Form submission, Playwright CLI Workflows, Sessions, Standard interaction loop, Troubleshooting

### Community 64 - "Revisión y optimización del bootstrap AI"
Cohesion: 0.33
Nodes (5): Herramientas y Graphify, Próximo trabajo, Resultado, Revisión y optimización del bootstrap AI, Skills

### Community 65 - "8. VARIANT SELECTOR"
Cohesion: 0.40
Nodes (5): 8. VARIANT SELECTOR, Multi-country, Nature, Roadtrip, Simple

### Community 84 - "app.js"
Cohesion: 0.25
Nodes (4): origins, presets, root, state

## Knowledge Gaps
- **843 isolated node(s):** `playwright_cli.sh script`, `name`, `version`, `private`, `type` (+838 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 896 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `34. Nivel de confianza del precio` connect `34. Nivel de confianza del precio` to `init.md`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `21. Métrica €/hora útil` connect `21. Métrica €/hora útil` to `init.md`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `playwright_cli.sh script`, `name`, `version` to the rest of the system?**
  _843 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `PROMPT 00 — BOTPLANNER AI ENGINEERING BOOTSTRAP, GRAPHIFY KNOWLEDGE BASE, SKILLS & MULTI-AGENT SETUP.md` be split into smaller, more focused modules?**
  _Cohesion score 0.03571428571428571 - nodes in this community are weakly interconnected._
- **Should `PROMPT 1 — MASTER ARCHITECTURE, REPOSITORY BOOTSTRAP & EXECUTION PLAN.md` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `PROMPT 3 — COMPLETE MVP UX-UI, CONVERSATIONAL REFINEMENT, VALIDATION & PRODUCTION READINESS.md` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `PROMPT 2 — REAL DATA PROVIDERS, DISCOVERY ENGINE, PRICING & TRIP GENERATION.md` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._