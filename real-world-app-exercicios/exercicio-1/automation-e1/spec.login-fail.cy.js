import LoginPage from '../../../cypress/pages/login';

describe('Login com credenciais inválidas', () => {
    it('Deve fazer login com um usuário inválido', () => {
        LoginPage.accessLoginPage();
        LoginPage.wrongLoginForm('willian.teste', '654321**');
        LoginPage.verifyLoginError();
    });
});