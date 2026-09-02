# Proveedores y procedencia

El MVP separa los contratos de vuelos, alojamiento, rutas y meteorología de la lógica de negocio. En este estado no hay credenciales configuradas ni adaptadores live, por lo que `POST /api/discover` usa únicamente fixtures con `status: MOCK` y confianza `0.1`.

Antes de activar producción hay que documentar y configurar un proveedor oficial para cada capacidad, respetar sus límites, atribución, enlaces de reserva y restricciones de caché. Los valores de los fixtures no representan precios reales.
