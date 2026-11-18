# RWA Exercícios

## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app

## Casos de teste

Exercício: Criação de Casos de Teste para a Feature "Visualizar Histórico de Transações"

A funcionalidade "Visualizar Histórico de Transações" é crucial no aplicativo Real World App, permitindo aos usuários rastrear todas as transações realizadas. Vamos criar casos de teste para garantir que essa funcionalidade funcione corretamente:

### CT-01: Visualizar histórico de transações com sucesso

Pré-condições: o Real World App está em execução em http://localhost:3000, a massa de dados foi recriada pelo seed e o usuário Wendell53 (senha s3cret) possui transações pessoais.

Passos:
  1. Acessar http://localhost:3000/signin.
  2. Entrar com Wendell53 e a senha s3cret.
  3. Abrir a aba Mine.

Resultado esperado: o cabeçalho Personal aparece e a lista exibe ao menos uma transação anterior.

### CT-02: Visualizar o histórico de um usuário sem transações anteriores

Pré-condições: o Real World App está em execução em http://localhost:3000 e a massa de dados do seed está aplicada. O usuário do teste ainda não existe e não tem transações.

Passos:
  1. Cadastrar um usuário novo em http://localhost:3000/signup.
  2. Entrar com esse usuário.
  3. Concluir o onboarding criando uma conta bancária.
  4. Abrir a aba Mine.

Resultado esperado: o sistema exibe a mensagem "No Transactions" e o botão "Create A Transaction".

## Automação dos casos de teste

Os scripts deste exercício ficam em `real-world-app-exercicios/exercicio-3/automation-e3/`. A page fica em `cypress/pages/exercicio-3/history.js`.

| Caso de teste | Spec | Page |
| --- | --- | --- |
| Visualizar histórico de transações com sucesso | `automation-e3/spec.history-success.cy.js` | `cypress/pages/exercicio-3/history.js` |
| Histórico de um usuário sem transações anteriores | `automation-e3/spec.history-empty.cy.js` | `cypress/pages/exercicio-3/history.js` |

## LinkedIn

Assim que finalizar esses exercicios faça uma postagem no seu LinkedIn.
Isso ajudará na procura da sua entrevista.

Use esse Prompt para te ajudar a criar seu post.

```
Crie um post de Linkedin sobre um projeto de automação Cypress que estou realizando pela LumeStack no curso de "Guardião da Qualidade".
Eu criei casos de teste para a feature de {Feature testada} do projeto Real World App do Cypress IO.
Eu também automatizei os mesmos casos de teste com o Cypress
```
Aproveite e mencione a LumeStack no post 😉
