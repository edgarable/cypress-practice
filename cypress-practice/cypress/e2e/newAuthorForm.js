import { authorBuilder } from "../../support/generate";

describe("newAuthorForm", () => {
  it("with valid data it creates an author successfully", () => {
    const author = { first_name: "Marcelo", last_name: "Alfaro" };
    cy.visit("/authors/new");
    cy.findByLabelText("First name").type(author.first_name);
    cy.findByLabelText("Last name").type(author.last_name);
    cy.findByDisplayValue("Create Author").click();
    cy.findByText("Author was successfully created.").should("be.visible");
  });

  it("with invalid data it displays errors", () => {
    cy.visit("/authors/new");
    cy.findByDisplayValue("Create Author").click();
    cy.findByText("First name can't be blank").should("be.visible");
    cy.findByText("Last name can't be blank").should("be.visible");
  });
});
