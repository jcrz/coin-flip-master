describe('Results', () => {
  beforeEach(() => {
    cy.visit('#/results');
  });

  it('renders wins', () => {
    cy.get('p').contains('Wins:');
  });

  it('renders losses', () => {
    cy.get('p').contains('Losses:');
  });

  it('renders play again button', () => {
    cy.get('a').contains('Play Again');
  });

  describe('user clicks play again', () => {
    it('redirects back to the home page', () => {
      cy.get('a').click();
      cy.url().should('equal', 'http://localhost:8080/#/');
    });
  });
});
