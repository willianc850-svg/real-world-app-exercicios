# Real World App — exercícios de automação

Automação Cypress dos exercícios do curso Guardião da Qualidade (LumeStack), feita sobre o [Real World App](https://github.com/cypress-io/cypress-realworld-app).

Os casos de teste escritos ficam no markdown de cada exercício. Os specs do Cypress ficam na pasta `automation-e*` do mesmo exercício. As pages ficam em `cypress/pages`, separadas por exercício.

## Estrutura

```
real-world-app-exercicios/
  exercicio-1/
    exercicio-1.md
    automation-e1/
      spec.login-success.cy.js
      spec.login-fail.cy.js
      spec.registration-success.cy.js
      spec.registration-fail.cy.js
  exercicio-2/
    exercicio-2.md
    automation-e2/
      spec.send-success.cy.js
      spec.send-fail.cy.js
  exercicio-3/
    exercicio-3 .md
    automation-e3/
      spec.history-success.cy.js
      spec.history-empty.cy.js
cypress/
  pages/
    exercicio-1/login.js
    exercicio-1/signup.js
    exercicio-2/transaction.js
    exercicio-3/history.js
cypress-realworld-app/
```

## Onde está cada automação

| Exercício | Casos escritos | Specs | Page |
| --- | --- | --- | --- |
| 1. Login e registro | `real-world-app-exercicios/exercicio-1/exercicio-1.md` | `real-world-app-exercicios/exercicio-1/automation-e1/` | `cypress/pages/exercicio-1/` |
| 2. Enviar dinheiro | `real-world-app-exercicios/exercicio-2/exercicio-2.md` | `real-world-app-exercicios/exercicio-2/automation-e2/` | `cypress/pages/exercicio-2/transaction.js` |
| 3. Histórico de transações | `real-world-app-exercicios/exercicio-3/exercicio-3 .md` | `real-world-app-exercicios/exercicio-3/automation-e3/` | `cypress/pages/exercicio-3/history.js` |

## Como executar

Na pasta `cypress-realworld-app`, suba o aplicativo:

```bash
cd cypress-realworld-app
yarn install
yarn dev
```

O frontend fica em `http://localhost:3000` e a API em `http://localhost:3001`.

Na raiz deste repositório, abra o Cypress:

```bash
npx cypress open
```

O `specPattern` em `cypress.config.js` já inclui `real-world-app-exercicios/**/*.cy.js`. Os specs dos exercícios 2 e 3 restauram a massa de dados com `POST http://localhost:3001/testData/seed` antes de rodar. A senha dos usuários do seed é `s3cret`.
