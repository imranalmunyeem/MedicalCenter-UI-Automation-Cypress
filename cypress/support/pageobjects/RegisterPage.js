class RegisterPage {
    //--------------------------------Credentials--------------------------------------------//    
    //Navigate
    navigateToRegister(){
        cy.visit('http://localhost:3000/register');
    }

    //--------------------------------Credentials--------------------------------------------//
    //Name
    name(){
        return cy.get(':nth-child(1) > .MuiInput-root > #standard-basic');         
    }

    //Email
    email(){
        return cy.get(':nth-child(2) > .MuiInput-root > #standard-basic');      
    }


    //Password
    password(){
        return cy.get(':nth-child(3) > .MuiInput-root > #standard-basic');
   
    }

    //Retype Password
    retypePassword(){
        return cy.get(':nth-child(4) > .MuiInput-root > #standard-basic');
   
    }
       

    //Register
    registerButton(){
        return cy.get('.MuiButton-contained');
    }

}
export default RegisterPage;