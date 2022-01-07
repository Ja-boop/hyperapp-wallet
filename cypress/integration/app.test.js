describe("e2e test MVP", () => {
  it("makes sure theres an xbull button and it redirects to a differente page", () => {
    cy.visit("https://localhost:8080");
    cy.get("button").contains("Connect with xBull");
  });
});
