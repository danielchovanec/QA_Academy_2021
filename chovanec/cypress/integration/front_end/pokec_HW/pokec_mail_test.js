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
        cy.get('.pisat-novy > .turbutton')
        .click()
        cy.get('#id_MessageTo')
        .type("glum45@azet.sk")
        cy.get('.cke_wysiwyg_frame')
        .type("ja som vi-taz!")
        cy.get('.panelNastrojov > .vpravo > .odoslat-container > .turbutton')
        .click()
        cy.get('#js_idfolderListItem_sent__ > .js_priecinok > .priecinok')
        .click()
        // cy.get('.\31 632583519460373 > .od > .ax')
        // .should('have.text', 'glum45@azet.sk')
    })
})