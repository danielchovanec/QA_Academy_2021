describe("Test Valid Login", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
    it("gdpr", () => {
      cy.get(".fc-cta-consent  .fc-button-label").click();
    });
    cy.applicationLogout();
  });
  it("user logout should be successful", () => {
    cy.get(
      ".Headerstyles__TabletRegisterAndPeopleCount-tm4e6p-6 > .Button-sc-1fngo4c-0"
    ).should("be.visible");
  });
});
