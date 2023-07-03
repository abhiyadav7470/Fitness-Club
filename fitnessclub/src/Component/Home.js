import {Stack, Button, Typography, Grid} from '@mui/material';
import Mainbg from '../source/home-bg.jpg';
import Logo from '../source/logo.gif';

export const Home=()=>{
    return <>
    <Grid style={{
        backgroundImage: `url(${Mainbg})`,
        backgroundSize:'cover',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: '0px',
        padding: '80px'
    }} container>
        <Grid item  xs={8} md={5} component="img" src={Logo}></Grid>
        <Grid item ml={2} xs={8} md={4} sx={{
            textAlign: 'left'
        }}>
            <Typography variant='h6' m={1} component='div' color='#ff5421'>Back to the gym</Typography>
            <Typography variant='h4' m={1} component='div' color='white'>Start Your Fitness Journey Today</Typography>
            <Button style={{backgroundColor: '#ff5421', margin: '16px'}} variant='contained'>Get Started</Button>

        </Grid>
    </Grid>
    </>
}