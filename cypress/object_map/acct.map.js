class AcctCreationPage{
    getMaleRadioBtn(){
        return cy.get('input#id_gender1');
    }

    getFirstName(){
        return cy.get('#customer_firstname');
    }

    getLastName(){
        return cy.get('#customer_lastname');
    }

    getPwd(){
        return cy.get('#passwd');
    }

    getDays(){
        return cy.get('select#days');
    }

    getMonths(){
        return cy.get('select#months');
    }

    getYears(){
        return cy.get('select#years');
    }

    getCompany(){
        return cy.get('#company')
    }

    getAddressFirstLine(){
        return cy.get('#address1');
    }

    getAddressSecondLine(){
        return cy.get('#address2');
    }

    getCity(){
        return cy.get("#city");
    }

    getState(){
        return cy.get('select#id_state');
    }

    getZipCode(){
        return cy.get('#postcode');
    }

    getAdditionalInfo(){
        return cy.get('#other');
    }

    getPhoneNum(){
        return cy.get('#phone')
    }

    getMobileNum(){
        return cy.get('#phone_mobile');
    }

    getRegister(){
        return cy.contains('Register');
    }

    getEmail(){
        return cy.get('#email');
    }

    getSignInBtn(){
        return cy.get('#SubmitLogin');
    }

    getSignInLabel(){
        return cy.get('.login');
    }

}
export default AcctCreationPage