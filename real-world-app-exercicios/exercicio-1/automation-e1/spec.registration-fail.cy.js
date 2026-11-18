import SignupPage from '../../../cypress/pages/exercicio-1/signup';

describe('Registro de novo usuário com informações incompletas', () => {
    it('Deve garantir que um um novo usuário não seja criado com informações incompletas', () => {
        SignupPage.accessSignupPage();
        SignupPage.incompleteRegistrationForm();
        SignupPage.verifyRegistrationError();
    });
});