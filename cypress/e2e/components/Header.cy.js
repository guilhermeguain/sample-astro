describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4321');
  });

  it('displays the logo', () => {
    cy.get('#astro-logo').should('exist');
  });

  it('displays the correct title', () => {
    cy.get('h1').should('contain.text', 'Astro Blog');
  });

  it('contains navigation links', () => {
    cy.get('nav').find('a').should('have.length', 2);
  });

  it('applies correct styling to active link', () => {
    // Assuming the current path is '/'
    cy.get('a[href="/"]').should('have.css', 'color', 'rgb(139, 92, 246)'); // Checking if the 'Home' link is styled as active
    cy.get('a[href="/blog/"]').should('not.have.css', 'color', 'rgb(139, 92, 246)'); // Checking if the 'Blog' link is not styled as active
  });
});
