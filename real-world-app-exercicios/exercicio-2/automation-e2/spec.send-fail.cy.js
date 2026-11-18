import TransactionPage from '../../../cypress/pages/exercicio-2/transaction';

describe('Enviar dinheiro com saldo insuficiente', () => {
    before(() => {
        cy.request('POST', 'http://localhost:3001/testData/seed');
    });

    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        TransactionPage.accessLoginPage();
        TransactionPage.login('Saige.Stehr0', 's3cret');
        TransactionPage.startNewPayment();
        TransactionPage.fillPayment('999999', 'Pagamento acima do saldo');
        TransactionPage.verifyInsufficientFundsError();
    });
});
