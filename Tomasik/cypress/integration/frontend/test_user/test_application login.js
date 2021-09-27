describe("Test Valid login", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.applicationLogin("bbeni", "poloma561");
    cy.get(".fc-cta-consent  .fc-button-label").click();
  });

  after(() => {
    cy.applicationLogout();
  });

  it("user login should be successful", () => {
    cy.get(".mi-ic-bell").should("be.visible");
  });
});

describe("Test Valid login", () => {
  it("user Login should be successful", () => {
    cy.get("[data-cy=teamsTeamsHeaderLabel]")
      .should("have.text", "Matrix QA")
      .should("be.visible");
  });
});

//describe("Test Corporation Login", () => {
// before(() => {
//  cy.corporateLogin("stefan.tomasik@ness.com");
//});

//it("user login is not sucessfull", () => {
//   cy.url().should("include", "microsoft");
// });
///});

describe("Test  Invalid Login", () => {
  before(() => {
    cy.applicationLogin("hat", "hat");
  });
  it("User login should not be succesful", () => {
    cy.get(".InfoTitle__Text-sc-1sdmhps-2")
      .should("have.text", "Zadané údaje nie sú správne.")
      .should("be.visible");
  });
});
