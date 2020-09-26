describe('view products', () => {
  it('should render items on the product list until disabled', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Orange shirt clothes - $10 x 3');
    cy.get('#tshirt-1').should('be.not.disabled');
    cy.get('#tshirt-1').click();
    cy.contains('Orange shirt clothes - $10 x 2');
    cy.get('#tshirt-1').click();
    cy.contains('Orange shirt clothes - $10 x 1');
    cy.get('#tshirt-1').click();
    cy.contains('Sold Out');
    cy.get('#tshirt-1').should('be.disabled');
  })
})
