///<reference types = 'cypress'/>

class toolsQAButtons{

    getDoubleClickButton(){
        return cy.get('#doubleClickBtn').should('be.visible');
    }

    getRightClickButton(){
        return cy.get('#rightClickBtn').should('be.visible');
    }

    getDoubleClickMessage(){
        return cy.get('#doubleClickMessage');
    }

    getRightClickMessage(){
       return cy.get('#rightClickMessage');
    }
}

export default toolsQAButtons;