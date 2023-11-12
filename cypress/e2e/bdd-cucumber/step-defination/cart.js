import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPage } from "../../../pages/inventorypage";
import { CartPage } from "../../../pages/cartpage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

When("The user clicks on the cart icon", () => {
  inventoryPage.clickOnCartIcon();
});

When("The user clicks on Continue shopping button", () => {
  cartPage.clickOnContinueShoppingBtn();
});

When("The user clicks on the Remove button in the {string} block", (name) => {
  cartPage.clickOnRemoveProductBtn(name);
});

When("The user clicks on Checkout button", () => {
  cartPage.clickOnCheckoutBtn();
});

Then("The cart has no {string} item", (name) => {
  cartPage.checkIfCartHasNoProduct(name);
});

Then("The user is on the Checkout page", () => {
  cy.url().should('include','checkout');
});
