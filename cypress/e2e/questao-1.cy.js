describe('Questao 1 - mensagem de erro no login', () => {
  it('exibe a mensagem de usuario invalido quando os campos estao vazios', () => {
    cy.visit('/login');

    cy.get('#username').should('have.value', '');
    cy.get('#password').should('have.value', '');
    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .should('contain.text', 'Your username is invalid!')
      .and('have.class', 'error');
  });
});