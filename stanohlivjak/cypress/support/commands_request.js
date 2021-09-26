Cypress.Commands.add('getRequest', (endpoint, key) => {
    cy.fixture(endpoint)
        .then((link) => {
            const suffix = link[key]
            cy.log(suffix)
            cy.request({
                method: 'GET',
                url: Cypress.env("apiUrl") + suffix
            })
        })
})

// Cypress.Commands.add('postRequest', (endpoint, key, data) => {
//     cy.fixture(endpoint)
//         .then((link) => {
//             const suffix = link[key]
//             cy.request({
//                 method: 'POST',
//                 url: Cypress.env("apiUrl") + suffix,
//                 headers: {
//                     'Content-Type': 'application/json; charset=UTF-8'
//                 },
//                 body: data
//             })
//         })
// })