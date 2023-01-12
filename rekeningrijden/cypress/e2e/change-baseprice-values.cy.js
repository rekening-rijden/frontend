describe("Change baseprice values", () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/tax')
  });

  it('Alter petrol price', () => {
    cy.get('input[id="PETROL"]').clear().type('0.50');
    cy.get('button[id="update-PETROL"]').click();
    cy.reload();
    cy.get('input[id="PETROL"]').should('have.value', '0.50');
  });

  it('Revert petrol price', () => {
    cy.get('input[id="PETROL"]').clear().type('0.15');
    cy.get('button[id="update-PETROL"]').click();
    cy.reload();
    cy.get('input[id="PETROL"]').should('have.value', '0.15');
  });

  it('Add new type of fuel', () => {
    cy.get('input[name="engine-input-new"]').clear().type('NEWGASTYPE');
    cy.get('input[name="kilo-input-new"]').clear().type('0.50');
    cy.get('button[id="add-new"]').click();
    cy.get('input[id="NEWGASTYPE"]').should('have.value', '0.50');
  });

  it('Delete type of fuel', () => {
    cy.get('button[id="delete-NEWGASTYPE"]').click();
    cy.on('window:confirm', () => true);
    cy.reload();
    cy.get('input[id="NEWGASTYPE"]').should('not.exist');
  });

});
