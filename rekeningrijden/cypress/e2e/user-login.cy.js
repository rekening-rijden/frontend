describe('User login', () => {
  const username = "user";
  const password = "user";


  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('has a title', () => {
    cy.contains('Rekeningrijden');
  });

  it('can login', () => {
    cy.url().should('include', '/login');
    cy.get('input[name="uname"]').type(username);
    cy.get('input[name="psw"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/selectcar');
  });
});
