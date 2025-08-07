# api-cypress.js
Proyecto API con Cypress y Javascript

Se realizan pruebas de la API GoRest - https://gorest.co.in/
Tipos de pruebas:
- Interfaz (happy path y sad path (campos vacios y sin enviar)) 
- Parametros (campos con parametros invalidos) 
- Funcionales (campos con distintos valores validos) de la API GoRest
https://gorest.co.in/

Iniciar Node.js con el siguiente comando:
npm init -y

Instalar Cypress con el siguiente comando:
npm install --save-dev cypress

Instalar cypress/grep:
npm install --save-dev @cypress/grep

Instalar cypress-mochawesome-reporter con el siguiente comando:
npm i --save-dev cypress-mochawesome-reporter

Comandos para ejecutar las pruebas:
npx cypress open - modo UI
npx cypress run - genera reporte
npx cypress open --env grep="@tag" - se ejecutan las pruebas con un tag especifico
npx cypress run --spec "cypress/e2e/goRestAPI/goRestAPI_Interfaz.spec.cy.js" - se ejecuta un archivo especifico de pruebas

Extensiones de VSCode:
Live Server - para levantar el reporte html en un browser



