describe ('Test to determine whether the created room is visible', () => {
    before(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })

        cy.applicationLogin(Cypress.env('usernamePokecStevo'), Cypress.env('passwordPokecStevo'))
        cy.GDPRConsent() 
    })

    it('see if room was created', () => {
        cy.get('.mi-ic-menu')
        .click()
        cy.get('.link-rooms')
        .click()
        cy.get(':nth-child(2) > .sc-dtwoBo')
        .should('exist')
    })
})