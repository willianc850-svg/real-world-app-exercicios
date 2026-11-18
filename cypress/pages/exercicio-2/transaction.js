class TransactionPage {
    selectorList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            signInButton: 'button[type="submit"]',
            newTransactionButton: '[data-test="nav-top-new-transaction"]',
            userListItem: '[data-test*="user-list-item"]',
            amountField: '[data-test="transaction-create-amount-input"]',
            descriptionField: '[data-test="transaction-create-description-input"]',
            payButton: '[data-test="transaction-create-submit-payment"]',
            successAlert: '[data-test="alert-bar-success"]',
            errorAlert: '[data-test="alert-bar-error"]',
            userBalance: '[data-test="sidenav-user-balance"]',
            returnToTransactions: '[data-test="new-transaction-return-to-transactions"]',
            personalTab: '[data-test="nav-personal-tab"]',
            transactionList: '[data-test="transaction-list"]',
        }
        return selectors;
    }

    toNumber(balanceText) {
        return Number(String(balanceText).replace(/[^0-9.-]/g, ''));
    }

    formatCurrency(amount) {
        return Number(amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/signin');
        cy.contains('Sign In').should('be.visible');
    }

    login(username, password) {
        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().signInButton).click();
        cy.contains('Account Balance').should('be.visible');
    }

    captureBalance() {
        cy.get(this.selectorList().userBalance).invoke('text').as('balanceBefore');
    }

    startNewPayment() {
        cy.get(this.selectorList().newTransactionButton).click();
        cy.get(this.selectorList().userListItem).first().click();
    }

    fillPayment(amount, note) {
        cy.intercept('POST', '/transactions').as('createTransaction');
        cy.get(this.selectorList().amountField).find('input').type(amount);
        cy.get(this.selectorList().descriptionField).find('input').type(note);
        cy.get(this.selectorList().payButton).click();
    }

    verifyPaymentSubmitted() {
        cy.wait('@createTransaction').its('response.statusCode').should('eq', 200);
        cy.get(this.selectorList().successAlert)
            .should('be.visible')
            .and('have.text', 'Transaction Submitted!');
    }

    verifyPaidAmount(amount, note) {
        cy.contains(`Paid ${this.formatCurrency(amount)} for ${note}`).should('be.visible');
    }

    verifyBalanceDecreased(amount) {
        cy.get('@balanceBefore').then((balanceText) => {
            const expected = this.formatCurrency(this.toNumber(balanceText) - Number(amount));
            cy.get(this.selectorList().userBalance).should('have.text', expected);
        });
    }

    verifyTransactionListed(note) {
        cy.get(this.selectorList().returnToTransactions).click();
        cy.get(this.selectorList().personalTab).click();
        cy.get(this.selectorList().transactionList).should('contain', note);
    }

    verifyInsufficientFundsError() {
        cy.get(this.selectorList().errorAlert).should('be.visible');
    }
}

export default new TransactionPage();
