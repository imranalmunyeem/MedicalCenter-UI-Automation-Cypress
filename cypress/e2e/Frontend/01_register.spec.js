///<reference types = "cypress"/>
import RegisterPage from "../../support/pageobjects/RegisterPage";
const register = new RegisterPage(); 
describe('Sign Up page test', () => {
    beforeEach('Will run before each it block',()=>{
        register.navigateToRegister();
    });
 
context('Url Test',()=>{
    it('Verify URL of the sign up page',()=>{
     cy.url().should('include', 'register');
     });
  });

context('Sign up form Test',()=>{
    it('Sign up function should be worked successfully with valid inputs', () => {
        register.name().should('be.visible');
        register.name().clear();
        register.name().type('Tester Name')
        register.email().should('be.visible');
        register.email().clear();   
        register.email().type('tester1@mailinator.com'); 
        register.password().should('be.visible');
        register.password().clear();  
        register.password().type('Tester1Password'); 
        register.retypePassword().should('be.visible');
        register.retypePassword().clear();  
        register.retypePassword().type('Tester1Password'); 
        register.registerButton().click(); 
});

    it('Sign up function should not be worked successfully with existing email address', () => {
        register.name().should('be.visible');
        register.name().clear();
        register.name().type('Tester Name')
        register.email().should('be.visible');
        register.email().clear();   
        register.email().type('tester1@mailinator.com'); 
        register.password().should('be.visible');
        register.password().clear();  
        register.password().type('Tester1Password'); 
        register.retypePassword().should('be.visible');
        register.retypePassword().clear();  
        register.retypePassword().type('Tester1Password'); 
        register.registerButton().click(); 
    });

    it('Sign up function should not be worked successfully with invalid email', () => {
        register.name().should('be.visible');
        register.name().clear();
        register.name().type('Tester Name')
        register.email().should('be.visible');
        register.email().clear();   
        register.email().type('invalid.com'); 
        register.password().should('be.visible');
        register.password().clear();  
        register.password().type('Tester1Password'); 
        register.retypePassword().should('be.visible');
        register.retypePassword().clear();  
        register.retypePassword().type('Tester1Password'); 
        register.registerButton().click(); 

    });

    it('Sign up function should not be worked successfully with empty input fields', () => {
        register.registerButton().click(); 
    });
  });  

});