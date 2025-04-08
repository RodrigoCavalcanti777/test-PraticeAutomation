const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  

  e2e: {
    failOnStatusCode: false,
    baseUrl: "https://www.automationpratice.com.br/",
    
    setupNodeEvents(on, config) {
      allureCypress(on, config);

      return config;
    },
  },
});
