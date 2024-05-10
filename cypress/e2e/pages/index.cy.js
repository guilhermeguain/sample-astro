describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4321');
  });

  it('displays the correct title', () => {
    cy.title().should('eq', 'Welcome to Astro.');
  });

  it('displays the correct card content', () => {
    cy.get('.link-card-grid').within(() => {
      cy.contains('Blog').should('exist');
      cy.contains('Dive into our tech blog for insights.').should('exist');
    });
  });

  it('navigates to the correct page when card is clicked', () => {
    cy.get('.link-card-grid a').click();
    cy.url().should('include', '/blog');
  });
});
