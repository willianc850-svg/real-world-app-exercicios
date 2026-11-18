class SignupPage {
    
    selectorList () {
        const selectors = {
            firstnameField: '[name="firstName"]',
            lastnameField: '[name="lastName"]',
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            confirmPasswordField: '[name="confirmPassword"]',
            signUpButton: 'button[type="submit"]',
        }
        return selectors;
    }
    
    accessSignupPage() {
        cy.visit('http://localhost:3000/signup');
        cy.contains('Sign Up').should('be.visible');
    }

    fillRegistrationForm(firstname, lastname, username, password, confirmPassword) {
        cy.get(this.selectorList().firstnameField).type(firstname);
        cy.get(this.selectorList().lastnameField).type(lastname);
        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().confirmPasswordField).type(confirmPassword);
        cy.get(this.selectorList().signUpButton).click();
    }

    incompleteRegistrationForm() {
        cy.get(this.selectorList().firstnameField).type('Willian');
        cy.get(this.selectorList().passwordField).type('s3cret');
    }

    verifyRegistrationSuccess() {
        cy.url().should('include', '/signin');
    }

    verifyRegistrationError() {
        cy.get(this.selectorList().signUpButton).should('be.disabled');
    }
}

export default new SignupPage();
