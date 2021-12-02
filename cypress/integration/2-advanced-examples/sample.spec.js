///<reference types = 'cypress'/>

// Cypress.on('uncaught:exception', (err, runnable) => {
//     return false;
//   });
  
  before(()=>{
        //steps which need to execute BEFORE all describe blocks
        //executes only ONCE
        cy.log('Before for Describe');
  })

  beforeEach(()=>{
        //steps which need to execute BEFORE each describe blocks
        //Executes number of times equal to number of describe blocks
        cy.log('Before Each for Describe');

  })

  afterEach(()=>{
        //steps which need to execute AFTER each describe blocks
        //Executes number of times equal to number of describe blocks
        cy.log('After each for describe()');

  })

  after(()=>{
        //steps which need to execute AFTER all describe blocks
        //executes only ONCE
        cy.log('After for describe()');
  })


describe("sample suite", ()=>{
    
    before(()=>{
        //Steps executes before all the tests in the describe block
        //Executed only ONCE
        cy.log('Before for it()');

    })

    beforeEach(()=>{
        cy.visit('https://www.toolsqa.com/selenium-training/');
        cy.log('Before Each for it()');
    })

    it('Verify Title', ()=>{
        // cy.get('.enroll__heading').should('have.text', 'Selenium Certification Training | Enroll Now | Study Online').should('have.css', 'font-size', '48px');
        cy.get('.enroll__heading').should('have.text', 'Selenium Certification Training | Enroll Now | Study Online').and('have.css', 'font-size', '48px');
        // cy.get('.enroll__heading').and('have.text', 'Selenium Certification Training | Enroll Now | Study Online').and('have.css', 'font-size', '48px');
    })

    it('Verify Search Placeholder', ()=>{
        cy.get('.w-100').should('have.attr', 'placeholder', 'Search');
    })

    afterEach(()=>{
        //Executes after each test execution
        //Executes number of times equal to number of tests in describe block
        // cy.reload();
        cy.log('After each for it()');
    })

    after(()=>{
        //Steps executes before all the tests in the describe block
        //Executed only ONCE
        cy.log('After for it()');

    })
})