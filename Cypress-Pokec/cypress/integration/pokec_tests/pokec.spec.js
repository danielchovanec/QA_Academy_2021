describe('Login / Logout Test', () => {
	before(function() {
		cy.visit("https://pokec.azet.sk/")
	})

	it('should try to login with invalid data', () => {

		// login
		cy.get('.Input-sc-1vv8hqf-0 HeaderLoginFormstyles__StyledInput-sc-1tqermr-6 iAjQwL gCOXow').type('invalid username')

		// password
        cy.get('.Input-sc-1vv8hqf-0 HeaderLoginFormstyles__PasswordInput-sc-1tqermr-7 iAjQwL hEuONx').type('Invalid password')

		//sign in
        cy.get('.Button-sc-1fngo4c-0 HeaderLoginFormstyles__LoginButton-sc-1tqermr-4 ddPToY bZDNfj').click()
	})

	it('should display error message', () => {
		cy.get('.HeaderLoginFormstyles__ErrorMessage-sc-1tqermr-8 laalqN').should('be.visible')
		cy.should('include', 'Zadané údaje nie sú správne.')
	})

	it('should login to application', () => {
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd

			// login
			cy.get('.Input-sc-1vv8hqf-0 HeaderLoginFormstyles__StyledInput-sc-1tqermr-6 iAjQwL gCOXow').type(username)

			//password
        	cy.get('.Input-sc-1vv8hqf-0 HeaderLoginFormstyles__PasswordInput-sc-1tqermr-7 iAjQwL hEuONx').type(password)

			//sign in 
			cy.get('.Button-sc-1fngo4c-0 HeaderLoginFormstyles__LoginButton-sc-1tqermr-4 ddPToY bZDNfj').click()
		})
	})

	it('should logout from application', () => {
        cy.contain('odhlásiť').click()
	})

	it('should join to Zoznamka', () => {
		cy.contain('Zoznamka').click()
	})
})
