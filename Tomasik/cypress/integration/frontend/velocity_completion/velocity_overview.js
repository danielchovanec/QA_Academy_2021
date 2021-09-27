describe("Test velocity oveview matrix", () => {
  before(() => {
    cy.LoginwithoutUI();
    cy.wait(1000);
    cy.fixture("jira.matrix").then((subpage) => {
      cy.visit(subpage.redirect_url);
    });
    cy.setDateRange("January", "2021", "March", "2021");
  });

  it("assert correct team velocity data are received from middleware endpoint", () => {
    cy.GetRequest(
      "jira_middleware",
      "velocity_overview",
      "2021-01-01",
      "2021-03-24"
    ).then((resp) => {
      const average = resp.body.overall.average;
      cy.log(average);
      cy.get(
        ".Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowValue]"
      ).should("have.text", average);
    });
  });
});
