describe("Test if created room exist", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
  });

  it("see if room was created", () => {
    cy.get(".mi-ic-menu").click();
    cy.get(".link-rooms").click();
    cy.get(":nth-child(2) > .sc-dtwoBo").should("exist");
  });
});
