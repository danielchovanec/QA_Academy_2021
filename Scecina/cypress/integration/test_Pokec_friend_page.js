describe('Test Friend page on Pokec', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.friendPageLogin(Cypress.env('username'), Cypress.env('password'))
                  
    })

    it('Check friends page', ()=> {
        cy.get('.profile-header__nick_link')
        .should('have.text', 'vowasgervgeitsxamy')
    })

})



//https://pokec.azet.sk/vowasgervgeitsxamy?i9=7332ca234567