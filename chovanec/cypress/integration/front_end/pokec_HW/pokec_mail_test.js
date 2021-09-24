describe('Send email and check if sent', () => {
    before(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })

        cy.url('https://mail.azet.sk/inbox/dorucene?i9=60ca750c9f33')
        cy.mailLogin(Cypress.env('usernamePokecStevo'), Cypress.env('passwordPokecStevo'))
        cy.GDPRConsent()  
    })

    it('Send email to friend', () =>{

    })
})