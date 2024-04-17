Cypress.Commands.add("validateSchema", (schema, content) => {
  const Ajv = require("ajv");
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const isValid = validate(content);
  if (!isValid) cy.log(JSON.stringify(validate.errors));
  cy.then(() => {
    expect(isValid, `Schema validation ${isValid ? "passed" : "failed"}.`).to.be
      .true;
  });
});

Cypress.Commands.add("verifyStatus", (response, status) => {
  const statusValue = status || 200;
  expect(response.status).to.eq(statusValue);
});

Cypress.Commands.add("verifyContentType", (response, contentType) => {
  const contentTypeValue = contentType || "application/json";
  expect(response.headers["content-type"]).to.contain(contentTypeValue);
});

Cypress.Commands.add("verifyPropertyValue", (response, propertyObject) => {
  for (var propertyName in propertyObject) {
    expect(response[`${propertyName}`]).to.eql(propertyObject[propertyName]);
  }
});

Cypress.Commands.add('verifyContentType', (response, _contentType) => {
  expect(response.headers['content-type']).to.contain(_contentType);
})