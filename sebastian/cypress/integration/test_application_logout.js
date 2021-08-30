

describe('test valid Logout', () =>{
    before(()=>{
        cy.applicationLogin(Cypress.env('username'), Cypress.env('password'))
        cy.applicationLogOut()
    })

    it('user logout should be successful', ()=> {
        cy.get('.visible-md  :nth-child(1)  :nth-child(1)  .banner-customizable  center  .logo-customizable')
            
            .should('be.visible')
    })

})

