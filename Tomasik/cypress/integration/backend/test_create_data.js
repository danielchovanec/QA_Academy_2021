describe("Test create data on post endpoint", () => {
  it("assert post is possible to endpoint", () => {
    cy.fixture("data").then((body) => {
      cy.postRequest("endpoints", "posts", body).then((resp) => {
        const title = resp.body.title;
        expect(resp.status).to.eq(201);
        expect(resp.body).to.have.all.keys("body", "id", "title", "userId");

        expect(title).to.eq(
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        );
      });
    });
  });
});
