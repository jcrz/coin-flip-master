describe('Home', () => {
  // there's a great article about testing the store here:
  // https://www.cypress.io/blog/2017/11/28/testing-vue-web-application-with-vuex-data-store-and-rest-backend/
  const getStore = () => cy.window().its('app.$store');

  beforeEach(() => {
    cy.visit('/');
  });

  describe('user chooses "heads"', () => {
    beforeEach(() => {
      cy.get('#heads-button').click();
    });

    it('redirects to the results page', () => {
      cy.url().should('include', '/results');
    });

    it('increments totalGames in the store', () => {
      const totalGames = () =>
        getStore()
          .its('state')
          .its('totalGames');
      totalGames().should('equal', 1);
    });
  });

  describe('user chooses "tails"', () => {
    beforeEach(() => {
      cy.get('#tails-button').click();
    });

    it('redirects to the results page', () => {
      cy.url().should('include', '/results');
    });

    it('increments totalGames in the store', () => {
      const totalGames = () =>
        getStore()
          .its('state')
          .its('totalGames');
      totalGames().should('equal', 1);
    });
  });
});
