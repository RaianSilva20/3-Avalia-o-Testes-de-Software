const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    supportFile: false,
    setupNodeEvents(on) {
      on('task', {
        logOffers(offers) {
          console.table(offers);
          return null;
        },
        logBooks(books) {
          console.table(books);
          console.log(`Total de livros extraidos: ${books.length}`);
          return null;
        },
        logDebtors(debtors) {
          console.table(debtors);
          return null;
        },
      });
    },
  },
});