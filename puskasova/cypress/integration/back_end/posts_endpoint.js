describe('Test Posts endpoint', () => {

    it('assert endpoint returns 200 status code', () => {
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

    it('assert correct value in userId 1', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                const userId = resp.body[1].userId
                const title = resp.body[1].title
                const body = resp.body[1].body
                expect(userId).to.eq(1)
                expect(title).to.eq('qui est esse')
                expect(body).to.eq('est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla')
            })
    })

    it('assert correct value in userId 2', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                const userId = resp.body[10].userId
                const title = resp.body[10].title
                const body = resp.body[10].body
                expect(userId).to.eq(2)
                expect(title).to.eq('et ea vero quia laudantium autem')
                expect(body).to.eq('delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi')
            })
    })
})

//hw: title + body, 2. kde je userId = 1, 1. kde je userId = 2