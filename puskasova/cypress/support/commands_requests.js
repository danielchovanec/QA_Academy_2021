Cypress.Commands.add('getRequest', (endpoint, key) => {
    cy.fixture(endpoint)
        .then((link) => {
            const suffix = link[key]
            cy.request({
                method: 'GET',
                url: Cypress.env("apiUrl") + suffix
            })
        })
})