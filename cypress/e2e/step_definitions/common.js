import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const request = {
  headers: {},
};

Given("I set {string} api endpoint", (endpoint) => {
  endpoint = `${Cypress.config("baseUrl")}/${endpoint}`;
  request.url = endpoint;
  cy.log("API endpoint: " + endpoint);
});

Given("I set {string} api method", (method) => {
  request.method = method;
  cy.log("API method: " + method);
});

Given("I set {string} api payload", (payload) => {
  cy.fixture(`/payload/${payload}`).then((data) => {
    request.body = data;
    cy.log("API payload: " + JSON.stringify(data));
  });
});

Given("I set {string} api content type", (contentType) => {
  request.headers["Content-Type"] = contentType;
  cy.log("API Content-Type: " + contentType);
});

When("I call the api endpoint", () => {
  request.failOnStatusCode = false;
  cy.request(request).then((response) => {
    cy.log("API response: " + JSON.stringify(response));
    cy.wrap(response).as("response");
  });
});

When("I receive valid status code {int}", (statusCode) => {
  cy.get("@response").then((response) => {
    cy.log("API status code: " + statusCode);
    cy.verifyStatus(response, statusCode);
  });
});

Then("I receive valid content type {string}", (contentType) => {
  cy.get("@response").then((response) => {
    cy.log("Response contentType: " + contentType);
    cy.verifyContentType(response, contentType);
  });
});

Then("I receive valid {string} response schema", (schema) => {
  cy.fixture(`/schema/${schema}`).then((data) => {
    cy.get("@response").then((response) => {
      cy.validateSchema(data, response.body);
    });
  });
});

Then(
  "I receive {string} as {string} property value",
  (_propValue, _propName) => {
    cy.get("@response").then(function (response) {
      cy.verifyPropertyValue(response.body, { [_propName]: _propValue });
    });
  }
);
