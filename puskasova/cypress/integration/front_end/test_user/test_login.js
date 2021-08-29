describe('Test Valid Login', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.cookiesConsent()          
    })

    after(() => {
        cy.applicationLogout()
    })

    it('user login should be successful', () => {
        cy.get('.efOGkC  .lazyload-wrapper  .sc-eHgmQL  .sc-kjoXOD  .sc-hSdWYo  .sc-kgAjT')
            .should('have.text', 'Hľadáš priateľov?')
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