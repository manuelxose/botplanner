# PROMPT 2 — REAL DATA PROVIDERS, DISCOVERY ENGINE, PRICING & TRIP GENERATION

Continue implementation of the Travel Discovery Engine from the existing repository state.

You have access to the attached MASTER USER STORY.

It remains authoritative.

Do NOT reimplement architecture already completed unless necessary.

Use the existing code graph/index if available to understand the repository before opening large numbers of files.

The purpose of this phase is to make the actual search intelligence operational.

---

# PRIMARY OBJECTIVE

Implement the backend pipeline capable of answering:

> “I have a travel window, flexible duration and origin area. Discover the best actual trips available, including city breaks, nature, road trips, no-car alternatives, multiple stops and multi-country routes, ranked using real total costs.”

The result must be based on externally sourced information.

Do not invent commercial values.

---

# 1. VERIFY CURRENT EXTERNAL APIS

Before implementing adapters:

Research current official documentation for:

- Skyscanner Flights APIs
- Booking Demand API
- rental car APIs available to the project
- maps/routing APIs
- weather APIs
- any alternative legitimate flight/hotel providers needed for fallback.

Do not rely on stale assumptions.

For every provider document:

- authentication method;
- rate limits;
- endpoints;
- data restrictions;
- attribution requirements;
- deep-link/affiliate support;
- caching restrictions;
- commercial limitations.

Document findings in:

`docs/providers/`

---

# 2. PROVIDER IMPLEMENTATIONS

Implement production-capable adapters for all providers for which credentials are available.

At minimum provide these logical providers:

Flights:
- primary live provider
- indicative/discovery provider
- fallback provider interface

Accommodation:
- primary hotel provider
- fallback interface

Routing:
- real route provider

Weather:
- real weather provider

Rental car:
- real provider if credentials/access available
- explicit unavailable-provider status otherwise.

If credentials are unavailable:

DO NOT block the entire project.

Implement:
- adapter;
- config;
- credential detection;
- development fixture/mock;
- tests.

Mark production capability as unavailable until configured.

---

# 3. INDICATIVE → LIVE PIPELINE

Avoid immediately firing live searches across every destination.

Implement staged discovery.

Example:

Stage A:
generate date windows.

Stage B:
origin airports.

Stage C:
indicative destination discovery.

Stage D:
rank indicative opportunities.

Stage E:
live flight validation for shortlist.

Stage F:
hotel lookup.

Stage G:
calculate total-trip pre-score.

Stage H:
route/trip generation.

Stage I:
final live validation.

Make shortlist sizes configurable.

---

# 4. DATE MATRIX

Implement robust generation for:

- availability range;
- min duration;
- max duration;
- preferred duration.

Support:

```text
available:
3 Oct → 12 Oct

duration:
4–6 days
```

Generate every valid combination.

Allow scoring preference toward ideal duration.

---

# 5. ORIGIN EXPANSION

Given:

`Vigo`

resolve suitable origin airports using distance/time thresholds.

Allow user overrides.

The engine must calculate airport access economics.

Example conceptual model:

```ts
interface OriginAccessCost {
  airportId: string;
  distanceKm: number;
  durationMinutes: number;
  fuelCost?: number;
  tollCost?: number;
  parkingCost?: number;
  publicTransportCost?: number;
  selectedMethod: "CAR" | "TRAIN" | "BUS" | "OTHER";
  totalCost: number;
}
```

Include the cost in final trip price.

---

# 6. DESTINATION SHORTLISTING

Build filters that remove obvious bad deals before expensive queries.

Consider:

- flight cost;
- flight duration;
- schedule;
- transfer complexity;
- likely accommodation affordability;
- user preferences;
- region;
- exclusion rules.

Do NOT use hallucinated “typical hotel cost” as if factual.

Where no current data exists, mark estimate explicitly.

---

# 7. HOTEL SEARCH

For every shortlisted flight destination:

retrieve real accommodation offers.

Search according to:

- exact dates;
- travelers;
- rooms;
- quality floor;
- location;
- rating;
- review count;
- taxes;
- mandatory fees;
- cancellation;
- parking where relevant.

Normalize offers.

Create:

- cheapest available;
- cheapest acceptable;
- best value;
- central/best located.

The cheapest acceptable accommodation should drive the main price ranking unless overridden.

---

# 8. FALSE-BARGAIN FILTER

Implement logic that detects:

cheap flight + expensive trip.

Example:

flight = 45
hotel = 900

should not automatically outrank:

flight = 120
hotel = 300

The ranking pipeline must operate on total bookable trip cost.

---

# 9. FLIGHT NORMALIZATION

Support:

- direct flights;
- connections;
- different outbound and return airlines;
- open-jaw;
- multi-city when provider supports it;
- airport changes;
- self-transfer metadata.

Capture:

- total duration;
- departure time;
- arrival time;
- overnight flights;
- baggage assumptions;
- provider/deep link.

---

# 10. USABLE TIME ENGINE

Calculate real usable travel time.

Penalize:

- arrivals late at night;
- departures early in the morning;
- extremely long transfers.

Expose:

```text
calendar_days
nights
usable_hours
usable_day_equivalent
cost_per_usable_hour
```

---

# 11. TRIP STRUCTURE GENERATOR

For each viable destination, consider which trip structures make sense.

Possible variants:

- single city
- city + day trips
- city + nearby nature
- regional base
- two bases
- road trip
- circular road trip
- open jaw
- two-country
- multi-country
- hiking/nature
- coast
- mixed city/nature

Do NOT generate all variants for every destination.

Use heuristics.

Example:

Istanbul:
- single city
- optional day trip
- no car.

Slovenia:
- city/base
- nature
- roadtrip
- possible cross-border variant.

---

# 12. DESTINATION INTELLIGENCE

Build factual destination context from reliable sources.

The system needs enough structured information to reason about:

- attractions;
- nature;
- hiking;
- geography;
- roadtrip suitability;
- transport;
- seasonality;
- border crossings;
- driving conditions;
- approximate route structure.

LLM reasoning may assemble itineraries.

LLM must NOT invent operational facts.

---

# 13. ROUTE ENGINE

For trip variants:

calculate actual:

- distances;
- travel times;
- route legs.

Support:

- car;
- public transport metadata where available.

Reject unrealistic itineraries.

Configurable constraints:

- max driving per day;
- maximum lodging changes;
- pace.

---

# 14. CAR DECISION

Calculate whether the car improves the trip.

Produce:

```text
NOT_RECOMMENDED
OPTIONAL
RECOMMENDED
STRONGLY_RECOMMENDED
```

Reasons should include:

- public transport quality;
- route geography;
- total cost;
- parking;
- road travel time;
- flexibility.

---

# 15. NO-CAR VARIANTS

Where practical, generate explicit no-car alternatives.

The user must be able to compare:

```text
Slovenia roadtrip — €X
Slovenia without car — €Y
```

The no-car alternative should not be an afterthought.

It is a first-class variant.

---

# 16. MULTI-STOP OPTIMIZATION

Generate sensible alternatives with:

- fewer stops;
- normal stops;
- more intensive stops.

Example:

Relaxed:
Ljubljana + Bled

Balanced:
Ljubljana + Bled + Bohinj

Intensive:
Ljubljana + Bled + Bohinj + Piran

Score logistical cost.

---

# 17. OPEN-JAW ENGINE

Test open-jaw when geographically useful.

Example:

arrive Vienna

leave Budapest.

Compare against:

returning to Vienna.

Factors:

- flight price;
- transport savings;
- extra accommodation;
- route efficiency;
- usable time.

---

# 18. PRICE CALCULATION

Implement a deterministic pricing service.

Each trip must include:

```ts
{
  originAccess,
  flights,
  accommodation,
  rentalCar,
  carFuel,
  tolls,
  parking,
  publicTransport,
  airportTransfers,
  ferries,
  requiredFees,
  mandatoryTaxes,
  totalRequiredCost,
  perPersonRequiredCost,
  optionalBudgetEstimate,
  recommendedBudget
}
```

Do not double-count.

Document assumptions.

---

# 19. LIVE / RECENT / ESTIMATED / MOCK

Every material numeric value must retain provenance.

Example:

```ts
{
  amount: 118.20,
  currency: "EUR",
  source: "provider-x",
  retrievedAt: "...",
  status: "LIVE",
  confidence: 1
}
```

Never merge values in a way that loses provenance.

---

# 20. HISTORICAL SNAPSHOTS

Persist price snapshots.

Implement enough analytics to support:

- current vs prior searches;
- min/median observed;
- trend;
- confidence.

Do NOT claim “usual price” unless enough history exists.

---

# 21. DEAL SCORE

Complete the configurable scorer.

Provide components and explanation.

Example:

```json
{
  "score": 93,
  "components": {
    "totalCost": 96,
    "schedule": 82,
    "accommodation": 90,
    "usableTime": 95,
    "logistics": 87,
    "weather": 75,
    "preferenceFit": 98
  }
}
```

Support filtered rankings:

- best overall;
- cheapest;
- city;
- nature;
- roadtrip;
- no-car;
- multi-country.

---

# 22. EXPLAINABLE RECOMMENDATIONS

Generate structured reasons.

Examples:

Positive:

- cheaper hotels compensate for more expensive flight;
- excellent usable flight schedule;
- low ground-transport cost;
- strong nature match.

Negative:

- cheap flight but accommodation makes trip expensive;
- poor departure time loses a day;
- roadtrip requires excessive driving;
- airport access eliminates apparent saving.

No vague AI-only reasoning.

Reasons must reference computed features.

---

# 23. SEARCH CACHING

Implement caching carefully.

Cache:

- airport metadata;
- destination metadata;
- indicative results;
- routing;
- weather where appropriate;
- recent provider results according to provider terms.

Do not serve stale commercial prices as live.

---

# 24. PARTIAL FAILURE

The search should tolerate:

- one provider timing out;
- rental car data unavailable;
- weather unavailable;
- one route failing.

Return partial results with explicit warnings.

---

# 25. REAL-WORLD EXAMPLE TEST

Create an integration/e2e scenario equivalent to:

```text
Travelers: 2
Availability: Oct 3–12, 2026
Duration: 4–6 days
Origin: Vigo
Nearby airports: VGO, SCQ, LCG, OPO
Destination: ANY
Regions: Europe + Turkey
Interests:
- city
- nature
- roadtrip
Allow car: if useful
Allow multi-country: yes
```

Do NOT hardcode expected destinations or prices.

Test the pipeline behavior and output structure.

---

# 26. API RESPONSE REQUIREMENTS

The final discover endpoint must expose ranked trips such as:

```json
{
  "searchId": "...",
  "results": [
    {
      "tripId": "...",
      "title": "...",
      "tripType": "...",
      "dates": {},
      "price": {},
      "usableTime": {},
      "flight": {},
      "accommodation": {},
      "transport": {},
      "dealScore": {},
      "reasons": [],
      "warnings": [],
      "sources": [],
      "variants": []
    }
  ]
}
```

---

# 27. PRICE REFRESH

Implement trip refresh.

When user requests refresh:

1. refresh flight;
2. refresh accommodation;
3. refresh rental car if present;
4. update required transport;
5. recalculate;
6. show delta.

Example response:

```text
previous: €281
current: €296
difference: +€15
```

---

# 28. ADMIN DIAGNOSTICS

Provide internal visibility for:

- provider status;
- provider latency;
- errors;
- rate limits;
- cache;
- recent searches;
- pipeline failures.

Do not build a giant admin system.

Build enough to diagnose MVP operations.

---

# 29. TESTS

Add thorough tests for:

- date generation;
- origin airport cost;
- flight normalization;
- accommodation quality floor;
- trip pricing;
- usable hours;
- route constraints;
- car recommendation;
- open-jaw comparison;
- variants;
- scoring;
- historical claims;
- provider failure fallback.

Run full validation.

---

# 30. DEFINITION OF DONE

At the end of this prompt:

A real search request must be able to move through the complete backend pipeline.

For configured real providers:

- retrieve real data.

For missing providers:

- clearly report missing capability.

No production result may silently use fake data.

The system must be able to generate multiple viable trip types and rank them by total economics and quality.

Run:

- unit tests
- integration tests
- typecheck
- lint
- build
- Docker startup
- DB migrations

Fix errors caused by implementation.

Provide a final report:

- real providers operational;
- missing credentials;
- pipeline stages complete;
- tests;
- known limitations;
- next phase requirements.