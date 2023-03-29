/// <reference types="cypress" />

const contactMail = 'skleptestarmy@gmail.com'
const searchProduct = 'shirt'

beforeEach(() => {
  cy.visit('/')
})

describe('Top Banner', () => {
})
  it('Click on mail', () => {
    cy.get('li[class="top-email"]').should("contain", contactMail)
  })

  it('Searchig', () => {
    cy.get('#search-field-top-bar').type(searchProduct)
    cy.get('#search-top-bar-submit').click()
    cy.get('h1[class="page-title"]').should('contain', 'Search Results for: '+ searchProduct)
  })

  it('My Account', () => {
    cy.get('li[class="top-account"]').click()
    cy.get('h1[class="page-title margin-top"]').should('contain', 'My account')
  })

  it('Shopping Cart', () => {
  cy.get('i[class="fa fa-shopping-cart"]').should('exist')
  cy.get('i[class="fa fa-shopping-cart"]').click()
  cy.get('h1[class="page-title margin-top"]').should('contain', 'Cart')

})