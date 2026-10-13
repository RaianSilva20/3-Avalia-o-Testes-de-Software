describe('Questao 2 - catalogo da livraria', () => {
  it('extrai titulo e preco das duas primeiras paginas', () => {
    const collectBooks = () =>
      cy.get('.product_pod').should('have.length', 20).then(($items) => {
        const books = $items.toArray().map((item) => {
          const book = Cypress.$(item);

          return {
            title: book.find('h3 a').attr('title'),
            price: book.find('.price_color').text().trim(),
          };
        });

        expect(books.every(({ title, price }) => title && price)).to.be.true;
        return books;
      });

    cy.visit('http://books.toscrape.com/');

    collectBooks().then((pageOneBooks) => {
      cy.get('.next a').should('be.visible').and('contain.text', 'next').click();
      cy.location('pathname').should('include', '/catalogue/page-2.html');

      collectBooks().then((pageTwoBooks) => {
        const allBooks = [...pageOneBooks, ...pageTwoBooks];

        expect(allBooks).to.have.length(40);
        cy.task('logBooks', allBooks);
      });
    });
  });
});