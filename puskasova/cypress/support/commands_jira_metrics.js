Cypress.Commands.add('applicationLogin', (username, password) => {
    cy.visit('/')
    cy.get('.Header_header__inner__2zz3f > .Button_button__ZunwN')
        .click()
    cy.get('.panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(3)  #signInFormUsername')
        .type(username)
    cy.get('.panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(5)  #signInFormPassword')
        .type(password)
    cy.get('.panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf > .btn')
        .click()
})

Cypress.Commands.add('applicationLogout',() => {
    cy.get('.ActiveUser_activeUserAvatar__3CZ9g').click()
    cy.get('[data-cy=uiActiveUserMenuItemLoggout]').click()

})

Cypress.Commands.add('LogInWoUi', () => {
    cy.request({
        method: 'POST',
        url: Cypress.env('OauthTokenURL'),
        headers: {      
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
            'Content-Type': 'application/x-amz-json-1.1'
        },
        body: {
            "AuthParameters": {
                USERNAME: Cypress.env('username'),
                PASSWORD: Cypress.env('password')
            },
 
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: Cypress.env('clientID') 
        }
    })
        .then((resp) => {
            window.localStorage.setItem('id_token', resp.body.AuthenticationResult.IdToken)
            window.localStorage.setItem('refresh_token', resp.body.AuthenticationResult.RefreshToken)
        })
})