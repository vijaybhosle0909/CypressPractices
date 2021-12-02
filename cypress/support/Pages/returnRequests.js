///<reference types = 'cypress'/>

class ReturnRequest{

    getReturnRequestText(){
        const text=cy.get('.float-left');
        return text;
    }
}

export default ReturnRequest;