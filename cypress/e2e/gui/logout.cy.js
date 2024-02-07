describe('Processo de Logout', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
  });

  it('Realiza logout com sucesso', () => {
    cy.logout();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`);
  });
});
