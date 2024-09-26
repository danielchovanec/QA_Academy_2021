describe('Check if friends subpage is available', () => {
    before(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })

    cy.applicationLogin(Cypress.env('usernamePokecStevo'), Cypress.env('passwordPokecStevo'))
        cy.GDPRConsent() 
    })

    it('Check if friends subpage is available', () => {
        cy.get('.mi-ic-menu')
        .click()
        cy.get('.link-friends')
        .click()
        cy.get('.cvXKQC')
        .should('have.text', 'Priatelia')
    })

})
