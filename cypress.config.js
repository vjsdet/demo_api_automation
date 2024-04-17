const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", require('cypress-cucumber-preprocessor').default());

    },
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl:"https://restful-booker.herokuapp.com"
  },
});



