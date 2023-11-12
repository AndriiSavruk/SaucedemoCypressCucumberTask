const continueShoppimgBtn = "#continue-shopping";
const cartBlock = ".cart_list";
const checkoutBtn = '[data-test="checkout"]';

export class CartPage {
  clickOnContinueShoppingBtn() {
    cy.get(continueShoppimgBtn).click();
  }

  clickOnRemoveProductBtn(name) {
    let newName = name.toLowerCase().split(" ").join("-");
    cy.get(`[data-test="remove-${newName}"]`).click();
  }

  checkIfCartHasNoProduct(name) {
    cy.get(cartBlock).should("not.have.text", name);
  }

  clickOnCheckoutBtn() {
    cy.get(checkoutBtn).click();
  }
}
