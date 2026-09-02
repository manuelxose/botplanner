---
name: provider-integration
description: Add or change travel provider adapters using official documentation, explicit constraints and safe provenance handling.
---

# Provider integration

Use for flights, accommodation, routing, weather, rental-car or affiliate adapters.

Research current official provider documentation before implementation and record the
source, retrieval date, authentication, rate limits, cache policy, deep links and
commercial limitations in `docs/providers/`. Keep provider SDK/API details behind the
contracts in `src/application/providers.ts`. Do not log secrets, expose tokens or
claim a live integration works without a credential-backed validation.
