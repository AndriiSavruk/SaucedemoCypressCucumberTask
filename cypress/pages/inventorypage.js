const navigationMenuButton = "#react-burger-menu-btn";
const logoutLink = "#logout_sidebar_link";
const menuCrossIcon = "#react-burger-cross-btn";
const burgerMenu = ".bm-menu";
const shoppingCartBage = ".shopping_cart_badge";
const sortContainer = '[data-test="product_sort_container"]';
const productsContainer = "#inventory_container";
const cartLink = '.shopping_cart_link';

export class InventoryPage {
  clickOnNavigationMenuButton() {
    cy.get(navigationMenuButton).click();
  }

  clickOnLogoutLink() {
    cy.get(logoutLink).click();
  }

  clickOnMenuCrossIcon() {
    cy.get(menuCrossIcon).click();
  }

  checkIsBurgerMenuNotVisible() {
    cy.get(burgerMenu).should("not.be.visible");
  }

  clickOnTheProductImage(name) {
    cy.get(`[alt="${name}"]`).click();
  }

  clickOnTheProductName(name) {
    cy.contains("div", name).click();
  }

  clickOnTheProductAddToCartButton(name) {
    let newName = name.toLowerCase().split(" ").join("-");
    cy.get(`[data-test="add-to-cart-${newName}"]`).click();
  }

  checkIfShoppingCartBageIsVisible() {
    cy.get(shoppingCartBage).should("be.visible");
  }

  selectSortingBy(type) {
    cy.get(sortContainer).select(type);
  }

  checkIfFirstInProductBlock(name) {
    cy.get(productsContainer).children(1).should('contain', name);
  }

  clickOnCartIcon() {
    cy.get(cartLink).click();
  }
}
