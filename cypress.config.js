const { defineConfig } = require("cypress");

module.exports = defineConfig({
  failOnStatusCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    // Configuración para cypress-grep
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
    },
  },
});
