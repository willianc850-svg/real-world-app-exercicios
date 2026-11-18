import HistoryPage from '../../../cypress/pages/exercicio-3/history';

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    before(() => {
        cy.request('POST', 'http://localhost:3001/testData/seed');
    });

    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        const username = `historico${Date.now()}`;

        HistoryPage.accessSignupPage();
        HistoryPage.register('Historico', 'Vazio', username, 's3cret');
        HistoryPage.login(username, 's3cret');
        HistoryPage.completeOnboarding();
        HistoryPage.openPersonalHistory();
        HistoryPage.verifyEmptyHistory();
    });
});
