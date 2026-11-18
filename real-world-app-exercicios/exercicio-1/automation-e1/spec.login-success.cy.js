import LoginPage from '../../../cypress/pages/exercicio-1/login';

describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
        LoginPage.accessLoginPage();
        LoginPage.fillLoginForm('Wendell53', 's3cret');
        LoginPage.verifyLoginSuccess();
    });
});