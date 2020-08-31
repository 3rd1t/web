describe("components: Source component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=source--primary"))

  it("should show the citation", () => {
    cy.get("textarea").should("not.exist")
    cy.get("button").contains("Citation").click()
    cy.get("textarea").should("contain", "Webersinke, Nicolas")
  })
})
