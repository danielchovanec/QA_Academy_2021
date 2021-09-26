describe('Test created  new room in Pokec', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()          
                
    })

    it('Check if the room was created',()=>{
        cy.get('.sc-CtfFt')
        .type('M4STERB8room');
        cy.get('.sc-jeCdPy > .sc-hSdWYo > .sc-fYiAbW > .sc-dUjcNx > .sc-emmjRN')
        .click();
        cy.get('.sc-dmlrTW')
        .should('have.text', 'M4STERB8room')
    })

})