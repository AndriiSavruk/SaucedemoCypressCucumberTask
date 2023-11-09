const usernameField = '#user-name';
const passwordField = '#password';
const loginButton = '#login-button';
const failedMessage = 'h3';

export class LoginPage {
typeUsername(name) {
    cy.get(usernameField).type(name);
}
typePassword(password) {
    cy.get(passwordField).type(password);
}
clickLoginButton() {
    cy.get(loginButton).click();
}
checkFailedMessage(message) {
    cy.get(failedMessage).should('have.text',message);
}
}