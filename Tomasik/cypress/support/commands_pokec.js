Cypress.Commands.add("mailLogin", (usernamePokecDano, passwordPokecDano) => {
  cy.visit("/");

  cy.get(".LoginFormstyles__LoginButton-sc-1iebk76-2").click();
  cy.get(".Form-sc-1mfmq26-0 > :nth-child(1) > .Input-sc-1vv8hqf-0").type(
    usernamePokecDano
  );

  cy.get(
    ".LoginFormstyles__PasswordInputArea-sc-1iebk76-7 > .Input-sc-1vv8hqf-0"
  ).type(passwordPokecDano);

  cy.get(
    ".LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12 > .Form-sc-1mfmq26-0 > .Button-sc-1fngo4c-0"
  ).click();
});

Cypress.Commands.add("GDPRConsent", () => {
  cy.get(".fc-cta-consent  .fc-button-label").click();
});
