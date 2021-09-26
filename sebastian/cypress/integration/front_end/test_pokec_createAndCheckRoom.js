describe('create room and check if room was created', () => {
    before(() => {
        // cy.visit(Cypress.env('pokecURL'))
        cy.applicationLogin(Cypress.env('usernameAzet'), Cypress.env('passwordAzet'))
        cy.popUp()
        
    })

    it('room was created successfuly', ()=> {
        cy.get('.mi-ic-menu')
            .click()
        cy.get('.link-rooms')
            .click()
        cy.get('.FABButton__FABButtonWrapper-sc-1x7ycid-0')
            .click()
        cy.get('.Input-sc-1vv8hqf-0')
            .type(Cypress.env('newRoom'))
        cy.get('.eFbrcz')
            .click()
        cy.wait(1200)
        cy.get('.sc-eUWgFQ')
            .click()
        cy.get('.sc-fFYUoA')
            .click()
        cy.get('.sc-iitrsy')
            .type(Cypress.env('newRoom'))
        cy.get('.sc-hTZhsR')
            .should('contain',Cypress.env('newRoom'))
        
    })

})

