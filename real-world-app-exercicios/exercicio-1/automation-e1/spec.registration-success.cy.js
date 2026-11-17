import SignupPage from '../../../cypress/pages/signup';

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        SignupPage.accessSignupPage();
        SignupPage.fillRegistrationForm('Willian', 'Teste', 'willian.teste', '123456**', '123456**');
        SignupPage.verifyRegistrationSuccess();
    });
});