describe('Test Valid Login', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    });

    it('user Login should be successful', () => {
        cy.get('.sc-lhVmIH')
            .should('be.visible')
    });
})

describe('Test Zoznamka', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.get('[href="https://pokec-sklo.azet.sk/miestnost/1/"] > .sc-bAeIUo')
            .click()
    });

    it('user Login should be successful', () => {
        cy.get('.Button-sc-1fngo4c-0')
            .should('be.visible')
    });
})

describe('Test Invalid Login', () => {

    before(() => {
        cy.applicationLogin('email@test.test', 'password')
    });

    it('user Login shouldnt be successful', () => {
        cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12')
            .should('be.visible')
    });
})