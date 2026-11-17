import SignupPage from '../../../cypress/pages/signup';

describe('Registro de novo usuário com informações incompletas', () => {
    it('Deve registrar um novo usuário com informações incompletas', () => {
        SignupPage.accessSignupPage();
        SignupPage.incompleteRegistrationForm();
        SignupPage.verifyRegistrationError();
    });
});