import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../../pages/loginpage";
import { InventoryPage } from "../../../pages/inventorypage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

When("The user opens the navigation menu", () => {
  inventoryPage.clickOnNavigationMenuButton();
});

Then("The user chooses Logout", () => {
  inventoryPage.clickOnLogoutLink();
});

When("The user chooses About", () => {
  inventoryPage.clickOnAboutLink();
});

When("The user clicks on the X icon in the menu", () => {
  inventoryPage.clickOnMenuCrossIcon();
});

When("The user clicks on the {string} product image", (productName) => {
  inventoryPage.clickOnTheProductImage(productName);
});

When("The user clicks on the {string} product name", (productName) => {
  inventoryPage.clickOnTheProductName(productName);
});

When(
  'The user clicks on the "Add to cart" button in the {string} block',
  (productName) => {
    inventoryPage.clickOnTheProductAddToCartButton(productName);
  }
);

Then("The user is on the login page", () => {
  loginPage.checkIfLoginButtonIsVisible();
});

Then("The navigation burger menu disappears", () => {
  inventoryPage.checkIsBurgerMenuNotVisible();
});

Then("The user is on the {string} product page", (productName) => {
  cy.contains("div", productName);
});

Then("The red badge in the cart icon appears", () => {
  inventoryPage.checkIfShoppingCartBageIsVisible();
});
