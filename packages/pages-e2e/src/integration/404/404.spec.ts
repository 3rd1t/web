describe("pages: NotFound404 component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=notfound404--primary"))

  it("should render the component", () => {
    cy.get("h1").should("contain", "404")
    cy.get("h1").should("contain", "Page Not Found")
  })
})
