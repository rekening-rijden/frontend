//
// it('Update roadtax', () => {
//
// });
//
// it('Revert roadtax', () => {
//
// });
//
// it('Add new roadtax', () => {
//
// });
//
// it('Delete roadtax', () => {
//
// });

describe("Change roadtax values", () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/tax')
  });

  it('Alter highway price', () => {
    cy.get('input[id="HIGHWAY"]').clear().type('0.5');
    cy.get('button[id="update-HIGHWAY"]').click();
    cy.reload();
    cy.get('input[id="HIGHWAY"]').should('have.value', '0.5');
  });

  it('Revert highway price', () => {
    cy.get('input[id="HIGHWAY"]').clear().type('0.05');
    cy.get('button[id="update-HIGHWAY"]').click();
    cy.reload();
    cy.get('input[id="HIGHWAY"]').should('have.value', '0.05');
  });

  it('Add new type of road', () => {
    cy.get('input[name="roadtype-input-new"]').clear().type('NEWROADTYPE');
    cy.get('input[name="kilo-input-road-new"]').clear().type('0.5');
    cy.get('button[id="add-new-road"]').click();
    cy.reload();
    cy.get('input[id="NEWROADTYPE"]').should('have.value', '0.5');
  });

  it('Delete type of road', () => {
    cy.get('button[id="delete-NEWROADTYPE"]').click();
    cy.on('window:confirm', () => true);
    cy.reload();
    cy.get('input[id="NEWROADTYPE"]').should('not.exist');
  });

});
