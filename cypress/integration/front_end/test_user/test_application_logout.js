describe('Test  logout', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))

            cy.get('.ActiveUser_activeUserAvatar__3CZ9g')
            .click()

            cy.get('[data-cy=uiActiveUserMenuItemLoggout]')
            .click()

        })
    

    it('user logout should be successful', () => {
        cy.get('.visible-md > .modal-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(2) > .btn > span')
        .should("be.visible")
    })
})