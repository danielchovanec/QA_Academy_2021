describe('Test email functionalitty', () => {

    beforeEach(() => {
        cy.pokecApplicationLogin(Cypress.env('username'), Cypress.env('password'))

    });


    it('Check create room button', () => {
        cy.get('.sc-fOKMvo > .sc-dUjcNx > .sc-emmjRN')
            .should('be.visible')
    });

    it('Create new room', () => {
        cy.visit('https://mpokec.azet.sk/')
        cy.viewport(1000, 660)
        cy.get('.header__navigation')
            .click()
        cy.get('.link-rooms').click()
        cy.get('.Button-sc-1fngo4c-0').click()
        cy.get('.Input-sc-1vv8hqf-0').type('vowasgervgeitsxaR')
        cy.get(':nth-child(5) > .Radio__StyledWrapper-sc-15e0u7p-0')
            .click()
        cy.get('.eFbrcz')
            .click()
        cy.wait(500)
        cy.get('.sc-dmlrTW')
            .then(resp => {
                const roomName = resp[0].innerText;
                expect(roomName).to.contain('vowasgervgeitsxaR')
            })
    });

    it('Check if room was created', () => {
        cy.get('.sc-rBLzX').type('vowasgervgeitsxaR')
        cy.get('.sc-jeCdPy > .sc-hSdWYo > .sc-fYiAbW > .sc-dUjcNx > .sc-emmjRN')
            .then(resp => {
                expect(resp[0].innerText).to.contain("vowasgervgeitsxaR")
            })
    });

})