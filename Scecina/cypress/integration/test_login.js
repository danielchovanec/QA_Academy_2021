describe('Test Valid Login', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()          
    })

    after(() => {
        cy.applicationLogout()
    })

    it('user login should be successful', () => {
        cy.get('.sc-elJkPf  :nth-child(2)  .sc-eNQAEJ')
            .should('have.text', 'M4STERB8')
            .should('be.visible')
    })

})

describe('Test Invalid Login', () => {

    before(() => {
    cy.applicationLogin(Cypress.env('incorrect_username'), Cypress.env('incorrect_password'))
    })

    it('user login should not be successful', () => {
        cy.get('.InfoTitle__Text-sc-1sdmhps-2')
            .should('have.text', 'Zadané údaje nie sú správne.')
            .should('be.visible')
    })
})