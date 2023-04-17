///<reference types = "cypress"/>

import FeedbackPage from "../../support/pageobjects/FeedbackPage";
const feedback = new FeedbackPage()

describe('Login page test', () => {
    
    beforeEach('Will run before each it block',()=>{
        feedback.navigateToFeedback();
    });


context('Feedback Functionality Test',()=>{
    it.only('Feedback function should be worked successfully', () => {
        feedback.name().clear();
        feedback.name().type('Tester');
        feedback.phone().clear();
        feedback.phone().type('12345678');
        feedback.message().clear();
        feedback.message().type('Hey there its a sample test feedback to check the functionality');
        feedback.submit().click();
        feedback.successMessage().should('contain','The form was submitted successfully.');
       
    });

  });  
   
});