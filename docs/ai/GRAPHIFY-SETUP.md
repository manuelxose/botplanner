# Configuración de Graphify

Graphify está instalado a nivel de usuario mediante `uv tool` y las integraciones de proyecto están activas para Codex y VS Code Copilot.

El índice canónico actual contiene 497 nodos (código, pruebas, documentación y
prompts). Se actualiza incrementalmente con:

```bash
graphify update .
```

El repositorio no contiene claves para backends de indexación y no debe incorporar
secretos para ello. El índice determinista es suficiente para la navegación normal.
