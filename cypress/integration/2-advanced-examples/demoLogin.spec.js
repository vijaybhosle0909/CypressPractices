///<reference types = 'cypress'/>

import LoginPage from "../../support/Pages/loginPage";
import DashboardPage from "../../support/Pages/dashboardPage";
import ReturnRequest from '../../support/Pages/returnRequests';

describe('Login Suite', ()=>{
    const loginPageObject = new LoginPage();
    const dashboardPageObject = new DashboardPage();
    const returnRequestsObject = new ReturnRequest();

    beforeEach(()=>{
        loginPageObject.visit("/login");
        loginPageObject.fillEmail(Cypress.env('username'));
        loginPageObject.fillPassword(Cypress.env('password'));
        loginPageObject.submitButton();
    })

    it('Url test', ()=>{
        // expect('url').to.equal('https://admin-demo.nopcommerce.com/login/')
        cy.url().should('be.equal', 'https://admin-demo.nopcommerce.com/admin/');
    })

    it('Login Test', ()=>{
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration');
    })

    it('Return Request Page Test', ()=>{
        dashboardPageObject.clickPendingReturnRequest();
        returnRequestsObject.getReturnRequestText().should('contain', 'Return requests');
        // cy.get('float-left').should(($float-left)=>{
        //     expect($float-left).should('contain', 'Return request');
        // })
    })

    it('Expect Test', ()=>{
        expect(true).to.be.equal(true);
    })

    afterEach(()=>{
        dashboardPageObject.clickLogout();
    })
})