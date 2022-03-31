import NavigationPage from '/Users/chukwukaibeh/Documents/Cypress_Automation_Practice/cypress/object_map/navigation.map.js'

const navPage = new NavigationPage();

describe('Sign into the test address', () => {
    it('should launch to the home page', () => {
      cy.visit('http://automationpractice.com/index.php');
    });

    it('should log into the application', () => {
      cy.login('uictest12345@email.com');
      cy.get('.page-heading').should('have.text', 'My account')
      cy.get('.account').should('have.text', 'fname lname');
      cy.get('.navigation_page').should('have.text', 'My account')
    }); 

    it('should shop for clothes', () => {
      navPage.getTabText("Women");
      cy.get('.product_list.grid.row').should('have.visible');
      cy.get('.navigation_page').should('have.text', 'Women');
      cy.get('.right-block').each(($el, index, $list) => {
        //cy.contains('Add to cart').click();
       if($el.text() === 'Printed Chiffon Dress123323'){
          cy.contains('Add to cart').click({force: true});
        } 
      })
    });


});