describe("RedirectionToZoznamka", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
    cy.roomRedirection();
  });

  it("user redirection should be successful", () => {
    cy.get(".sc-dmlrTW").should("have.text", "Zoznamka").should("be.visible");
  });
});
