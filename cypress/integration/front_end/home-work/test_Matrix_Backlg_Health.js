describe('Test Backlog health', () => {
    before(() => {
        cy.LogInWoUi()
        cy.wait(2000)
        cy.fixture("jira-metrics")
            .then((subpage) => {
                cy.visit(subpage.backlog_health)
            })
    })
    it('redirect to backlog_health page is working', () => {
        cy.url().should('contain', 'backlog_health')
    })
    it('should open Backlog manual entry', () => {
        cy.get('[data-cy=backlogHealthDetailPageAddRecord] > [data-cy=uiButton] > [data-cy=uiButtonLabel]').click()

        cy.get('h1').should('contain', 'Backlog manual entry')
    }) 

    it('should pick July ', () => {
        cy.get('.MuiSelect-root').type("2021-07-01")
        cy.get('[data-value="2021-07-01"]').click()
    })

    it('should fill the questionary and click on Submit', () => {

        cy.get(':nth-child(1) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').click()


        cy.get(':nth-child(2) > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click()


        cy.get(':nth-child(3) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').click()


        cy.get(':nth-child(4) > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click()


        cy.get(':nth-child(5) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').click()


        cy.get(':nth-child(6) > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click()


        cy.get(':nth-child(7) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').click()


        cy.get(':nth-child(8) > .MuiFormGroup-root > :nth-child(2)').click()


        cy.get(':nth-child(9) > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').click()


        cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ > [data-cy=uiButtonLabel]').click()

        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(2)').should('have.text', 'YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(3)').
        should('have.text', 'NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(4)').
        should('have.text', 'YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(5)').
        should('have.text', 'NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(6)').
        should('have.text', 'YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(7)').
        should('have.text', 'NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(8)').
        should('have.text', 'YES')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(9)').
        should('have.text', 'NO')
        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(10)').should('have.text', 'YES')
    })
    it('Clean up - delete record', () => {
        cy.get('.Button_warning__1g_u_ > [data-cy=uiButtonLabel]').should('be.visible')
        cy.get('.Button_warning__1g_u_ > [data-cy=uiButtonLabel]').click()
        cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ > [data-cy=uiButtonLabel]').click()
    })
})
