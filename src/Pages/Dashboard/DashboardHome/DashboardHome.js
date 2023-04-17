import * as React from 'react';
import Grid from '@mui/material/Grid';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date] = React.useState(new Date())
    return (
        <Grid>
            <Grid item xs={12}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;