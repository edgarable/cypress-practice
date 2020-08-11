import { authorBuilder } from "../../support/generate";

describe("updateAuthorForm", () => {
  it("with valid data it updates a author successfully", () => {
    const author = { first_name: "Jair", last_name: "Rios" };
    cy.visit("/authors/1/edit");
    cy.findByLabelText("First name").type(author.first_name);
    cy.findByLabelText("Last name").type(author.last_name);
    cy.findByDisplayValue("Update Author").click();
    cy.findByText("Author was successfully updated.").should("be.visible");
  });

  it("with invalid data it doesn't update an author", () => {
    cy.visit("/authors/1/edit");
    cy.findByLabelText("First name").clear();
    cy.findByLabelText("Last name").clear();
    cy.findByDisplayValue("Update Author").click();
    cy.findByText("First name can't be blank").should("be.visible");
    cy.findByText("Last name can't be blank").should("be.visible");
  });
});
