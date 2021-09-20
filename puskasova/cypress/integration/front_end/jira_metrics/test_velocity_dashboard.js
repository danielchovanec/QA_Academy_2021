describe('Test Velocity Completion Rate Metric', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    })

    it('Velocity completion rate should be available in Client Team Dashboard', () => {
        cy.get('[data-cy=menuButtonDropdownIcon] > .MuiSvgIcon-root')
            .click()
        cy.get('[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton] > [data-cy=menuButtonTitle]')
            .click()
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoTitle] > :nth-child(1)')
            .should('have.text', 'Velocity Completion Rate')
    })

    it('Short metrics description should be available', () => {
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoDescription]')
            .should('have.text', 'Represents the percentage of story points completed against their commitment for every iteration')
    })


    it('Team Velocity text should be displayed next to velocity data', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowLabel]')
            .should('have.text', 'Team Velocity')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowValue]')
            .should('have.text', '36.67')
    })

    it('Team Commitment text should be displayed next to velocity data', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowLabel]')            
            .should('have.text', 'Team Commitment')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowValue]')
            .should('have.text', '48.17')
    })

    it('Sprint Completion Rate text should be displayed next to velocity data and expressed in %', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowLabel]')
            .should('have.text', 'Sprint Completion Rate')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowValue]')            
            .should('contain', '76.08')
            .should('contain', '%')
    })

    it('Maturiy Level text should be visible', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowLabel]')            
            .should('have.text', 'Maturity Level')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel] > :nth-child(1) > path') 
            .should('be.visible')
    })

    it('Short Term Trend text should be visible', () => {
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendLabel]')
            .should('have.text', 'Short term trend')
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendIcon] > #Layer_1')
            .should('be.visible')
    })

    it('Velocity Prediction text should be visible', () => {
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionLabel]')
            .should('have.text', 'Velocity prediction')
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionBox]')
            .should('be.visible')
            .should('contain', '-')
    })
})