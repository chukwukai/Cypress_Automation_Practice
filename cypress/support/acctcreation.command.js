import AcctCreationPage from '../object_map/acct.map'

const acctPage = new AcctCreationPage();

Cypress.Commands.add('accountCreation', (fname, lname) => { 
    cy.get('.page-heading').should('have.text', 'Create an account');
    AcctCreationPage.getMaleBtn().click();
    AcctCreationPage.getFirstName().type(fname);
    AcctCreationPage.getLastName().type(lname);
    AcctCreationPage.getPwd().type('password_test');
    AcctCreationPage.getDay().type('11');
    AcctCreationPage.getMonths().type('10');
    AcctCreationPage.getYears().type('1988');
    AcctCreationPage.getCompany().type('Great Company Name');
    AcctCreationPage.getAddressFirstLine().type('123 Main Street');
    AcctCreationPage.getAddressSecondLine().type('APT 2100');
    AcctCreationPage.getCity().type('New York');
    AcctCreationPage.getState().type('32');
    AcctCreationPage.getZipCode().type('10010');
    AcctCreationPage.getAdditionalInfo().type('This is an additional info$%$%~_+=}{|!!!!!!');
    AcctCreationPage.getPhoneNum().type('3471002100');
    AcctCreationPage.getMobileNum().type('3471002100');
    AcctCreationPage.getRegister().click();
    cy.get('.page-heading').should('have.text', 'My account')
    cy.get('.account').should('have.text', fname +'\xa0'+ lname);
    cy.get('.navigation_page').should('have.text', 'MY ACCOUNT')
});

Cypress.Commands.add('login' , (email) => {
    acctPage.getSignInLabel().click();
    acctPage.getEmail().type(email);
    acctPage.getPwd().type('password_test');
    acctPage.getSignInBtn().click();
    //AcctCreationPage.getEmail().type(email)
    //AcctCreationPage.getPwd().type('password_test');
    //AcctCreationPage.getRegister().click();

});