/// <reference types="cypress" />

describe("password check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have 2 inputs", () => {
    cy.get(".form input").should("have.length", 2);
    cy.get(".form input").should("have.attr", "type");
    cy.get(".form input").should("have.value", "");
  });

  it("should have button to check passwords", () => {
    cy.get("#checkButton").should("have.text", "Check Passwords");
  });

  it("should compare two input-values", () => {
    cy.get("#password1").type("kiraGit67");
    cy.get("#password2").type("kiraGit67");
    cy.get("#checkButton").click();
    cy.get("#check").should("have.text", " ✅ ");
    cy.get("#password1").clear();
    cy.get("#password2").clear();
    cy.get("#password1").type("kiraGit67");
    cy.get("#password2").type("kira67");
    cy.get("#checkButton").click();
    cy.get("#check").should("have.text", " ❌ ");
  });
});
