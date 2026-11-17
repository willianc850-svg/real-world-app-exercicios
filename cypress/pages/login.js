class LoginPage {
    selectorList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            signInButton: 'button[type="submit"]',
            errorMessage: '[data-test="signin-error"]',
        }
        return selectors;
    }
    
    accessLoginPage() {
        cy.visit('http://localhost:3000/signin');
        cy.contains('Sign In').should('be.visible');
    }

    fillLoginForm(username, password) {
        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().signInButton).click();
    }

    wrongLoginForm(username, password) {
        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().signInButton).click();
    }

    verifyLoginSuccess() {
        cy.contains('Account Balance').should('be.visible');
    }

    verifyLoginError() {
        cy.get(this.selectorList().errorMessage).should('be.visible');
    }
}

export default new LoginPage();