/// <reference types="cypress" />
export {};

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });
});
