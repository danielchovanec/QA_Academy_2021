Cypress.Commands.add("applicationLogin", (username, password) => {
  cy.visit("/");
  cy.get(".Header_header__inner__2zz3f > .Button_button__ZunwN").click();

  cy.get(
    ".panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(3)  #signInFormUsername"
  ).type(username);

  cy.get(
    ".panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(5)  #signInFormPassword"
  ).type(password);

  cy.get(
    ".panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > .btn"
  ).click();
});
/*
Cypress.Commands.add("corporateLogin", (username) => {
  cy.visit("/");
  cy.get(".Header_header__inner__2zz3f > .Button_button__ZunwN").click();
  cy.get(
    ".panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > :nth-child(2) > div > #socialSignUpCorporateEmail"
  ).type(username);

  cy.get(
    ".panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > :nth-child(2) > div > .btn"
  ).click();

  cy.get(
    ".panel-left-border  :nth-child(2)  :nth-child(1) .cognito-asf .btn"
  ).click();
});

Cypress.Commands.add("applicationLogout", () => {
  cy.get(".ActiveUser_activeUserAvatar__3CZ9g").click();
  cy.get("[data-cy=uiActiveUserMenuItemLoggout]").click();
});*/

Cypress.Commands.add("applicationLoginMatrix", (username, password) => {
  cy.visit("/");
  cy.get(".Header_header__inner__2zz3f > .Button_button__ZunwN").click();
  cy.get(
    ".panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(3) #signInFormUsername"
  ).type(username);
  cy.get(
    ".panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(5)  #signInFormPassword"
  ).type(password);
  cy.get(
    ".panel-left-border  :nth-child(2)  :nth-child(1) .cognito-asf .btn"
  ).click();
});

Cypress.Commands.add("applicationLogout", () => {
  cy.get(".mi-ic-menu").click();
  cy.get(".link-logout").click();
});

Cypress.Commands.add("chooseRoom", () => {
  cy.get(
    '[href="https://pokec-sklo.azet.sk/miestnost/1/"]  .sc-bAeIUo'
  ).click();
});
