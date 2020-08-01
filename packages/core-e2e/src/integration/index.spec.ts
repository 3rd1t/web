describe("project", () => {
  beforeEach(() => cy.visit("/"))

  it("should display welcome message", () => {
    cy.contains("Portfolio analytics insights for everyone")
  })

})
