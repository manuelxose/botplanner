# BotPlanner

BotPlanner is a Travel Discovery MVP. It optimizes the complete trip — usable time,
total cost and experience — rather than the lowest flight price. Product requirements
live in `docs/init.md`; provider status and provenance rules live in `docs/providers/`.

## Graphify-first

Before broad codebase exploration, query the BotPlanner Graphify knowledge graph for
the relevant domain concepts, components, dependencies and prior architectural
decisions. Use targeted source reads only after Graphify has identified the likely
implementation surface. After meaningful code or architecture changes, update
Graphify before declaring the task complete.

Run `graphify query "<question>"` when `graphify-out/graph.json` exists. Use
`graphify path` for relationships and `graphify explain` for a focused concept. Do
not treat expected dirty graph output as a reason to skip Graphify.

## Product and safety rules

- Prompts are sequential and are never executed in bulk.
- Do not present fixtures, estimates or inferred values as live commercial data.
  Every displayed provider value carries `LIVE`, `RECENT`, `ESTIMATED`, `MOCK` or
  `UNAVAILABLE` provenance.
- Never commit credentials, MCP authentication, API keys or `.env` values.
- Use official current documentation before changing an external provider adapter.
- Run `npm run typecheck` and `npm test` for code changes; refresh Graphify after a
  significant change.

## AI workspace

Canonical portable skills are in `.agents/skills/`; tool-specific instructions must
reference that directory rather than copy its content. See `docs/ai/` for the
Graph-first policy, skill registry, provider research policy and toolchain checks.
