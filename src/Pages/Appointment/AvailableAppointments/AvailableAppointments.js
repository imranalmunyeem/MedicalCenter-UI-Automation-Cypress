import { Container, Grid, Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Booking from '../Booking/Booking';


const AvailableAppointments = () => {

    const [bookings, setBookings] = useState([])

    const [displayBookings, setDisplayBookings] = useState([])

    const [bookingSuccess, setBookingSuccess] = useState(false);


    useEffect(() => {
        fetch("http://localhost:5000/doctor")
            .then((res) => res.json())
            .then((data) => { setBookings(data); setDisplayBookings(data) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const booking = bookings.map((book) => book?.department);
    const unique = booking.filter((value, index) => {
        return booking.indexOf(value) === index;
    })

    const handleSearch = event => {
        const searchText = event.target.value;
        const matched = bookings.filter(book => book.name.toLowerCase().includes(searchText.toLowerCase()) || book.department.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayBookings(matched);
    }


    return (
        <Container>
            <h4 className='fw-bold text-success' style={{ fontFamily: 'monospace' }}>Available Appointments</h4>
            <hr style={{ marginTop: '-3px' }} />
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}

            <div className='row mb-5 justify-content-center align-items-center'>
                <div className="search-container col-lg-5 col-12 mb-lg-5 mb-3 mt-lg-4 ms-2">
                    <input className='form-control'
                        type="text"
                        onChange={handleSearch}
                        placeholder="Search By Dr. Name" />
                </div>
                <div className="col-lg-5 ms-2">
                    <select
                        className="mb-4 form-select"
                        onChange={handleSearch}
                        aria-label="Default select example"
                    >
                        <option value={window.location.reload}>Select Department</option>
                        {unique.map(value => <option value={value}>{value}</option>)}
                    </select>
                </div>
            </div>
            <Grid container spacing={2}>
                {
                    displayBookings.map(booking => <Booking
                        key={booking._id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;