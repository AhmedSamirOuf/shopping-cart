describe('cart', () => {
  it('should add items to cart', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Orange shirt clothes - $10 x 3');
    cy.contains('Your cart');
    cy.contains('you haven\'t added items yet.');
    cy.get('#tshirt-1').should('be.not.disabled');
    cy.get('#tshirt-1').click();
    cy.contains('Orange shirt clothes - $10 x 2');
    cy.get('#tshirt-1').click();
    cy.contains('Orange shirt clothes - $10 x 1');
    cy.get('#tshirt-1').click();
    cy.contains('Sold Out');
    cy.get('#tshirt-1').should('be.disabled');

    cy.contains('item name: Orange shirt clothes');
    cy.contains('item cost: $10');
    cy.contains('total cost: $30');
  })
})
