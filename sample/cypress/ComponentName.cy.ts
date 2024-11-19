import { mount } from 'cypress/angular';
import { AppComponent } from '../src/app/app.component';

describe('Counter Component', () => {
  beforeEach(() => {
    mount(AppComponent);
  });
  //  t1
  it('should display the initial counter value as 0', () => {
    cy.get('#data').first().should('contain', '0');
  });
  // t2
  it('should increment the counter when the increment button is clicked', () => {
    cy.get('#in').contains('Increment').click();
    cy.get('#data').first().should('contain', '1');
  });
  // t3
  it('should decrement the counter when the decrement button is clicked', () => {

    cy.get('#in').contains('Increment').click().click().click().click().click();
    cy.get('#dec').contains('Decrement').click();
    cy.get('#data').first().should('contain', '4');
  });
  // t4
  it('should not decrement the counter below 0', () => {
    cy.get('#data').first().should('contain', '0');
    cy.get('#dec').contains('Decrement').click();
    cy.get('#data').first().should('contain', '0');
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Counter cannot be negative');
    });
  });
});
