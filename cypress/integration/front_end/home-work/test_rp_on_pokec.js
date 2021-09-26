describe('Test RP sending on pokec', () => {
    before(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
    })
    cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    cy.GDPRConsent()
})

    it('user login should be successful', () => {
        cy.get('.cFdVsN > .lazyload-wrapper > .sc-kjoXOD > .sc-cJSrbW > .sc-kgAjT').should('be.visible')
    })

    it('should send a RP', () =>{
        cy.get('.mi-ic-menu').click()
        cy.get('.link-rp').click()

        cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2').click()
        cy.get('.Form-sc-1mfmq26-0 > :nth-child(1) > .Input-sc-1vv8hqf-0').type(Cypress.env('username'))
        cy.get('.LoginFormstyles__PasswordInputArea-sc-1iebk76-7 > .Input-sc-1vv8hqf-0').type(Cypress.env('password'))
        cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12 > .Form-sc-1mfmq26-0 > .Button-sc-1fngo4c-0').click()

        cy.GDPRConsent()

        cy.get('.rpButton').click()
        cy.get('#searchinput').type('cytestFake')
        cy.get('.UserCard__Avatar-sc-150gvkt-2').click()
        // cy.get('.UserCard__UserNick-sc-150gvkt-1').should('be.visible')

    })
})