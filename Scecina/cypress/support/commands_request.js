Cypress.Commands.add("getRequest", (endpoints, key) =>{
    cy.fixture(endpoints)
        .then((link) => {
            const suffix = link[key]
            cy.request({
                method: 'GET',
                url: Cypress.env("apiURL") + suffix
            })
        })
})