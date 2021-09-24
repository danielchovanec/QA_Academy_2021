describe ('Testing Pokec login and creating a room', () => {
    before(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })

        cy.applicationLogin(Cypress.env('usernamePokecStevo'), Cypress.env('passwordPokecStevo'))
        cy.GDPRConsent() 
    })

    it('see if login successfull', () => {
        cy.get('.mi-ic-menu')
        .click()
        cy.get('.link-rooms')
        .click()
        cy.get('.Button-sc-1fngo4c-0')
        .click()
        cy.get('.Input-sc-1vv8hqf-0')
        .type("Room1")
        cy.get('.eFbrcz')
        .click()
    })
})
