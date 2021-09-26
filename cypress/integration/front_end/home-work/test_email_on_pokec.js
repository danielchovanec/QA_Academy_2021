describe('Test valid login to pokec', () => {
    before(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    cy.GDPRConsent()
})

    it('user login should be successful', () => {
        cy.get('.cFdVsN > .lazyload-wrapper > .sc-kjoXOD > .sc-cJSrbW > .sc-kgAjT').should('be.visible')
    })

    it('should open email inbox', () => {
        cy.get('.iAIJxz > .lazyload-wrapper > .sc-eHgmQL > .sc-kjoXOD > .sc-hSdWYo > .sc-kgAjT').should('be.visible')

        cy.visit('https://mail.azet.sk/')
        cy.get('.input-text').type(Cypress.env('username'))
        cy.get('.input-password').type(Cypress.env('password'))
        cy.get('form > .input-button').click()
        cy.GDPRConsent()
    })
    it('should write and send a new mail', () => {
        
        cy.get('.pisat-novy > .turbutton').click()
        cy.get('.input-text').type(Cypress.env('username'))
        cy.get('.input-password').type(Cypress.env('password'))
        cy.get('form > .input-button').click()
        cy.GDPRConsent()

        cy.get('#id_MessageTo').type(Cypress.env('email'))
        cy.get('#predmetSpravy').type('Nieco')
        cy.get('.cke_wysiwyg_frame').type('Hocico')
        cy.get('.panelNastrojov > .vpravo > .odoslat-container > .turbutton > span').click()
        cy.wait(500)
        cy.get('#js_idfolderListItem_sent__ > .js_priecinok > .priecinok').click()
    })
   

})