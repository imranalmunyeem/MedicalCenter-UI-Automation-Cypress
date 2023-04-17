///<reference types = "cypress"/>

import LoginPage from "../../support/pageobjects/LoginPage";
const login = new LoginPage()

describe('Login page test', () => {
    
    beforeEach('Will run before each it block',()=>{
        login.navigateToLogin();
    });

context('Url Test',()=>{
    it('Verify URL of the login page',()=>{
     cy.url().should('include', 'login');
     });
  });

context('Login Functionality Test',()=>{
    it('Logout function should be worked successfully', () => {
        login.email().should('be.visible');
        login.email().clear();
        login.email().type('admin@gmail.com');
        login.password().should('be.visible');
        login.password().clear();
        login.password().type('admin123');
        login.loginButton().should('be.visible');
        login.loginButton().click();
        login.clickOnLogout();
       
    });

    
    it('Login function should not be worked successfully with incorrect inputs', () => {
        login.email().should('be.visible');
        login.email().clear();
        login.email().type('incorrect@gmail.com');
        login.password().should('be.visible');
        login.password().clear();
        login.password().type('incorrectpassword');
        login.loginButton().should('be.visible');
        login.loginButton().click();
        login.incorrectPasswordMessage().should('be.visible');
        login.incorrectPasswordMessage().should('contain','Firebase');
    }); 
    
    it('Login function should not be worked successfully with empty input fields', () => {
        login.loginButton().click();
        login.emptyFieldMessage().should('contain','Firebase'); 

    });

  });  
   
});