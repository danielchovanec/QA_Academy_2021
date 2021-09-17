describe('Test  Valid login', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    })

    it('user login should be successful', () => {
        cy.get('[data-cy=teamsTeamsHeaderLabel]')
            .should('have.text', 'Matrix QA')
            .should('be.visible');
    })

    after(() => {
        cy.applicationLogout()
    })


})

describe.skip('Test  corporate login', () => {

    before(() => {
       cy.visit("https://login-dev.matrix.report/login?client_id=6qpntb8qrhsilpu2m88ssroqek&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://dev.matrix.report/cognito");
       cy.get('.panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > :nth-child(2) > div > #socialSignUpCorporateEmail')    
       .type ("Kristian.Kovacs@ness.com") 
       cy.get('.panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > :nth-child(2) > div > .btn')
       .click()

    })

    it('Corporate login should be successful', () => {
          cy.url().should("include", "microsoftonline")
           
    })
})

describe.skip('Test  Invalid login', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('testUser'), Cypress.env('testPass'))
    })

    it('user login should be successful', () => {
        cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > #loginErrorMessage')
            .should('be.visible')           
             .should("have.text", "The username or password you entered is invalid")
    })
})



