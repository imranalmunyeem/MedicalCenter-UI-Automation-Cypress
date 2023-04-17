import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';

const services = [
    {
        name: 'Teeth',
        description: 'Root canal treatment is usually successful. In about 9 out of 10 cases a tooth can survive for up to 10 years after root canal treatment.',
        img: "https://basindentalsuite.com/wp-content/uploads/2022/01/Emergency-Dentistry-Icon.png"
    },
    {
        name: 'Heart block',
        description: 'Heart block needs to treated if causing symptoms.Treatment for heart block usually works well. Most people live a normal active life with a pacemaker.',
        img: "https://www.emkatech.com/wp-content/uploads/2021/07/Cardiotoxicity.png"
    },
    {
        name: "Eyes",
        description: "Some treatments focus on reversing or managing a condition or factor that's causing your dry eyes. Other treatments can improve your tear quality or stop your tears from draining.",
        img: "https://galileoeyecenter.com/wp-content/uploads/2020/11/msc_icon.png"
    },
    {
        name: "Orthopedic",
        description: "Many people are unsure when or if they need an orthopedic surgeon and where to find one when they do. Some patients even shy away from orthopedic surgeons.",
        img: "https://www.tenderpalm.com/wp-content/uploads/2022/07/orthopedic.png"
    },
    {
        name: "Medicine",
        description: "You may call them simply doctors. But most doctors have extra expertise in one type of medicine or another. In fact, there are several hundred medical specialties and subspecialties",
        img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244698/medicine-icon-sm.png"
    },
    {
        name: "Kidney",
        description: "There are two treatment options for kidney failure: dialysis and kidney transplantation. Talk with your family so you can decide which treatment will best fit your lifestyle needs",
        img: "https://www.freseniuskidneycare.com/~/media/Fresenius/FKC/Images/Thrive-Central/Lupus/kidney_main_icon.png"
    }
]


const Services = () => {
    return (
        <Box className='mt-5 mx-1 px-1' sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600}} variant="h4" component="div" className='mb-5'>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;