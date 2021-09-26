describe('check velocity health metrics ', () => {
    before(() => {
        // cy.visit(Cypress.env('pokecURL'))
        cy.visit('baseUrl')
        cy.metrixLogin(Cypress.env('username'),Cypress.env('password'))
        cy.wait(1300)
        
    })

    it('metrics was saved', ()=> {
        cy.get('[data-cy=teamsTeamBoxGridItemMaturity]')
            .click()
        cy.get('[data-cy=uiExpanableContentQuality] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(2) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoControls] > [data-cy=uiButton]')
            .click()
        cy.get('[data-cy=backlogHealthDetailPageAddRecord] > [data-cy=uiButton]')
            .click()
        cy.get('.MuiSelect-root')
            .click()
        cy.get('[data-value="2021-07-01"]')
            .click()
        cy.get(':nth-child(1) > .MuiFormGroup-root > :nth-child(1)')
            .click()
        cy.get(':nth-child(2) > .MuiFormGroup-root > :nth-child(2)')
            .click()

        cy.get(':nth-child(3) > .MuiFormGroup-root > :nth-child(1)')
            .click()
        cy.get(':nth-child(4) > .MuiFormGroup-root > :nth-child(2)')
            .click()

        cy.get(':nth-child(5) > .MuiFormGroup-root > :nth-child(1)')
            .click()
        cy.get(':nth-child(6) > .MuiFormGroup-root > :nth-child(2)')
            .click()

        cy.get(':nth-child(7) > .MuiFormGroup-root > :nth-child(1)')
            .click()
        cy.get(':nth-child(8) > .MuiFormGroup-root > :nth-child(2)')
            .click()

        cy.get(':nth-child(9) > .MuiFormGroup-root > :nth-child(1)')
            .click()

        cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ')
            .click()

        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(1)')
            .should('be.visible')
    })

    it('metrics has correct data', ()=>{
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(2)')
            .should('have.text','YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(3)')
            .should('have.text','NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(4)')
            .should('have.text','YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(5)')
            .should('have.text','NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(6)')
            .should('have.text','YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(7)')
            .should('have.text','NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(8)')
            .should('have.text','YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(9)')
            .should('have.text','NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(10)')
            .should('have.text','YES')
    })


    after(()=>{
        cy.get('.Button_warning__1g_u_')
        .click()
        cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ')
        .click()
    })

})

