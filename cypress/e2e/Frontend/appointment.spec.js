///<reference types = "cypress"/>

import AppointmentPage from "../../support/pageobjects/AppointmentPage";
const appointment = new AppointmentPage()

describe('Login page test', () => {
    
    beforeEach('Will run before each it block',()=>{
        appointment.navigateToAppointment();
    });

context('Url Test',()=>{
    it('Verify URL of the appointment page',()=>{
     cy.url().should('include', 'appointment');
     });
  });

context('Appointment Functionality Test',()=>{
    it('Appointment function should be worked successfully', () => {
        appointment.bookAppointment().click();
        appointment.phone().clear();
        appointment.phone().type('12345678');
        appointment.date().type('2023-05-12').trigger('keydown', {
            key: 'Enter',
          });
        appointment.submit().click();
        appointment.successMessage().should('contain','Appointment Booked successfully!')
       
    });

  });  
   
});