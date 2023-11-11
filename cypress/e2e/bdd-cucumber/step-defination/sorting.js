import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPage } from "../../../pages/inventorypage";

const inventoryPage = new InventoryPage();

When('The user selects sorting by {string}', (sortType) => {
    inventoryPage.selectSortingBy(sortType);
})

Then('The Products block starts with {string}', (productName) => {
    inventoryPage.checkIfFirstInProductBlock(productName);
})