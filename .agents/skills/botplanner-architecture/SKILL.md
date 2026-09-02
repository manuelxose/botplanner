---
name: botplanner-architecture
description: Make or review BotPlanner architectural changes with Graphify impact analysis and lightweight recorded decisions.
---

# BotPlanner architecture

Use for module boundaries, cross-cutting changes, dependency impact and ADR decisions.

Begin with a Graphify query and use `graphify path` for dependencies. Prefer targeted
edits to rewrites. Record durable trade-offs in `docs/adr/` when the decision changes
an interface, data semantics, persistence or deployment boundary. Refresh the graph
after meaningful structural changes.
