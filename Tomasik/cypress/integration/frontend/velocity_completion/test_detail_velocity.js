describe("Velocity detail page", () => {
  before(() => {
    cy.LoginwithoutUI();
    // cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    cy.wait(1000);
    cy.fixture("jira.matrix").then((subpage) => {
      cy.visit(subpage.detail_velocity);
    });
    cy.setDateRange("January", "2021", "March", "2021");
  });
  it("redirect to detail page is working", () => {
    cy.url().should("contain", "velocity");
  });
});

describe("velocity data check", () => {
  before(() => {});
  it("velocity data are displayed", () => {
    cy.get(":nth-child(2) > [data-cy=uiStatsBoxValue]").should("be.visible");
    cy.get(
      "[data-cy=detailPageGeneralStats] > :nth-child(1) > [data-cy=uiStatsBoxValue]"
    ).should("have.text", "73.99%");

    cy.get(":nth-child(2) > [data-cy=uiStatsBoxLabel]").should("be.visible");
    cy.get(":nth-child(2) > [data-cy=uiStatsBoxValue]").should(
      "have.text",
      "61.18%"
    );
    cy.get(":nth-child(2) > [data-cy=uiStatsBoxValue]").should("be.visible");
    cy.get(":nth-child(3) > [data-cy=uiStatsBoxValue]").should(
      "have.text",
      "41.2"
    );
  });
});
