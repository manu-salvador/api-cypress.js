# 🚀 API Cypress Testing Suite

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Automatización de pruebas API para GoRest utilizando Cypress y JavaScript

## 📋 Descripción

Este proyecto implementa una suite de pruebas automatizadas para la API [GoRest](https://gorest.co.in/), cubriendo diferentes escenarios de testing:

- ✅ **Pruebas de Interfaz**: Happy path y casos negativos
- 🧪 **Pruebas de Parámetros**: Validación de datos inválidos
- 🔧 **Pruebas Funcionales**: Casos con valores válidos variados

## 🎯 Tipos de Pruebas

### 🌟 Pruebas de Interfaz (`goRestAPI_Interfaz.spec.cy.js`)
- **Happy Path**: Creación exitosa de usuarios
- **Sad Path**: 
  - Campos vacíos
  - Campos sin enviar

### ⚡ Pruebas de Parámetros (`goRestAPI_Parametros.spec.cy.js`)
Validación con parámetros inválidos:
- Números en campos de texto
- Caracteres especiales
- Puntos y guiones
- Valores `null`

### 🔄 Pruebas Funcionales (`goRestAPI_Funcional.spec.cy.js`)
- Diferentes combinaciones de género
- Estados activos e inactivos
- Casos de uso reales

## 🛠️ Instalación

### Prerrequisitos
- [Node.js](https://nodejs.org/) v16 o superior
- [Git](https://git-scm.com/) v2.50.0 o superior

### 1. Clonar el repositorio
```bash
git clone https://github.com/manu-salvador/api-cypress.js.git
cd api-cypress.js
```

### 2. Inicializar Node.js
```bash
npm init -y
```

### 3. Instalar dependencias
```bash
# Instalar Cypress
npm install --save-dev cypress

# Instalar Cypress Grep para filtrado por tags
npm install --save-dev @cypress/grep

# Instalar Mochawesome para reportes HTML
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

## 🏃‍♂️ Ejecución de Pruebas

### 🖥️ Modo Interactivo (UI)
```bash
# Abrir Cypress Test Runner
npx cypress open

# Con filtro por tags específicos
npx cypress open --env grep="@smoke"
```

### ⚡ Modo Headless (CI/CD)
```bash
# Ejecutar todas las pruebas
npx cypress run

# Ejecutar archivo específico
npx cypress run --spec "cypress/e2e/goRestAPI/goRestAPI_Interfaz.spec.cy.js"

# Ejecutar con tags específicos
npx cypress run --env grep="@smoke"
npx cypress run --env grep="@sad-path"
```

### 📊 Comandos con Reportes
```bash
# Ejecutar pruebas y generar reporte HTML
npm run test:report

# Ejecutar solo smoke tests con reporte
npm run test:report:smoke

# Ejecutar tests de interfaz con reporte
npm run test:report:interfaz

# Ejecutar tests de parámetros con reporte
npm run test:report:parametros
```

## 🏷️ Sistema de Tags

| Tag | Descripción | Uso |
|-----|-------------|-----|
| `@smoke` | Pruebas críticas (happy path) | `--env grep="@smoke"` |
| `@sad-path` | Casos negativos | `--env grep="@sad-path"` |
| `@interfaz` | Pruebas de interfaz | `--env grep="@interfaz"` |
| `@parametros` | Pruebas de parámetros | `--env grep="@parametros"` |
| `@funcional` | Pruebas funcionales | `--env grep="@funcional"` |
| `@gorest` | Todas las pruebas de GoRest | `--env grep="@gorest"` |

## 📁 Estructura del Proyecto

```
api-cypress.js/
├── cypress/
│   ├── e2e/
│   │   └── goRestAPI/
│   │       ├── goRestAPI_Interfaz.spec.cy.js
│   │       ├── goRestAPI_Parametros.spec.cy.js
│   │       └── goRestAPI_Funcional.spec.cy.js
│   ├── reports/                    # Reportes generados
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   └── fixtures/
├── credenciales.json               # Tokens de autenticación
├── cypress.config.js               # Configuración de Cypress
├── cypress.env.json               # Variables de entorno
└── package.json
```

## 🔧 Configuración

### Credenciales
Crear archivo `credenciales.json` en la raíz:
```json
{
  "homo": {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  },
  "inte": {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  }
}
```

### Variables de Entorno
El archivo `cypress.env.json` contiene:
- Configuración de ambientes
- Timeouts de API
- Datos de prueba por defecto
- Endpoints configurables

## 📊 Reportes

### Mochawesome Reports
Los reportes se generan automáticamente en:
- **Ubicación**: `cypress/reports/`
- **Formato**: HTML consolidado
- **Características**: 
  - Gráficos estadísticos
  - Screenshots de fallos
  - Videos de ejecución
  - Código de pruebas incluido

### Abrir Reportes
```bash
# Abrir último reporte generado
npm run open:report

# Limpiar reportes anteriores
npm run clean:reports
```

## 🛠️ Herramientas Recomendadas

### Extensiones de VS Code
- **Live Server**: Para visualizar reportes HTML
- **Cypress Snippets**: Autocompletado para Cypress
- **JavaScript (ES6) code snippets**: Snippets de JavaScript

### Navegadores Soportados
- Chrome (recomendado)
- Firefox
- Edge
- Electron (por defecto)

## 🔗 Enlaces Útiles

- [GoRest API Documentation](https://gorest.co.in/)
- [Cypress Documentation](https://docs.cypress.io/)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
- [Cypress Grep Plugin](https://github.com/cypress-io/cypress-grep)

## 📈 Estadísticas del Proyecto

- **Total de Tests**: ~21 pruebas automatizadas
- **Cobertura**: CRUD completo de usuarios
- **Ambientes**: Integración y Homologación
- **Reportes**: HTML con estadísticas visuales

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👨‍💻 Autor

**Manuel Salvador**
- GitHub: [@manu-salvador](https://github.com/manu-salvador)

---

⭐ ¡Dale una estrella si te resultó útil este proyecto!
