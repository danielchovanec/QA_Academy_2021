Cypress.Commands.add('applicationLogin', (username, password) => {
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     console.log(err);
    //     return false;
    // })
    cy.visit("/");
    cy.get('.Header_header__inner__2zz3f > .Button_button__ZunwN')
        .click()
    cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername')
        .type(username)
    cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword')
        .type(password)
    cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > .btn')
        .click()
})

// Cypress.Commands.add('metrixApplicationLogin', (username, password) => {
//     cy.visit("/");
//     cy.get('.Header_header__inner__2zz3f > .Button_button__ZunwN')
//         .click()
//     cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername')
//         .type(username)
//     cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword')
//         .type(password)
//     cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > .btn')
//         .click()
// })

// Cypress.Commands.add('applicationLogout', () => {
//     cy.get('.mi-ic-menu').click()
//     cy.get('.link-logout').click()
// })