///<reference types = 'cypress'/>

describe('02', ()=>{
    it('02', ()=>{
        cy.visit('https://en-gb.facebook.com/');
        cy.get('._8eso').should('eq', 'Facebook helps you connect and share with the people in your life.');
    })

    it('01', ()=>{
        cy.visit('https://en-gb.facebook.com/');
        cy.get('#email').should('have.attr', 'placeholder', 'Email address or phone number');
    })

})

describe('01', ()=>{
    it('02', ()=>{
        cy.visit('https://en-gb.facebook.com/');
        cy.get('#reg_pages_msg').should('eq', 'Create a Page for a celebrity, brand or business.');
    })

    it('01', ()=>{
        cy.visit('https://en-gb.facebook.com/');
        cy.get('#pass').should('have.attr', 'placeholder', 'Password');
    })

})