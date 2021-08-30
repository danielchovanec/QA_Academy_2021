describe('Test Valid Join to DatingRoom', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.popUp()
        cy.applicationJoinToRoom()
    })
    

    it('join to dating room was successful', ()=> {
        cy.get('.sc-dmlrTW')
            .should('have.text','Zoznamka')
        .should('be.visible')
    })

})
