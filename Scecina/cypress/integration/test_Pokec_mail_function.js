describe('Test Valid Login', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()          
    
        cy.get('.mi-ic-menu')
        .click()


    
    })


    it('Test mail button', () => {

    cy.get('.link-email')
    .invoke('removeAttr', 'target')
    .click()
    cy.get('#azetmailKlik')
    .should('have.text', 'Azetmail')

    })

    it('Send a new mail to a friend', () => {

        cy.get('.pisat-novy > .turbutton')
        .click();
        cy.newLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()
        cy.get('#ac_to_move')
        .type('vowasgervgeitsxamy');
        cy.get('[style="height:50px"] > .coSoSpravou > .vpravo > .odoslat-container > .turbutton')
        .click()
        
        })

        it('Check if the mail was sent', () => {
        cy.wait(1000)
        cy.get('#js_idfolderListItem_sent__ > .js_priecinok > .priecinok')
        .click();
        cy.get('#notifikacia > .error > a')
        .click()
        cy.newLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()
        cy.get('#js_idfolderListItem_sent__ > .js_priecinok > .priecinok')
        .click();
        cy.get('.\\31 632667599796607 > .od > .ax')
        .should('have.text', 'vowasgervgeitsxamy@azet.sk')


        })
})