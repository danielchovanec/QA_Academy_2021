describe('Test POSTS endpoint', () => {
    it('assert endpoint returns 200 status code', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })
    });

    it('assert response contains correct keys', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                const keys = resp.body[0];
                expect(keys).to.have.all.keys('userId', 'id', 'title', 'body')
            })
    });

    it('assert correct value in userId', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                const userId = resp.body[0].userId;
                expect(userId).to.eq(1);
            })
    });

    it('get user with userId 1 and id 2', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                const user = resp.body.find((x) => (x.id === 2 && x.userId === 1))
                expect(user.body).to.eq('est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla')
                expect(user.title).to.eq('qui est esse');
            })
    });

    it('get first user with userId 2', () => {
        cy.getRequest('endpoints', 'posts')
            .then((resp) => {
                const user = resp.body.find((x) => x.userId === 2)
                expect(user.body).to.eq('delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi')
                expect(user.title).to.eq('et ea vero quia laudantium autem')
            })
    });

})