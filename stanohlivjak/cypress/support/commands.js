Cypress.Commands.add('applicationLogin', (username, password) => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })
    cy.visit("/");
    cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2')
        .click()
    cy.get('.Form-sc-1mfmq26-0 > :nth-child(1) > .Input-sc-1vv8hqf-0')
        .type(username)
    cy.get('.LoginFormstyles__PasswordInputArea-sc-1iebk76-7 > .Input-sc-1vv8hqf-0')
        .type(password)
    cy.get('.LoginFormstyles__MobileLoginMiddlePanel-sc-1iebk76-12 > .Form-sc-1mfmq26-0 > .Button-sc-1fngo4c-0')
        .click()
    cy.get('.fc-cta-consent > .fc-button-label')
        .click()
    // cy.get('.LoginFormstyles__LoginButton-sc-1iebk76-2')
    // .click()
    // cy.get('.Header_header__inner__2zz3f > .Button_button__ZunwN')
    //     .click();
    // cy.get('.panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(3) #signInFormUsername')
    //     .type(username);
    // cy.get('.panel-left-border  :nth-child(2)  :nth-child(1)  .cognito-asf  :nth-child(5)  #signInFormPassword')
    //     .type(password);
    // cy.get('.panel-left-border  :nth-child(2)  :nth-child(1) .cognito-asf .btn')
    //     .click();
})

Cypress.Commands.add('applicationLogout', () => {
    cy.get('.mi-ic-menu').click()
    cy.get('.link-logout').click()
})