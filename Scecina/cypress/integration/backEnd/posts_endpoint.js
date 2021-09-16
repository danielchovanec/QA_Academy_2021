describe('Test POSTS endpoint for user[1] and user[11] ', () => {

    it('assert endpoint returns 200 status code', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            expect(resp.status).to.eq(200)
        })
    })

    it('assert response contains correct keys for user[1]', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const keys = resp.body[1]
            expect(keys).to.have.all.keys('userId', 'id', 'title', 'body')
        })
    })

    it('assert correct value in user[1] userID', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const userId = resp.body[1].userId
            expect(userId).to.eq(1)
        })
    })

    it('assert correct value in user[1] id', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const id = resp.body[1].id
            expect(id).to.eq(2)
        })
    })

    it('assert correct value in user[1] title', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const title = resp.body[1].title
            expect(title).to.eq('qui est esse')
        })
    })

    it('assert correct value in user[1] body', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const body = resp.body[1].body
            expect(body).to.eq('est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla')
        })
    })

    it('assert response contains correct keys for user[10]', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const keys = resp.body[10]
            expect(keys).to.have.all.keys('userId', 'id', 'title', 'body')
        })
    })

    it('assert correct value in user[10] userID', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const userId = resp.body[10].userId
            expect(userId).to.eq(2)
        })
    })

    it('assert correct value in user[10] id', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const id = resp.body[10].id
            expect(id).to.eq(11)
        })
    })

    it('assert correct value in user[11] title', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const title = resp.body[10].title
            expect(title).to.eq('et ea vero quia laudantium autem')
        })
    })

    it('assert correct value in user[11] body', () => {
        cy.getRequest('endpoints', 'posts')
        .then((resp)=> {
            const body = resp.body[10].body
            expect(body).to.eq('delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi')
        })
    })

})