describe('view products', () => {
  it('should render items on the product list', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Products');
    cy.get('#tshirt-1');
    cy.get('#tshirt-2');
    cy.get('#tshirt-3');
    cy.get('#tshirt-4');
  })
})
