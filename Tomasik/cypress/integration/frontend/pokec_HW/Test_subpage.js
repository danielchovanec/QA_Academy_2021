describe("Check if friends subpage is available", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.mailLogin(
      Cypress.env("usernamePokecDano"),
      Cypress.env("passwordPokecDano")
    );
    cy.GDPRConsent();
  });

  it("Check if friends subpage is available", () => {
    cy.get(".mi-ic-menu").click();
    cy.get(".link-friends").click();
    cy.get(".cvXKQC").should("have.text", "Priatelia");
  });
});
