# Flight architecture and provenance

BotPlanner represents a flight as an explicit `FlightItinerary` with ordered user
legs. A two-leg itinerary is a round trip only when the second leg reverses the
first; otherwise it is an open jaw. Three or more user legs are multi-city. Provider
segments and connections remain optional details on each leg.

`Aviasales Data` is an indicative discovery provider. Its Data API observations are
always `RECENT`, including separately observed one-way legs composed into an open
jaw. Such composition is marked multi-ticket and does not receive a booking link for
the combined itinerary.

`Skyscanner Live` is an optional validation provider. It remains `UNAVAILABLE` until
credentials are configured; only a successful create/poll result is `LIVE`. Live
validation is deliberately reserved for short-listed variants (`MAX_LIVE_FLIGHT_ENRICHMENTS`), not broad discovery.

Airport access is independently represented as an estimate (distance/time) and does
not masquerade as a known fare. Roadtrip open-jaw variants retain their own flight
itinerary and disclose unknown one-way-car or airport-access prices.

Official provider references, accessed 2026-09-03:

- [Aviasales Data API](https://support.travelpayouts.com/hc/en-us/articles/203956163-Aviasales-Data-API)
- [Aviasales Flight Search API](https://support.travelpayouts.com/hc/en-us/articles/30565016140434-Aviasales-Flight-Search-API-real-time-and-multi-city-search)
- [Skyscanner Live Prices overview](https://developers.skyscanner.net/docs/flights-live-prices/overview)
- [Skyscanner multi-city](https://developers.skyscanner.net/docs/flights-live-prices/multiCity)
