describe("Detail velocity ", () => {
  let overview;
  let detail;
  beforeEach(() => {
    cy.getRequest(
      "jira_middleware",
      "velocity_overview",
      "2021-01-01",
      "2021-03-24"
    ).as("overview_page");

    cy.getRequest(
      "jira_middleware",
      "velocity_detail",
      "2021-01-01",
      "2021-03-24"
    ).as("detail_page");
  });

  it("verify  sprint completition rate", () => {
    cy.get("@overview_page").should((resp) => {
      overview = resp.body.overall.overallCompletion;
    });

    cy.get("@detail_page").should((resp) => {
      detail = resp.body.overall.avgCompletion;
      expect(overview).to.eq(detail);
    });
  });

  it("verify 'commitment' metrix is equal on both endpoints", () => {
    cy.get("@overview_page").should((resp) => {
      overview = resp.body.overall.overallCommitment;
    });
    cy.get("@detail_page").should((resp) => {
      detail = resp.body.overall.avgCommitment;
      expect(overview).to.eq(detail);
    });
  });
  it("verify 'average' metrix is equal on both endpoints", () => {
    cy.get("@overview_page").should((resp) => {
      overview = resp.body.overall.average;
    });
    cy.get("@detail_page").should((resp) => {
      detail = resp.body.overall.avgVelocity;
      expect(overview).to.eq(detail);
    });
  });
});
