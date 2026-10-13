describe('Questao 1 - ofertas na SauceDemo', () => {
  it('lista os produtos com preco abaixo de $20.00', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.get('.inventory_item').should('have.length.greaterThan', 0).then(($items) => {
      const products = $items.toArray().map((item) => {
        const product = Cypress.$(item);

        return {
          name: product.find('.inventory_item_name').text().trim(),
          price: Number(product.find('.inventory_item_price').text().replace('$', '').trim()),
        };
      });
      expect(products.every(({ name, price }) => name && Number.isFinite(price))).to.be.true;

      const offers = products.filter(({ price }) => price < 20);
      const offersForConsole = offers.map(({ name, price }) => ({
        name,
        price: `$${price.toFixed(2)}`,
      }));

      cy.task('logOffers', offersForConsole);
    });
  });
});