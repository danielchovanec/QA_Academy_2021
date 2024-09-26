describe('Test Posts edpoint', () =>{

    it('assert endpoints returns 200 status code', () =>{
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })
    })

    it('assert response contains correct keys', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp) => {
           const keys = resp.body[0]
                expect(keys).to.have.all.keys('userId', 'id', 'title', 'body')
        }) 
    })

    it('assert correct value in userId', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp) => {
           const userId = resp.body[0].userId
                expect(userId).to.eq(1)
        }) 
    })

    it('find second user with userId = 1', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                const userId = resp.body[1].userId
                const title = resp.body[1].title 
                const text = resp.body[1].body
                    expect(userId).to.eq(1)
                    expect(title).to.eq('qui est esse')
                    expect(text).to.eq('est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla')
            })
    })

    it('find first user with userId = 2', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                const userId = resp.body[10].userId
                const title = resp.body[10].title 
                const text = resp.body[10].body
                expect(userId).to.eq(2)
                expect(title).to.eq('et ea vero quia laudantium autem')
                expect(text).to.eq('delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi')
            })
    })

})