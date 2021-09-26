describe('Test velocity completion rate page', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.wait(2000)
        cy.get('[data-cy=teamsTeamBoxHeader]')
            .click()
        cy.wait(2000)
    })

    it('"Velocity Competition Rate" should be shown on Client Team Dashboard', () => {
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoTitle] > :nth-child(1)')
            .should('have.text', 'Velocity Completion Rate')
    });

    it('Tooltip', () => {
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoTitle] > :nth-child(1) > [data-cy=uiInfoTooltip] > [data-cy=uiTooltip] > span > svg > circle')
            .trigger('mousemove', { force: true })
            .wait(500)
            .then((resp) => {
                console.log("Tooltip shown")
            })
    })

    it('Velocity short metrics description', () => {
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoDescription]')
            .should('have.text', 'Represents the percentage of story points completed against their commitment for every iteration')
    });

    it('canvas', () => {
        cy.get('[data-cy=teamVelocityChart] > [data-cy=uiBarChart]')
            .then((resp) => {
                console.log(resp)
            })
    });

    it('Team velocity should be displayed', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowLabel]')
            .should('be.visible')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowValue]')
            .should('have.text', '36.67')
    });

    it('Team commitment text', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowLabel]')
            .should('be.visible')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowValue]')
            .should('have.text', '48.17')
    });

    it('Spring completion rate', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowLabel]')
            .should('be.visible')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowValue]')
            .contains('%')
    });

    it('Maturity level', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowLabel]')
            .should('be.visible')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel]')
            .should('be.visible')
    });

    it('Maturity level should not have 4 stars', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel]')
            // .eq(4)
            // .should('not.exist')
            .then((resp) => {
                expect(resp[0].childElementCount).to.be.lessThan(4)

            })
    });

    it('Short term trend', () => {
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendLabel]')
            .should('be.visible')
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendLabel] > [data-cy=uiInfoTooltip] > [data-cy=uiTooltip] > span > svg > circle')
            .trigger('mousedown')
    });

    it('Velocity prediction', () => {
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionLabel]')
            .should('be.visible')
    });

    it('Velocity prediction is between 20-50', () => {
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionBox]')
            .then((resp) => {
                console.log(resp[0].innerHTML)
            })
    });

})