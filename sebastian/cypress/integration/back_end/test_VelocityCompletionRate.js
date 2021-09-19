describe('Velocity detail page and correct title', () =>{
    before( ()=>{
        cy.LogInWoUi()
        // cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.wait(1000)
        cy.fixture('jira_metrix')
            .then((subpage) => {
                cy.visit(subpage.detail_velocity_page)
            })
    })
    it('VCR metric was added', ()=>{
        cy.get('[data-cy=uiExpanableContentProductivity]  .MuiCollapse-container  .MuiCollapse-wrapper  .MuiCollapse-wrapperInner  #panel1a-content  [data-cy=uiExpanableContentDetails]  .MuiGrid-container > :nth-child(1)')
            .should('be.visible')
    })
    it('VCR text is displayed', ()=>{
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoTitle] > :nth-child(1)') 
           .should('have.text','Velocity Completion Rate')
    })
    it('long metric description is displayed', ()=>{
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoTitle] > :nth-child(1)')
            .should('have.text','Velocity Completion Rate')
    })
    it('short metric description is displayed', ()=>{
        cy.get('[data-cy=uiExpanableContentProductivity] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(1) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoDescription]')
                .should('have.text','Represents the percentage of story points completed against their commitment for every iteration')
    })
    it('Canvas chart is displayed', ()=>{
        cy.get('[data-cy=teamVelocityChart] > [data-cy=uiBarChart]')
            .should('be.visible')    
    })  
})










describe('VCR metric check ', () =>{
    before( ()=>{
        
    })
    it('Team Velocity element and data are displayed correctly', ()=>{
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowLabel]')
            .should('be.visible')
            .should('have.text','Team Velocity')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(1) > [data-cy=uiStatsRowValue]')
            .should('be.visible')
            .should('have.text', '36.67')
    })

    it('Team Commitment element and data are displayed correctly', ()=>{
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowLabel]')
            .should('be.visible')
            .should('have.text','Team Commitment')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > :nth-child(2) > [data-cy=uiStatsRowValue]')
            .should('have.text', '48.17')
    })

    it('Sprint completion rate element and data are displayed correctly', ()=>{
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowLabel]')
            .should('be.visible')
            .should('have.text','Sprint Completion Rate')  
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > [data-cy=uiStatsProgress] > [data-cy=uiStatsRow] > [data-cy=uiStatsRowValue]')
            .should('contain','76.08')
            .should('contain','%')
    })

    it('Maturity level element and data are displayed correctly', ()=>{
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowLabel]')
            .should('be.visible')
            .should('have.text','Maturity Level')
        cy.get('.Velocity_velocity_StatsRowWrapper__gsnpE > .undefined > [data-cy=uiStatsRowValue] > [data-cy=uiCurrentLevel]')
            .should('be.visible')
    })
    it('Short term trend element and data are displayed correctly', ()=>{
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendLabel]')
            .should('be.visible')
            .should('have.text','Short term trend')
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiTrend] > [data-cy=uiTrendIcon] > #Layer_1')
            .should('be.visible')
    })
    it('Velocity prediction element and data are displayed correctly', ()=>{
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionLabel]') 
            .should('be.visible')
            .should('have.text','Velocity prediction') 
        cy.get('[data-cy=teamVelocity] > .ChartContent_chartContent_overallStats__3vdbk > [data-cy=uiPrediction] > [data-cy=uiPredictionBox]')
            .should('be.visible')
    
    })

})


