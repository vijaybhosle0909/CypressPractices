///<reference types = 'cypress'/>
import toolsQATextBox from "../../support/Pages/textBoxPage";
const testData = require('../../fixtures/testData.json');

const textBoxPageObject = new toolsQATextBox();

describe('Text Box Suite', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Full Name Field Validation', ()=>{
        textBoxPageObject.getFullNameField().invoke('attr', 'placeholder').should('contain', 'Full Name');
        textBoxPageObject.getFullNameLabel().should('have.text', 'Full Name');
        textBoxPageObject.getFullNameField().should('have.css', 'width', '331.3125px')
                                            .and('have.css', 'height', '38px')
                                            .and('have.css', 'background-color', 'rgb(255, 255, 255)');
    })

    it('Full Name Validation With Valid Data', ()=>{
        textBoxPageObject.typeFullName('VISHAL PHALE');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', 'VISHAL PHALE');

        cy.reload();
        textBoxPageObject.typeFullName('vishal phale');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', 'vishal phale');

        cy.reload();
        textBoxPageObject.typeFullName('Vishal Phale');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', 'Vishal Phale');
    })

    it('Full Name field Validation With Invalid Data', ()=>{
        textBoxPageObject.typeFullName(' ');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', '');

        cy.reload();
        textBoxPageObject.typeFullName('12345');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', '');

        cy.reload();
        textBoxPageObject.typeFullName('Vishal12345');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', 'Vishal12345');
    })

    afterEach(()=>{
        cy.reload();
    })

})

describe.only('Tools QA Email Text Box Validation', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Email Field Validation', ()=>{
        textBoxPageObject.getEmailField().invoke('attr', 'placeholder').should('contain', 'name@example.com');
        textBoxPageObject.getEmailLabel().should('have.text', 'Email')
        textBoxPageObject.getEmailField().should('have.css', 'width', '331.3125px')
                                        .and('have.css', 'height', '38px')
                                        .and('have.css', 'background-color', 'rgb(255, 255, 255)');
    })

    testData.gmailValidTestData1.forEach((Credential)=>{
        it('Email Field Validation With Valid Data', ()=>{
            textBoxPageObject.typeEmail(Credential.name);
            textBoxPageObject.clickSubmitButton();
            textBoxPageObject.emailOutput().should('contain', Credential.name);
        })
    })

    // it('Email Field Validation With Valid Data', ()=>{
    //     textBoxPageObject.typeEmail('vp@gmail.com');
    //     textBoxPageObject.clickSubmitButton();
    //     textBoxPageObject.getOutput().should('contain', 'vp@gmail.com');

    //     cy.reload();
    //     textBoxPageObject.typeEmail('v-p@gmail.com');
    //     textBoxPageObject.clickSubmitButton();
    //     textBoxPageObject.getOutput().should('contain', 'v-p@gmail.com');

    //     cy.reload();
    //     textBoxPageObject.typeEmail('v.p@gmail.com');
    //     textBoxPageObject.clickSubmitButton();
    //     textBoxPageObject.getOutput().should('contain', 'v.p@gmail.com');

    //     cy.reload();
    //     textBoxPageObject.typeEmail('v_p@gmail.com');
    //     textBoxPageObject.clickSubmitButton();
    //     textBoxPageObject.getOutput().should('contain', 'v_p@gmail.com');

    //     cy.reload();
    //     textBoxPageObject.typeEmail('v.p.k@gmail.com');
    //     textBoxPageObject.clickSubmitButton();
    //     textBoxPageObject.getOutput().should('contain', '');

    // })

    it('Email Field Validation With Invalid Data', ()=>{
        textBoxPageObject.typeEmail('v@p@gmail.com');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('have.text', '');

        cy.reload();
        textBoxPageObject.typeEmail('v!p@gmail.com');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('have.text', '');

        cy.reload();
        textBoxPageObject.typeEmail('v..p@gmail.com');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('have.text', '');

        cy.reload();
        textBoxPageObject.typeEmail('v.p.@gmail.com');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('have.text', '');
    })

})

describe('Current Address Validations', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Current Address Field Validation', ()=>{
        
        textBoxPageObject.getCurrentAddressField().invoke('attr', 'placeholder').should('contain', 'Current Address');
        textBoxPageObject.getCurrentAddressLabel().should('have.text', 'Current Address');
        textBoxPageObject.getCurrentAddressField().should('have.css', 'width', '331.3125px')
                                                .and('have.css', 'height', '134px')
                                                .and('have.css', 'background-color', 'rgb(255, 255, 255)');    
    })

    it('Current Address field validation with valid data', ()=>{
        //checking for valid address
        textBoxPageObject.typeCurrentAddress('#123 Main Street, New York, NY 10030');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput('contain', '#123 Main Street, New York, NY 10030');
        
        //Checking for valid special characters
        textBoxPageObject.typeCurrentAddress('#123/21 @Main Street, -New York, NY -10030');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput('contain', '#123/21 @Main Street, -New York, NY -10030')
    })

    it('Current Address field validation with invalid data', ()=>{
        
        //check for space entered
        textBoxPageObject.typeCurrentAddress(' ');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', ' ');

        //Check for invalid pincode (six digit pincode)
        cy.reload();
        textBoxPageObject.typeCurrentAddress('#123 Main Street, New York, NY 100300');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', '#123 Main Street, New York, NY 100300');

        //check for only numeric address
        cy.reload();
        textBoxPageObject.typeCurrentAddress('123');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', '123');
    })
})

describe('Tools QA Permanent Address Text Box Validation', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Permanent Address Field Validation', ()=>{
        textBoxPageObject.getPermanentAddressLabel().should('have.text', 'Permanent Address');
        textBoxPageObject.getPermanentAddressField().and('have.css', 'width', '331.3125px')
                                                    .and('have.css', 'height', '134px')
                                                    .and('have.css', 'background-color', 'rgb(255, 255, 255)');
        // textBoxPageObject.getPermanentAddressField().invoke('attr', 'placeholder').should('contain', 'Permanent Address');
    }) 

    it('Permanent Address Field Validation With Valid Data', ()=>{
        textBoxPageObject.typePermanentAddress('#123 Main Street, New York, NY 10030 dqweqfdw');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', '#123 Main Street, New York, NY 10030');

        //Check for special character acceptance
        cy.reload();
        textBoxPageObject.typePermanentAddress('#123/21 @Main Street, -New York, NY -10030');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', '#123/21 @Main Street, -New York, NY -10030');

    })

    it('Permanent Address Field Validation With Invalid Data', ()=>{

        //check for space entered also speplling mistake in Permanent in outpur result
        textBoxPageObject.typePermanentAddress(' ');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', ' ');

        //Check for invalid pincode (6 digit pincode)
        cy.reload();
        textBoxPageObject.typePermanentAddress('#123 Main Street, New York, NY 100300');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', '#123 Main Street, New York, NY 100300');

        //check for only numeric address
        cy.reload();
        textBoxPageObject.typePermanentAddress('123');
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.getOutput().should('contain', '123');
    })
})

describe('Submit Button Validation', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })

    it('Submit Button Validation', ()=>{
        textBoxPageObject.getSubmitButton().should('have.text', 'Submit')
        .and('have.css', 'width', '76.05000305175781px')
        .and('have.css', 'height', '38px')
        .and('have.css', 'background-color', 'rgb(0, 123, 255)')
        .and('have.css', 'font-size', '16px');
    })
})

describe('Form Submission Validation', ()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box');
    })
    
    //Verify form with only valid Full Name, Email, Current Address, Permanent Address
    it.only('Form Submission Validation With Valid Data Set1', ()=>{
        textBoxPageObject.typeFullName(testData.name1);
        textBoxPageObject.typeEmail(testData.email1);
        textBoxPageObject.typeCurrentAddress(testData.currentAddress1);
        textBoxPageObject.typePermanentAddress(testData.permanentAddress1);
        textBoxPageObject.clickSubmitButton();
        textBoxPageObject.nameOutput().should('contain', testData.name1);
        textBoxPageObject.emailOutput().should('contain', testData.email1);
        textBoxPageObject.currentAddressOutput().should('contain', testData.currentAddress1);
        textBoxPageObject.permanantAddressOutput().should('contain', testData.permanentAddress1);
    })

    //Verify form with only valid Full Name, Email and Current Address
    it('Form Submission Validation With Valid Data Set2', ()=>{
        textBoxPageObject.typeFullName('Vishal Phale');
        textBoxPageObject.typeEmail('vp@gmail.com');
        textBoxPageObject.typeCurrentAddress('#123/21, New Jercy Road, NY, 23123');
        textBoxPageObject.clickSubmitButton();

        textBoxPageObject.nameOutput().should('contain', 'Vishal Phale')
        textBoxPageObject.emailOutput().should('contain', 'vp@gmail.com')
        textBoxPageObject.currentAddressOutput().should('contain', '#123/21, New Jercy Road, NY, 23123');
    })

    //Verify form with only valid Full Name and Email
    it('Form Submission Validation With Valid Data Set3', ()=>{
        textBoxPageObject.typeFullName('Vishal Phale');
        textBoxPageObject.typeEmail('vp@gmail.com');
        textBoxPageObject.clickSubmitButton();

        textBoxPageObject.nameOutput().should('contain', 'Vishal Phale');
        textBoxPageObject.emailOutput().should('contain', 'vp@gmail.com');
    })

    //Verify form with only valid Full Name
    it('Form Submission Validation With Valid Data Set4', ()=>{
        textBoxPageObject.typeFullName('Vishal Phale');
        textBoxPageObject.clickSubmitButton();

        textBoxPageObject.nameOutput().should('contain', 'Vishal Phale');
    })

    //Verify form with no data
    it('Form Submission Validation With Valid Data Set5', ()=>{
        textBoxPageObject.clickSubmitButton();

        textBoxPageObject.getOutput().should('have.text', '');
    })
})

