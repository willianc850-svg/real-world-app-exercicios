import TransactionPage from '../../../cypress/pages/exercicio-2/transaction';

describe('Enviar dinheiro com saldo suficiente', () => {
    before(() => {
        cy.request('POST', 'http://localhost:3001/testData/seed');
    });

    it('Deve enviar dinheiro com sucesso', () => {
        const amount = '1';
        const note = 'Pagamento do exercício 2';

        TransactionPage.accessLoginPage();
        TransactionPage.login('Wendell53', 's3cret');
        TransactionPage.captureBalance();
        TransactionPage.startNewPayment();
        TransactionPage.fillPayment(amount, note);
        TransactionPage.verifyPaymentSubmitted();
        TransactionPage.verifyPaidAmount(amount, note);
        TransactionPage.verifyBalanceDecreased(amount);
        TransactionPage.verifyTransactionListed(note);
    });
});
