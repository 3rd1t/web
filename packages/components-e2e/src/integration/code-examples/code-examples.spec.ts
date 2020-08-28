describe("components: CodeExamples component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=codeexamples--primary"))

  it("should render the navbar", () => {
    cy.get("nav").should("contain", "r")
    cy.get("nav").should("contain", "python")
  })

  it("should display the python snippet", () => {
    cy.get(".language-python")
  })

  it("should switch to R if clicked on", () => {
    cy.get("button").contains("r").click()
    cy.get(".language-r")
  })
  it("should switch to python if clicked on", () => {
    cy.get("button").contains("python").click()
    cy.get(".language-python")
  })
})
