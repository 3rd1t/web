
describe("project", () => {
  beforeEach(() => cy.visit("/"))

  it("should display welcome message", () => {
    cy.contains("Portfolio analytics insights for everyone")

  })
  describe("when a user clicks on the netlify badge", () => {
    it("should open the netlify page in a new tab", () => {})
  })
})
