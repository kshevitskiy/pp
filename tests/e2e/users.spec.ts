describe('Users Page', () => {
  beforeEach(() => {
    cy.visit('/users')
  })

  it('Contains loader and alert elements', () => {
    cy.get('#loader').should('have.attr', 'class').and('include', 'loader')
    cy.get('#alert').should('have.attr', 'class').and('include', 'alert')
  })

  it('Heading contains page title', () => {
    cy.contains('h1', 'Members: 10')
  })
})

describe('Users list', () => {
  it('Has users-wrapper with user list items', () => {
    cy.get('.users-wrapper')
  })

  it('Has 10 users in user-list', () => {
    cy.get('.users-wrapper .user').should('have.length', 10)
  })

  it('Remove 1 item from user-list', () => {
    cy.get('.users-wrapper .user')
      .eq(Math.floor(Math.random() * 10))
      .find('.remove')
      .click()
  })

  it('Has 9 users in user-list', () => {
    cy.get('.users-wrapper .user').should('have.length', 9)
  })

  it('Has reset link if some user has been removed', () => {
    cy.get('a.reset').should('have.attr', 'href').and('include', '#')
    cy.contains('a.reset', 'Reset')
  })

  it('Reset user-list to default number of users (10)', () => {
    cy.get('a.reset').click()
  })

  it('Has 10 users in user-list', () => {
    cy.get('.users-wrapper .user').should('have.length', 10)
  })

  it('Reset link should not exists', () => {
    cy.get('a.reset').should('not.exist')
  })
})
