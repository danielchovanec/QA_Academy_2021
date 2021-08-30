describe('Test Valid Login', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.popUp()
        cy.applicationLogout()
    })
    

    it('user login should be successful', ()=> {
        cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2')
        .should('be.visible')
    })

})