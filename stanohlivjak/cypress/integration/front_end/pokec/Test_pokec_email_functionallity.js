describe('Test email functionalitty', () => {

    beforeEach(() => {
        cy.pokecApplicationLogin(Cypress.env('username'), Cypress.env('password'))
    });

    it('Send email to friend', () => {
        cy.get('#emailBull').trigger('mouseover')
        cy.wait(500)
        cy.get('#emailSubMenuVechtik > .css_naj > :nth-child(1) > a')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
                cy.wait(500)
            })
        cy.get('#id_MessageTo').type(Cypress.env('friend_username'))
        cy.get('[style="height:50px"] > .coSoSpravou > .vpravo > .odoslat-container > .turbutton')
            .click()
    });

    it('Check if email was sent', () => {
        cy.get('#emailBull').trigger('mouseover')
        cy.wait(500)
        cy.get('.css_odoslana > a')
            .should('have.attr', 'href')
            .then((href) => {
                cy.wait(500)
                cy.visit(href)
            })
        cy.get('.od > .ax')
            .then((resp) => {
                const friendEmail = resp[0].title;
                expect(friendEmail).to.contain(Cypress.env('friend_username').toLowerCase())
            })
    });

})