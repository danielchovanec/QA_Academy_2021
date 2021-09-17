describe('calendar test', () => {

    before(() => {
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
    })

    it("should open customer board", () => {
        cy.wait(3000)
        cy.get(':nth-child(2) > [data-cy=menuButton] > [data-cy=menuButtonTitle]').click()
        cy.get('[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton] > [data-cy=menuButtonTitle]').click()
     })

     it("should check calendar button is visible", () => {
        cy.get('[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton] > [data-cy=menuButtonTitle]').should("be.visible")
     })

     it("should open popup window", () => {
        cy.get('[data-cy=uiDateRageWrapper] > .Button_full__3t1fQ > [data-cy=uiButtonLabel]').click()

     })

     it("should input elements on top left and top right are visible ", () => {
        cy.get('.rdrDateDisplayItemActive > input').should('be.visible')
        cy.get('.rdrDateDisplay > :nth-child(2) > input').should('be.visible')
     })

     it("should arrows on both end are visible", () => {
        cy.get('.rdrMonthAndYearWrapper').should('be.visible')
        cy.get('.rdrNextButton > i').should('be.visible')


     })
     it("should months and years dropdowns are visible", () => {

        cy.get('.rdrMonthPicker > select').should('be.visible')
        cy.get('.rdrYearPicker > select').should('be.visible')

     }) 
     it("should day pickers on both end are visible", () => {
        cy.get(':nth-child(1) > .rdrDays').should('be.visible')
        cy.get(':nth-child(2) > .rdrDays').should('be.visible')

     })

     it("should close calendar if you click on x", () => {
        cy.get('.MuiPaper-root > .MuiSvgIcon-root').click()
     })


  
})