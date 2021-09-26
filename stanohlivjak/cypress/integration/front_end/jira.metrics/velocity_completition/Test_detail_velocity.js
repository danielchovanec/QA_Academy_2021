describe('Velocity detail page', () => {

    before(() => {
        cy.metrixApplicationLogin(Cypress.env('username'), Cypress.env('password'));
        // cy.wait(1000)
        // cy.applicationLogin(Cypress.env('username'), Cypress.env('password'));
        // cy.fixture('jira.example')
        //     .then((subpage) => {
        //         cy.visit(subpage.detail_velocity)
        //     })
        // cy.setDateRange('January', '2021', 'March', '2021');
    });

    it('avg completion', () => {
        cy.get('[data-cy=detailPageGeneralStats] > :nth-child(1) > [data-cy=uiStatsBoxLabel]')
            .should('be.visible')
        cy.get('[data-cy=detailPageGeneralStats] > :nth-child(1) > [data-cy=uiStatsBoxValue]')
            .should('contain', '73.99%')
    })

    it('avg accuracy', () => {
        cy.get(':nth-child(2) > [data-cy=uiStatsBoxLabel]')
            .should('be.visible')
        cy.get(':nth-child(2) > [data-cy=uiStatsBoxValue]')
            .should('contain', '61.18%')
    })

    it('team commitment', () => {
        cy.get(':nth-child(3) > [data-cy=uiStatsBoxLabel]')
            .should('be.visible')
        cy.get(':nth-child(3) > [data-cy=uiStatsBoxValue]')
            .should('contain', '41.2')
    })
})

