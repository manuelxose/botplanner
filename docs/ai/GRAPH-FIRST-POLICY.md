# Política Graphify-first

Antes de explorar ampliamente el código, identifica la tarea y ejecuta
`graphify query "…"`. Usa `graphify explain` para un concepto y `graphify path` para
dependencias. Solo entonces lee los archivos concretos necesarios.

Actualiza el índice con `graphify update .` tras cambios arquitectónicos o de código
significativos. No reconstruyas el grafo completo por cambios de formato menores.
El índice excluye dependencias, artefactos de compilación, cachés y secretos.
