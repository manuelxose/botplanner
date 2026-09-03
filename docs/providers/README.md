# Proveedores y procedencia

## Aviasales / Travelpayouts

Los resultados de precios se presentan como `RECENT`: son observaciones recientes, no una cotización reservable en directo. El precio de vuelo es por viajero y se multiplica explícitamente para obtener el total del grupo. La caché dura 10 minutos. Un enlace devuelto por el proveedor conserva el marcador de Travelpayouts cuando está configurado.

## Booking.com Demand API 3.1

`BookingComAccommodationProvider` usa `POST /accommodations/search` contra sandbox por defecto y producción sólo cuando `BOOKING_API_ENV=production`. Requiere `Authorization: Bearer <BOOKING_API_TOKEN>` y `X-Affiliate-Id: <BOOKING_AFFILIATE_ID>` en todas las solicitudes. Los resultados normalizados con precio son `LIVE`; el precio es el total de la estancia para las habitaciones solicitadas, nunca un multiplicador por viajero. La caché de disponibilidad dura 5 minutos y la clave incluye destino, fechas, adultos, habitaciones y mercado del booker.

Sin ambos secretos el proveedor se declara no disponible: no se sustituye por una estimación. Las URLs devueltas se preservan para no romper la atribución del afiliado. Investigación: [Booking authentication](https://developers.booking.com/demand/docs/development-guide/authentication) y [Accommodation v3.1 quick guide](https://developers.booking.com/demand/docs/accommodations/accommodation-v3.1-quick-guide), consultadas el 2026-09-03.
