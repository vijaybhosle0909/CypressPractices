///<reference types = "cypress"/>

class toolsQATextBox{

    getFullNameLabel(){
        return cy.get('#userName-label'); 
    }

    getEmailLabel(){
        return cy.get('#userEmail-label');
    }

    getCurrentAddressLabel(){
        return cy.get('#currentAddress-label')
    }

    getPermanentAddressLabel(){
        return cy.get('#permanentAddress-label')
    }

    getFullNameField(){
        return cy.get('#userName');
    }

    typeFullName(fullNameValue){
        return cy.get('#userName').should('be.enabled').type(fullNameValue);
    }

    getEmailField(){
        return cy.get('#userEmail');
    }

    typeEmail(emailValue){  
        return cy.get('#userEmail').should('be.enabled').type(emailValue);
    }

    getCurrentAddressField(){
        return cy.get('#currentAddress');
    }

    typeCurrentAddress(currentAddressValue){
        return cy.get('#currentAddress').should('be.enabled').type(currentAddressValue);
    }

    getPermanentAddressField(){
        return cy.get('#permanentAddress');
    }

    typePermanentAddress(permanentAddressValue){
        return cy.get('#permanentAddress').should('be.enabled').type(permanentAddressValue)
    }

    getSubmitButton(){
        return cy.get('#submit');
    }

    clickSubmitButton(){
        return cy.get('#submit').should('be.enabled').click();
    }

    getOutput(){
        return cy.get('#output');
    }

    nameOutput(){
        return cy.get('#name');
    }

    emailOutput(){
        return cy.get('#email');
    }

    currentAddressOutput(){
        return cy.get('.mb-1[id="currentAddress"]');
    }

    permanantAddressOutput(){
        return cy.get('.mb-1[id="permanentAddress"]');
    }
}

export default toolsQATextBox;