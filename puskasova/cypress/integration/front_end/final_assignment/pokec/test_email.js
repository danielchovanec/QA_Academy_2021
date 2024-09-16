describe('Test Sending Emails', () => {

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testRE = `RE${id}`

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        //login
        cy.applicationLoginPokec(Cypress.env('username'), Cypress.env('password'))
        cy.wait(1000)
        cy.GDPRConsent()         
        cy.wait(1000)
        
        //redirection to e-mails
        cy.get('.iAIJxz > .lazyload-wrapper > .sc-eHgmQL')
            .invoke('removeAttr', 'target').click()

        //sending an e-mail
        cy.sendEmail(Cypress.env('emailAddress'), testRE)

        //redirection to sent e-mails
        cy.get('#js_idfolderListItem_sent__ > .js_priecinok > .priecinok')
            .click()            
        })

    after(() => {
        //logout
        cy.get('#ab_usr')
            .click()
        cy.get('#ab_logout')
            .click()
    })

    it('email should be sent successfully', () => { 
            cy.get('#vObsahu')
                .should('contain', testRE)
    })

})

