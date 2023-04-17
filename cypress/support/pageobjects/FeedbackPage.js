class FeedbackPage {
    //--------------------------------URL--------------------------------------------//    
        //Navigate
        navigateToFeedback(){
            cy.visit('http://localhost:3000');
        }
    
        //--------------------------------Credentials--------------------------------------------//
    //Name
    name(){
        return cy.get('.my-2 > .form-control');         
    }

    
        //Input phone
        phone(){
            return cy.get(':nth-child(3) > .form-control');
       
        }
        
        //date
        message(){
            return cy.get(':nth-child(4) > .form-control');
        }
    
       submit(){
        return cy.get('form > .btn');
       }

           //Success
    successMessage(){
        return cy.get('p');
    }


    
        
    }
    export default FeedbackPage;