describe("Test Calendar Filer-login to dashboard", () => {
  before(function () {
    cy.applicationLoginMatrix(
      Cypress.env("usernameMX"),
      Cypress.env("passwordMX")
    );
  });
  //redirect to overview and backlog healt details
  it("redirecting to dashboard overview and Backlog Health details page", () => {
    cy.get("[data-cy=menuButtonDropdownIcon] > .MuiSvgIcon-root").click();
    cy.get(
      "[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton] > [data-cy=menuButtonTitle]"
    ).click();
    cy.get(
      "[data-cy=uiExpanableContentQuality] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(2) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoControls] > [data-cy=uiButton] > [data-cy=uiButtonLabel]"
    ).click();
  });
  //creating record
  it("creating record", () => {
    cy.get(
      "[data-cy=backlogHealthDetailPageAddRecord] > [data-cy=uiButton] > [data-cy=uiButtonLabel]"
    ).click();
    cy.get(".MuiSelect-root").click();
    cy.get('[data-value="2021-07-01"]').click();
    cy.get(":nth-child(1) > .MuiFormGroup-root > :nth-child(1)").click();
    cy.get(":nth-child(2) > .MuiFormGroup-root > :nth-child(2)").click();
    cy.get(":nth-child(3) > .MuiFormGroup-root > :nth-child(1)").click();
    cy.get(":nth-child(4) > .MuiFormGroup-root > :nth-child(2)").click();
    cy.get(":nth-child(5) > .MuiFormGroup-root > :nth-child(1)").click();
    cy.get(":nth-child(6) > .MuiFormGroup-root > :nth-child(2)").click();
    cy.get(":nth-child(7) > .MuiFormGroup-root > :nth-child(1)").click();
    cy.get(":nth-child(8) > .MuiFormGroup-root > :nth-child(2)").click();
    cy.get(":nth-child(9) > .MuiFormGroup-root > :nth-child(1)").click();
    cy.get(
      "[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ > [data-cy=uiButtonLabel]"
    ).click();
    cy.get(".Button_warning__1g_u_ > [data-cy=uiButtonLabel]").click();
  });
  // existence of record
  it("chceking existence of record", () => {
    cy.get("[data-cy=uiTableBody] > [data-cy=uiTableRow]").should("be.visible");
    cy.get(
      "[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(1)"
    ).should("contain", "July 2021");
    cy.get(
      "[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(2)"
    ).should("have.text", "YES");
  });
  it("deleting record", () => {
    cy.get(
      "[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ"
    ).click();
  });
});
