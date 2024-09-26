describe("Send email functionality", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));

    // cy.GDPRConsent();
  });
  //sending email to myself and using removeAttr to avoid new tab open
  it("send email", () => {
    cy.get(".mi-ic-menu").click();
    cy.get(".link-email").invoke("removeAttr", "target").click();
    cy.get(".pisat-novy > .turbutton").click();

    cy.get("#id_MessageTo").type("cyTestFake@azet.sk");

    cy.get(".cke_wysiwyg_frame").type("email send");
    cy.get(
      ".panelNastrojov > .vpravo > .odoslat-container > .turbutton"
    ).click();
    cy.get("#js_idfolderListItem_sent__ > .js_priecinok > .priecinok").click();
  });
  //tbody contain sent email
  it("Check email", () => {
    cy.get("tbody").should("be.visible");
  });
});
