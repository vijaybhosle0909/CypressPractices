///<reference types = 'cypress'/>
import toolsQATextBox from '../../support/Pages/textBoxPage';

const textBoxPageObject = new toolsQATextBox();

describe('Tools QA First Name Text Box Validation', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Full Name Field Validation', ()=>{
        textBoxPageObject.getFullName().should('be.enabled');
        textBoxPageObject.getFullNameLabel().should('have.text', 'Full Name');
        textBoxPageObject.getFullName().invoke('attr', 'placeholder').should('contain', 'Full Name');
        textBoxPageObject.getFullName().should('have.css', 'width', '331.3125px');
        textBoxPageObject.getFullName().should('have.css', 'height', '38px');
        textBoxPageObject.getFullName().should('have.css', 'background-color', 'rgb(255, 255, 255)');
    })

    it('Full Name Validation With Valid Data', ()=>{
        textBoxPageObject.getFullName().type('VISHAL PHALE');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', 'VISHAL PHALE');

        cy.reload();
        textBoxPageObject.getFullName().type('vishal phale');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', 'vishal phale');
        textBoxPageObject.

        cy.reload();
        textBoxPageObject.getFullName().type('Vishal Phale');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', 'Vishal Phale');
    })

    it('Full Name field Validation With Invalid Data', ()=>{
        textBoxPageObject.getFullName().type(' ');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '');

        cy.reload();
        textBoxPageObject.getFullName().type('12345');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '');

        cy.reload();
        textBoxPageObject.getFullName().type('Vishal12345');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', 'Vishal12345');
    })

})

describe('Tools QA Email Text Box Validation', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Email Field Validation', ()=>{
        textBoxPageObject.getEmail().should('be.enabled');
        textBoxPageObject.getEmailLabel().should('have.text', 'Email');
        textBoxPageObject.getEmail().invoke('attr', 'placeholder').should('contain', 'name@example.com');
        textBoxPageObject.getEmail().should('have.css', 'width', '331.3125px');
        textBoxPageObject.getEmail().should('have.css', 'height', '38px');
        textBoxPageObject.getEmail().should('have.css', 'background-color', 'rgb(255, 255, 255)');
    })

    it('Email Field Validation With Valid Data', ()=>{
        textBoxPageObject.getEmail().type('vp@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', 'vp@gmail.com');

        cy.reload();
        textBoxPageObject.getEmail().type('v-p@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', 'v-p@gmail.com');

        cy.reload();
        textBoxPageObject.getEmail().type('v.p@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', 'v.p@gmail.com');

        cy.reload();
        textBoxPageObject.getEmail().type('v_p@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', 'v_p@gmail.com');

        cy.reload();
        textBoxPageObject.getEmail().type('v.p.k@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '');

    })

    it('Email Field Validation With Invalid Data', ()=>{
        textBoxPageObject.getEmail().type('v@p@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('have.text', '');

        cy.reload();
        textBoxPageObject.getEmail().type('v!p@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('have.text', '');

        cy.reload();
        textBoxPageObject.getEmail().type('v..p@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('have.text', '');

        cy.reload();
        textBoxPageObject.getEmail().type('v.p.@gmail.com');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('have.text', '');
    })

})

describe('Tools QA Current Address Text Box Validation', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Current Address Field Validation', ()=>{
        textBoxPageObject.getCurrentAddress().should('be.enabled');
        textBoxPageObject.getCurrentAddressLabel().should('have.text', 'Current Address');
        textBoxPageObject.getCurrentAddress().invoke('attr', 'placeholder').should('contain', 'Current Address');
        textBoxPageObject.getCurrentAddress().should('have.css', 'width', '331.3125px');
        textBoxPageObject.getCurrentAddress().should('have.css', 'height', '134px');
        textBoxPageObject.getCurrentAddress().should('have.css', 'background-color', 'rgb(255, 255, 255)');
    })  

    it('Current Address Field Validation With Valid Data', ()=>{
        textBoxPageObject.getCurrentAddress().type('#123 Main Street, New York, NY 10030');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '#123 Main Street, New York, NY 10030');

        //Check for special character acceptance
        cy.reload();
        textBoxPageObject.getCurrentAddress().type('#123/21 @Main Street, -New York, NY -10030');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('have.text', 'Current Address :#123/21 @Main Street, -New York, NY -10030 ');

    })

    it('Current Address Field Validation With Invalid Data', ()=>{

        //check for space entered
        textBoxPageObject.getCurrentAddress().type(' ');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('have.text', 'Current Address :  ');

        //Check for invalid pincode
        cy.reload();
        textBoxPageObject.getCurrentAddress().type('#123 Main Street, New York, NY 100300');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '#123 Main Street, New York, NY 100300');

        //check for only numeric address
        cy.reload();
        textBoxPageObject.getCurrentAddress().type('123');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '123');

    })
})

describe('Tools QA Permanant Address Text Box Validation', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Permanent Address Field Validation', ()=>{
        textBoxPageObject.getPermanentAddress().should('be.enabled');
        textBoxPageObject.getPermanentAddressLabel().should('have.text', 'Permanent Address');
        // textBoxPageObject.getPermanentAddress().invoke('attr', 'placeholder').should('contain', 'Permanent Address');
        textBoxPageObject.getPermanentAddress().should('have.css', 'width', '331.3125px');
        textBoxPageObject.getPermanentAddress().should('have.css', 'height', '134px');
        textBoxPageObject.getPermanentAddress().should('have.css', 'background-color', 'rgb(255, 255, 255)');
    }) 

    it('Permanent Address Field Validation With Valid Data', ()=>{
        textBoxPageObject.getPermanentAddress().type('#123 Main Street, New York, NY 10030');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '#123 Main Street, New York, NY 10030');

        //Check for special character acceptance
        cy.reload();
        textBoxPageObject.getPermanentAddress().type('#123/21 @Main Street, -New York, NY -10030');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('have.text', 'Permananet Address :#123/21 @Main Street, -New York, NY -10030');

    })

    it('Permanent Address Field Validation With Invalid Data', ()=>{

        //check for space entered also speplling mistake in Permanent in outpur result
        textBoxPageObject.getPermanentAddress().type(' ');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('have.text', 'Permananet Address : ');

        //Check for invalid pincode
        cy.reload();
        textBoxPageObject.getPermanentAddress().type('#123 Main Street, New York, NY 100300');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '#123 Main Street, New York, NY 100300');

        //check for only numeric address
        cy.reload();
        textBoxPageObject.getPermanentAddress().type('123');
        textBoxPageObject.getSubmitButton().click();
        textBoxPageObject.getOutput().should('contain', '123');

    })
})

describe('Submit Button Validation', ()=>{
        beforeEach(()=>{
            cy.visit('https://demoqa.com/text-box');
        })

        it('Submit Button Validation', ()=>{
            textBoxPageObject.getSubmitButton().should('be.enabled');
            textBoxPageObject.getSubmitButton().should('have.text', 'Submit');
            textBoxPageObject.getSubmitButton().should('have.css', 'width', '76.05000305175781px');
            textBoxPageObject.getSubmitButton().should('have.css', 'height', '38px');
            textBoxPageObject.getSubmitButton().should('have.css', 'background-color', 'rgb(0, 123, 255)');
            textBoxPageObject.getSubmitButton().should('have.css', 'font-size', '16px');
        })
})

describe('Form Submission Validation', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })
    
    //Verify form with only valid Full Name, Email, Current Address, Permanent Address
    it('Form Submission Validation With Valid Data Set1', ()=>{
        textBoxPageObject.getFullName().should('be.enabled').type('Vishal Phale');
        textBoxPageObject.getEmail().should('be.enabled').type('vp@gmail.com');
        textBoxPageObject.getCurrentAddress().should('be.enabled').type('#123/21, New Jercy Road, NY, 23123');
        textBoxPageObject.getPermanentAddress().should('be.enabled').type('#123/21, New Jercy Road, NY, 23123');
        textBoxPageObject.getSubmitButton().should('be.enabled').click();

        textBoxPageObject.getOutput().should('have.text', 'Name:Vishal PhaleEmail:vp@gmail.comCurrent Address :#123/21, New Jercy Road, NY, 23123 Permananet Address :#123/21, New Jercy Road, NY, 23123');
    })

    //Verify form with only valid Full Name, Email and Current Address
    it('Form Submission Validation With Valid Data Set2', ()=>{
        textBoxPageObject.getFullName().should('be.enabled').type('Vishal Phale');
        textBoxPageObject.getEmail().should('be.enabled').type('vp@gmail.com');
        textBoxPageObject.getCurrentAddress().should('be.enabled').type('#123/21, New Jercy Road, NY, 23123');
        textBoxPageObject.getSubmitButton().should('be.enabled').click();

        textBoxPageObject.getOutput().should('have.text', 'Name:Vishal PhaleEmail:vp@gmail.comCurrent Address :#123/21, New Jercy Road, NY, 23123 ');
    })

    //Verify form with only valid Full Name and Email
    it('Form Submission Validation With Valid Data Set3', ()=>{
        textBoxPageObject.getFullName().should('be.enabled').type('Vishal Phale');
        textBoxPageObject.getEmail().should('be.enabled').type('vp@gmail.com');
        textBoxPageObject.getSubmitButton().should('be.enabled').click();

        textBoxPageObject.getOutput().should('have.text', 'Name:Vishal PhaleEmail:vp@gmail.com');
    })

    //Verify form with only valid Full Name
    it('Form Submission Validation With Valid Data Set4', ()=>{
        textBoxPageObject.getFullName().should('be.enabled').type('Vishal Phale');
        textBoxPageObject.getSubmitButton().should('be.enabled').click();

        textBoxPageObject.getOutput().should('have.text', 'Name:Vishal Phale');
    })

    //Verify form with no data
    it('Form Submission Validation With Valid Data Set5', ()=>{
        textBoxPageObject.getSubmitButton().should('be.enabled').click();

        textBoxPageObject.getOutput().should('have.text', '');
    })
})