import {Stack,Grid, Typography, Button} from '@mui/material';
import JoinNowjpg from '../source/join-us-image.png'

export const JoinNowcompo=()=>{
    return<>
    
    <Grid container sx={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left',
            color: 'white',
            margin: '30px'
        }} p={2}>

            <Grid item xs={8} sm={6} md={5} mr={5} component='img' src={JoinNowjpg}></Grid>


            <Grid item xs={12} sm={6} md={5} sx={{alignItems: 'center'}} >
            <Typography variant='h6' my={1} component='div' color='#ff5421'>join us now</Typography>
            <Typography variant='h4' component='div' my={1} >join Us & Get Upto 50% Off</Typography >
            <Typography my={1}  variant='body1' component='div'>Welcome to the fitness club. We are providing a fitness and training center that focuses on pshing you to your absolute limit. Start the day with more energy and focus.</Typography >

            <Button sx={{backgroundColor: '#ff5421',margin: 'auto', color: 'white'}}>Join Now</Button>
            </Grid>

        </Grid>
    </>
}