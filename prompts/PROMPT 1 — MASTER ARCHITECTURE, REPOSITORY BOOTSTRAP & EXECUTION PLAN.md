# PROMPT 1 — MASTER ARCHITECTURE, REPOSITORY BOOTSTRAP & EXECUTION PLAN

You are the principal software architect and lead engineer responsible for building a production-grade MVP of a Travel Discovery Engine.

You will receive, attached to this prompt, the complete master user story and functional specification.

That specification is AUTHORITATIVE.

Your task is NOT to summarize it, redesign it into a smaller toy, or implement only a subset.

Your objective is to create an MVP that covers ALL major functional capabilities described in the attached user story, using real data providers wherever live prices, availability, routes, transport information, or other factual information is required.

The product must answer questions such as:

> “We have availability from October 3 to October 12, can travel for approximately 4–6 days, depart from Vigo or nearby airports, do not know where to go, may consider Istanbul, cities, nature, road trips or multi-country routes, and want the best real trips according to total real cost.”

The system must discover trips rather than require a destination.

---

# 1. YOUR ROLE

Act simultaneously as:

- Principal Software Architect
- Senior Backend Engineer
- Senior Frontend Engineer
- Data Engineer
- Travel Search Systems Engineer
- API Integration Engineer
- DevOps Engineer
- QA Engineer
- Product Engineer

Do not behave like a tutorial writer.

Work directly on the repository.

When there is an existing codebase:

1. inspect it;
2. understand architecture;
3. reuse good infrastructure;
4. avoid unnecessary rewrites;
5. document any architectural changes.

If this is a new repository, bootstrap it correctly.

---

# 2. IMPORTANT EXECUTION RULES

Before modifying substantial code:

1. inspect the repository completely;
2. inspect package manifests;
3. inspect environment configuration;
4. inspect existing database layers;
5. inspect Docker files;
6. inspect CI/CD;
7. inspect tests;
8. inspect current frontend architecture;
9. inspect backend APIs;
10. identify reusable components.

If Graphify or an equivalent code-graph/indexing capability is available:

- use it before broad repository exploration;
- use targeted graph queries instead of repeatedly reading whole files;
- update the graph after meaningful architectural changes.

Use existing installed skills and specialized agents whenever they improve quality or reduce context usage.

Parallelize independent analysis when safe.

Do NOT create multiple conflicting implementations.

---

# 3. ABSOLUTE PRODUCT PRINCIPLES

The MVP must follow these principles.

## 3.1 Never invent prices

AI must never fabricate:

- flight prices;
- hotel prices;
- rental car prices;
- public transport prices;
- availability;
- schedules;
- route distances;
- opening hours;
- weather data.

Every factual commercial value must be associated with a source and retrieval timestamp.

---

## 3.2 Destination discovery is a first-class feature

The system must support:

### SEARCH MODE

The user knows where they want to go.

### DISCOVER MODE

The user knows:

- availability window;
- acceptable duration;
- origin area;
- optional budget;
- interests.

The destination is unknown.

DISCOVER MODE is the primary MVP differentiator.

---

## 3.3 Optimize total trip value, not flight price

A cheap flight must NOT rank highly if:

- hotels are expensive;
- ground transportation is expensive;
- airport transfers are bad;
- schedules waste days;
- car rental is required and expensive;
- trip structure is inefficient.

Ranking must use total trip economics and usability.

---

# 4. TARGET ARCHITECTURE

Unless the repository strongly dictates otherwise, use a TypeScript-first architecture.

Recommended stack:

Frontend:
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui or equivalent accessible component primitives
- TanStack Query
- React Hook Form
- Zod

Backend:
- Node.js
- TypeScript
- NestJS or a clean modular Node architecture
- REST API
- OpenAPI

Persistence:
- PostgreSQL
- Prisma or equivalent robust ORM

Caching:
- Redis

Async processing:
- BullMQ or equivalent

Browser automation fallback:
- Playwright

Observability:
- structured logs
- request correlation IDs
- OpenTelemetry where reasonable
- Sentry-compatible error tracking

Infrastructure:
- Docker
- docker-compose for local environment
- production-ready environment configuration

Do not introduce microservices prematurely.

Prefer a modular monolith with clearly separated bounded contexts.

---

# 5. REQUIRED DOMAIN MODULES

Create explicit modules or equivalent boundaries for:

- auth
- users
- travel-search
- travel-discovery
- date-engine
- origin-airport-engine
- flights
- accommodations
- rental-cars
- ground-transport
- geo
- routes
- destination-intelligence
- weather-context
- trip-generator
- itinerary-engine
- pricing
- deal-scoring
- historical-prices
- provider-registry
- source-confidence
- saved-searches
- alerts-ready architecture
- analytics
- admin/diagnostics

The MVP may keep alerts disabled from UI if recurring infrastructure is not implemented yet, but schema/service boundaries must support them cleanly.

---

# 6. PROVIDER ABSTRACTION

Do NOT hardcode Skyscanner, Booking, or any provider into business logic.

Create provider interfaces.

Example:

```ts
interface FlightProvider {
  searchIndicative(...): Promise<IndicativeFlightResult[]>;
  searchLive(...): Promise<LiveFlightResult[]>;
  refreshPrice(...): Promise<LiveFlightResult>;
}
```

```ts
interface AccommodationProvider {
  search(...): Promise<AccommodationResult[]>;
  refreshPrice(...): Promise<AccommodationResult>;
}
```

Equivalent interfaces are required for:

- car rental;
- routing;
- weather;
- airport transfer;
- public transport;
- destination information.

Implement provider registry and capability discovery.

---

# 7. DATA SOURCE PRIORITY

The agent must investigate current official provider documentation before implementing integrations.

Priority:

Flights:
1. official Skyscanner APIs if credentials/access are available;
2. alternative legitimate flight APIs;
3. controlled browser automation only when legally and technically appropriate;
4. mock provider only for local development/testing.

Hotels:
1. Booking Demand API if credentials/access are available;
2. other legitimate accommodation APIs;
3. controlled browser automation only when appropriate;
4. mock provider only for testing.

Routes:
- a reliable maps/routing provider.

Weather:
- reliable weather API.

Rental cars:
- real provider/affiliate API if available.

IMPORTANT:

A mock provider must never be silently treated as production data.

Every result must expose:

- provider;
- retrievedAt;
- status:
  - LIVE
  - RECENT
  - ESTIMATED
  - MOCK
- confidence.

---

# 8. CORE DATA MODEL

Design a normalized database schema covering at least:

User

SearchSession

TravelQuery

TravelPreference

OriginLocation

OriginAirport

Destination

Airport

FlightSearch

FlightOption

FlightSegment

FlightPriceSnapshot

Accommodation

AccommodationOffer

AccommodationPriceSnapshot

CarRentalOffer

TransportOption

Route

RouteLeg

TripCandidate

TripVariant

TripCostBreakdown

Itinerary

ItineraryDay

ItineraryStop

DealScore

SourceRecord

PriceSnapshot

Provider

ProviderCredentialStatus

SearchExecution

SearchExecutionStep

DiagnosticEvent

SavedTrip

SavedSearch

The model must support:

- open-jaw flights;
- multi-city routes;
- multiple accommodation bases;
- no-car alternatives;
- road trips;
- multi-country trips;
- city + nature hybrids.

---

# 9. SEARCH PIPELINE

Implement this pipeline conceptually and architecturally:

```text
USER QUERY
  ↓
CONSTRAINT PARSER
  ↓
DATE COMBINATION GENERATOR
  ↓
ORIGIN AIRPORT DISCOVERY
  ↓
INDICATIVE FLIGHT DISCOVERY
  ↓
DESTINATION SHORTLIST
  ↓
LIVE FLIGHT VALIDATION
  ↓
ACCOMMODATION SEARCH
  ↓
TOTAL COST PRE-FILTER
  ↓
TRIP TYPE GENERATOR
  ↓
TRANSPORT / CAR / ROUTE ANALYSIS
  ↓
REAL DATA VALIDATION
  ↓
PRICE CALCULATION
  ↓
DEAL SCORE
  ↓
ITINERARY GENERATION
  ↓
RESULT EXPLANATION
```

Do NOT send thousands of expensive provider requests unnecessarily.

Implement staged filtering.

---

# 10. DATE ENGINE

The date engine must generate all valid trip combinations inside:

- availability start;
- availability end;
- min duration;
- max duration.

Support:

- exact duration;
- flexible duration;
- preferred duration;
- configurable nights vs calendar days.

Return:

- departure date;
- return date;
- nights;
- nominal days;
- estimated usable hours after flights are selected.

---

# 11. ORIGIN AIRPORT ENGINE

Given a city or coordinates:

- determine relevant airports;
- calculate access time;
- estimate access cost;
- support user-selected airports;
- allow exclusion.

A cheaper flight from a distant airport is NOT necessarily cheaper overall.

Origin access costs must participate in total trip cost.

---

# 12. TRIP TYPES

The generator must support at least:

- single city
- city + day trips
- single-region base
- road trip
- circular road trip
- open-jaw trip
- two-country trip
- multi-country trip
- nature-oriented trip
- hiking trip
- coastal trip
- city + nature hybrid
- public-transport-only trip
- car-based trip

Generate multiple variants when appropriate.

Example:

Slovenia:

- Ljubljana + Bled without car
- Ljubljana + Bled + Bohinj
- Slovenia road trip
- Slovenia + Croatia

Do not force unnecessary complexity.

---

# 13. ACCOMMODATION QUALITY FLOOR

Implement minimum accommodation quality logic.

Ranking must NOT simply choose the cheapest bed.

Consider:

- rating threshold;
- number of reviews;
- room type;
- safety/location;
- distance;
- cancellation;
- taxes;
- cleaning fees;
- parking if relevant.

Support:

`cheapest_available`

and:

`cheapest_acceptable`

Main ranking must default to `cheapest_acceptable`.

---

# 14. REAL TOTAL COST MODEL

Cost breakdown must support:

Origin access:
- fuel
- tolls
- parking
- train
- bus

Flights:
- fare
- taxes
- cabin baggage
- checked baggage
- mandatory fees

Accommodation:
- nightly rate
- taxes
- city tax
- cleaning
- mandatory fees

Destination transport:
- car rental
- fuel
- tolls
- vignette
- ferries
- parking
- public transport
- airport transfers

Separate:

`bookable_required_cost`

from:

`recommended_trip_budget`

Optional costs such as food and activities must not pollute the mandatory booking figure.

---

# 15. ROADTRIP DECISION ENGINE

A rental car must have states:

- NOT_RECOMMENDED
- OPTIONAL
- RECOMMENDED
- STRONGLY_RECOMMENDED

Compare:

- total cost;
- travel time;
- flexibility;
- route quality;
- parking burden;
- public transportation alternatives.

Example:

Istanbul:
NOT_RECOMMENDED.

Dolomites:
STRONGLY_RECOMMENDED.

---

# 16. ITINERARY REALISM

Do not produce unrealistic routes.

Support:

- max driving hours/day;
- max accommodation changes;
- pace:
  - relaxed
  - balanced
  - intensive.

Calculate real travel durations through routing data when available.

Penalize unnecessary hotel changes.

---

# 17. USABLE TIME

Calculate:

- arrival timestamp;
- departure timestamp;
- usable hours;
- usable days.

A 5-night trip arriving at midnight and departing at 06:00 must not score as highly as another trip with five genuinely usable days.

Implement:

`cost_per_usable_hour`.

---

# 18. DEAL SCORING ENGINE

Create a configurable scoring system.

Initial suggested model:

- 25% total cost
- 15% price quality/history
- 15% destination experience
- 10% accommodation quality
- 10% flight schedules
- 10% usable time
- 5% logistics
- 5% seasonal/weather suitability
- 5% user preference fit

Persist scoring components.

Never produce an opaque score only.

The UI must be able to show why each trip scored as it did.

---

# 19. HISTORICAL PRICING

Persist snapshots.

Support historical calculations for:

- flights;
- accommodation;
- car rental;
- complete trip.

Only state “X% cheaper than usual” when statistically supported.

Otherwise say:

`insufficient historical data`.

---

# 20. SEARCH EXECUTION STATE

Searches may involve many provider calls.

Implement observable execution states:

- queued
- searching_dates
- discovering_flights
- validating_flights
- checking_hotels
- building_routes
- calculating_costs
- ranking
- complete
- partial
- failed

The frontend must display meaningful progress.

Failures in one provider must not necessarily fail the entire search.

---

# 21. API CONTRACTS

Design endpoints such as:

POST /api/travel/discover

POST /api/travel/search

GET /api/searches/:id

GET /api/searches/:id/status

GET /api/searches/:id/results

GET /api/trips/:id

POST /api/trips/:id/refresh

POST /api/trips/:id/variants

GET /api/providers/status

GET /api/health

Use proper DTO validation.

---

# 22. MVP FRONTEND

Create the initial UX around:

## Discover page

Primary inputs:

- availability window
- duration
- travelers
- origin
- nearby airports
- destination region
- budget
- interests
- roadtrip preference
- pace

Primary CTA:

`Find my best trips`

Do NOT make the UX resemble a traditional airline search form.

---

# 23. RESULT EXPERIENCE

Results must show:

- destination/trip name;
- dates;
- trip type;
- total price/person;
- total price;
- flight price;
- accommodation price;
- car/transport price;
- days/nights;
- usable time;
- Deal Score;
- live/recent/estimated badges;
- reasons for ranking.

Tabs/filters:

- Best overall
- Cheapest
- Best city break
- Best nature
- Best roadtrip
- Best without car
- Best multi-country

---

# 24. TRIP DETAIL PAGE

Show:

- complete cost breakdown;
- flights;
- hotels;
- itinerary;
- maps/routes;
- trip variants;
- transport alternatives;
- source timestamps;
- verification confidence;
- ranking explanation.

Actions:

- refresh prices;
- save trip;
- compare;
- open provider booking link.

---

# 25. VARIANT EXPERIENCE

Every viable destination should support alternate trip structures when appropriate.

Example:

`Slovenia`

Variant A:
cheap/simple

Variant B:
nature

Variant C:
roadtrip

Variant D:
multi-country

Do not regenerate everything blindly.

Reuse cached provider data.

---

# 26. SECURITY

Implement:

- environment-based secrets;
- never expose provider API keys client-side;
- server-side provider calls;
- request validation;
- rate limiting;
- safe logging;
- credential redaction;
- SSRF protections if arbitrary URLs exist;
- secure cookies if authentication is used.

---

# 27. PROVIDER RATE LIMITING

Implement:

- provider-specific rate limits;
- caching;
- retries with jitter;
- circuit breakers or equivalent protections;
- concurrency limits.

No uncontrolled request storms.

---

# 28. DATABASE AND MIGRATIONS

Create real migrations.

Seed:

- basic destination metadata only where legitimate;
- airport reference data where needed;
- provider registry.

Do not seed fake prices into production tables.

---

# 29. TESTING STRATEGY

Implement:

Unit tests:
- date combinations
- pricing
- scoring
- usable time
- cost-per-usable-hour
- quality floor
- route penalties

Integration tests:
- provider adapters
- database
- search pipeline

End-to-end tests:
- discovery form
- search execution
- results
- filters
- trip detail
- refresh price

Use mocks only at test boundaries.

---

# 30. DEVELOPMENT EXPERIENCE

Provide:

.env.example

docker-compose.yml

database migrations

seed command

development command

test commands

README

provider setup documentation

production deployment notes

---

# 31. YOUR FIRST DELIVERABLE

Do not immediately build random UI.

First:

1. inspect repository;
2. create architecture assessment;
3. compare repository vs required capabilities;
4. create implementation plan;
5. create domain/module map;
6. create database plan;
7. define providers;
8. define search pipeline;
9. identify missing credentials;
10. identify what can be built immediately.

Then proceed to implementation.

Do not stop after the plan.

The plan is only the first step.

Continue implementing the complete phase described in this prompt.

---

# 32. DEFINITION OF DONE FOR THIS PROMPT

Before completing this phase, the repository must have:

- architecture established;
- domain modules created;
- DB schema/migrations;
- provider interfaces;
- source/confidence model;
- search execution model;
- date engine;
- basic pricing engine;
- deal scoring foundation;
- API skeleton;
- queue/cache architecture;
- local Docker environment;
- automated tests for core logic;
- documented implementation plan for remaining prompts.

Run:

- typecheck
- lint
- tests
- build
- migration validation

Fix failures caused by your work.

Do not claim checks passed unless you actually executed them.

Create a final implementation report containing:

- files changed;
- architecture decisions;
- tests run;
- remaining blockers;
- required provider credentials;
- exact next phase.