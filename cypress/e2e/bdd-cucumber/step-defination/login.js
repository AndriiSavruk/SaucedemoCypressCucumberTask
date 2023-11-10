import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../../pages/loginpage";

const loginPage = new LoginPage();

Given("The user opens the login page", () => {
  cy.visit("/");
});

When("The user provides credentials", (table) => {
  table.hashes().forEach((row) => {
    loginPage.typeUsername(row.username);
    loginPage.typePassword(row.password);
  });
});

When("The user clicks on the Login button", () => {
  loginPage.clickLoginButton();
});

Then("The user is on the inventory page", () => {
  cy.url().should("contain", "inventory.html");
});

Then("The user receives {string} message", (errorMessage) => {
  loginPage.checkFailedMessage(errorMessage);
});
