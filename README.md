# Linear Import Demo

Herramienta para importar issues desde archivos CSV (exportados de Asana) hacia Linear utilizando `@linear/import`.

## Requisitos Previos

- **Node.js** v18 o superior
- **pnpm** v10.18.1 o superior
- **API Key de Linear** (obtener desde Linear → Settings → API → Personal API Keys)

## Instalación

```bash
pnpm install
```

## Uso

### Método Interactivo (Recomendado)

Ejecuta el importador interactivo que te guiará paso a paso:

```bash
pnpm import
```

O directamente:

```bash
pnpm exec linear-import
```

### Flujo de Importación

1. **Autenticación**: Se solicitará tu API Key de Linear
2. **Selección de origen**: Elige el formato del archivo a importar (Asana, Jira, Trello, CSV, etc.)
3. **Selección de archivo**: Indica la ruta al archivo CSV
4. **Mapeo de campos**: Configura cómo se mapean los campos del CSV a Linear
5. **Selección de equipo**: Elige el equipo de Linear donde se crearán los issues
6. **Confirmación**: Revisa y confirma la importación

### Ejemplo con el CSV incluido

```bash
pnpm import
# Selecciona "Asana" como origen
# Ingresa la ruta: ./Sprint_TMD_Banks_.csv
# Sigue las instrucciones en pantalla
```

## Estructura del Proyecto

```
linear-import-demo/
├── index.js              # Script de prueba/ejemplo
├── package.json          # Dependencias y scripts
├── Sprint_TMD_Banks_.csv # Archivo CSV de ejemplo (Asana export)
└── README.md             # Esta documentación
```

## Campos Soportados del CSV

El archivo CSV incluido contiene campos exportados de Asana:

| Campo CSV | Descripción |
|-----------|-------------|
| `Task ID` | ID único de la tarea |
| `Name` | Título del issue |
| `Notes` | Descripción del issue |
| `Assignee` | Asignado |
| `Due Date` | Fecha límite |
| `Tags` | Etiquetas |
| `Priority` | Prioridad |
| `Section/Column` | Estado/columna |
| `Projects` | Proyecto padre |

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm import` | Ejecuta el importador interactivo |
| `pnpm exec linear-import --help` | Muestra ayuda del CLI |
| `node index.js` | Ejecuta script de prueba |

## Recursos

- [Documentación de @linear/import](https://github.com/linearapp/linear/tree/master/packages/import)
- [Linear API Documentation](https://developers.linear.app/docs)
- [Linear App](https://linear.app)

## Notas

- El archivo `Sprint_TMD_Banks_.csv` contiene ~36,000 tareas de ejemplo exportadas de Asana
- La importación puede tardar varios minutos dependiendo del volumen de datos
- Se recomienda hacer una prueba con un subset pequeño primero

