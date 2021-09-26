describe('Test Valid Login', () => {

    before(() => {
        cy.pokecApplicationLogin(Cypress.env('username'), Cypress.env('password'))
        // cy.get('.fc-cta-consent > .fc-button-label')
        //     .click()
    });

    it('user Login should be successful', () => {

    });
})

describe.skip('Test Zoznamka', () => {

    before(() => {
        cy.pokecApplicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.get('.fc-cta-consent > .fc-button-label')
            .click()
        cy.get('[href="https://pokec-sklo.azet.sk/miestnost/1/"] > .sc-bAeIUo')
            .click()
    });

    it('user Login should be successful', () => {
        cy.get('.Button-sc-1fngo4c-0')
            .should('be.visible')
    });
})

describe.skip('Test Invalid Login', () => {

    before(() => {
        cy.applicationLogin('email@test.test', 'password')
    });

    it('user Login shouldnt be successful', () => {
        cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12')
            .should('be.visible')
    });
})