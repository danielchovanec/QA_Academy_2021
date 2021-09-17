// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('applicationLogin', (username, password) => {
    cy.visit('/');
    cy.get('.Header_header__inner__2zz3f > .Button_button__ZunwN').click();
    cy.get('.panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(3)  #signInFormUsername').type(username);
    cy.get('.panel-left-border  :nth-child(2) :nth-child(1)  .cognito-asf  :nth-child(5)  #signInFormPassword').type(password);
    cy.get('.panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  .btn').click();
});

Cypress.Commands.add('applicationLogout', () => {
    cy.get('.ActiveUser_activeUserAvatar__3CZ9g')
    .click()
    cy.get('[data-cy=uiActiveUserMenuItemLoggout]')
    .click()
})

