class LoginPage {
    //--------------------------------URL--------------------------------------------//    
        //Navigate
        navigateToLogin(){
            cy.visit('http://localhost:3000/login');
        }
    
        //--------------------------------Credentials--------------------------------------------//
        //Email
        email(){
            return cy.get(':nth-child(1) > .MuiInput-root > #standard-basic');     
        }
    
    
        //Password
        password(){
            return cy.get(':nth-child(2) > .MuiInput-root > #standard-basic');
       
        }
        
         //--------------------------------Login--------------------------------------------//   
        //Login
        loginButton(){
            return cy.get('form > .MuiButton-contained');
        }
    
        //--------------------------------Messages--------------------------------------------//
        //Successful login message
        successfulLoginMessage(){
            return cy.get('.mx-5 > .mb-4');
        }
    
        //Incorrect password message
        incorrectPasswordMessage(){
            return cy.get('.MuiAlert-standardError > .MuiAlert-message');
        }
    
        //Empty field message
        emptyFieldMessage(){
            return cy.get('.MuiAlert-standardError > .MuiAlert-message');
        }
    
//------------------------Logout---------------------------//
//logout
        clickOnLogout(){
            return cy.get('.justify-content-end > .MuiButton-root');
        }
        
        
    }
    export default LoginPage;