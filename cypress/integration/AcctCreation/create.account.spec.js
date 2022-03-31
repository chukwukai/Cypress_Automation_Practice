describe('Sign into the test address', () => {
    it('should launch to the home page', () => {
      cy.visit('http://automationpractice.com/index.php');
    });

    it('should navigate to sign in application', () => {
      cy.contains('Sign in');
      cy.get('.login').click();
    });
    
    it('should log into the application ', () => {
      cy.email("uictest12345@email.com");
    });

    it('should create an account', () => {
     cy.accountCreation("fname", "lname");
    });
  });