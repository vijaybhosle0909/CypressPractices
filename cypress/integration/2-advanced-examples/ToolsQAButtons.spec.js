///<reference types = 'cypress'/>
import toolsQAButtons from '../../support/Pages/buttonsPage'

const buttonsPageObject = new toolsQAButtons()

describe("Double Click Button Suite", () =>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/buttons');
    })

    it('Double Click Button UI', ()=>{
        var doubleClickButton=buttonsPageObject.getDoubleClickButton();

        doubleClickButton.should('be.enabled');
        doubleClickButton.should('have.text', 'Double Click Me');
        doubleClickButton.should('have.css', 'width', '141.8000030517578px').should('have.css', 'height', '38px');    //try 
        doubleClickButton.should('have.css', 'background-color', 'rgb(0, 123, 255)');
        doubleClickButton.should('have.css', 'font-size', '16px');

        doubleClickButton.dblclick();
        buttonsPageObject.getDoubleClickMessage().should('have.text', 'You have done a double click');

    })

    it('Right Click Button', ()=>{
        let rightClickButton = buttonsPageObject.getRightClickButton ();

        rightClickButton.should('be.enabled');
        rightClickButton.should('have.text', 'Right Click Me');
        rightClickButton.should('have.css', 'width', '127.8499984741211px').and('have.css', 'height', '38px');
        rightClickButton.should('have.css', 'background-color', 'rgb(0, 123, 255)');
        rightClickButton.should('have.css', 'font-size', '16px');
        rightClickButton.should('be.visible');

        rightClickButton.rightclick();
        buttonsPageObject.getRightClickMessage().should('have.text', 'You have done a right click');  

    })

    it.skip('Dynamic Click Button', ()=>{
        // cy.contains('Click Me').should('be.enabled').click();
        cy.contains('Click Me').find('not.have.text', 'Double Click Me').and('not.have.text', 'Right Click Me').and('have.text', 'Click Me').click();
        // cy.get('#clickme').should('have.class')
        // cy.get('[type="button"]').invoke('text').should('match', /Click Me^/);
        // cy.get('.btn-primary[type="button"]').should('not.contain', 'Double').and('not.contain', 'Right').click();
        // cy.get('.btn-primary[type="button"]').should('have.text', 'Click Me').click();
        cy.get()
    })
})