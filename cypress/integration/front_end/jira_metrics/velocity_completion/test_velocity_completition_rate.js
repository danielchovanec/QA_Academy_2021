describe('velocity completition rate', () => {
    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    })
    it("should open customer board", () => {
        cy.wait(3000)
        cy.get(':nth-child(2) > [data-cy=menuButton] > [data-cy=menuButtonTitle]').click()
        cy.get('[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton] > [data-cy=menuButtonTitle]').click()
     })

     it('should velocity completition rate is on Client Team dashboard', () => {
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoTitle] > :nth-child(1)').should('be.visible')
     })

     it('should text Velocity completation rate is visible', () => {
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoTitle] > :nth-child(1)').should('have.text','Velocity Completion Rate')
     })

     it('should short metrix description is visible', () => {
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoDescription]').should('have.text', 'Represents the percentage of story points completed against their commitment for every iteration')
     })

     it('should text Team Velocity and data  are visible', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowLabel]').should('be.visible').should('have.text','Team Velocity')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowValue]').should('be.visible')
     })

     it('should text Team Commitment and data  are visible', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowLabel]').should('be.visible').should('have.text', 'Team Commitment')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowValue]').should('be.visible')
     })
     
     it('should text Sprint Completion Rate is visible', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowValue]').should('be.visible')
     })

     it('should Sprint Completion data is visible and expressed by %', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowValue]').should('be.visible').should('contain', '%')
     })

     it('should text Maturity Level is visible', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowLabel]').should('be.visible').should('have.text', 'Maturity Level')
     })

     it('should rating down by 3 stars', () => {
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel] > :nth-child(1) > path').should('be.visible')

        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel] > :nth-child(2) > path').should('be.visible')

        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel] > :nth-child(3) > path').should('be.visible')
     })

     it('should text Short  term trend is visible ', () => {
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendLabel]').should('be.visible').should('have.text', 'Short term trend')
    
    })
    
    it('should text Velocity prediction is visible', () => {
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionLabel]').should('be.visible').should('have.text', 'Velocity prediction')
    })

    it('should Velocity prediction data should indicate a range', () => {
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionBox]').should('be.visible').should('contain','-')
    })

})