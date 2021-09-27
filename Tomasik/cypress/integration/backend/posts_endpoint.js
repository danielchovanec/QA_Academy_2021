const initialItems1 = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const initialItems2 = {
  userId: 2,
  id: 11,
  title: "et ea vero quia laudantium autem",
  body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
};

describe("Test Posts edpoint", () => {
  it("assert endpoints returns 200 status code", () => {
    cy.getRequest("endpoints", "posts").then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

  it("assert response contains correct keys", () => {
    cy.getRequest("endpoints", "posts").then((resp) => {
      const keys = resp.body[0];
      expect(keys).to.have.all.keys("userId", "id", "title", "body");
    });
  });

  it("assert correct value in userId", () => {
    cy.getRequest("endpoints", "posts").then((resp) => {
      const userId = resp.body[0].userId;
      expect(userId).to.eq(1);
    });
  });

  it("find user 1", () => {
    cy.getRequest("endpoints", "posts").then((resp) => {
      const userId = resp.body[1].userId;
      expect(userId).to.eq(initialItems1.id);
    });
  });

  it("find user 2", () => {
    cy.getRequest("endpoints", "posts").then((resp) => {
      const userId = resp.body[10].id;
      expect(userId).to.eq(initialItems2.id);
    });
  });
});

/*

describe("todos API", () => {
  it("returns JSON", () => {
    ///  cy.request("http://jsonplaceholder.typicode.com/posts")

    cy.request(Cypress.apiUrl + "/posts")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });
});

describe("todos API", () => {
  const initialItems1 = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  const initialItems2 = {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  };

  const getItems = () =>
    ///cy.request("http://jsonplaceholder.typicode.com/posts/1").its("body");
    cy.request(Cypress.env.apiUrl + "posts/1").its("body");

  const getItems2 = () =>
    /// cy.request("http://jsonplaceholder.typicode.com/posts/4").its("body");

    cy.request(Cypress.env.apiUrl + "posts/4").its("body");

  it("returns JSON", () => {
    //  cy.request("http://jsonplaceholder.typicode.com/posts")
    cy.request(Cypress.env.apiUrl + "posts")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });

  it("loads the initial items", () => {
    getItems().should("deep.eq", initialItems1);
  });

  it("loads the initial items", () => {
    getItems2().should("deep.eq", initialItems2);
  });
});*/
