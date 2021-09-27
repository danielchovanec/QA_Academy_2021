describe("Choosing a room - zoznamka", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err);
      return false;
    });

    cy.applicationLogin("bbeni", "poloma561");
    cy.get(".fc-cta-consent  .fc-button-label").click();
    cy.chooseRoom();
  });

  after(() => {
    cy.get(".sc-eJBYSJ").click();
    cy.get(".sc-fFYUoA").click();
    cy.get(":nth-child(7) > .css_a").click();
  });

  it("choosing a room should be successful", () => {
    cy.get(".sc-dmlrTW").should("have.text", "Zoznamka").should("be.visible");
  });
});
