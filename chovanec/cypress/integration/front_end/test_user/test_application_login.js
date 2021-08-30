describe('Test Valid login', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })

        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPRConsent()          
    })

    after(() => {
        cy.applicationLogout()
    })

    it('user login should be successful', () => {
        cy.get('.mi-ic-bell')
            .should('be.visible')
    })
})

describe('Test invaid login', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('incorrect_username'), Cypress.env('incorrect_password'))
    })

    it('User login should not be succesful', () => {
        cy.get('.InfoTitle__Text-sc-1sdmhps-2')
            .should('have.text', 'Zadané údaje nie sú správne.')
            .should('be.visible')
    })
})