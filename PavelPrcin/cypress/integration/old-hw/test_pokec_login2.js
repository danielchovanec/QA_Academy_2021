describe("Test Valid Login", () => {
  before(function () {
    cy.applicationLogin(Cypress.env("username"), Cypress.env("password"));
  });

  it("user login shoud be successful", () => {
    cy.get("[data-cy=teamsTeamsHeaderLabel]")
      .should("have.text", "Matrix QA")
      .should("be.visible");
  });
  after(() => {
    cy.applicationLogOut();
  });
});
describe("test coreporate emial", () => {
  before(function () {
    cy.visit(
      "https://login-dev.matrix.report/login?client_id=6qpntb8qrhsilpu2m88ssroqek&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://dev.matrix.report/cognito"
    );
    cy.get(
      ".panel-right-border :nth-child(1) :nth-child(1) :nth-child(1) > form > :nth-child(2) > div > #socialSignUpCorporateEmail"
    ).type("Pavel.Prcin@ness.com");
    cy.get(
      ".panel-right-border :nth-child(1) :nth-child(1) :nth-child(1) > form > :nth-child(2) > div > .btn"
    ).click();
  });
  it("test url", () => {
    cy.url().should("include", "microsoftonline");
  });
});

describe("Test Invalid Login", () => {
  before(function () {
    cy.applicationLogin(
      Cypress.env("invalidName"),
      Cypress.env("invalidPasswor")
    );
  });

  it("user login shoud be unsuccessful", () => {
    cy.get(
      ".panel-left-border :nth-child(2) :nth-child(1) .cognito-asf > #loginErrorMessage"
    )
      .should("have.text", "The username or password you entered is invalid")
      .should("be.visible");
  });
});
