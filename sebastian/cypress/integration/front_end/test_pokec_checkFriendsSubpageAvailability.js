describe('check if friends subpage is available', () => {
    before(() => {
        // cy.visit(Cypress.env('pokecURL'))
        cy.applicationLogin(Cypress.env('usernameAzet'), Cypress.env('passwordAzet'))
        cy.popUp()
        
    })

    it('friends subpage is available', ()=> {
        cy.get('.mi-ic-menu')
            .click()
        cy.get('.link-friends')
            .click()
        cy.get('.cvXKQC')
            .should('have.text','Priatelia')
        
    })

})

