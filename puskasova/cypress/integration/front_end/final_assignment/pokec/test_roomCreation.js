describe('Test Room Creation Functionality', () => {

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `testname${id}`

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    
        //login
        cy.applicationLoginPokec(Cypress.env('username'), Cypress.env('password'))
        cy.GDPRConsent()   

        //create room
        cy.createRoom(testname)
        cy.get('.sc-eUWgFQ')
            .click()
        //find room
        cy.findRoom(testname)
        
        })

    after(() => {
        //logout
        cy.get('.sc-eUWgFQ')
            .click()
        cy.get('.sc-gATInX')
            .click()
        cy.get('.link-home')
            .click()
        cy.applicationLogoutPokec()
    })

    it('newly created room should be available', () => {
        cy.get('.sc-dmlrTW')
            .should('have.text', testname)
    })

})

