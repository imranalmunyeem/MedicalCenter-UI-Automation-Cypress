import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Form from './Form';

const stripePromise = loadStripe('pk_test_51Jw7zBDIsXfdnAuBoRWcAjMyzwuVvKKEx5AjoSRf98PAC7DC1RSU00dAZkHoQOu18lxELy4mAdljQKMnDBuqC2vv005xrRqjFz')



const Payment = () => {
    const {appointmentId} = useParams()
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[appointmentId])
    
    return (
        <div>
            <p className="my-4">Please pay <strong>${appointment?.price}</strong> for your appointment on <strong>{appointment?.date}</strong> </p>
            <Elements stripe={stripePromise}>
                <Form appointment={appointment}></Form>
            </Elements>
        </div>
    );
};

export default Payment;