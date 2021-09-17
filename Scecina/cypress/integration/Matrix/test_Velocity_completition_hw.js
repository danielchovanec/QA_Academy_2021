describe('Test velocity completition rate metric', () => {

    before( ()=> {
        cy.LogInWoUi()
        cy.wait(1000)
    cy.fixture('jira_matrix')
        .then((subpage) => {
            cy.visit(subpage.detail_velocity_rate)
        })
    cy.get('[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton]')
        .click()
    
    })


    it('Velocity Completition Rate metric overview should be visible', ()=> {
        
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1)')
        .should('be.visible')
    
    })

    it('Velocity Completition Rate text should be visible', ()=> {

        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoTitle] > :nth-child(1)')
        .should('be.visible')
        .should('have.text', 'Velocity Completion Rate')
       
    })

    it('Short metrics description should be visible', () => {
        
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoDescription]')
        .should('be.visible')
        .should('have.text', 'Represents the percentage of story points completed against their commitment for every iteration')
    
    })

    it('Team Velocity text should be visible and with data', () => {
        
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowLabel]')
        .should('be.visible')
        .should('have.text', 'Team Velocity')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowValue]')
        .should('be.visible')
        .should('have.text', '36.67')
    
    })

    it('Team Commitment text is visible and with data', () => {
       
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowLabel]')
        .should('be.visible')
        .should('have.text', 'Team Commitment')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowValue]')
        .should('be.visible')
        .should('have.text','48.17')
    
    })

    it('Sprint Completion Rate test is visible and with data and expressed by %', () => {
       
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowLabel]')
        .should('be.visible')
        .should('have.text', 'Sprint Completion Rate')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowValue]')
        .should('be.visible')
        .should('have.text', '76.08%')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowValue]')
        .should('be.visible')
        .should('contain', '%')
    
    })

    it('Maturity test has visible stars and contains text Maturity Level', () => {
        
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowLabel]')
        .should('be.visible')
        .should('have.text', 'Maturity Level')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel] > :nth-child(1) > path')
        .should('be.visible')
   
    })

    it('Short term trend text is visible and has a line chart', () => {
        
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendLabel]')
        .should('be.visible')
        .should('have.text', 'Short term trend')
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendIcon] > #Layer_1')
        .should('be.visible')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel] > :nth-child(2) > path')
        .should('be.visible')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel] > :nth-child(3) > path')
        .should('be.visible')
    
    })

    it('Velocity prediction text is visible and range indication is visible', () => {
       
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionLabel]')
        .should('be.visible')
        .should('have.text', 'Velocity prediction')
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionBox]')
        .should('be.visible')
    
    })

})