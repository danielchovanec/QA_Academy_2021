describe('Test Sending RP', () => {

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testMessage = `Message${id}`

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        //login
        cy.viewport(750, 750)
        cy.applicationLoginPokec(Cypress.env('username'), Cypress.env('password'))
        cy.GDPRConsent()         
        cy.wait(1000)
        //send RP
        cy.sendRP(Cypress.env('nickName'), testMessage)
        
    })

    after(() => {
        //logout
        cy.get('.header__back_arrow')
        .click()
        cy.applicationLogoutPokec()
    })

    it('RP should be sent successfully', () => { 
        cy.get('.context')
            .should('contain', testMessage)
    })

})

