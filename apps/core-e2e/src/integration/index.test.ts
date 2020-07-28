import { getGreeting } from "../support/app.po"

describe("core", () => {
  beforeEach(() => cy.visit("/"))

  it("should display welcome message", () => {
    cy.contains("Hello World")
  })

  describe("when a user clicks on the netlify badge", () => {
    it("should open the netlify page in a new tab", () => {})
  })
})
