describe('Test Backlog details page', () => {

    before( ()=> {
        cy.LogInWoUi()
        cy.wait(1000)
    cy.fixture('jira_matrix')
        .then((subpage) => {
            cy.visit(subpage.detail_velocity_rate)
        })
    cy.get('[data-cy=menuVerticalMenuDropdownWrapper] > .VerticalMenu_link__3Zl_U > [data-cy=menuButtonWrapper] > [data-cy=menuButton]')
        .click()

    cy.get('[data-cy=uiExpanableContentQuality]  .MuiCollapse-container  .MuiCollapse-wrapper  .MuiCollapse-wrapperInner  #panel1a-content  [data-cy=uiExpanableContentDetails]  .MuiGrid-container > :nth-child(2)  [data-cy=uiChartWrapper]  [data-cy=uiChartInfoWrapper]  [data-cy=uiChartInfoTitleWrapper]  [data-cy=uiChartInfoControls]  [data-cy=uiButton]')
        .click();
    
    cy.get('[data-cy=backlogHealthDetailPageAddRecord]  [data-cy=uiButton]')
        .click();
    })

    after('Delete record',()=> {

        cy.get('.Button_warning__1g_u_')
        .click();

        cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ')
        .click();

    })

    it('Select the reqired fields according to documentation(July,Y,N,Y,N,Y,N,Y,N,Y)', ()=> {

    cy.get('.MuiSelect-root')
    .click();

    cy.get('[data-value="2021-07-01"]')
    .click();

    cy.get(':nth-child(1) > .MuiFormGroup-root > :nth-child(1)')
    .click();

    cy.get(':nth-child(2) > .MuiFormGroup-root > :nth-child(2)')
    .click();

    cy.get(':nth-child(3) > .MuiFormGroup-root > :nth-child(1)')
    .click();

    cy.get(':nth-child(4) > .MuiFormGroup-root > :nth-child(2)')
    .click();

    cy.get(':nth-child(5) > .MuiFormGroup-root > :nth-child(1)')
    .click();

    cy.get(':nth-child(6) > .MuiFormGroup-root > :nth-child(2)')
    .click();

    cy.get(':nth-child(7) > .MuiFormGroup-root > :nth-child(1)')
    .click();

    cy.get(':nth-child(8) > .MuiFormGroup-root > :nth-child(2)')
    .click();

    cy.get(':nth-child(9) > .MuiFormGroup-root > :nth-child(1)')
    .click();

    cy.get('[data-cy=uiModalFooterSubmitWrapper] > .Button_full__3t1fQ')
    .click();

    })

    it('Check if the correct month is selected', ()=> {

    cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(1)')
    .should('be.visible')
    .should('have.text', 'July 2021')


    })

    it('Check if the correct value is in the Big Enough field', ()=> {

        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(2)')
        .should('be.visible')
        .should('have.text', 'YES')
        
        })

    it('Check if the correct value is in the Business Driven field', ()=> {

        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(3)')
        .should('be.visible')
        .should('have.text', 'NO')
            
            })

    it('Check if the correct value is in the Estimated field', ()=> {

        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(4)')
        .should('be.visible')
        .should('have.text', 'YES')
                    
            })

    it('Check if the correct value is in the Granular Enough field', ()=> {

        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(5)')
        .should('be.visible')
        .should('have.text', 'NO')
                            
            })

    it('Check if the correct value is in the Ownership field', ()=> {

        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(6)')
        .should('be.visible')
        .should('have.text', 'YES')
                                    
            })

    it('Check if the correct value is in the Prioritized field', ()=> {

        cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(7)')
        .should('be.visible')
        .should('have.text', 'NO')
                                            
            })

    it('Check if the correct value is in the Release Planned field', ()=> {

    cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(8)')
        .should('be.visible')
        .should('have.text', 'YES')
                                                    
            })

    it('Check if the correct value is in the Sole source of requirements field', ()=> {

    cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(9)')
        .should('be.visible')
        .should('have.text', 'NO')
                                                                
            })

    it('Check if the correct value is in the Well Understood field', ()=> {

    cy.get('[data-cy=uiTableBody] > [data-cy=uiTableRow] > :nth-child(10)')
        .should('be.visible')
        .should('have.text', 'YES')
                                                                                        
            })

    

})