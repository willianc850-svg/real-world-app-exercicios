const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'real-world-app-exercicios/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {},
  },
})