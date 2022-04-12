describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Contains loader and alert elements', () => {
    cy.get('#loader').should('have.attr', 'class').and('include', 'loader')
    cy.get('#alert').should('have.attr', 'class').and('include', 'alert')
  })

  it('Heading contains page title', () => {
    cy.contains('h1', 'GitHub Members App')
  })

  it('Explore link has href attribute with users value', () => {
    cy.get('a')
      .should('have.attr', 'href')
      .and('include', 'users')
      .then((href) => {
        cy.visit(href)
      })
  })

  it('Users page URL should contain /users path', () => {
    cy.contains('a', 'Explore').click()
    cy.url().should('contain', '/users')
  })
})
