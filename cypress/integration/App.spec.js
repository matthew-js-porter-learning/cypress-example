/// <reference types="cypress" />
describe('App', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('has react logo', () => {
        cy.get('img').should('have.attr', 'src')
    })

    it('should link to react page', () => {
        cy.get('.App-link').should('have.attr', 'href', 'https://reactjs.org')
    });
});