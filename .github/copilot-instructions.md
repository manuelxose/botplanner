Follow the canonical repository policy in `AGENTS.md`.

Before broad codebase exploration, query the BotPlanner Graphify knowledge graph for
the relevant domain concepts, components, dependencies and prior architectural
decisions. Use targeted source reads only after Graphify has identified the likely
implementation surface. After meaningful code or architecture changes, update
Graphify before declaring the task complete.

Use the portable skills in `.agents/skills/` when their task matches. In particular,
never label fixtures or inferred values as real provider data; preserve the explicit
price provenance model.
