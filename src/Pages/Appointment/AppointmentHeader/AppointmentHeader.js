import { Container } from '@mui/material';
import React from 'react';

const AppointmentHeader = () => {

    return (
        <Container className='mb-5'>
            <div className='row gap-5 justify-content-center align-items-center'>
                <div className='col-lg-5'>
                    <img className='w-50' src="https://daktarbhai.com/assets/img/works1.png" alt="" />
                </div>
                <div className='col-lg-4 text-start'>
                    <h5 className='text-uppercase'>
                    Book Appointment
                    </h5>
                    <p className='text-secondary'>
                    Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest. 
                    </p>
                </div>
                <div className='col-lg-4 text-end'>
                    <h5 className='text-uppercase'>
                    Get Well Soon
                    </h5>
                    <p className='text-secondary'>
                    Visit the doctor, take the service based on your appointment. Get back to good health and happiness. 
                    </p>
                </div>
                <div className='col-lg-6'>
                    <img className='w-50' src="https://daktarbhai.com/assets/img/works2.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default AppointmentHeader;