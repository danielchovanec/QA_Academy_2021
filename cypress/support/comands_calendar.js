Cypress.Commands.add('setDateRange', (sMonth, sYear,eMonth,eYear) => {

    cy.get('[data-cy=uiDateRageWrapper] > .Button_full__3t1fQ > [data-cy=uiButtonLabel]')
    .click()

    cy.wait(500)

    cy.get('.rdrMonthPicker > select')    
            .select(sMonth)

    cy.get('.rdrYearPicker > select')
            .select(sYear)

            cy.get(':nth-child(1) > .rdrDays > .rdrDayStartOfMonth ')
    .contains('1')
    .click()

    cy.wait(500)

    cy.get('.rdrDateDisplayItemActive > input')
        .click()
        cy.get('.rdrMonthPicker > select')    
        .select(eMonth)

    cy.get('.rdrYearPicker > select')
        .select(eYear)

    cy.get(':nth-child(1) >  .rdrDays' )
        .contains('23')
        .click()
    
})