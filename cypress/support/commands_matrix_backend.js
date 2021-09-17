// Cypress.Commands.add('LogInWoUi', () => {
//     cy.request({
//         method: 'POST',
//         url:Cypress.env('OauthTokenURL'),
//         headers: {
//             'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
//             'Content-Type': 'application/x-amz-json-1.1'
//         },
//         body: {
//             "AuthParameters": {
//                 USERNAME: Cypress.env('username'),
//                 PASSWORD: Cypress.env('password')
//             },
//             AuthFlow: "USER_PASSWORD_AUTH",
//             ClientId: Cypress.env('clientId')
//         }

//     })
//     .then((resp) => {
//         window.localStorage.setItem('id_token', resp.body.AuthenticationResult.IdToken)
//         window.localStorage.setItem('refresh_token', resp.body.AuthenticationResult.RefreshToken)
//     })
// })

// Cypress.Command.add('getIdToken', () => {
//     cy.request({
//         method: 'POST',
//         url:Cypress.env('OauthTokenURL'),
//         headers: {
//             'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
//             'Content-Type': 'application/x-amz-json-1.1'
//         },
//         body: {
//             "AuthParameters": {
//                 USERNAME: Cypress.env('username'),
//                 PASSWORD: Cypress.env('password')
//             },
//             AuthFlow: "USER_PASSWORD_AUTH",
//             ClientId: Cypress.env('clientId')
//         }

//     })

//     .then((resp) => {
//         const id_token = resp.body.AuthenticationResult.IdToken
//         return (id_token)
//     })
// })

// Cypress.Commands.add('getRequest', (endPoints,key,sdate,edate) => {
//     cy.fixture(endPoints)
//         .then((link) => {
//                 const suffix = link[key]

//                 cy.getIdToken()
//                 .then((resp) => {
//                     cy.request({
//                         method: 'GET',
//                         url:  Cypress.env('aggregatorURL') + suffix,
//                         headers: {
//                             Authorization:  resp
//                         },
//                         qs: {
//                             startDate: sdate,
//                             endDate: edate,
//                             teamId: Cypress.env("aws_team_id")
//                         }
//                     })
//                     .then(resp => {
//                         return resp
//                     })
//                 })
//         })
// } )