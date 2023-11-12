const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
require('cypress-mochawesome-reporter/plugin')(on);
return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/mochawesomeresults',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true
  },
  e2e: {
    setupNodeEvents,
    baseUrl:'https://www.saucedemo.com',
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/bdd-cucumber/features/*.feature",
    watchForFileChanges:false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000
    },
  },
);
