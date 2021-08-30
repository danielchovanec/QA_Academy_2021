describe('Test Room Redirection', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()    
        cy.roomRedirection()      
    })

    after(() => {
         cy.get('.sc-eJBYSJ')
             .click()
         cy.get('.sc-fFYUoA')
             .click()
        cy.get(':nth-child(7) > .css_a')
            .click()
    })

    it('user redirection should be successful', () => {
        cy.get('.sc-dmlrTW')
            .should('have.text', 'Zoznamka')
            .should('be.visible')
    })

})