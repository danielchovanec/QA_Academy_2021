describe('Test room on pokec', () => {
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

it('should create a room', () => {
    cy.get('.sc-fOKMvo > .sc-dUjcNx > .sc-emmjRN').click()
    cy.get('.Input-sc-1vv8hqf-0').type(Cypress.env('roomName'))
    cy.get('.cfPUNL').click()

    cy.get('.navigation > :nth-child(1) > a').click()

    cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2').click()

    cy.get('.Form-sc-1mfmq26-0 > :nth-child(1) > .Input-sc-1vv8hqf-0').type(Cypress.env('username'))
    cy.get('.LoginFormstyles__PasswordInputArea-sc-1iebk76-7 > .Input-sc-1vv8hqf-0').type(Cypress.env('password'))
    cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12 > .Form-sc-1mfmq26-0 > .Button-sc-1fngo4c-0').click()
    cy.GDPRConsent()
})

it('should open the previously created room', () => {

    cy.get('.sc-rBLzX').should('be.visible')
    cy.get('.sc-rBLzX').click()
    cy.get('.sc-rBLzX').type(Cypress.env('roomName'))
})

})