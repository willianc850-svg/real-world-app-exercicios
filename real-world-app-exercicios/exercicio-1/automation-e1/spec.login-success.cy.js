import LoginPage from '../../../cypress/pages/login';

describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
        LoginPage.accessLoginPage();
        LoginPage.fillLoginForm('willian.teste', '123456**');
        LoginPage.verifyLoginSuccess();
    });
});