class HistoryPage {
    selectorList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            confirmPasswordField: '[name="confirmPassword"]',
            submitButton: 'button[type="submit"]',
            onboardingDialog: '[data-test="user-onboarding-dialog"]',
            onboardingTitle: '[data-test="user-onboarding-dialog-title"]',
            onboardingNext: '[data-test="user-onboarding-next"]',
            bankNameField: '[data-test="bankaccount-bankName-input"]',
            accountNumberField: '[data-test="bankaccount-accountNumber-input"]',
            routingNumberField: '[data-test="bankaccount-routingNumber-input"]',
            bankAccountSubmit: '[data-test="bankaccount-submit"]',
            personalTab: '[data-test="nav-personal-tab"]',
            transactionItem: '[data-test*="transaction-item"]',
            emptyHeader: '[data-test="empty-list-header"]',
            createTransactionButton: '[data-test="transaction-list-empty-create-transaction-button"]',
        }
        return selectors;
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/signin');
        cy.contains('Sign In').should('be.visible');
    }

    accessSignupPage() {
        cy.visit('http://localhost:3000/signup');
        cy.contains('Sign Up').should('be.visible');
    }

    login(username, password) {
        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().submitButton).click();
        cy.contains('Account Balance').should('be.visible');
    }

    register(firstName, lastName, username, password) {
        cy.get(this.selectorList().firstNameField).type(firstName);
        cy.get(this.selectorList().lastNameField).type(lastName);
        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().confirmPasswordField).type(password);
        cy.get(this.selectorList().submitButton).click();
        cy.url().should('include', '/signin');
    }

    completeOnboarding() {
        cy.get(this.selectorList().onboardingDialog).should('be.visible');
        cy.get(this.selectorList().onboardingNext).click();
        cy.get(this.selectorList().onboardingTitle).should('contain', 'Create Bank Account');
        cy.get(this.selectorList().bankNameField).find('input').type('The Best Bank');
        cy.get(this.selectorList().accountNumberField).find('input').type('123456789');
        cy.get(this.selectorList().routingNumberField).find('input').type('987654321');
        cy.get(this.selectorList().bankAccountSubmit).click();
        cy.get(this.selectorList().onboardingTitle).should('contain', 'Finished');
        cy.get(this.selectorList().onboardingNext).click();
        cy.get(this.selectorList().onboardingDialog).should('not.exist');
    }

    openPersonalHistory() {
        cy.intercept('GET', '**/transactions*', (req) => {
            const path = new URL(req.url).pathname;
            if (path === '/transactions') {
                req.alias = 'personalTransactions';
            }
        });
        cy.get(this.selectorList().personalTab).click();
        cy.wait('@personalTransactions').its('response.statusCode').should('eq', 200);
    }

    verifyHistoryWithTransactions() {
        cy.contains('Personal').should('be.visible');
        cy.get(this.selectorList().transactionItem).should('have.length.greaterThan', 0);
    }

    verifyEmptyHistory() {
        cy.get(this.selectorList().emptyHeader)
            .should('be.visible')
            .and('contain', 'No Transactions');
        cy.get(this.selectorList().createTransactionButton)
            .should('be.visible')
            .and('contain', 'Create A Transaction');
    }
}

export default new HistoryPage();
