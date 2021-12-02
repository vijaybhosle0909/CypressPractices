///<reference types = 'cypress'/>

class LoginPage{

    visit(urlValue){
        cy.visit(urlValue);
    }

    fillEmail(emailValue){
        const email=cy.get('#Email');
        email.clear();
        email.type(emailValue);
    }

    fillPassword(passwordValue){
        const pass = cy.get('#Password');
        pass.clear();
        pass.type(passwordValue);
    }

    submitButton(){
        const submitButton = cy.contains('Log in');
        submitButton.click();
    }

    // getText(){
    //     const title=cy.get('.content-header');
    //     return title;
    // }
}

export default LoginPage;