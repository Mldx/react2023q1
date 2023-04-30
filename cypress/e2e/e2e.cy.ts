/// <reference types="cypress" />
export {};
import {
  DELIVERY_CITY_IS_MISSING,
  DELIVERY_DATE_INCORRECT, FILE_IS_INCORRECT,
  FILE_IS_MISSING,
  NAME_IS_INCORRECT,
  NAME_IS_INCORRECT_LENGTH,
  NAME_IS_MISSING,
  NAME_IS_NOT_CAPITALIZE,
  PERSONAL_DATA_ACCESSES_IS_MISSING,
  SURNAME_IS_INCORRECT,
  SURNAME_IS_INCORRECT_LENGTH,
  SURNAME_IS_MISSING,
  SURNAME_IS_NOT_CAPITALIZE,
} from '../../src/utils/validator';

export {};

describe('Check routes', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('check home page', () => {
    cy.contains('Lets go find best images').should('be.visible');
  });

  it('check form page', () => {
    cy.contains('Form').click();
    cy.contains('Name').should('be.visible');
    cy.contains('Surname').should('be.visible');
    cy.contains('Delivery date').should('be.visible');
    cy.contains('Delivery city').should('be.visible');
    cy.contains('Gender').should('be.visible');
    cy.contains('Your avatar').should('be.visible');
    cy.contains('Your avatar').should('be.visible');
  });

  it('check about page', () => {
    cy.contains('About').click();
    cy.contains('About us!').should('be.visible');
  });
});

describe('Check form', () => {
  beforeEach(() => {
    cy.visit('/form');
  });
  it('check name field', () => {
    cy.contains('Name').type(' ').type('{enter}');
    cy.contains(NAME_IS_MISSING).should('be.visible');
    cy.contains('Name').type('aa').type('{enter}');
    cy.contains(NAME_IS_INCORRECT_LENGTH).should('be.visible');
    cy.contains('Name').type('aaa').type('{enter}');
    cy.contains(NAME_IS_NOT_CAPITALIZE).should('be.visible');
    cy.contains('Name').type('1312').type('{enter}');
    cy.contains(NAME_IS_INCORRECT).should('be.visible');
  });
  it('check surname field', () => {
    cy.contains('Surname').type(' ').type('{enter}');
    cy.contains(SURNAME_IS_MISSING).should('be.visible');
    cy.contains('Surname').type('aa').type('{enter}');
    cy.contains(SURNAME_IS_INCORRECT_LENGTH).should('be.visible');
    cy.contains('Surname').type('aaa').type('{enter}');
    cy.contains(SURNAME_IS_NOT_CAPITALIZE).should('be.visible');
    cy.contains('Surname').type('1312').type('{enter}');
    cy.contains(SURNAME_IS_INCORRECT).should('be.visible');
  });
  it('check delivery date field', () => {
    cy.contains('Delivery date').type('2022-05-01');
    cy.get('button').type('{enter}');
    cy.contains(DELIVERY_DATE_INCORRECT).should('be.visible');
  });
  it('check delivery city field', () => {
    cy.get('button').type('{enter}');
    cy.contains(DELIVERY_CITY_IS_MISSING).should('be.visible');
  });
  it('check personal data field', () => {
    cy.get('button').type('{enter}');
    cy.contains(PERSONAL_DATA_ACCESSES_IS_MISSING).should('be.visible');
  });
  it('check avatar field', () => {
    cy.get('button').type('{enter}');
    cy.contains(FILE_IS_MISSING).should('be.visible');
    cy.get('input[type=file]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.txt',
      lastModified: Date.now(),
    });
    cy.get('button').click();
    cy.contains(FILE_IS_INCORRECT).should('be.visible');
  });
});
describe('Check image cards', () => {
  it('checks the number of cards in the container', () => {
    cy.visit('/');
    cy.get('.searchBar__input').type('cat').type('{enter}');
    cy.get('.image-cards-container').find('.image-card_container').its('length').should('eq', 9);
    cy.get('.searchBar__input').type('random_query_not_found').type('{enter}');
    cy.contains('Not found').should('be.visible');
  });
  it('checks card popup', () => {
    cy.visit('/');
    cy.get('.searchBar__input').type('cat').type('{enter}');
    const card = cy.get('.image-cards-container').find('.image-card_container').first();
    card.click();
    cy.get('.image-card_popup-box').should('be.visible');
    cy.get('.popup-box_close-button').click();
    cy.contains('.image-card_popup-box').should('not.exist');
    card.click();
    cy.get('.image-card_popup-modal').click({ force: true });
    cy.contains('.image-card_popup-box').should('not.exist');
  });
});
