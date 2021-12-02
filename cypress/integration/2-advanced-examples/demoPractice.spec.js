///<reference types = 'cypress'/>

describe('Practice Suite', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/checkbox/');
    })

    it('Radio Test', ()=>{
        cy.get('[type="radio"]').first().should('be.enabled').check({force:true});
        cy.get('.mt-3').should('have.text', 'You have selected Yes');

        cy.get('[type="radio"]').should('be.enabled').check({force:true});
        cy.get('.mt-3').should('have.text', 'You have selected Impressive');

        cy.get('[type="radio"]').last().should('be.disabled').check({force:true});
    })

    it.only('Checkbox', ()=>{
        // cy.get('[type= "checkbox"]').check({force:true});
        // cy.get('#result').should('contain.text', 'You have selected :homedesktopnotes');

        cy.get('.rct-title').check({force:true});
        cy.get('#result').should('contain.text', 'You have selected :homedesktopnotes');
    })
})