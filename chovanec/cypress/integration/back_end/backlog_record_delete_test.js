describe('Testing add/delete record functionality of matrix app', () => {
    before(() => {
        cy.applicationLoginMatrix(Cypress.env('username'), Cypress.env('password'))
    })

    it('redirecting to dashboard overview and Backlog Health details page', () =>{
        cy.get('[data-cy=menuButtonDropdownIcon] > .MuiSvgIcon-root')
        .click()
        cy.get('[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton] > [data-cy=menuButtonTitle]')
        .click()
        cy.get('[data-cy=uiExpanableContentQuality] > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > [data-cy=uiExpanableContentDetails] > .MuiGrid-container > :nth-child(2) > [data-cy=uiChartWrapper] > [data-cy=uiChartInfoWrapper] > [data-cy=uiChartInfoTitleWrapper] > [data-cy=uiChartInfoControls] > [data-cy=uiButton] > [data-cy=uiButtonLabel]')
        .click()
    })
    it('deleting created record', () => {
        cy.get('.Button_warning__1g_u_ > [data-cy=uiButtonLabel]')
        .click()
        cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ > [data-cy=uiButtonLabel]')
        .click()
    })
})