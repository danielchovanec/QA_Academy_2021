describe('check if log out from pokec is possible', () => {
    before(() => {
        // cy.visit(Cypress.env('pokecURL'))
        cy.applicationLogin(Cypress.env('usernameAzet'), Cypress.env('passwordAzet'))
        cy.popUp()
        
    })

    it('user was successfully logged out', ()=> {
        cy.get('.mi-ic-menu')
            .click()
        cy.get('.link-logout')
            .click()
        cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2')
            .should('be.visible')
        
    })

})

