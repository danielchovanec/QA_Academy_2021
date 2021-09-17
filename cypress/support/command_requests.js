Cypress.Commands.add('getRequest', (endPoints, key) => {
    cy.fixture(endPoints)
    .then((link) => {
        const suffix = link[key]

        cy.request({
            method: 'GET',
            url: Cypress.env("apiUrl") + suffix
        })
    })
})

Cypress.Commands.add('postRequest', (endPoints, key, data) => {
    cy.fixture(endPoints)
    .then((link) => {
        const suffix = link[key]

        cy.request({
            method: 'POST',
            url: Cypress.env("apiUrl") + suffix,
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            },
            body: data
        })
    })
})