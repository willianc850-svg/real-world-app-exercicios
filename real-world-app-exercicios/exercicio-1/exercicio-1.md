# RWA Exercícios

## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app


## Casos de teste

Exercício: Criação de Casos de Teste para as Features "Login" e "Registro de Usuário"

As funcionalidades de "Login" e "Registro de Usuário" são fundamentais no aplicativo Real World App, permitindo que os usuários acessem suas contas existentes ou criem novas contas. Vamos criar casos de teste para garantir que essas funcionalidades funcionem corretamente:

### CT-1: Login com sucesso.
Pré-condições: O Real World App está em execução em http://localhost:3000 e existe um usuário já cadastrado.

Passos para Reprodução:
  1. Após instalação do CRW e criação do Usuário;
  2. Rota: http://localhost:3000/signin;
  3. Preecnher o campo "Username" com credenciais válidas;
  4. Preencher o campo "Password" com credenciais válidas;
  5. Clicar em "SIGN IN";
  6. Verificar o resultado.

Resultado esperado: O login é concluído e a tela inicial exibe "Account Balance".

### CT-2: Login com credenciais inválidas.
Pré-condições: O Real World App está em execução em http://localhost:3000 e a tela de login está acessível.

Passos para Reprodução:
  1. Após instalação do CRW e criação do Usuário;
  2. Rota: http://localhost:3000/signin;
  3. Preecnher o campo "Username" com credenciais inválidas;
  4. Preencher o campo "Password" com credenciais válidas;
  5. Clicar em "SIGN IN";
  6. Verificar que apareça a mensagem "Username or password is invalid".

Resultado esperado: O sistema exibe "Username or password is invalid" e o usuário permanece na rota /signin.

### CT-3: Registro de novo usuário com sucesso.
Pré-condições: O Real World App está em execução em http://localhost:3000 e o username informado ainda não está cadastrado.

Passos para Reprodução:
  1. Após instalação do CRW e criação do Usuário;
  2. Rota: http://localhost:3000/signup;
  3. Preecnher o campo "First Name" com credenciais inválidas;
  4. Preecnher o campo "Last Name" com credenciais inválidas;
  5. Preencher o campo "Username" com credenciais válidas;
  6. Preencher o campo "Password" com credenciais válidas;
  7. Preencher o campo "Confirm Password" com credenciais válidas;
  8. Clicar em "SIGN UP";
  9. Verificar que apareça haja o redirecionamento para a rota de login "http://localhost:3000/signin".

Resultado esperado: O cadastro é concluído e o usuário é redirecionado para http://localhost:3000/signin.

### CT-4: Novo usuário com informações incompletas.

Pré-condições: O Real World App está em execução em http://localhost:3000 e o formulário de cadastro está vazio.

Passos para Reprodução:
  1. Após instalação do CRW e criação do Usuário;
  2. Rota: http://localhost:3000/signup;
  3. Preencher somente o campo "First Name" e verificar se o botão "SIGN UP" habilita (ele fica desabilitado enquanto os campos estão em branco);
  4. Verificar se aparece no campo o "is required";
  5. Apagar o preenchimento do campo "First Name" e preencher o campo "Last Name" e verificar se o botão "SIGN UP" habilita;
  6. Verificar se aparece no campo o "is required";
  7. Apagar o preenchimento do campo "Last Name" e preencher o campo "Username" e verificar se o botão "SIGN UP" habilita;
  8. Verificar se aparece no campo o "is required";
  9. Apagar o preenchimento do campo "Username" e preencher o campo "Password" e verificar se o botão "SIGN UP" habilita;
  10. Verificar se aparece no campo o "is required";
  11. Apagar o preenchimento do campo "Password" e preencher o campo "Confirm Password" e verificar se o botão "SIGN UP" habilita.
  12. Verificar se aparece no campo o "is required";

Resultado esperado: O botão "SIGN UP" permanece desabilitado e os campos obrigatórios vazios exibem a mensagem "is required".

### Automação dos casos de teste

**Exercício:** Automação dos Casos de Teste "Login" e "Registro de Usuário"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:

**Automação do Caso de Teste: Login com sucesso.**

```javascript
describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Tentar fazer login com credenciais inválidas.**

```javascript
describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Registro de novo usuário com sucesso.**

```javascript
describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Tentar registrar um novo usuário com informações incompletas.**

```javascript
describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

Continue praticando e explorando outras funcionalidades do Cypress.io para criar casos de teste e automações abrangentes para todas as features do Real World App. O objetivo é se tornar um Guardião da Qualidade altamente capacitado, capaz de testar de forma eficaz e garantir a qualidade do aplicativo em todos os aspectos. 
Boa sorte! #GuardiaoDaQualidade #AutomacaoDeTestes #CypressIO #RealWorldApp

## LinkedIn

Assim que finalizar esses exercicios faça uma postagem no seu LinkedIn.
Isso ajudará na procura da sua entrevista.

Use esse Prompt para te ajudar a criar seu post.

```
Crie um post de Linkedin sobre um projeto de automação Cypress que estou realizando pela LumeStack no curso de "Guardião da Qualidade".
Eu criei casos de teste para a feature de transferencia de dinheiro do projeto Real World App do Cypress IO.
Eu també automatizei os mesmos casos de teste com o Cypress
```
Aproveite e mencione a LumeStack no post 😉
