Cypress.Commands.add('applicationLogin', (usernamePokecStevo, passwordPokecStevo) => {
    cy.visit('/');
    cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2')
        .click()

        cy.get('.Form-sc-1mfmq26-0  :nth-child(1)  .Input-sc-1vv8hqf-0')
        .type(usernamePokecStevo)

        cy.get('.LoginFormstyles__PasswordInputArea-sc-1iebk76-7  .Input-sc-1vv8hqf-0')
        .type(passwordPokecStevo)

        cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12  .Form-sc-1mfmq26-0  .Button-sc-1fngo4c-0')
        .click()
})

Cypress.Commands.add('mailLogin', (usernamePokecStevo, passwordPokecStevo) => {
    cy.visit('/');
    cy.get('.input-text')
    .type(usernamePokecStevo)

    cy.get('.input-password')
    .type(passwordPokecStevo)

    cy.get('form > .input-button')
    .click()
})

Cypress.Commands.add('GDPRConsent', () => {
    cy.get('.fc-cta-consent  .fc-button-label')
        .click()
})

Cypress.Commands.add('applicationLogout',() => {
    cy.get('.mi-ic-menu')
        .click()
    cy.get('.link-logout')
        .click()
})

Cypress.Commands.add('chooseRoom', () => {
    cy.get('[href="https://pokec-sklo.azet.sk/miestnost/1/"]  .sc-bAeIUo')
        .click()
    }) 
