describe("Test Valid Login", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
    // cy.GDPRConsent();
  });
  it("user login should be successful", () => {
    cy.get(".cFdVsN > .lazyload-wrapper > .sc-kjoXOD > .sc-cJSrbW > .sc-kgAjT")
      .should("have.text", "Ľudia na Pokeci")
      .should("be.visible");
  });
  after(() => {
    cy.applicationLogout();
  });
});
describe("Test Invalid Login", () => {
  before(function () {
    cy.applicationLogin(
      Cypress.env("invalidName"),
      Cypress.env("invalidPasswor")
    );
  });
  it("user login shoud be unsuccessful", () => {
    cy.get(".LoginFormstyles__NoAccount-sc-1iebk76-14")
      .should("have.text", "Nemáš ešte účet?")
      .should("be.visible");
  });
});
