describe('Test Friend page on Pokec', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
    cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    cy.GDPR()  
                  
    })

    it('Check friends page is displayed', ()=> {
        cy.get('.efOGkC > .lazyload-wrapper > .sc-eHgmQL')
        .click()
        cy.get('.sc-hSdWYo > div > a')
        .invoke('removeAttr', 'target')
        .click()
        cy.get('.profile-header__nick_link')
        .should('have.text', 'vowasgervgeitsxamy')
    })

})



//https://pokec.azet.sk/vowasgervgeitsxamy?i9=7332ca234567