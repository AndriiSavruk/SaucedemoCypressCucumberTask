const navigationMenuButton = '#react-burger-menu-btn';
const logoutLink = '#logout_sidebar_link';
const menuCrossIcon = '#react-burger-cross-btn';
const burgerMenu = '.bm-menu';

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
        cy.get(burgerMenu).should('not.be.visible');
    }

}