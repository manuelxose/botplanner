# PROMPT 00 — BOTPLANNER AI ENGINEERING BOOTSTRAP, GRAPHIFY KNOWLEDGE BASE, SKILLS & MULTI-AGENT SETUP

You are the bootstrap architect responsible for preparing the **BotPlanner** repository for long-running AI-assisted development.

This prompt MUST be executed before any implementation prompt located in `/prompts`.

The repository will contain:

- the complete master user story;
- product specifications;
- architecture requirements;
- implementation prompts;
- future corrective prompts.

Your job is to establish a durable AI engineering environment so that Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Gemini CLI and other compatible coding agents can work on the same repository without repeatedly consuming tokens rediscovering the project.

The most important requirement is:

# GRAPHIFY IS THE CANONICAL PROJECT KNOWLEDGE LAYER.

Future agents MUST query Graphify before performing broad repository exploration.

The repository itself remains the ultimate source of truth for executable code, but Graphify is the primary navigation, architectural-context and dependency-discovery layer.

---

# 0. HARD RULES

These rules are NON-NEGOTIABLE.

1. Do NOT implement the Travel Discovery MVP during this bootstrap prompt.

2. Do NOT execute the implementation prompts yet.

3. Configure the repository first.

4. Execute implementation prompts later, ONE AT A TIME and IN ORDER.

5. Never execute every file under `/prompts` automatically.

6. Never concatenate all prompts into one huge context.

7. Never repeatedly scan the entire repository when Graphify can answer the question.

8. Always query Graphify before opening large numbers of source files.

9. Read actual source files only when:
   - the graph does not contain enough detail;
   - exact implementation details are needed;
   - code will be modified;
   - validation requires direct inspection.

10. After significant architectural/code changes, incrementally refresh Graphify.

11. Never silently use fake commercial data as production data.

12. Never expose API secrets.

13. Never install untrusted AI plugins, skills, agents or MCP servers without inspecting their source/repository first.

14. Do NOT install RuFlo / ruflo / claude-flow or equivalent swarm orchestration frameworks.

15. Avoid permanent agent swarms.

16. Use specialized subagents only when tasks can be isolated cleanly.

17. Do not install redundant repository-memory systems when Graphify already provides the required capability.

18. Prefer deterministic tooling and source code analysis over repeatedly asking an LLM to rediscover architecture.

19. Preserve existing credentials and authenticated sessions. Do not create duplicate secrets when an existing tool/session can be reused.

20. Never claim that installation, validation or tests succeeded unless the command was actually executed successfully.

---

# 1. FIRST: INSPECT THE ENVIRONMENT

Before installing anything, detect what is already present.

Check for:

- Claude Code
- OpenAI Codex CLI / Codex
- Cursor
- GitHub Copilot / Copilot CLI / VS Code Copilot
- Gemini CLI
- Caveman
- Graphify
- Node.js
- npm
- pnpm
- yarn
- Python
- uv
- pipx
- Docker
- Docker Compose
- Git
- GitHub CLI
- Playwright
- PostgreSQL client
- Redis client
- VS Code
- MCP configuration files

Also inspect existing:

```text
CLAUDE.md
AGENTS.md
GEMINI.md
.github/copilot-instructions.md
.github/agents/
.github/skills/
.github/prompts/
.github/instructions/
.claude/
.codex/
.cursor/
.agents/
.gemini/
.mcp.json
```

Do not overwrite useful configuration blindly.

Merge carefully.

Produce:

```text
docs/ai/ENVIRONMENT-AUDIT.md
```

containing:

- detected AI tools;
- versions where available;
- installed skills;
- installed agents;
- MCP servers;
- duplicate configurations;
- deprecated configurations;
- missing components.

---

# 2. DISCOVER THE PROMPT LIBRARY

Inspect:

```text
/prompts
```

Identify:

- master user story;
- Prompt 00;
- Prompt 01;
- Prompt 02;
- Prompt 03;
- any future prompts.

Create a machine-readable manifest:

```text
prompts/manifest.json
```

Example conceptual structure:

```json
{
  "project": "botplanner",
  "executionMode": "sequential",
  "currentPrompt": 0,
  "prompts": [
    {
      "order": 0,
      "file": "00-bootstrap-ai-engineering-system.md",
      "status": "running"
    },
    {
      "order": 1,
      "file": "01-master-architecture.md",
      "status": "pending"
    }
  ]
}
```

Do not execute pending prompts.

---

# 3. GRAPHIFY INSTALLATION

Use the official Graphify implementation.

First determine whether Graphify is already installed.

If not, install it using the currently recommended upstream installation procedure.

Do not use an abandoned fork when the maintained upstream project is available.

Configure Graphify at PROJECT scope when possible.

Install integrations for every detected compatible coding agent.

At minimum configure it for detected instances of:

- Claude Code
- Codex
- Cursor
- Gemini CLI

and provide MCP access for other compatible assistants such as Copilot when useful.

Prefer repository-local configuration so cloning the repository reproduces the environment.

---

# 4. GRAPHIFY MUST INDEX MORE THAN CODE

Build the initial graph over the entire relevant BotPlanner knowledge base.

Include:

- application source;
- tests;
- package manifests;
- configs;
- environment variable templates;
- DB schemas;
- migrations;
- Docker;
- CI/CD;
- API definitions;
- architectural documentation;
- `/prompts`;
- master user story;
- ADRs;
- provider documentation stored locally;
- relevant markdown specifications.

Exclude:

- node_modules;
- build outputs;
- coverage;
- caches;
- binaries;
- generated vendor files;
- secrets;
- `.env` values;
- large irrelevant artifacts.

---

# 5. STORE THE PRODUCT SPECIFICATION IN GRAPHIFY

The Master User Story and the implementation prompts are not disposable chat context.

They form part of the project knowledge.

Ensure Graphify makes the following concepts queryable:

```text
BotPlanner
Travel Discovery
Search Mode
Discover Mode
Flexible Dates
Nearby Airports
Flight Discovery
Live Flight Validation
Accommodation Search
Accommodation Quality Floor
Total Trip Cost
Trip Candidate
Trip Variant
City Break
Nature Trip
Hiking Trip
Roadtrip
No-Car Variant
Open Jaw
Multi-Country
Rental Car Decision
Usable Trip Hours
Cost Per Usable Hour
Deal Score
Price Provenance
LIVE
RECENT
ESTIMATED
MOCK
Historical Prices
Conversational Refinement
Price Refresh
Provider Registry
Source Confidence
```

Create graph relationships wherever Graphify supports them or where relationships naturally emerge from indexed documentation/code.

---

# 6. GRAPHIFY ACCESS AS MCP

Expose the Graphify graph through its supported MCP server.

Configure the AI assistants that support MCP to access it.

The available graph tools should include, where supported:

```text
query_graph
get_node
get_neighbors
shortest_path
```

and other supported Graphify tools.

Prefer local stdio transport for local development unless there is a specific reason to use HTTP.

Do not expose a Graphify HTTP server publicly without authentication.

---

# 7. CREATE A GRAPH-FIRST OPERATING POLICY

Create:

```text
docs/ai/GRAPH-FIRST-POLICY.md
```

The policy must state:

# BEFORE READING SOURCE CODE BROADLY

The agent MUST:

1. identify the task;
2. query Graphify for relevant concepts;
3. inspect related nodes;
4. inspect dependencies/neighbors;
5. determine likely impacted modules;
6. only then read the necessary source files.

Example workflow:

```text
TASK
 ↓
GRAPHIFY QUERY
 ↓
RELATED COMPONENTS
 ↓
DEPENDENCY / IMPACT QUERY
 ↓
TARGETED FILE READ
 ↓
IMPLEMENTATION
 ↓
TESTS
 ↓
GRAPHIFY INCREMENTAL UPDATE
```

---

# 8. TOKEN-EFFICIENCY POLICY

Create:

```text
docs/ai/TOKEN-EFFICIENCY.md
```

Establish these rules.

## Avoid

- repeated full repository scans;
- loading every prompt simultaneously;
- reading entire large files when symbol-level context is enough;
- repeating architecture explanations already stored in Graphify;
- duplicating the Master User Story in every agent context;
- spawning many agents with the same context;
- copying full provider documentation into prompts;
- verbose status output.

## Prefer

- Graphify queries;
- targeted `rg`/symbol searches;
- AST/dependency relationships;
- focused source reads;
- incremental graph refreshes;
- deterministic scripts;
- tests;
- concise summaries;
- persisted ADRs.

---

# 9. OPTIONAL OUTPUT-COMPRESSION LAYER

Detect whether Caveman is already installed.

Caveman is complementary to Graphify:

Graphify reduces INPUT rediscovery.

Caveman can reduce OUTPUT verbosity.

If Caveman is already present, integrate it safely.

If not present, inspect its upstream implementation and install it only if it remains compatible with the detected coding agents.

Use conservative/default compression for routine coding-agent communication.

Do NOT compress:

- security warnings;
- architecture decisions requiring precision;
- destructive-operation confirmations;
- migration instructions;
- final validation reports.

Graphify remains the memory/navigation layer.

Caveman is NOT the project knowledge base.

---

# 10. DO NOT INSTALL A SECOND PRIMARY CODE GRAPH

Do not install or activate another persistent knowledge graph as the primary repository memory if it duplicates Graphify.

For example, tools such as Understand Anything may be useful for visual exploration, but they MUST NOT maintain a competing canonical project representation during normal development.

If such a tool is already installed:

- do not delete it;
- mark Graphify as canonical;
- disable automatic duplicate full scans if possible.

---

# 11. INSTALL A PORTABLE SKILL SYSTEM

Create a canonical project-level skills directory:

```text
.agents/skills/
```

Use portable `SKILL.md` format.

Where tool compatibility requires it, create thin adapters/symlinks/mirrors rather than maintaining divergent copies.

Configure detected tools appropriately.

Expected locations may include:

```text
.agents/skills/
.claude/skills/
.github/skills/
```

and the currently supported Codex/Cursor/Gemini integration mechanism.

Do NOT maintain four independently edited versions of the same skill.

Choose ONE canonical source whenever possible.

---

# 12. INSTALL SUPERPOWERS

Evaluate the current upstream `obra/superpowers`.

If compatible, install/configure Superpowers for the detected AI coding assistants.

We want capabilities such as:

- brainstorming when genuinely necessary;
- implementation planning;
- test-driven development;
- systematic debugging;
- code review;
- verification before completion;
- git worktree workflows where useful;
- subagent-driven isolated work.

Do not let Superpowers override explicit BotPlanner repository rules.

Repository instructions and user requirements remain authoritative.

---

# 13. INSTALL / CREATE BOTPLANNER-SPECIFIC SKILLS

Do NOT install hundreds of random skills.

Create a curated engineering skill set appropriate for this repository.

Each skill must:

- solve a repeatable task;
- have a narrow purpose;
- use progressive disclosure;
- load only when required;
- avoid embedding large static documentation;
- reference Graphify instead of duplicating architecture context.

Create or install skills covering at minimum:

## Product / Requirements

```text
botplanner-requirements
travel-discovery-domain
acceptance-criteria
```

## Architecture

```text
software-architecture
architecture-review
adr-management
dependency-impact-analysis
```

## Backend

```text
typescript-backend
nestjs-or-project-backend
rest-api-design
provider-adapter-pattern
background-jobs
redis-caching
rate-limiting
```

Only create framework-specific skills after confirming the actual project framework.

## Frontend

```text
nextjs-or-project-frontend
react
typescript-frontend
responsive-ui
accessibility
travel-search-ux
```

Again, detect the actual stack first.

## UI/UX

Install a well-maintained UI/UX skill suitable for professional product design.

Evaluate current upstream UI UX Pro Max or equivalent.

Configure it only for UI/UX tasks.

It must not pollute backend contexts.

## Database

```text
postgresql
database-schema-design
prisma-or-current-orm
database-migrations
query-performance
```

## Testing

```text
tdd
unit-testing
integration-testing
playwright-e2e
api-contract-testing
provider-adapter-testing
```

## Security

```text
application-security
secrets-management
ssrf-protection
api-security
dependency-security
oauth-security
```

## Performance

```text
performance-profiling
web-performance
backend-performance
cache-strategy
```

## DevOps

```text
docker
docker-compose
ci-cd
production-deployment
environment-management
```

## Observability

```text
structured-logging
opentelemetry
error-tracking
provider-diagnostics
```

## Documentation

```text
technical-documentation
openapi
architecture-documentation
release-notes
```

## Research / Provider Integrations

```text
api-provider-research
official-docs-first
travel-provider-integration
price-provenance
```

## Code Quality

```text
code-review
refactoring
systematic-debugging
verification-before-completion
```

---

# 14. SKILL SOURCE POLICY

When searching for reusable skills:

Priority order:

1. official vendor skills;
2. official framework repositories;
3. reputable high-adoption open-source skills;
4. project-specific skills generated locally.

Before installing a third-party skill inspect:

- repository owner;
- recent maintenance;
- source;
- scripts;
- package hooks;
- permissions;
- network operations;
- shell commands.

Never execute unknown install scripts blindly.

Prefer copying/auditing a `SKILL.md` over running arbitrary remote shell installers when equivalent.

Record installed sources in:

```text
docs/ai/SKILL-REGISTRY.md
```

Fields:

```text
name
purpose
source
version/commit
platforms
installation path
security review
status
```

---

# 15. SKILL CREATOR

Install or make available a trusted skill-creator capability.

Prefer the official Anthropic `skill-creator` implementation or an equally auditable portable implementation.

Use it to create BotPlanner-specific skills rather than embedding giant instructions in global agent files.

---

# 16. CREATE SPECIALIZED AGENTS

Create a curated agent team.

Do NOT create dozens of overlapping personas.

Recommended project agents:

```text
architect
backend-engineer
frontend-engineer
travel-domain-engineer
provider-integration-engineer
data-engineer
qa-engineer
security-reviewer
performance-engineer
devops-engineer
ux-reviewer
code-reviewer
researcher
```

Agents should be specialized and have scoped responsibilities.

---

# 17. ARCHITECT AGENT

Responsibilities:

- system boundaries;
- module design;
- architectural consistency;
- ADRs;
- dependency direction;
- impact analysis.

Before analysis it MUST query Graphify.

It should generally avoid editing implementation code unless explicitly delegated.

---

# 18. BACKEND ENGINEER

Responsibilities:

- APIs;
- domain services;
- search pipeline;
- queues;
- caching;
- provider abstractions;
- pricing;
- Deal Score;
- source provenance.

Must use Graphify to identify existing modules before reading files.

---

# 19. PROVIDER INTEGRATION ENGINEER

Responsibilities:

- Skyscanner or selected flight provider;
- Booking or selected accommodation provider;
- car rental providers;
- routing;
- weather;
- affiliate/deep links;
- rate limits;
- API terms;
- normalization.

Rules:

- official docs first;
- never invent fields;
- never invent prices;
- maintain source provenance;
- create adapters;
- never couple core logic directly to one provider.

---

# 20. TRAVEL DOMAIN ENGINEER

Responsibilities:

- flexible date logic;
- nearby airports;
- usable days;
- city breaks;
- road trips;
- nature;
- hiking;
- multi-stop;
- open-jaw;
- multi-country;
- car/no-car variants;
- trip feasibility.

It is responsible for preventing superficially cheap but economically bad trips.

---

# 21. FRONTEND ENGINEER

Responsibilities:

- Discover UX;
- result ranking;
- trip details;
- comparison;
- filters;
- conversational refinement;
- responsive design;
- accessibility.

Use UI/UX skills only when relevant.

---

# 22. QA ENGINEER

Responsibilities:

- test strategy;
- unit tests;
- integration tests;
- E2E;
- regression testing;
- deterministic provider mocks;
- real-provider smoke tests where credentials exist.

It MUST NOT accept mock data as evidence that live production integrations work.

---

# 23. SECURITY REVIEWER

Responsibilities:

- secrets;
- OAuth;
- SSRF;
- injection;
- API security;
- auth;
- dependency risks;
- logging redaction;
- external URL/deep-link safety.

Use read-only behavior by default.

---

# 24. CODE REVIEWER

Responsibilities:

- review completed diffs;
- check requirement coverage;
- architecture violations;
- regressions;
- missing tests;
- security concerns.

It should not rewrite the feature unless explicitly instructed.

---

# 25. RESEARCHER

Responsibilities:

- current external API documentation;
- provider restrictions;
- current integration methods;
- current SDK versions;
- official documentation.

It should avoid modifying source code.

Use current web research only when freshness matters.

Persist durable findings into repository docs instead of relying on ephemeral chat context.

---

# 26. PLATFORM-SPECIFIC AGENT CONFIGURATION

Configure detected platforms using their supported native mechanisms.

## Claude Code

Create/merge:

```text
CLAUDE.md
.claude/skills/
.claude/agents/
```

Keep `CLAUDE.md` concise.

It should contain operating rules, NOT the entire project specification.

---

## OpenAI Codex

Create/merge:

```text
AGENTS.md
.agents/skills/
```

and supported Codex role/config files where useful.

AGENTS.md should be canonical cross-agent project instructions where feasible.

---

## GitHub Copilot

Create/merge:

```text
.github/copilot-instructions.md
.github/agents/
.github/skills/
.github/instructions/
```

Use custom agents only for durable specialized roles.

Do not duplicate all project knowledge in Copilot instructions.

Point it toward Graphify and canonical docs.

---

## Cursor

Configure its current supported project rules/skills mechanism.

Avoid copying the entire Master User Story into global Cursor rules.

Reference canonical repository documentation.

---

## Gemini CLI

Create/merge:

```text
GEMINI.md
```

and its supported skill configuration.

Again, reference the canonical shared knowledge instead of duplicating it.

---

# 27. CROSS-AGENT CANONICAL INSTRUCTIONS

Create one concise canonical source of project operating rules.

Preferred structure:

```text
AGENTS.md
```

containing:

- project identity;
- Graphify-first requirement;
- prompt execution rules;
- testing requirements;
- source provenance;
- no fake commercial data;
- security;
- how to update Graphify;
- where specifications live.

Tool-specific files should reference or mirror this canonical policy without maintaining divergent instructions.

---

# 28. GRAPHIFY-FIRST INSTRUCTION THAT ALL AGENTS MUST RECEIVE

Include this exact behavioral principle in every platform adapter:

> Before broad codebase exploration, query the BotPlanner Graphify knowledge graph for the relevant domain concepts, components, dependencies and prior architectural decisions. Use targeted source reads only after Graphify has identified the likely implementation surface. After meaningful code or architecture changes, update Graphify before declaring the task complete.

---

# 29. PROMPT EXECUTION CONTROLLER

Create a lightweight workflow for sequential prompt execution.

Suggested files:

```text
scripts/prompts/status.*
scripts/prompts/next.*
scripts/prompts/complete.*
```

or equivalent implementation appropriate for the repository.

Required behavior:

```text
Prompt 00
 ↓ complete
Prompt 01
 ↓ complete
Prompt 02
 ↓ complete
Prompt 03
```

Never skip automatically.

Never execute two implementation prompts simultaneously.

Each completion should update:

```text
prompts/manifest.json
```

---

# 30. PROMPT START PROTOCOL

Before executing ANY implementation prompt after Prompt 00:

1. read only that prompt;
2. query Graphify for the domains mentioned by that prompt;
3. query previous architectural decisions;
4. inspect prompt completion status;
5. identify the source files likely affected;
6. read targeted files;
7. execute the prompt;
8. run validation;
9. update documentation;
10. update Graphify;
11. mark the prompt completed.

---

# 31. PROMPT END PROTOCOL

Every implementation prompt must end by persisting:

```text
docs/ai/executions/<prompt-id>.md
```

containing:

- prompt executed;
- date;
- major decisions;
- files changed;
- migrations;
- tests executed;
- build result;
- provider changes;
- known blockers;
- Graphify update result.

Do not paste huge diffs into the report.

---

# 32. ARCHITECTURAL DECISIONS

Create:

```text
docs/adr/
```

Use ADRs for durable decisions such as:

- modular monolith;
- Graphify canonical knowledge;
- provider abstraction;
- PostgreSQL;
- Redis;
- queues;
- price provenance model;
- live/recent/estimated/mock semantics.

Store significant decisions once.

Agents should query Graphify for ADRs rather than repeatedly re-deriving them.

---

# 33. CREATE AN AI DIRECTORY

Create:

```text
docs/ai/
```

Recommended structure:

```text
docs/ai/
├── ENVIRONMENT-AUDIT.md
├── GRAPH-FIRST-POLICY.md
├── TOKEN-EFFICIENCY.md
├── SKILL-REGISTRY.md
├── AGENT-REGISTRY.md
├── MCP-REGISTRY.md
├── PROMPT-WORKFLOW.md
├── PROVIDER-RESEARCH-POLICY.md
└── executions/
```

---

# 34. AGENT REGISTRY

Create:

```text
docs/ai/AGENT-REGISTRY.md
```

For every agent include:

- name;
- role;
- when to invoke;
- allowed scope;
- preferred skills;
- allowed tools;
- whether it may write code;
- review responsibilities.

Avoid duplicate roles.

---

# 35. MCP REGISTRY

Create:

```text
docs/ai/MCP-REGISTRY.md
```

Record:

- Graphify;
- GitHub if configured;
- browser/web research if available;
- database tooling if relevant;
- Playwright if relevant.

Do not install MCP servers merely because they exist.

Every MCP must solve a real project need.

---

# 36. GITHUB INTEGRATION

If GitHub access already exists:

reuse it.

Do not create new credentials.

Agents may use GitHub for:

- issues;
- PRs;
- repository inspection;
- code review;
- upstream dependency research.

Do not require GitHub for ordinary local code understanding when Graphify already contains the repository graph.

---

# 37. PLAYWRIGHT

Ensure Playwright-based E2E capability can be activated by the QA/frontend agents.

Do not load browser automation instructions into unrelated backend tasks.

---

# 38. UI/UX SKILL

Evaluate a maintained UI/UX Pro Max implementation or another reputable current alternative.

Install only one primary UI/UX design skill.

The UI skill should cover:

- responsive design;
- accessibility;
- information hierarchy;
- forms;
- result cards;
- comparison views;
- maps;
- loading states;
- mobile UX.

Avoid stacking multiple overlapping UI design skills.

---

# 39. PROVIDER RESEARCH POLICY

Create:

```text
docs/ai/PROVIDER-RESEARCH-POLICY.md
```

Require current official documentation for:

- Skyscanner;
- Booking;
- rental cars;
- maps/routing;
- weather;
- affiliate systems.

Research findings must record:

```text
source
retrievedAt
API version
authentication
rate limits
pricing semantics
cache restrictions
deep links
commercial limitations
```

---

# 40. NO HALLUCINATED COMMERCIAL DATA

Add this rule globally:

AI reasoning may propose structures.

AI reasoning may NOT fabricate:

- flights;
- hotels;
- availability;
- price;
- schedules;
- rental cars;
- route duration;
- provider capabilities.

Production values require sourced provider data.

---

# 41. CONTEXT DISCIPLINE FOR SUBAGENTS

When dispatching a subagent, do not feed it the entire repository context.

Provide:

- task;
- relevant Graphify node IDs/queries;
- relevant ADR references;
- exact files where possible;
- acceptance criteria.

Let the subagent query additional graph context when necessary.

This is critical for token efficiency.

---

# 42. PARALLELISM POLICY

Parallel agents may be used for independent READ/REVIEW work.

Examples:

- security review;
- provider research;
- test review;
- UI review.

Avoid concurrent writes to overlapping files.

Implementation prompts themselves execute sequentially.

---

# 43. MODEL-AGNOSTIC DESIGN

Do not make BotPlanner development dependent on a single AI vendor.

Claude, Codex, Copilot, Cursor and Gemini should share:

- canonical AGENTS rules;
- Graphify knowledge;
- portable skills;
- ADRs;
- tests;
- repository state.

Vendor-specific configuration must remain thin.

---

# 44. VALIDATION OF THE AI TOOLCHAIN

After setup, test that each DETECTED agent can understand the repository using the shared system.

For each available platform validate:

## Claude Code

Can discover Graphify and project skills.

## Codex

Can read AGENTS.md and access Graphify/project skills.

## Copilot

Can load repository instructions and custom agents/skills.

## Cursor

Can see project rules and Graphify access if configured.

## Gemini

Can read GEMINI.md and Graphify integration if configured.

Do not claim validation for tools that are not installed.

---

# 45. GRAPHIFY VALIDATION QUESTIONS

After initial indexing, verify the graph can answer questions equivalent to:

1. What is the main product goal of BotPlanner?

2. What is Discover Mode?

3. Which modules are responsible for total trip pricing?

4. What is the accommodation quality floor?

5. What distinguishes LIVE from ESTIMATED price data?

6. How should roadtrip and no-car variants be compared?

7. Which future prompt implements the backend discovery pipeline?

8. Which prompt implements the frontend MVP?

9. What constraints prohibit fake data?

10. Which components would likely change if usable-trip-hours calculation changes?

If these cannot be answered, improve the index/document ingestion before completing bootstrap.

---

# 46. GRAPH UPDATE AUTOMATION

Add a safe repository workflow for refreshing Graphify.

Prefer:

```text
initial full build
+
incremental refresh after significant changes
```

Do not rebuild the entire graph after every minor formatting edit.

Document commands in:

```text
docs/ai/GRAPH-FIRST-POLICY.md
```

---

# 47. GITIGNORE / SECURITY

Ensure graph output and AI configuration are handled correctly.

Commit deterministic project configuration when useful.

Do NOT commit:

- secrets;
- OAuth tokens;
- private API credentials;
- local session data;
- sensitive MCP auth;
- caches.

Review Graphify output for accidental secret ingestion.

---

# 48. BOOTSTRAP COMMAND

Create one idempotent setup command, for example:

```text
pnpm ai:bootstrap
```

or:

```text
./scripts/ai/bootstrap.sh
```

depending on the repository stack.

It should safely:

- verify dependencies;
- verify Graphify;
- verify skill installation;
- verify agent configuration;
- verify prompt manifest;
- verify graph availability.

Re-running it must not destroy configuration.

---

# 49. HEALTH CHECK COMMAND

Create:

```text
pnpm ai:doctor
```

or equivalent.

It should report something similar to:

```text
BotPlanner AI Environment

Graphify                 OK
Graph indexed            OK
Graph MCP                OK
Claude Code              detected
Codex                    detected
Copilot                  detected
Cursor                   detected
Gemini                   not detected
Canonical AGENTS.md      OK
Skills                   18 available
Agents                   13 available
Prompt manifest          OK
Next prompt              01
Secrets check            OK
```

Do not fake tool availability.

---

# 50. PROMPT EXECUTION COMMAND

Optionally create:

```text
pnpm prompt:next
```

It MUST NOT blindly start implementation.

It should:

1. display next pending prompt;
2. verify previous completion;
3. verify Graphify health;
4. output the exact prompt to execute.

Actual execution remains controlled by the coding agent/user.

---

# 51. INITIAL GRAPH SNAPSHOT

After bootstrap create an initial Graphify snapshot covering:

- repository;
- Master User Story;
- prompts;
- AI configuration;
- ADRs.

Record:

```text
docs/ai/GRAPHIFY-BASELINE.md
```

with:

- graph generation command;
- date;
- indexed scope;
- excluded scope;
- graph stats;
- validation queries;
- result.

---

# 52. DO NOT OVERENGINEER

This AI layer exists to make implementation faster.

Do not spend days creating infrastructure around the infrastructure.

Prefer:

```text
Graphify
+
portable skills
+
small specialized agent team
+
canonical AGENTS.md
+
sequential prompts
+
tests
```

over complex orchestration frameworks.

---

# 53. FINAL DIRECTORY TARGET

The repository should approximately contain:

```text
botplanner/
│
├── AGENTS.md
├── CLAUDE.md
├── GEMINI.md                 # only if relevant
│
├── prompts/
│   ├── manifest.json
│   ├── 00-...
│   ├── 01-...
│   ├── 02-...
│   └── 03-...
│
├── .agents/
│   └── skills/
│
├── .claude/
│   ├── agents/
│   └── skills/
│
├── .github/
│   ├── agents/
│   ├── skills/
│   ├── instructions/
│   └── copilot-instructions.md
│
├── docs/
│   ├── adr/
│   └── ai/
│
├── scripts/
│   ├── ai/
│   └── prompts/
│
└── graphify-out/
```

Adapt paths to actual platform requirements and avoid unnecessary duplicate files.

---

# 54. FINAL BOOTSTRAP VALIDATION

Before declaring Prompt 00 complete run the relevant checks:

- Graphify installed;
- graph generated;
- graph query works;
- MCP works where configured;
- project skills discoverable;
- agent definitions syntactically valid;
- AGENTS.md available;
- Claude integration valid if Claude exists;
- Codex integration valid if Codex exists;
- Copilot configuration valid if Copilot exists;
- Cursor configuration valid if Cursor exists;
- Gemini integration valid if Gemini exists;
- prompt manifest valid JSON;
- bootstrap idempotency;
- no secrets committed;
- git diff review.

Fix problems caused by bootstrap.

---

# 55. FINAL REPORT

Create:

```text
docs/ai/BOOTSTRAP-COMPLETION-REPORT.md
```

Include:

## Detected AI assistants

Actual detected tools only.

## Installed skills

Name + source + purpose.

## Installed agents

Name + scope.

## Graphify

- installation;
- graph location;
- MCP;
- validation;
- refresh procedure.

## Prompt system

- discovered prompts;
- execution order;
- current prompt;
- next prompt.

## Token optimization

Explain how Graphify-first behavior avoids repository rediscovery.

## Missing capabilities

Anything unavailable.

## Validation

Exact commands executed and actual results.

---

# 56. STOP CONDITION

After Prompt 00 is completely validated:

Mark Prompt 00:

```text
complete
```

Set Prompt 01:

```text
next
```

Then STOP.

DO NOT execute Prompt 01.

DO NOT begin implementing the Travel Discovery MVP.

Return only the bootstrap completion report and exact next prompt that should be executed.

The implementation prompts will be executed individually afterward.