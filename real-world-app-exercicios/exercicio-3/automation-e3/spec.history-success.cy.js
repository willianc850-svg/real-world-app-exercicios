import HistoryPage from '../../../cypress/pages/exercicio-3/history';

describe('Visualizar histórico de transações com sucesso', () => {
    before(() => {
        cy.request('POST', 'http://localhost:3001/testData/seed');
    });

    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        HistoryPage.accessLoginPage();
        HistoryPage.login('Wendell53', 's3cret');
        HistoryPage.openPersonalHistory();
        HistoryPage.verifyHistoryWithTransactions();
    });
});
