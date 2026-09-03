# BotPlanner

BotPlanner discovers destinations from a flexible date window, several departure airports and a target budget. It ranks travel opportunities rather than asking the traveller to pick a destination first.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4100`. Copy `.env.example` to `.env` (or export variables in your shell) and add a Travelpayouts API token:

```env
TRAVELPAYOUTS_TOKEN=your_token
TRAVELPAYOUTS_MARKER=optional_affiliate_marker
```

Tokens are available from the Travelpayouts profile API token section. Without one, the application starts normally but clearly reports that flight discovery is unavailable; it never substitutes mock results.

## Architecture

- `src/domain`: travel query, provenance and recommendation models.
- `src/application`: provider contract, date generation and ranking/discovery pipeline.
- `src/infrastructure/providers/aviasales`: Travelpayouts HTTP adapter with timeout and in-memory ten-minute query cache.
- `src/server.ts`: small HTTP API and static UI host.
- `public/`: standalone responsive travel-search UI.

`POST /api/discover` accepts `origins` (IATA codes), a date window, min/max nights, traveller count and an optional budget. It returns `data` plus explicit provider metadata and warnings.

## Data guarantees and limitations

The Aviasales Data API returns cached ticket observations. BotPlanner marks them `RECENT`, never `LIVE`. Accommodation is currently a clearly labelled `ESTIMATED` heuristic; local transport and origin access are `UNAVAILABLE` until their providers are connected. Consequently the response distinguishes a known flight price from an estimated trip cost.

Current destination labels are best-effort airport-code labels when Aviasales does not supply city metadata. Booking links are shown only when the provider returns a valid search token.

## Validate

```bash
npm run typecheck
npm test
```
