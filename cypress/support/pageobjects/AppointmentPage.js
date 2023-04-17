class AppointmentPage {
    //--------------------------------URL--------------------------------------------//    
        //Navigate
        navigateToAppointment(){
            cy.visit('http://localhost:3000/appointment');
        }
    
        //--------------------------------Credentials--------------------------------------------//
        //Book Appointment
        bookAppointment(){
            return cy.get(':nth-child(2) > .MuiPaper-root > .MuiButton-root');     
        }
    
    
        //Input phone
        phone(){
            return cy.get(':nth-child(4) > .MuiOutlinedInput-root > #outlined-size-small');
       
        }
        
        //date
        date(){
            return cy.get('.mb-3 > .MuiOutlinedInput-root > #outlined-size-small');
        }
    
        //--------------------------------Messages--------------------------------------------//
        //Successful login message
       submit(){
        return cy.get('form > .MuiButton-root');
       }

       successMessage(){
        return cy.get('.MuiAlert-message');
       }
    
        
    }
    export default AppointmentPage;