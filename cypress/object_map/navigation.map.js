class NavigationPage{
    getTab(){
        return cy.get('.sf-with-ul');
    }

    getTabText(val) {
        const tabText = this.getTab();
        cy.get('.sf-with-ul').each(($el) => {
        //cy.get(tabText).each(($el) => {
            if($el.text() === val){
                cy.wrap($el).click();
            }

        })
    }
}
export default NavigationPage