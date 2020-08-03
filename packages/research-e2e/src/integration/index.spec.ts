describe("project", () => {
  beforeEach(() => cy.visit("/"))

  it("should display welcome message", () => {
    cy.contains("Get the right factor returns from our research-friendly API")
  })
})
