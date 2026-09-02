# PROMPT 3 — COMPLETE MVP UX/UI, CONVERSATIONAL REFINEMENT, VALIDATION & PRODUCTION READINESS

Continue from the existing Travel Discovery Engine implementation.

The attached MASTER USER STORY remains authoritative.

The backend discovery pipeline should already exist from the prior phases.

Your mission is now to make the MVP genuinely usable end-to-end.

The final product must allow a normal user to perform discovery, evaluate alternatives, compare trip structures, refine the request conversationally and follow real provider links.

Do NOT create placeholder screens.

Do NOT stop at a visual prototype.

---

# 1. UX PRINCIPLE

The product is NOT Skyscanner with a different skin.

The main user question is:

> “I know when I can travel. Find the best trip for me.”

Design around this.

---

# 2. MAIN DISCOVER EXPERIENCE

Create a polished discovery screen.

Primary fields:

## Availability

- earliest departure
- latest return

## Duration

- minimum
- ideal
- maximum

## Travelers

- adults
- children if supported

## Origin

- city/location
- nearby airports automatically discovered
- allow manual airport toggles

## Destination

Default:

`Anywhere`

Optional:

- Europe
- specific countries
- Turkey
- custom region
- exclude destinations

## Budget

Optional:

- total
- per person.

## Interests

Multi-select:

- city
- culture
- food
- nightlife
- nature
- hiking
- coast
- mountains
- roadtrip
- relaxation
- multi-country.

## Car preference

- avoid car
- use if useful
- prefer roadtrip.

## Pace

- relaxed
- balanced
- intensive.

## Accommodation

- minimum rating;
- category;
- private room;
- free cancellation;
- maximum changes.

## Flights

- direct preferred;
- max stops;
- baggage;
- avoid bad departure times.

CTA:

`Find my best trips`

---

# 3. PROGRESS EXPERIENCE

Searches may take time because real providers are involved.

Create a meaningful progress UI showing pipeline steps such as:

- Finding date combinations
- Checking airports
- Discovering cheap flights
- Validating live fares
- Checking accommodation
- Evaluating road trips
- Comparing transport
- Ranking trips

Do not fake progress percentages.

Use real backend execution state.

---

# 4. RESULTS PAGE

Do not dump raw travel offers.

Create a decision dashboard.

Top summary:

- number of viable trips found;
- price range;
- date combinations analyzed;
- airports analyzed.

Primary ranking tabs:

- Best overall
- Cheapest
- Best city break
- Best nature
- Best roadtrip
- Best without car
- Best multi-country

Filters:

- price;
- dates;
- trip duration;
- airport;
- direct flights;
- car/no car;
- accommodation rating;
- trip type;
- country.

---

# 5. TRIP CARD

Each card must show immediately:

Destination/trip:

`Slovenia — Lakes & Mountains`

Dates:

`5–10 October`

Trip type:

`Nature + roadtrip`

Price:

`€284/person`

Total:

`€568 / 2 travelers`

Breakdown:

- Flights €184
- Accommodation €246
- Car/transport €138

Deal Score:

`94 / 100`

Duration:

- 5 nights
- 4.8 usable days

Price state:

`LIVE`

Last checked:

timestamp.

Reasons:

- low accommodation cost;
- excellent usable flight schedule;
- compact roadtrip;
- strong nature match.

Warnings:

- car strongly recommended;
- expected cool weather.

Actions:

- View trip
- Compare
- Save
- Refresh price

---

# 6. EXPENSIVE-HOTEL EXPLANATION

Support negative insights.

Example:

```text
Amsterdam had one of the cheapest flights in your dates,
but acceptable accommodation raises the trip to €512/person.
It therefore ranks below Budapest and Istanbul.
```

This is central to product trust.

---

# 7. TRIP DETAIL PAGE

Create a rich detail page.

Sections:

## Hero

- destination;
- dates;
- total price;
- per person;
- score;
- last verification.

## Price breakdown

Interactive breakdown.

## Flights

- outbound;
- return;
- carrier;
- times;
- stops;
- baggage assumption;
- booking link.

## Accommodation

- property;
- rating;
- reviews;
- location;
- room;
- cancellation;
- fees;
- booking link.

## Itinerary

Day by day.

## Map

Visualize route.

## Transport

- car;
- trains;
- public transport;
- transfer alternatives.

## Weather / season context

Only sourced information.

## Why this trip

Explain ranking.

## Risks / tradeoffs

Explicit.

---

# 8. VARIANT SELECTOR

Every trip capable of supporting alternatives should show:

Example Slovenia:

### Simple
Ljubljana + Bled

### Nature
Ljubljana + Bled + Bohinj

### Roadtrip
Ljubljana + Bled + Bohinj + Piran

### Multi-country
Slovenia + Croatia

For each variant show:

- price;
- travel time;
- changes of hotel;
- driving time;
- days useful;
- score.

Make comparison instantaneous.

Reuse already fetched data.

---

# 9. ROADTRIP DETAIL

For car itineraries display:

- pickup airport;
- rental period;
- estimated car cost;
- fuel;
- tolls;
- vignette;
- parking;
- total driving km;
- driving hours/day;
- route stops.

Show recommendation:

`Car strongly recommended`

with reasons.

---

# 10. NO-CAR ALTERNATIVE

Where possible, display a no-car comparison.

Example:

```text
ROADTRIP
€322/person
8h driving
high flexibility

WITHOUT CAR
€268/person
train + bus
lower flexibility
```

Give a reasoned recommendation.

---

# 11. MULTI-COUNTRY / OPEN-JAW

For multi-country routes make the structure obvious.

Example:

```text
Vienna
↓
Bratislava
↓
Budapest
```

Flights:

```text
OPO → Vienna
Budapest → OPO
```

Compare against roundtrip version when available.

---

# 12. NATURE/HIKING EXPERIENCE

For nature trips show:

- trail/area;
- distance when sourced;
- difficulty when sourced;
- seasonal suitability;
- weather;
- transport access;
- required car.

Do not fabricate hiking data.

---

# 13. CITY TRIP EXPERIENCE

For city trips:

- number of useful days;
- neighborhood/accommodation context;
- airport transfer;
- public transportation;
- optional day trips.

Avoid recommending a rental car unnecessarily.

---

# 14. CONVERSATIONAL REFINEMENT

Add conversational trip refinement.

The user should be able to ask:

- “What about without a car?”
- “Something with more nature?”
- “Maximum €250 per person.”
- “Only direct flights.”
- “Can we do two countries?”
- “Reduce it to four days.”
- “Anything better than Istanbul?”
- “Leave from Porto only.”
- “Fewer hotel changes.”
- “More hiking.”

Do NOT restart the entire search when unnecessary.

Translate conversational changes into structured constraint patches.

Example:

```json
{
  "budgetPerPersonMax": 250,
  "allowCar": false
}
```

Then rerank/recompute appropriately.

---

# 15. CHAT SAFETY AGAINST INVENTED DATA

The assistant layer must be tool/data grounded.

It can say:

`I do not currently have a live car price for this option.`

It must NOT make up a number.

Require data provenance in responses.

---

# 16. COMPARISON EXPERIENCE

Allow selection of 2–4 trips.

Comparison dimensions:

- total/person;
- total trip;
- flights;
- hotel;
- car/transport;
- usable days;
- travel hours;
- hotel quality;
- roadtrip km;
- stops;
- countries;
- Deal Score;
- weather context;
- live status.

Highlight meaningful differences.

---

# 17. REAL PRICE REFRESH UX

When user presses:

`Refresh price`

show:

- checking flight;
- checking hotel;
- checking car;
- recalculating.

Result:

```text
Previous €284
Current €292
+€8
Verified 16:42
```

Do not simply refetch the page.

---

# 18. PROVIDER LINKS

Use provider deep links where supported.

Open:

- flight offer;
- hotel offer;
- rental car offer.

Make source identity clear.

Track affiliate-ready outbound clicks.

Do not misrepresent the app as the merchant unless it actually handles bookings.

---

# 19. RESPONSIVE DESIGN

The application must work excellently on:

- mobile;
- tablet;
- desktop.

Travel discovery is highly mobile.

Avoid desktop-only data tables.

Use:

- cards;
- drawers;
- comparison sheets;
- responsive map layouts.

---

# 20. VISUAL DESIGN

Create a premium contemporary travel interface.

Avoid:

- generic admin-dashboard look;
- dense form walls;
- excessive gradients;
- placeholder illustrations;
- overly playful consumer UI.

Prioritize:

- photography where legitimate;
- strong typography;
- whitespace;
- clear price hierarchy;
- map support;
- meaningful status indicators.

---

# 21. ACCESSIBILITY

Implement:

- semantic HTML;
- labels;
- keyboard navigation;
- adequate contrast;
- accessible dialogs;
- proper loading states;
- error states;
- reduced motion support.

---

# 22. EMPTY / ERROR STATES

Handle:

- no flights;
- flights found but no acceptable hotels;
- provider unavailable;
- only partial results;
- no real rental car data;
- price changed;
- trip no longer bookable.

Messages must be explicit.

---

# 23. ADMIN / OPERATIONS

Build minimal operational screens:

Providers:
- status;
- credentials configured;
- last success;
- latency;
- rate limit errors.

Searches:
- recent search executions;
- duration;
- failures;
- stages.

Diagnostics:
- failure details;
- safe error context.

No secrets exposed.

---

# 24. PERFORMANCE

Optimize:

- server rendering where appropriate;
- query caching;
- pagination/infinite list;
- lazy route maps;
- avoid rendering huge result sets;
- reuse search-session data.

Measure key endpoints.

---

# 25. SEO

Public destination/editorial pages may be SEO-friendly.

Search results containing personalized pricing should not accidentally create massive crawlable duplicate pages.

Set canonical/indexing strategy correctly.

---

# 26. ANALYTICS EVENTS

Define analytics for:

- discovery_started;
- search_completed;
- filter_changed;
- trip_viewed;
- variant_changed;
- compare_started;
- price_refreshed;
- provider_link_clicked;
- trip_saved.

Do not log sensitive values unnecessarily.

---

# 27. E2E REAL USER FLOW

Implement and validate this complete flow:

1. user opens app;
2. chooses Discover;
3. enters:
   - Oct 3–12, 2026
   - duration 4–6 days
   - Vigo
   - nearby airports enabled
   - Europe + Turkey
   - 2 people
   - city + nature + roadtrip
   - car if useful;
4. starts search;
5. sees real execution progress;
6. receives ranked results;
7. switches to Nature;
8. opens one trip;
9. compares roadtrip vs no-car;
10. changes via chat:
    “maximum €300/person”;
11. results update;
12. selects two trips;
13. compares them;
14. refreshes one price;
15. opens provider booking link.

This flow must be covered by E2E tests.

---

# 28. REALISTIC DATA VALIDATION

When production provider credentials are available, manually verify sample search outputs against the provider source.

Document:

- search timestamp;
- provider;
- input;
- returned price;
- app-normalized price.

Never claim exact matching if provider API and public site have different inventory.

---

# 29. MVP ACCEPTANCE CRITERIA

The MVP is NOT complete unless all of these work:

- destination discovery;
- flexible dates;
- nearby airports;
- real flight provider integration;
- real hotel provider integration;
- total trip pricing;
- expensive-hotel false bargain filtering;
- city-trip generation;
- nature-trip generation;
- roadtrip generation;
- no-car alternatives;
- multi-stop variants;
- open-jaw support architecture and execution where provider allows;
- multi-country variants;
- real route calculations;
- car recommendation;
- accommodation quality floor;
- useful-day calculation;
- price-per-usable-hour;
- Deal Score;
- price provenance;
- live/recent/estimated badges;
- trip details;
- ranking explanation;
- conversational refinement;
- comparison;
- price refresh;
- provider links;
- responsive UI;
- error handling;
- operational diagnostics.

Do not mark the project “MVP complete” while any major item above is represented only by fake data or placeholder UI.

---

# 30. FINAL PRODUCTION VALIDATION

Run:

Frontend:
- lint
- typecheck
- unit tests
- E2E tests
- production build

Backend:
- lint
- typecheck
- unit tests
- integration tests
- production build

Infrastructure:
- docker-compose up
- migrations
- seed
- Redis connectivity
- PostgreSQL connectivity
- worker execution
- API health checks

Test responsive layouts.

Fix failures introduced by implementation.

---

# 31. FINAL DELIVERABLE

At completion create:

`docs/MVP-COMPLETION-REPORT.md`

containing:

## Implemented

Every requirement and location in code.

## Providers

For each provider:

- operational;
- credentials missing;
- unavailable;
- fallback.

## Live-data coverage

Exactly what is genuinely live.

## Estimated data

Exactly what remains estimated.

## Tests

Commands and results.

## Known limitations

Concrete limitations.

## Deployment

Exact steps.

## Environment variables

All required variables without values.

## Demo scenario

Exact steps to reproduce the October 3–12 discovery use case.

The final response to the operator must state clearly:

- whether the MVP is genuinely complete;
- which provider integrations are live;
- which capabilities are degraded because credentials/access are missing;
- which validation commands actually passed.

Do not claim production readiness unless the implementation and tests support that conclusion.