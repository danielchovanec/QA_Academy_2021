describe('Check if friends subpage is available', () => {
    before(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })

    cy.applicationLogin(Cypress.env('usernamePokecStevo'), Cypress.env('passwordPokecStevo'))
        cy.GDPRConsent() 
    })

    it('Logout', () => {
        cy.get('.mi-ic-menu')
        .click()
        cy.get('.link-logout')
        .click()
        cy.get('.PokecPanelstyles__InnerPanel-z9uan3-2 > .PokecLogostyles__PokecLogo-sc-1nikzum-0')
        .should('be.visible')
    })

})