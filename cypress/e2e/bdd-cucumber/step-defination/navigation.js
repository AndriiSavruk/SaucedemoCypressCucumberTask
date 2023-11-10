import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../../pages/loginpage";
import { InventoryPage } from "../../../pages/inventorypage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

When('The user opens the navigation menu', () => {
    inventoryPage.clickOnNavigationMenuButton();
})

Then('The user chooses Logout', () => {
    inventoryPage.clickOnLogoutLink();
})

When('The user chooses About', () => {
    inventoryPage.clickOnAboutLink();
})

When('The user clicks on the X icon in the menu', () => {
    inventoryPage.clickOnMenuCrossIcon();
})

When('The user scroll down to the footer', () => {
    inventoryPage.scrollToFooter();
})

Then('The user is on the login page', () => {
    loginPage.checkIfLoginButtonIsVisible();
})

Then('The navigation burger menu disappears', () => {
    inventoryPage.checkIsBurgerMenuNotVisible();
})



