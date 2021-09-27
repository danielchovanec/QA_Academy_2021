describe("Test throughput metrics", () => {
  before(() => {
    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
    cy.wait(1000);
  });
  it("redirect to throughput detail page is working", () => {
    cy.get(
      ":nth-child(2) > [data-cy=menuButton] > [data-cy=menuButtonTitle]"
    ).click();
    cy.get(
      "[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton] > [data-cy=menuButtonTitle]"
    ).click();
    cy.get(
      "[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(2) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoControls] > [data-cy=uiButton] > [data-cy=uiButtonLabel]"
    ).click();
    cy.wait(2000);
    cy.get(
      "[data-cy=uiDateRangeSelectLastButtons] > :nth-child(1) > [data-cy=uiButtonLabel]"
    ).click();
    cy.get("[data-cy=uiTableBody] tr").should("have.length", 4);
  });

  it("redirect to throughput detail page is working 2 ", () => {
    cy.get(
      "[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton]"
    ).click();

    cy.get(":nth-child(2) > [data-cy=menuButton]").click();

    cy.get(
      "[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(2) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoControls] > [data-cy=uiButton] > [data-cy=uiButtonLabel]"
    ).click();

    cy.get(":nth-child(2) > [data-cy=uiButtonLabel]").click();
    cy.wait(2000);

    cy.get("[data-cy=uiTableBody] tr").should("have.length", 6);
  });

  it("redirect to throughput detail page is working 3", () => {
    cy.get(
      "[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton]"
    ).click();

    cy.get(":nth-child(2) > [data-cy=menuButton]").click();

    cy.get(
      ".DateRange_period_selected__V8PFy > [data-cy=uiButtonLabel]"
    ).click();
    cy.wait(2000);

    cy.get(":nth-child(3) > [data-cy=uiButtonLabel]").click();

    cy.get(
      "[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(2) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoControls] > [data-cy=uiButton] > [data-cy=uiButtonLabel]"
    ).click();
    cy.wait(2000);

    cy.get("[data-cy=uiTableBody] tr").should("have.length", 10);
  });
});
