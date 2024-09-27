Cypress.Commands.add("LogInWoUi", () =>{
    cy.request({
        method: 'POST',
        url: Cypress.env('OauthTokenURL'),
        headers: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
            'Content-Type': 'application/x-amz-json-1.1'

        },
        body: {
            "AuthParameters":{
                USERNAME: Cypress.env('username'),
                PASSWORD: Cypress.env('password')
            },
            AuthFlow:"USER_PASSWORD_AUTH",
            ClientId: Cypress.env('clientId')
        }

    })
    .then((resp) => {
        window.localStorage.setItem('id_token', resp.body.AuthenticationResult.IdToken)
        window.localStorage.setItem('refresh_token', resp.body.AuthenticationResult.RefreshToken)
    })
})