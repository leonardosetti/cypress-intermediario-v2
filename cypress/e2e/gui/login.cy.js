describe('Usando Cypress Nível Intermediário', () => {
  it('Login usuário root com sucesso', () => {
    const _user = Cypress.env('user_name');
    const _password = Cypress.env('user_password');
    const _options = { cacheSession: false };

    cy.login(_user, _password, _options);
    cy.get('.qa-user-avatar').should('be.visible');
  });
});
