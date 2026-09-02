# Historia de Usuario Maestra — Travel Discovery Engine

## 1. Objetivo

Como viajero que dispone de una ventana concreta de fechas pero no necesariamente conoce el destino, quiero que la aplicación analice destinos, vuelos, alojamientos, transporte y posibles itinerarios utilizando información y precios reales para recomendarme los mejores viajes posibles según mi presupuesto, tiempo disponible, preferencias y relación calidad/precio.

La aplicación no debe limitarse a responder:

> “El vuelo más barato es a X.”

Debe responder:

> “Estas son las mejores formas reales de viajar dentro de tus restricciones, cuánto cuestan realmente, qué incluye cada opción, qué alternativas existen y cuál ofrece mayor valor.”

---

# 2. Principio fundamental

El sistema debe optimizar:

**experiencia real / coste total / tiempo disponible**

y no:

**precio mínimo del vuelo**

Un vuelo de 25 € puede ser una mala opción si:

* el alojamiento cuesta 220 €/noche;
* llega a un aeropuerto remoto;
* exige un traslado caro;
* tiene horarios poco aprovechables;
* obliga a alquilar coche;
* requiere pagar equipaje;
* el regreso es muy caro;
* apenas deja días útiles;
* el destino resulta caro en esas fechas.

Por tanto, ninguna oportunidad debe considerarse buena hasta haber calculado el viaje completo.

---

# 3. Modos de búsqueda

La aplicación tendrá al menos dos modos principales.

## Modo A — Destination Search

El usuario sabe dónde quiere ir.

Ejemplo:

* Estambul
* Roma
* Islandia
* Dolomitas

La aplicación optimiza:

* fechas;
* aeropuerto de salida;
* vuelos;
* alojamiento;
* duración;
* transporte;
* posibles rutas.

---

## Modo B — Travel Discovery

El usuario no sabe dónde ir.

Este será uno de los modos principales de la aplicación.

Ejemplo:

> Tengo libres del 3 al 12 de octubre.
> Quiero viajar entre 4 y 6 días.
> Salgo desde Vigo pero puedo ir a Porto, Santiago o A Coruña.
> No sé dónde quiero ir.
> Podemos alquilar coche si merece la pena.

La aplicación debe descubrir las oportunidades.

---

# 4. Datos de entrada

La consulta puede incluir:

| Campo                    |         Obligatorio | Ejemplo                      |
| ------------------------ | ------------------: | ---------------------------- |
| Inicio ventana           |                  Sí | 03/10/2026                   |
| Fin ventana              |                  Sí | 12/10/2026                   |
| Duración mínima          |                  Sí | 4 días                       |
| Duración máxima          |                  Sí | 6 días                       |
| Nº viajeros              |                  Sí | 2                            |
| Ciudad de origen         |                  Sí | Vigo                         |
| Aeropuertos alternativos | Opcional/automático | VGO, SCQ, LCG, OPO           |
| Presupuesto              |            Opcional | 350 €/persona                |
| Región                   |            Opcional | Europa                       |
| Destinos excluidos       |            Opcional | destinos ya visitados        |
| Preferencias             |            Opcional | naturaleza, ciudades         |
| Coche                    |   Sí/No/Si compensa | Si compensa                  |
| Ritmo del viaje          |            Opcional | tranquilo / normal / intenso |
| Máx. cambios de hotel    |            Opcional | 2                            |
| Equipaje                 |                  Sí | mochila / cabina / facturado |
| Horarios aceptables      |            Opcional | evitar madrugada             |
| Escalas                  |            Opcional | directos preferidos          |
| Nivel hotel              |            Opcional | mínimo 3★                    |
| Rating mínimo            |            Opcional | 8/10                         |
| Tipo de habitación       |            Opcional | doble                        |
| Cancelación              |            Opcional | preferiblemente gratuita     |

La aplicación debe funcionar incluso cuando muchos campos no se indiquen.

En ese caso utiliza valores razonables y muestra claramente qué supuestos ha empleado.

---

# 5. Generación automática de fechas

El usuario establece una ventana disponible.

Ejemplo:

**3-12 octubre**

con:

**4-6 días de viaje**

El sistema genera automáticamente todas las combinaciones válidas.

Ejemplo:

* 3 → 7
* 3 → 8
* 3 → 9
* 4 → 8
* 4 → 9
* 4 → 10
* 5 → 9
* 5 → 10
* 5 → 11
* 6 → 10
* 6 → 11
* 6 → 12
* 7 → 11
* 7 → 12
* 8 → 12

Debe distinguir entre:

* días naturales;
* noches;
* horas reales de viaje;
* horas útiles en destino.

---

# 6. Aeropuertos de origen

El sistema no debe limitarse al aeropuerto más cercano.

Debe calcular automáticamente aeropuertos razonables según:

* distancia;
* tiempo de conducción;
* tren;
* autobús;
* peajes;
* combustible;
* parking;
* transporte público;
* coste total de desplazamiento.

Ejemplo para Vigo:

* VGO
* SCQ
* LCG
* OPO

Pero nunca debe asumir que Porto es más barato simplemente porque el vuelo cuesta menos.

Debe comparar:

**VGO**

vuelo + desplazamiento local

contra:

**OPO**

vuelo + combustible + peajes + parking + tiempo extra.

---

# 7. Descubrimiento de destinos

El sistema debe explorar automáticamente destinos válidos dentro de la región permitida.

Debe poder descubrir:

* capitales;
* ciudades secundarias;
* islas;
* naturaleza;
* montaña;
* costa;
* rutas;
* regiones;
* destinos multi-país;
* destinos accesibles desde un aeropuerto barato.

El aeropuerto de llegada no debe considerarse necesariamente el destino final.

Ejemplo:

**vuelo a Bérgamo**

puede convertirse en:

* Bérgamo;
* Milán;
* Lago di Como;
* Lago di Garda;
* Dolomitas;
* ruta por Lombardía.

---

# 8. Tipos de viaje que debe generar

Para cada oportunidad interesante, el sistema debe estudiar varias estructuras.

## A. Una sola ciudad

Ejemplo:

**5 días en Estambul**

Adecuado cuando:

* existe suficiente contenido;
* desplazarse añade poco valor;
* el transporte público es bueno;
* cambiar alojamiento empeora la experiencia.

---

## B. Ciudad + excursiones

Ejemplo:

**Budapest + Szentendre + Danubio**

Una única base.

Ventajas:

* sin cambios de hotel;
* menor coste;
* menos logística.

---

## C. Una región con coche

Ejemplo:

**Bérgamo → Como → Garda → Verona**

Adecuado cuando el coche aporta valor.

---

## D. Roadtrip circular

Ejemplo:

**Zagreb → Ljubljana → Bled → Zagreb**

Entrada y salida por el mismo aeropuerto.

---

## E. Open-jaw

Ejemplo:

**Viena → Bratislava → Budapest**

Vuelo:

* llegada a Viena;
* regreso desde Budapest.

El sistema debe comprobar si evitar volver al punto inicial mejora:

* precio;
* tiempo;
* kilometraje;
* experiencia.

---

## F. Dos países

Ejemplo:

* Austria + Eslovaquia;
* Hungría + Austria;
* Croacia + Eslovenia.

---

## G. Multi-país

Solo cuando sea razonable.

Nunca debe añadir países simplemente para hacer el itinerario más espectacular.

---

## H. Naturaleza

Ejemplos:

* Dolomitas;
* Eslovenia;
* Tatras;
* Alpes;
* lagos;
* parques nacionales.

Debe incorporar:

* clima previsto/estacional;
* carreteras;
* tiempos de conducción;
* accesibilidad;
* senderos;
* dificultad;
* duración;
* posibles cierres estacionales.

---

## I. Hiking / rutas

El viaje puede construirse alrededor de:

* senderismo;
* rutas panorámicas;
* miradores;
* lagos;
* parques;
* cascadas;
* rutas costeras.

Ejemplo:

**4 días Eslovenia**

* Ljubljana;
* Bled;
* Bohinj;
* ruta de senderismo.

---

## J. Costa / descanso

Puede priorizar:

* playas;
* temperaturas;
* alojamiento;
* acceso sin coche;
* proximidad aeropuerto.

---

## K. Viaje híbrido

Ejemplo:

**2 noches ciudad + 3 noches naturaleza**

---

# 9. Generación de variantes

Una misma oportunidad debe producir alternativas.

Ejemplo:

## Opción descubierta: Eslovenia

### Variante 1 — Tranquila

Ljubljana + Bled

* 1 hotel o 2 hoteles;
* pocos kilómetros;
* transporte público posible.

### Variante 2 — Naturaleza

Ljubljana + Bled + Bohinj

* coche recomendado;
* senderismo.

### Variante 3 — Roadtrip

Ljubljana → Bled → Bohinj → Piran

### Variante 4 — Multi-país

Ljubljana → Bled → Zagreb

Cada variante debe calcularse independientemente.

---

# 10. Motor de vuelos

Para cada combinación debe recuperar datos reales.

Debe contemplar:

* precio ida;
* precio vuelta;
* ida y vuelta combinada;
* directos;
* escalas;
* distintas aerolíneas;
* diferentes aeropuertos;
* open-jaw;
* equipaje;
* tarifas;
* horarios;
* duración;
* cambio de aeropuerto;
* self-transfer cuando exista.

El precio mostrado debe indicar:

* fuente;
* fecha/hora de consulta;
* moneda;
* nivel de verificación.

---

# 11. Motor de alojamiento

El alojamiento forma parte del cálculo inicial.

No debe buscarse después de decidir el destino.

Debe analizar:

* hotel;
* apartamento;
* hostal;
* aparthotel;
* guesthouse;
* etc.

Y comparar:

* precio total;
* precio/noche;
* impuestos;
* tasas;
* limpieza;
* desayuno;
* parking;
* cancelación;
* ubicación;
* puntuación;
* número de reseñas;
* distancia al centro;
* transporte.

---

# 12. Evitar la falsa ganga del hotel

Si un destino tiene:

**vuelo 45 €**

pero los alojamientos razonables cuestan:

**220 €/noche**

no debe aparecer automáticamente entre las primeras opciones.

Ejemplo:

### Destino A

Vuelo:

80 €

Hotel:

80 € × 5 = 400 €

Total aproximado:

480 €

### Destino B

Vuelo:

145 €

Hotel:

45 € × 5 = 225 €

Total:

370 €

El destino B debe situarse por delante cuando el objetivo sea precio total.

---

# 13. Umbral de alojamiento razonable

Nunca debe utilizarse el alojamiento absolutamente más barato si su calidad no es aceptable.

Debe existir un `Accommodation Quality Floor`.

Ejemplo:

* rating ≥ 7,5;
* mínimo determinado de reviews;
* zona razonablemente segura;
* distancia aceptable;
* habitación privada si así se solicita.

La aplicación puede mostrar:

**Más barato disponible**

pero el ranking principal debe utilizar:

**más barato que cumple los requisitos de calidad.**

---

# 14. Precio total real

El sistema debe calcular en la medida de lo posible:

## Transporte origen

* gasolina;
* peajes;
* parking;
* tren;
* autobús.

## Vuelo

* tarifa;
* equipaje;
* asiento si requerido;
* tasas.

## Alojamiento

* estancia;
* impuestos;
* tasas;
* limpieza.

## Transporte destino

* coche;
* tren;
* autobús;
* transporte público;
* transfer.

## Roadtrip

* alquiler;
* combustible;
* peajes;
* vignette;
* parking;
* ferry cuando corresponda.

El resultado:

**Total estimado viaje**

y:

**Total por persona**

---

# 15. Costes opcionales

Separados del precio obligatorio:

* comidas;
* entradas;
* actividades;
* seguros;
* excursiones.

Así se muestran dos cifras:

### Coste mínimo real de reserva

y

### Presupuesto realista recomendado

---

# 16. Alquiler de coche

El coche nunca debe añadirse por defecto.

El sistema debe decidir:

**NO NECESARIO**

cuando el transporte público sea mejor.

**OPCIONAL**

cuando añada comodidad.

**RECOMENDADO**

cuando desbloquee significativamente el destino.

Ejemplo:

### Estambul

Coche:

**No recomendado**

### Dolomitas

Coche:

**Muy recomendado**

---

# 17. Comparación coche vs transporte público

Cuando sea posible:

| Opción   | Coste | Tiempo | Flexibilidad |
| -------- | ----: | -----: | ------------ |
| Coche    | 170 € |    7 h | Alta         |
| Tren/bus |  92 € |    9 h | Media        |

La aplicación debe explicar por qué recomienda una.

---

# 18. Número de paradas

El usuario puede elegir:

* sin cambios;
* máximo 1 cambio;
* máximo 2;
* indiferente.

El motor también debe valorar si una parada adicional merece la pena.

Ejemplo:

Añadir una tercera ciudad por una noche suele generar:

* pérdida de tiempo;
* check-in/check-out;
* transporte;
* equipaje;
* costes.

Debe penalizarse cuando aporte poco valor.

---

# 19. Ritmo del viaje

### Tranquilo

* pocas bases;
* trayectos cortos;
* más noches por lugar.

### Equilibrado

* ritmo normal.

### Intenso

* más lugares;
* más kilómetros;
* más cambios.

---

# 20. Horas útiles

No basta con contar noches.

Debe calcular:

**hora llegada real**

y:

**hora salida real**

Ejemplo:

Vuelo A:

llegada 23:50

regreso 06:10

Puede destruir prácticamente dos días.

Debe existir:

`usable_trip_hours`

y:

`usable_days`

---

# 21. Métrica €/hora útil

Ejemplo:

### Viaje A

200 €

80 horas útiles

= 2,50 €/hora

### Viaje B

240 €

130 horas útiles

= 1,85 €/hora

Puede ayudar a demostrar que pagar ligeramente más produce mucho mejor viaje.

---

# 22. Escalas

Debe penalizar:

* escalas excesivas;
* cambios de aeropuerto;
* self-transfer;
* escalas nocturnas;
* conexiones arriesgadas.

Pero puede admitirlas si el ahorro es significativo.

---

# 23. Clima

Debe incorporar información climática relevante.

No para excluir automáticamente destinos.

Sí para contextualizar:

* lluvia;
* temperatura;
* nieve;
* horas de luz;
* condiciones habituales.

Para naturaleza debe ser especialmente importante.

---

# 24. Estacionalidad

Algunas rutas pueden:

* estar cerradas;
* tener nieve;
* no operar;
* disponer de horarios reducidos;
* ser poco recomendables fuera de temporada.

La aplicación debe identificarlo.

---

# 25. Información real del destino

Cada propuesta debe apoyarse en información real sobre:

* lugares;
* distancias;
* carreteras;
* transportes;
* atracciones;
* horarios;
* restricciones;
* fronteras;
* documentación;
* monedas;
* costes relevantes.

La IA no debe inventar establecimientos, carreteras, horarios o atracciones.

---

# 26. Construcción del itinerario

Solo después de seleccionar una oportunidad económicamente viable se genera el plan.

Ejemplo:

# Eslovenia — 5 días

## Día 1

OPO → Venecia

recoger coche

Venecia → Ljubljana

## Día 2

Ljubljana

## Día 3

Ljubljana → Bled

## Día 4

Bohinj + senderismo

## Día 5

regreso aeropuerto

Pero cada tramo debe calcularse utilizando tiempos realistas.

---

# 27. Restricción de conducción

No crear itinerarios absurdos.

Configurable:

* máximo 2 h/día;
* máximo 3 h/día;
* indiferente.

Y debe existir un límite razonable automático.

---

# 28. Ranking de oportunidades

Debe generar diferentes rankings.

## Más barato

Orden:

`total_price`

## Mejor relación calidad/precio

Orden:

`deal_score`

## Mejor experiencia

Prioriza calidad del viaje.

## Mejor naturaleza

## Mejor roadtrip

## Mejor city break

## Mejor sin coche

## Mejor multi-país

---

# 29. Deal Score

Ejemplo orientativo:

* 25 % coste total;
* 15 % precio frente al habitual;
* 15 % calidad destino;
* 10 % calidad alojamiento;
* 10 % horarios;
* 10 % días útiles;
* 5 % logística;
* 5 % clima;
* 5 % preferencias usuario.

El algoritmo debe ser configurable.

---

# 30. Penalizaciones

Aplicar penalización por:

* alojamiento caro;
* rating bajo;
* aeropuerto remoto;
* transfer caro;
* llegada de madrugada;
* salida extremadamente temprana;
* demasiadas escalas;
* excesiva conducción;
* demasiados cambios de hotel;
* ferry caro;
* parking caro;
* tiempo perdido.

---

# 31. Bonus

Aumentar puntuación por:

* vuelo directo;
* buen horario;
* alojamiento excepcionalmente barato;
* baja temporada;
* destino especialmente adecuado en esa época;
* ruta sencilla;
* posibilidad de combinar ciudad + naturaleza;
* buen transporte público.

---

# 32. Presentación de resultados

La respuesta principal no debe mostrar 100 vuelos.

Debe mostrar aproximadamente:

## Las mejores 5-10 oportunidades

Ejemplo:

### #1 — Eslovenia

**5-10 octubre**

Tipo:

Naturaleza + roadtrip

Precio:

**284 €/persona**

Vuelo:

92 €

Alojamiento:

123 €

Coche:

69 €

5 días / 4 noches

Deal Score:

**94/100**

Por qué destaca:

* buen precio total;
* naturaleza;
* distancias cortas;
* alojamiento económico.

---

# 33. Alternativas dentro del resultado

Cada destino debe poder desplegar:

### Sin coche

245 €

### Con coche

284 €

### Solo Ljubljana + Bled

232 €

### Roadtrip completo

318 €

Esto permite tomar decisiones reales.

---

# 34. Nivel de confianza del precio

Cada precio debe marcarse como:

### LIVE

consultado en tiempo real.

### RECENT

consultado recientemente.

### ESTIMATED

estimación.

Nunca mezclar estas categorías.

---

# 35. Verificación antes de reservar

Cuando el usuario abre una oportunidad:

1. actualizar vuelo;
2. actualizar hotel;
3. actualizar coche;
4. recalcular tasas;
5. recalcular total;
6. detectar cambios.

Mostrar:

> Precio verificado hace 12 segundos.

Si cambia:

> El precio ha pasado de 274 € a 289 €.

---

# 36. Históricos

Guardar:

* precio vuelo;
* hotel;
* coche;
* viaje completo.

Esto permitirá calcular:

> Este viaje está un 31 % por debajo de su precio observado habitual.

---

# 37. Falsos descuentos

Nunca afirmar:

> 42 % más barato

sin disponer de datos históricos suficientes.

---

# 38. Comparación entre oportunidades

Debe existir tabla:

| Viaje     | Total pp | Días útiles | Hotel | Coche | Tipo       | Score |
| --------- | -------: | ----------: | ----: | ----: | ---------- | ----: |
| Budapest  |    238 € |         4,8 |   8.8 |    No | ciudad     |    91 |
| Estambul  |    284 € |         5,1 |   9.0 |    No | ciudad     |    94 |
| Eslovenia |    302 € |         5,0 |   8.7 |    Sí | naturaleza |    96 |
| Lombardía |    318 € |         4,7 |   8.6 |    Sí | roadtrip   |    92 |

---

# 39. Explicabilidad

Cada recomendación debe explicar:

## Por qué está arriba

Ejemplo:

> No es el vuelo más barato, pero el alojamiento cuesta un 35 % menos que en las otras alternativas y los horarios permiten aprovechar prácticamente seis días completos.

También:

## Por qué no recomendamos otra opción

> Ámsterdam tiene vuelos baratos estas fechas, pero el alojamiento eleva el viaje hasta 510 €/persona.

Esto genera confianza.

---

# 40. Consultas conversacionales

Después del análisis inicial el usuario debe poder preguntar:

> ¿Y sin coche?

> ¿Algo más de naturaleza?

> ¿Y máximo 250 €?

> ¿Podemos hacer dos países?

> ¿Qué pasa si salimos el 5?

> ¿Y cuatro noches?

> ¿Hay algo mejor que Estambul?

El sistema reutiliza la búsqueda ya realizada y modifica únicamente las restricciones necesarias.

---

# 41. Caso de uso real

Entrada:

> Somos dos personas. Tenemos disponibles del 3 al 12 de octubre de 2026. Queremos viajar aproximadamente 4-6 días. Salimos desde Vigo pero podemos desplazarnos a otros aeropuertos si merece la pena. No sabemos destino. Queremos Europa y también contemplamos Estambul. Podemos alquilar coche si mejora el viaje. Nos interesan ciudades, naturaleza y posibles rutas.

La aplicación debe:

1. generar todas las fechas válidas;
2. analizar VGO, SCQ, LCG, OPO y otros razonables;
3. descubrir vuelos económicos;
4. filtrar destinos inviables;
5. consultar alojamiento real;
6. calcular coste total;
7. analizar coche/transporte público;
8. generar alternativas de viaje;
9. consultar tiempos/distancias reales;
10. considerar clima y temporada;
11. generar itinerarios realistas;
12. verificar precios;
13. rankear;
14. presentar las mejores opciones;
15. explicar diferencias.

---

# 42. Ejemplo de respuesta ideal

## Mejor viaje global

### Eslovenia — 5 días

**5-10 octubre**

* vuelo: precio LIVE;
* alojamiento: precio LIVE;
* coche: precio LIVE;
* coste total: X €/persona;
* naturaleza excelente;
* conducción moderada;
* dos bases.

### Alternativa tranquila

Ljubljana + Bled

* una sola base;
* sin necesidad obligatoria de coche;
* X €/persona.

### Alternativa roadtrip

Ljubljana → Bled → Bohinj → Piran

* coche recomendado;
* X €/persona.

---

## Mejor city break

### Estambul

**7-12 octubre**

* vuelo;
* hotel;
* traslado aeropuerto;
* total.

No recomendamos coche.

---

## Más barato

### Budapest

**6-10 octubre**

* X €/persona.

---

## Mejor multi-país

### Viena → Bratislava → Budapest

**4-10 octubre**

Open jaw.

* vuelo entrada;
* trenes;
* alojamiento;
* vuelo regreso.

---

# 43. Arquitectura de confianza

Todo dato debe disponer internamente de:

```typescript
interface SourcedValue<T> {
  value: T;
  source: string;
  retrievedAt: Date;
  status: "LIVE" | "RECENT" | "ESTIMATED";
  confidence: number;
}
```

Esto se aplica a:

* vuelos;
* hoteles;
* coches;
* trenes;
* ferry;
* distancias;
* horarios;
* clima;
* costes.

---

# 44. Regla contra alucinaciones

La IA no genera datos económicos.

La IA puede:

* razonar;
* resumir;
* comparar;
* crear itinerarios;
* explicar resultados.

Pero los siguientes datos deben proceder de fuentes externas verificadas:

* precios;
* disponibilidad;
* horarios;
* distancias importantes;
* duración de rutas;
* alojamientos;
* vuelos;
* transportes.

---

# 45. Pipeline recomendado

```text
USER QUERY
     ↓
CONSTRAINT PARSER
     ↓
DATE GENERATOR
     ↓
ORIGIN AIRPORT ENGINE
     ↓
FLIGHT DISCOVERY
     ↓
DESTINATION SHORTLIST
     ↓
ACCOMMODATION SEARCH
     ↓
TOTAL PRICE FILTER
     ↓
TRIP TYPE GENERATOR
     ↓
TRANSPORT / CAR ENGINE
     ↓
ROUTE ENGINE
     ↓
REAL DATA VALIDATION
     ↓
PRICE CALCULATOR
     ↓
DEAL SCORER
     ↓
AI EXPLANATION
     ↓
RESULTS
```

---

# 46. Estrategia importante de costes técnicos

No consultar hoteles para 3.000 vuelos.

Proceso:

### Stage 1

Búsqueda barata/indicativa.

Ejemplo:

300 destinos.

### Stage 2

Filtrado:

50 destinos.

### Stage 3

Precios live:

20 destinos.

### Stage 4

Hoteles:

15 destinos.

### Stage 5

Transporte/coche:

10 destinos.

### Stage 6

Construcción exhaustiva:

5-10 oportunidades finales.

Esto reduce enormemente llamadas, tiempo y costes.

---

# 47. Resultado del producto

La aplicación no es:

**un buscador de vuelos**

ni:

**un comparador de hoteles.**

Es:

# Un motor de decisiones de viaje basado en datos reales

Responde fundamentalmente a:

> Tengo estas fechas y este presupuesto. ¿Cuál es el mejor viaje que puedo hacer?

Y debe poder justificar cada respuesta económicamente, logísticamente y por calidad de experiencia.
