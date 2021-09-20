describe("Test Calendar Filer-login to dashboard", () => {
  before(function () {
    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
    cy.visit("/team/05a8f919-e193-4028-8dc9-4e8a43545411/stats/jira");
    cy.get(
      ".visible-md .modal-body :nth-child(1) :nth-child(1) :nth-child(1) .cognito-asf :nth-child(2) .btn > span"
    ).click();
    cy.get("[data-cy=teamsTeamBoxHeader]").click();
  });
  describe("Velocity Competition Rate", () => {
    it("Velocity Competition Rate should exit", () => {
      cy.get("[data-cy=uiExpanableContentProductivity]").should("be.visible");
    });
    it("Velocity Competition Rate text", () => {
      cy.get(
        "[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoDescription]"
      ).should("be.visible");
    });
    it("Canvas Chart", () => {
      cy.get("[data-cy=teamVelocityChart] > [data-cy=uiBarChart]").should(
        "be.visible"
      );
    });
    describe("Metrics", () => {
      it("Team Velocity text and add data", () => {
        cy.get(
          ".Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowLabel]"
        ).should("be.visible");
        cy.get(
          ".Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowValue]"
        ).should("be.visible");
      });
      it("Team Commitment  text and add data", () => {
        cy.get(
          ".Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowLabel]"
        ).should("be.visible");
        cy.get(
          ".Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowValue]"
        ).should("be.visible");
      });
      it("Sprint Completion Rate text and add data", () => {
        cy.get(
          ".Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowLabel]"
        ).should("be.visible");
        cy.get(
          ".Velocity_velocity_StatsRowWrapper__gsnpE [data-cy=uiStatsProgress] [data-cy=uiStatsRow] [data-cy=uiStatsRowValue]"
        ).contains("%");
      });
      it("Maturity Level text", () => {
        cy.get(
          ".Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowLabel]"
        ).should("be.visible");
        cy.get(
          ".Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel]"
        );
        // .contains(
        //   ".Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel] > :nth-child(1)"
        // );
      });
      it("Short Term Trend text and chart", () => {
        cy.get(
          "[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendLabel]"
        ).should("be.visible");
        cy.get(
          "[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendIcon] > #Layer_1"
        ).should("be.visible");
      });
      it("Velocity Prediction and example ", () => {
        cy.get(
          "[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionLabel]"
        ).should("be.visible");
        cy.get(
          "[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionBox]"
        ).should("be.visible");
      });
    });
  });
});
/// use npx cypress open --config-file cypress.matrix.json for start this
