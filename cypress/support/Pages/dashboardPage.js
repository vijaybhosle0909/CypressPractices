///<reference types = 'cypress'/>

class DashboardPage{

    clickPendingReturnRequest(){
        cy.get('.small-box-footer[href="/Admin/ReturnRequest/List"]').click();
    }

    clickLogout(){
        cy.get('.nav-link').contains('Logout').click();                             
    }
}

export default DashboardPage;