describe("Send email and check if sent", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.url("https://mail.azet.sk/inbox/dorucene?i9=60ca750c9f33");
    cy.mailLogin(
      Cypress.env("usernamePokecDano"),
      Cypress.env("passwordPokecDano")
    );
    cy.GDPRConsent();
  });

  it("Send email to friend", () => {
    cy.get(".header__navigation").click();
    cy.get(".link-email").click();
    cy.get(".iAIJxz > .lazyload-wrapper > .sc-eHgmQL > .sc-kjoXOD").click();
    cy.get(
      ".iAIJxz > .lazyload-wrapper > .sc-eHgmQL > .sc-kjoXOD > .sc-hSdWYo > .sc-kgAjT"
    ).click();
    cy.get(
      ".iAIJxz > .lazyload-wrapper > .sc-eHgmQL > .sc-kjoXOD > .sc-TOsTZ"
    ).click();
    cy.visit("https://mail.azet.sk/inbox/dorucene?i9=bc6b4a2a1025");
    cy.get(".pisat-novy > .turbutton").click();
    cy.get("#id_MessageTo").type("bbeni@azet.sk");
    cy.get(".cke_wysiwyg_frame").type("ja som vi-taz!");
    cy.get(
      ".panelNastrojov > .vpravo > .odoslat-container > .turbutton"
    ).click();
    cy.get("#js_idfolderListItem_sent__ > .js_priecinok > .priecinok").click();
  });
});
