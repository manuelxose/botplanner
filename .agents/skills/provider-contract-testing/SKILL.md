---
name: provider-contract-testing
description: Test BotPlanner domain and provider boundaries deterministically without using fixtures as proof of live integration.
---

# Provider contract testing

Use for unit, integration, API contract or provider adapter tests.

Cover date boundaries, input validation, cost arithmetic, ordering and propagation of
source status. Use deterministic fixtures at the adapter boundary and label them
`MOCK`. Live smoke tests require configured credentials, are opt-in, and must report
their provider and outcome separately from unit tests. Run the smallest relevant test
set plus `npm test` when feasible.
