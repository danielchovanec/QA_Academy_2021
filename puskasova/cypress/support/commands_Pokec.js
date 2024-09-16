Cypress.Commands.add('applicationLoginPokec', (username, password) => {
    cy.visit('/')
    cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2')
        .click()
    cy.get('.Form-sc-1mfmq26-0  :nth-child(1)  .Input-sc-1vv8hqf-0')
        .type(username)
    cy.get('.LoginFormstyles__PasswordInputArea-sc-1iebk76-7  .Input-sc-1vv8hqf-0')
        .type(password)
    cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12  .Form-sc-1mfmq26-0  .Button-sc-1fngo4c-0')
        .click()
     
})

Cypress.Commands.add('GDPRConsent', () => {
    cy.get('.fc-cta-consent  .fc-button-label')
        .click()
})

Cypress.Commands.add('applicationLogoutPokec',() => {
    cy.get('.mi-ic-menu')
        .click()
    cy.get('.link-logout')
        .click()
})

Cypress.Commands.add('roomRedirection', () => {
    cy.get('[href="https://pokec-sklo.azet.sk/miestnost/1/"]  .sc-bAeIUo')
        .click()
    })

Cypress.Commands.add('sendEmail', (emailAddress, RE) => {
    cy.get('.pisat-novy > .turbutton')
        .click()
    cy.get('#id_MessageTo')
        .type(emailAddress)
    cy.get('#predmetSpravy')
        .type(RE)
    cy.get('.panelNastrojov > .vpravo > .odoslat-container > .turbutton')
        .click()
    cy.wait(8000)
})

Cypress.Commands.add('createRoom', (roomName) => {
    cy.get('.mi-ic-menu')
        .click()
    cy.get('.link-rooms')
        .click()
    cy.get('.Button-sc-1fngo4c-0')
        .click()
    cy.get('.Input-sc-1vv8hqf-0')
        .type(roomName)
    cy.get('.eFbrcz')
        .click()
    cy.wait(5000)
})

Cypress.Commands.add('findRoom', (roomName) => {
    cy.get('.sc-fFYUoA')
        .click()
    cy.get('.sc-iitrsy')
        .type(roomName)
    cy.get('.sc-dtwoBo')
        .click()
})

Cypress.Commands.add('sendRP', (nickName, message) => {
    cy.get('.mi-ic-rp-notif')
        .click()
    cy.get('.rpButton')
        .click()
    cy.get('#searchinput')
        .type(nickName)    
    cy.wait(3000)
    cy.get('.UserCard__Avatar-sc-150gvkt-2')
        .click()
    cy.get('.rp-input__text')
        .type(message)
    cy.get('.rp-input__send-button > .mi-icon')
        .click()
})

    