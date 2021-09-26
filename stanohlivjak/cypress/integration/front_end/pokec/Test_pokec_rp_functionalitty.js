describe('Test email functionalitty', () => {

    beforeEach(() => {
        cy.pokecApplicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.get('#frndBull').trigger('mouseover')
        cy.get('.css_muz > .css_nick > .js_profileNick').trigger('mouseover')
        cy.get('.css_muz > .css_meta > .css_rpcka').trigger('mousedown')
        cy.visit('https://pokec.azet.sk/rp?i9=a81e220b2a31&v=161#nova-rp/M4STERB8')
        cy.get('#writeMessageArea')
            .type('QA test text')
        cy.get('.button')
            .click()
    });

    it('Check time when message was sent', () => {
        cy.get('.nova > .timeOfMessage')
            .then(resp => {
                const now = new Date();
                const timeHours = now.getHours() + "." + now.getMinutes()
                expect(resp[0].innerText).to.equal(timeHours.toString())
            })
    });

    it('Check body message', () => {
        cy.get('.nova > .textOfMessage')
            .should('contain', 'QA test text')
    });

})