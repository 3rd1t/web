describe("components: HeroSection component", () => {
  beforeEach(() =>
    cy.visit(
      "/iframe.html?id=herosection--primary&knob-headline=&knob-paragraph&knob-primaryButton&knob-secondaryButton&knob-children",
    ),
  )

  it("should render the component", () => {
    cy.get("h2").should("contain", "Portfolio analytics insights for everyone")
    cy.get("a").contains("Get started").should("exist")
    cy.get("a").contains("Log in").should("exist")
  })
})
