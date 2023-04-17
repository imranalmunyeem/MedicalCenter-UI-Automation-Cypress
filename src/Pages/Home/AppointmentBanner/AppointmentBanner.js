import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor-small.png'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid className='justify-content-center' container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img
                        className='w-100'
                        src={doctor} alt="" />
                </Grid>
                <Grid className='text-lg-start' item xs={12} md={5} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Box className='px-2'>
                        <Typography variant="h6" sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4">
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3 }} style={{ fontSize: 15, fontWeight: 400 }}>
                            If Your Having Any physical problems than don't just sit down, Get appointment as soon as possible. We are here to help you.
                        </Typography>
                        <Link as={Link} to="/appointment">
                         <Button variant="contained" className='mb-3' style={{ backgroundColor: '#006BB3' }}>Appointment</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;