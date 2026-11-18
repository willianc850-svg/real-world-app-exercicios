import LoginPage from '../../../cypress/pages/exercicio-1/login';

describe('Login com credenciais inválidas', () => {
    it('Deve fazer login com um usuário inválido', () => {
        LoginPage.accessLoginPage();
        LoginPage.wrongLoginForm('willian.teste', '654321**');
        LoginPage.verifyLoginError();
    });
});