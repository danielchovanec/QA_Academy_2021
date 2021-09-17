describe("Velocity detail page",  () => {

    before(() => {
        cy.LogInWoUi()
        cy.wait(2000)
        cy.fixture("jira-metrics")
            .then((subpage) => {
                cy.visit(subpage.detail_velocity)
            })
        cy.setDateRange('January',  '2021', 'March', '2021')
    })

    it("redirect to detail page is working", () => {
        cy.url()
        .should('contain', 'velocity')
    })


    it('should AVG Completion is 73.99%', () => {
        cy.get('[data-cy=detailPageGeneralStats] > :nth-child(1) > [data-cy=uiStatsBoxValue]')
        .should('have.text', '73.99%')
    })
  
    it('should AVG Accuracy is 61.18%', () => {
        cy.get(':nth-child(2) > [data-cy=uiStatsBoxValue]')
        .should('have.text', '61.18%')
    })

    it('should Team Commitment is 41.2', () => {
        cy.get(':nth-child(3) > [data-cy=uiStatsBoxValue]')
        .should('have.text', '41.2')
    })

})