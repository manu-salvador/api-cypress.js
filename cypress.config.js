const { defineConfig } = require("cypress");

const fs = require('fs');

const credentials = JSON.parse(fs.readFileSync('credenciales.json', 'utf8'));

const environments = {
  inte: {
    baseUrl: 'https://gorest.co.in/public/v2',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials.homo.Authorization
    }
  },
  homo: {
    baseUrl: 'https://gorest.co.in/public/v2',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials.homo.Authorization
    }
  }
};

module.exports = defineConfig({
  failOnStatusCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      const environment = config.env.environment || "homo";
      config.env.environmentConfig = environments[environment];
      return config;
    },
    // Configuración para cypress-grep
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
    },
    // Configuración para Mochawesome reporter
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false,
      charts: true, 
      timestamp: 'mmddyyyy_HHMMss',
      reportFilename: 'index-report.html',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    // Configuración de video y screenshots para el reporte
    video: false,
    videosFolder: 'cypress/reports/videos',
    screenshotsFolder: 'cypress/reports/screenshots',
    videoCompression: 15
  },
});
