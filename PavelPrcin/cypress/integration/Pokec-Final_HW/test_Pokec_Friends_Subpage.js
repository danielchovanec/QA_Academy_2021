describe("Testing if friends subpage is avaliable", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
  });
  // mobile Azet selctors helps avoidnew tabs to be open
  it("chcek friend subpage", () => {
    cy.get(".mi-ic-menu").click();
    cy.get(".link-friends").click();
    cy.get(".DesktopUserCard__Wrapper-sc-4pbwy8-0").should("be.visible");
  });
});
