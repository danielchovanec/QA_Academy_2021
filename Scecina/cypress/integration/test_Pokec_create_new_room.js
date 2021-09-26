describe('Test creating a new room in Pokec', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.GDPR()          
                
    })


    it('Test creating new room', ()=> {

    cy.get('.sc-fOKMvo > .sc-dUjcNx > .sc-emmjRN')
    .click();
    cy.get('.Input-sc-1vv8hqf-0')
    .type('M4STERB8room');
    cy.get('.cfPUNL')
    //.invoke('removeAttr', 'target') - not working, still opens new tab
    .click()

    })

})