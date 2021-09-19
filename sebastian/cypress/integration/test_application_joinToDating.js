
// change base url for pokec tests  "baseUrl": "https://pokec.azet.sk/",

describe('Test Valid Join to DatingRoom', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('usernameAzet'), Cypress.env('passwordAzet'))
        cy.popUp()
        cy.applicationJoinToRoom()
    })
    

    it('join to dating room was successful', ()=> {
        cy.get('.sc-dmlrTW')
            .should('have.text','Zoznamka')
        .should('be.visible')
    })

})
