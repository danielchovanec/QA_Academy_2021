describe('Test RP send message and check if it was sent', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()          
    
        cy.get('.mi-ic-rp-notif')
        .click()    
    })

    it('Test RP send message', ()=>{

    cy.get('.rpButton')
    .click()
    cy.get('.UserCard__Avatar-sc-150gvkt-2')
    .click()
    cy.get('.rp-input__text')
    .type('QA?');
    cy.get('.rp-input__send-button')
    .click();
    

    })

    it('Test if the RP message was sent',()=>{

    cy.get(':nth-child(3) > .rpMessage')
    .should('include.text', '18:05QA?')

    })

})