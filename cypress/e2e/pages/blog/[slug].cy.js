describe('Post Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4321/blog/post-1');
  });

  it('displays the correct title and description', () => {
    cy.title().should('eq', 'Post 1');
    cy.get('meta[name="description"]').should('have.attr', 'content', 'Post 1 meta-description');
  });

  it('displays the post content correctly', () => {
    cy.get('h1').should('contain.text', 'Post 1');
    cy.get('.rich-text').should('exist');
  });

  it('displays the correct published date', () => {
    cy.contains('Publicado em: 10/05/2024').should('exist');
  });

  it('displays the correct post image', () => {
    cy.get('img').should('have.attr', 'alt', 'Sample 1 alt');
    cy.get('img').should('have.attr', 'src', 'http://127.0.0.1:1337/uploads/sample_1_422d88706a.webp');
  });
});
