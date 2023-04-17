import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, setBookingSuccess }) => {
    const { name, From, To, price, img, department } = booking;
    const time = From + " " + "-" + " " + To;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid className='my-3' item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 2 }}>
                    <img style={{width: '100px'}} src={img} alt=""/>
                    <Typography sx={{ color: 'info.main', fontWeight: '700'}} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="p" gutterBottom component="div">
                        {department}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography className='text-danger fw-bold' variant="p" display="block" gutterBottom>
                    Tk. {price}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;