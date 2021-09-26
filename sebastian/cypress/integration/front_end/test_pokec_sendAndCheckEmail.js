describe('Send mail and test that mail was sent', () => {
    before(() => {
        cy.visit(Cypress.env('pokecURLforSendEmail'))
        cy.loginToPokec(Cypress.env('usernameAzet'), Cypress.env('passwordAzet'))
        cy.popUp()
        
        
    })

    it('mail was sent', ()=> {
        cy.get('.pisat-novy > .turbutton')
            .click()
        cy.get('#ac_to_move')
            .type(Cypress.env('hermiona'))
        cy.get('dd.predmet > .input')
            .type('trapnyPredmet')

        cy.get('.cke_wysiwyg_frame')
            .type('esteTrapnejsiText')

        cy.get('.panelNastrojov > .vpravo > .odoslat-container > .turbutton')
            .click()
        cy.get('#js_idfolderListItem_sent__ > .js_priecinok > .priecinok')
            .click()
        cy.wait(1000)
        cy.get('.od > .ax')
            .then(resp =>{
                expect(resp[0].title).to.equal(Cypress.env('hermiona'))
            })
            
    })

})

