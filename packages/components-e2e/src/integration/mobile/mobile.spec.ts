describe("components: Mobile component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=mobile--primary"))

  it("should render the hamburger icon", () => {
    cy.get("[data-testid=mobileNavbar]").should("not.exist")
  })
  it("should open the navbar", () => {
    cy.get("[data-testid=open]").click()
    cy.get("[data-testid=mobileNavbar]").should("exist")
  })
})
