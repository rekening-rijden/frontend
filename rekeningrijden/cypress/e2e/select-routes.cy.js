describe("Select routes", () => {


  beforeEach(() => {
    window.localStorage.setItem("currentUser", "1");
  });

  it('Has two cars to select', () => {
    cy.visit('http://localhost:4200/selectcar');
    cy.get('[id=cars]').should('have.length', 2);
  });

  it('Can select a car', () => {
    cy.visit('http://localhost:4200/selectcar');
    cy.get('[id=cars]').first().click();
    cy.url().should('include', '/vehicle/1');
  });

  it('Can select a route', () => {
    cy.visit('http://localhost:4200/vehicle/1');
    cy.get('div[role=tab]').eq(1).click();
    cy.contains('Sat Oct 29 2022').click();
  });
});
