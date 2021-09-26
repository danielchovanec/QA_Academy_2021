describe('Test Backlog Health Metrics FUnctionality', () => {
    
    //npx cypress open --config-file cypress.matrix.json

    before(() => {
        cy.LogInWoUi()
        cy.fixture('jira_metrics')
            .then((subpage) => {
                cy.visit(subpage.detail_backlog_health)
            })

        cy.get('[data-cy=backlogHealthDetailPageAddRecord] > [data-cy=uiButton]')
            .click()

        //select month
        cy.get('.MuiSelect-root')
            .click()
        cy.get('[data-value="2021-07-01"]')
            .click()

        //select yes/no
        cy.get(':nth-child(1) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root')
            .click()
        cy.get(':nth-child(2) > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root')
            .click()
        cy.get(':nth-child(3) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root')
            .click()
        cy.get(':nth-child(4) > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root')
            .click()
        cy.get(':nth-child(5) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root')
            .click()
        cy.get(':nth-child(6) > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root')
            .click()
        cy.get(':nth-child(7) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root')
            .click()
        cy.get(':nth-child(8) > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root')
            .click()
        cy.get(':nth-child(9) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root')
            .click()
        
        //save
        cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ')
            .click()
    })
       
    after(() => {
        //delete data and log out
        cy.get('.Button_warning__1g_u_')
            .click()
        cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ')
            .click()
        cy.applicationLogout()
    })


    it('new backlog health record with correct data should be displayed', () => {
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(1)')
            .should('have.text', 'July 2021')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(2)')
            .should('have.text', 'YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(3)')
            .should('have.text', 'NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(4)')
            .should('have.text', 'YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(5)')
            .should('have.text', 'NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(6)')
            .should('have.text', 'YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(7)')
            .should('have.text', 'NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(8)')
            .should('have.text', 'YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(9)')
            .should('have.text', 'NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(10)')        
            .should('have.text', 'YES')
    
    })
    })