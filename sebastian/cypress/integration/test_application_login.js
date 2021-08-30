describe('Test Valid Login', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.popUp()
    })
    

    it('user login should be successful', ()=> {
        cy.get('.sc-elJkPf > :nth-child(2) > .sc-eNQAEJ')
        .should('be.visible')
    })

})

describe('Test Invalid Login with incorrect username', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('incorrectUsername'), Cypress.env('password'))
    })
    

    it('user login should be failed', ()=> {
        cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12 > .Form-sc-1mfmq26-0 > .Button-sc-1fngo4c-0')
        .should('be.visible')
    })

})

describe('Test Invalid Login with incorrect password', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('incorrectPassword'))
    })
    

    it('user login should be failed', ()=> {
        cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12 > .Form-sc-1mfmq26-0 > .Button-sc-1fngo4c-0')
        .should('be.visible')
    })

})
