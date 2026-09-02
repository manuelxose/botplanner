---
name: price-provenance
description: Preserve truthful price and availability provenance across BotPlanner domain models, APIs, UI and provider adapters.
---

# Price provenance

Use whenever a change introduces, transforms, displays, caches or scores commercial
travel data.

Every provider-derived value must retain provider, retrieval time, confidence and a
truthful status: `LIVE`, `RECENT`, `ESTIMATED`, `MOCK` or `UNAVAILABLE`. Do not silently
promote status, synthesize prices, or combine values with incompatible freshness
without explaining the resulting status. Treat fixtures as test/development inputs,
never as validation of a live provider.
