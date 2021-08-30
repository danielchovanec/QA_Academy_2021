describe('test valid Login', () =>{
    before(()=>{
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    })

    it('user login should be successful', ()=> {
        cy.get('[data-cy=teamsTeamsHeaderLabel]')
            .should('have.text','Matrix QA')
        .should('be.visible')
    })
    
    after(()=>{
        cy.applicationLogOut()
    })

})

describe('test valid Login with corporation email', () =>{
    before(()=>{
        cy.visit('https://login-dev.matrix.report/login?client_id=6qpntb8qrhsilpu2m88ssroqek&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://dev.matrix.report/cognito')
        cy.get('.panel-right-border  :nth-child(1)  :nth-child(1)  :nth-child(1)  form  :nth-child(2)  div  #socialSignUpCorporateEmail')
            .type('sebastian.dimun@ness.com')
        cy.get('.panel-right-border  :nth-child(1)  :nth-child(1)  :nth-child(1)  form  :nth-child(2)  div  .btn')
            .click()
    })
    it('test corporation login',()=>{
        cy.url().should('include','microsoftonline')
    })

})

describe('test invalid Login with email and password', () =>{
    before(()=>{
        cy.applicationLogin('jankohrasko','asdasdasd' )
    })
    it('user login should be failed', ()=> {
        cy.get('.panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf > #loginErrorMessage')
            // .should('have.text','The username or password you entered is invalid')
        .should('be.visible')
    })
})









