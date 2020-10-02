describe('cart', () => {
  it('should add items to cart', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Orange shirt clothes - $10 x 3');
    cy.contains('Your cart');
    cy.contains('you haven\'t added items yet.');
    cy.get('#tshirt-1').should('be.not.disabled');
    cy.get('#tshirt-1').click();
    cy.contains('Orange shirt clothes - $10 x 2');
    cy.contains('blue shirt clothes - $20 x 7');
    cy.contains('black shirt clothes - $30 x 9');
    cy.contains('white shirt clothes - $40 x 1');
    cy.get('#tshirt-1').click();
    cy.get('#tshirt-2').click();
    cy.contains('Orange shirt clothes - $10 x 1');
    cy.contains('blue shirt clothes - $20 x 6');
    cy.get('#tshirt-1').click();
    cy.contains('Sold Out');
    cy.get('#tshirt-1').should('be.disabled');
    cy.get('#tshirt-2').should('be.not.disabled');

    cy.contains('Orange shirt');
    cy.contains('Price: 10$');
    cy.contains('Quantity: 3');

    cy.contains('blue shirt');
    cy.contains('Price: 20$');
    cy.contains('Quantity: 1');

    cy.contains('total cost :50$');

    cy.get('#sub-quantity').click();
    cy.contains('Quantity: 2');
    cy.contains('total cost :40$');


    cy.get('#remove-item').click();
    cy.get('Orange shirt').should('not.exist');
    cy.contains('total cost :30$');

  })
});
