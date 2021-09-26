describe('send RP to other user', () => {
    before(() => {
        // cy.visit(Cypress.env('pokecURL'))
        cy.applicationLogin(Cypress.env('usernameAzet'), Cypress.env('passwordAzet'))
        cy.popUp()
        
    })

    it('RP was sent successful', ()=> {
        cy.get('[href="https://mpokec.azet.sk/rp/mobilna/?i9=462a5abf8592&utm_campaign=notifikacneIkonky&utm_medium=mobil&utm_content=rp&utm_source=mobil"]')
        .click()
        cy.get('.rpButton')
        .click()
        cy.get('#searchinput')
        .type('hermionagrangerova123')
        cy.get('.UserCard__Wrapper-sc-150gvkt-0')
        .click()
        cy.get('.rp-input__text')
        .type('message')
        cy.get('.rp-input__send-button')
        .click()
        cy.get('.context')
        .should('contain','message')
    })

})

