describe('Test friend subpage', () => {

    before(() => {
        cy.pokecApplicationLogin(Cypress.env('username'), Cypress.env('password'))
    });

    it('test for friend subpage', () => {
        cy.get('#frndBull').trigger('mouseover')
        cy.wait(300)
        cy.get('.css_muz > .css_nick > .js_profileNick')
            .click()
        cy.wait(300)
        cy.get('.profile-header__nick_link')
            .then(resp => {
                expect(resp[0].innerText).to.equal(Cypress.env('friend_username'))
            })
    });

})