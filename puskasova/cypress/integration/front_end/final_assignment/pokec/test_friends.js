describe('Test Availability of Friends Subpage', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
        //login
        cy.viewport(750, 750)
        cy.applicationLoginPokec(Cypress.env('username'), Cypress.env('password'))
        cy.GDPRConsent()

        //redirection to Friends subpage
        cy.get('.mi-ic-menu')
            .click()      
        cy.get('.link-friends')   
            .click()
    })

    after(() => {
        //logout
        cy.get('.sc-jTzLTM')
            .click()
        cy.get('.link-logout')
            .click()
    })

    it('Friends subpage should be available', () => {
        cy.get('.hpzXRa')
            .should('have.text', "Priatelia")
    })

})

