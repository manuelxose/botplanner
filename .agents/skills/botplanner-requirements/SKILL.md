---
name: botplanner-requirements
description: Translate BotPlanner product requirements into scoped, testable changes without duplicating the master story.
---

# BotPlanner requirements

Use for requirement clarification, acceptance criteria, or product-scope review.

Query Graphify first, then read only the relevant part of `docs/init.md`. Preserve the
core objective: optimize a complete, usable trip, not a headline flight fare. Make
assumptions explicit and testable. Do not expand an approved change into a provider,
UI, or persistence redesign unless the request includes it.

For commercial facts, require the provenance semantics in `price-provenance`; fixtures
remain development data and must stay visibly `MOCK`.
