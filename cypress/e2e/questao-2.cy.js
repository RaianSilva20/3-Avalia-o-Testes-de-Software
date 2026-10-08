describe('Questao 2 - carregamento dinamico', () => {
  it('aguarda o fim do carregamento e exibe Hello World!', () => {
    cy.visit('/dynamic_loading/1');

    cy.get('#start').contains('Start').click();

    cy.get('#loading')
      .should('be.visible')
      .and('contain.text', 'Loading...');

    cy.get('#loading', { timeout: 10000 }).should('not.be.visible');
    cy.get('#finish')
      .should('be.visible')
      .and('contain.text', 'Hello World!');
  });
});