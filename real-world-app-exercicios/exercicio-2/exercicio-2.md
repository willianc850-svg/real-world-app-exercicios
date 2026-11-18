# RWA Exercícios

## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app

## Casos de teste

Exercício: Criação de Casos de Teste para a Feature "Enviar Dinheiro"

Imagine que a feature "Enviar Dinheiro" é uma funcionalidade crítica no aplicativo Real World App. Seu objetivo é criar casos de teste para garantir que essa funcionalidade funcione corretamente. Considere os seguintes cenários como exemplo:

### CT-01: Enviar dinheiro com saldo suficiente

Pré-condições: massa de dados do RWA recriada (db:seed); usuário logado com saldo maior que o valor a enviar; pelo menos um contato disponível. Usar algum usuário da lista com a senha "s3cret".

Para ver a lista de usuários:

``` bash
yarn list:dev:users
```

Passos:
  1. Clicar em “New” (nova transação).
  2. Selecionar um contato na lista.
  3. Informar o valor (ex.: 25) e uma descrição.
  4. Clicar em “Pay”.

Resultado esperado: aparece a mensagem “Transaction Submitted!” e o botão “Create Another Transaction”. O saldo do remetente diminui exatamente o valor enviado.

### CT-02: Enviar dinheiro com saldo insuficiente

Pré-condições: as mesmas do CT-01.

Passos:
  1. Anotar o saldo atual.
  2. Clicar em “New” e selecionar um contato.
  3. Informar um valor maior que o saldo e uma descrição.
  4. Clicar em “Pay”.

Resultado esperado: o sistema exibe uma mensagem de erro, não conclui a transação e o saldo continua igual.

## Automação dos casos de teste

Os scripts deste exercício ficam em `real-world-app-exercicios/exercicio-2/automation-e2/`. A page fica em `cypress/pages/exercicio-2/transaction.js`.

| Caso de teste | Spec | Page |
| --- | --- | --- |
| Enviar dinheiro com saldo suficiente | `automation-e2/spec.send-success.cy.js` | `cypress/pages/exercicio-2/transaction.js` |
| Enviar dinheiro com saldo insuficiente | `automation-e2/spec.send-fail.cy.js` | `cypress/pages/exercicio-2/transaction.js` |

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
