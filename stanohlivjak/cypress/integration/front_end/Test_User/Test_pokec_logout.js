describe('Test Application Logout', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.applicationLogout();
    });

    it('user Login should be successful', () => {
        cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2')
            .should('be.visible')
    });
})