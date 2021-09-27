Cypress.Commands.add("LoginwithoutUI", () => {
  cy.request({
    method: "POST",
    // url: Cypress.env(OauthTokenURL),
    url: "https://cognito-idp.eu-central-1.amazonaws.com/",
    headers: {
      "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
      "Content-Type": "application/x-amz-json-1.1",
    },
    body: {
      AuthParameters: {
        ///USERNAME: "sharedUser.matrixqa.superadmin@ness.com",
        /// PASSWORD: "testPassword01.",

        USERNAME: "academyqa.superadmin@ness.com",
        PASSWORD: "ndS5E2O9*BQZ5P0gP",
      },
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: "6qpntb8qrhsilpu2m88ssroqek",
    },
  }).then((resp) => {
    window.localStorage.setItem(
      "id_token",
      resp.body.AuthenticationResult.IdToken
    );
    window.localStorage.setItem(
      "refresh_token",
      resp.body.AuthenticationResult.RefreshToken
    );
  });
});

Cypress.Commands.add("getIdToken", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("OauthTokenURL"),
    headers: {
      "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
      "Content-Type": "application/x-amz-json-1.1",
    },
    body: {
      AuthParameters: {
        USERNAME: Cypress.env("username"),
        PASSWORD: Cypress.env("password"),
      },
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: Cypress.env("clientId"),
    },
  }).then((resp) => {
    const id_token = resp.body.AuthenticationResult.IdToken;
    return id_token;
  });
});

Cypress.Commands.add("getRequest", (endpoint, key, sdate, edate) => {
  cy.fixture(endpoint).then((link) => {
    const suffix = link[key];
    cy.getIdToken().then((resp) => {
      cy.request({
        method: "GET",
        url: "https://aggregator-dev.matrix.report/" + suffix,
        headers: {
          Authorization: resp,
        },
        qs: {
          startDate: sdate,
          endDate: edate,
          teamId: "05a8f919-e193-4028-8dc9-4e8a43545411",
        },
      }).then((resp) => {
        return resp;
      });
    });
  });
});
