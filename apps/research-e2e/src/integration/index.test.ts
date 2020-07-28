describe("research", () => {
  beforeEach(() => cy.visit("/"))

  it("should display header message", () => {
    cy.contains("Get the right factor returns from our research-friendly API")
  })
  describe("when a user clicks on the netlify badge", () => {
    it("should open the netlify page in a new tab", () => {})
  })
})
