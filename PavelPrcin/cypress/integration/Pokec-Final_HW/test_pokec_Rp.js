describe("Check Rp functionality", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });
    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
  });

  it("RP opened and sent", () => {
    cy.get(".mi-ic-rp-notif").click();
    cy.get(".rpButton").click();
    cy.get("#searchinput").type("esti19kiko77");
    cy.wait(1000);
    cy.get(".UserCard__Wrapper-sc-150gvkt-0").click({ multiple: true });
    cy.get(".rp-input__text").type("Test from CY");
    cy.get(".rp-input__send-button > .mi-icon").click();
    cy.get(".header__back_arrow > a").click();
    cy.get(":nth-child(6) > .card > .nick").should("have.text", "esti19kiko77");
  });
});
