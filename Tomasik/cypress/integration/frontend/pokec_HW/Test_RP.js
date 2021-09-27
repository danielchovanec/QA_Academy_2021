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

  it("RP opened and sent", () => {
    cy.get(".mi-ic-rp-notif").click();
    cy.get(".rpButton").click();
    cy.get("#searchinput").type("Glum45");
    cy.wait(2000);
    cy.get(".UserCard__Wrapper-sc-150gvkt-0").click({ multiple: true });
    cy.get(".rp-input__text").type("Ja som vy-hral");
    cy.get(".rp-input__send-button > .mi-icon").click();
    cy.get(".header__back_arrow > a").click();
    cy.get(".mi-ic-menu").click();
    cy.get(".header__menu--user > .card > .nick").should("have.text", "Glum45");
  });
});
