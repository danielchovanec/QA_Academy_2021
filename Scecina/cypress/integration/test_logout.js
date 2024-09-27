describe('Test Logout', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()
        cy.applicationLogout()          
    })

    it('user logout should be successful', () => {
        cy.get('.Headerstyles__Headline-tm4e6p-3')
            .should('have.text', 'Sme najväčšia  online komunita ľudí')
            .should('be.visible')
    })

})