declare namespace Cypress {
    interface Chainable {
        validateSchema(schema: any,content:any): Cypress.Chainable<void>;
        verifyStatus(response: object, status: number): Cypress.Chainable<void>;
        verifyContentType(response: object, contentType: string): Cypress.Chainable<void>;
        verifyPropertyValue(response: object,propertyValue:object,partialMatch:boolean): Cypress.Chainable<void>;
        verifyContentType(response: object, contentType: string): Cypress.Chainable<void>;
    }
}