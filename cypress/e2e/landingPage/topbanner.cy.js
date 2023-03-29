/// <reference types="cypress" />

describe('Top Banner', () => {
})
  it('Click on mail', () => {
    cy.visit('/')
    cy.get('li[class="top-email"]').click()
  })