describe('Questao 3 - clientes com divida acima de $50.00', () => {
  it('imprime nomes e sites dos clientes com divida acima de $50.00', () => {
    cy.visit('/tables');

    cy.get('#table1').should('be.visible').then(($table) => {
      const headers = $table.find('thead th').toArray().map((header) =>
        Cypress.$(header).text().trim(),
      );
      const columns = {
        firstName: headers.indexOf('First Name'),
        lastName: headers.indexOf('Last Name'),
        due: headers.indexOf('Due'),
        website: headers.indexOf('Web Site'),
      };

      expect(Object.values(columns).every((index) => index >= 0)).to.be.true;

      const customers = $table.find('tbody tr').toArray().map((row) => {
        const cells = Cypress.$(row).find('td').toArray().map((cell) =>
          Cypress.$(cell).text().trim(),
        );

        return {
          firstName: cells[columns.firstName],
          lastName: cells[columns.lastName],
          due: Number(cells[columns.due].replace('$', '').trim()),
          website: cells[columns.website],
        };
      });

      expect(customers.length).to.be.greaterThan(0);
      expect(customers.every(({ firstName, lastName, due, website }) =>
        firstName && lastName && Number.isFinite(due) && website,
      )).to.be.true;

      const debtors = customers
        .filter(({ due }) => due > 50)
        .map(({ firstName, lastName, website }) => ({ firstName, lastName, website }));

      cy.task('logDebtors', debtors);
    });
  });
});