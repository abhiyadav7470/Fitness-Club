import {Grid, Typography, } from '@mui/material';
import Aboutimg from '../source/about-img.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Backgroundimgabout from '../source/counter-bg.jpg'

export const Aboutus =()=>{
    return<>
        <Grid container sx={{
            backgroundColor: '#291a21',
            height: '70vh',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left',
            color: 'white'
        }} p={2}>
            <Grid item xs={12} sm={12} md={6} mr={2} sx={{alignItems: 'center'}} >
            <Typography variant='h6' my={1} component='div' color='#ff5421'>about us</Typography>
            <Typography variant='h4' component='div' my={1} >Daily Workout and Stay Active at Home</Typography >
            <Typography my={1}  variant='body1' component='div'>Our health is our most valuable wealth.A healthy person is someone free from diseases and can perform physical activities without getting tired. A person's physical fitness measurs health and fitness. It can be achieved through proper nutrition and careful eating habits. </Typography >
          
            <Typography variant='subtitle1' component='div' sx={{fontWeight: 'bold'}}><CheckBoxIcon sx={{ color: '#ff5421'}} fontSize='20px' />How to Support your Immume System</Typography>
            <Typography variant='subtitle1' component='div' sx={{fontWeight: 'bold'}}><CheckBoxIcon sx={{ color: '#ff5421'}} fontSize='20px' />A Guide to 30 Day Fitness & Workout Challenges</Typography>
            <Typography variant='subtitle1' component='div' sx={{fontWeight: 'bold'}}><CheckBoxIcon sx={{ color: '#ff5421'}} fontSize='20px' />Guide To Ease Your Back In The Gym</Typography>
            <Typography variant='subtitle1' component='div' sx={{fontWeight: 'bold'}}><CheckBoxIcon sx={{ color: '#ff5421'}} fontSize='20px' />The Mental Health Benefits of Exercise in Home</Typography>
            </Grid>

            <Grid item xs={5} sm={4} md={3} component='img' src={Aboutimg}></Grid>
        </Grid>
        <Grid container sx={{
            backgroundImage: `url(${Backgroundimgabout})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '20vh',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <Grid item xs={5} sm={4} md={3}>
                <Typography variant='h4' component='div' color='#ff5421'>40+</Typography>
                <Typography variant='h6' component='div'>Online Courses</Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={3}>
            <Typography variant='h4' color='#ff5421' component='div'>320+</Typography>
                <Typography variant='h6' component='div'>GYM Equipment</Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={3}>
            <Typography variant='h4' color='#ff5421' component='div'>180+</Typography>
                <Typography variant='h6' component='div'>Online Instructors</Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={3}>
            <Typography variant='h4' color='#ff5421' component='div'>1560+</Typography>
                <Typography variant='h6' component='div'>Satiesfied Clients</Typography>
            </Grid>
        </Grid>
    </>
}