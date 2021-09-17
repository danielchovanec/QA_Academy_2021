describe('Test create data on POST endpoint', () => {

  it("assert POST request is possible to endpoint", () => {
      cy.fixture('postBody')
      .then((body) => {
          cy.postRequest('endpoints', 'posts', body)
        .then((resp) => {
            expect(resp.status).to.eq(201)
            expect(resp.body).to.have.all.keys('body', 'title', 'id', 'userId' , 'meno')

        })
      }) 
  })
})