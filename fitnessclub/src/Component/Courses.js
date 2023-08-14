import {Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography} from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WeightLifting from '../source/weightLifting.jpg';
import Yogajpg from '../source/yogaa.jpg';
import Zumbajpg from '../source/Dance-Class.jpg';
import Swimingjpg from '../source/swim.jpg';
import Crossfitjpg from '../source/CrossFit.jpg';
import Pregnancyjpg from '../source/pregnancy_workout.jpg';

export const Courses=()=>{
    return<>
    
    <Typography variant='h4' component='div' backgroundColor='#1d0e15' mt={3} color='#ff5421'>our courses</Typography>
            <Typography backgroundColor='#1d0e15' color='white' variant='h5' mb={2} component='div'>Our Latest Courses</Typography>
    <Stack p={3} sx={{backgroundColor: '#1d0e15', color: 'white'}} flexDirection='row' rowGap={2} columnGap={2} justifyContent='center' flexWrap='wrap'>

        <Box width='400px' minWidth='400px' border='1px solid'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={WeightLifting}></CardMedia>
                <CardContent>
                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant='body1' component='div'><CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>Mon - Sat</Typography>
                        <Typography variant='body1' component='div'>1 Hours</Typography>
                    </Stack>
                    <Typography variant='h6' component='div'>Weight Lifting & Diet Planing Classes</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{color: 'white', backgroundColor: '#ff5421'}}>Read More</Button>
                </CardActions>
            </Card>
        </Box>    

        <Box width='400px' minWidth='400px' border='1px solid'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={Yogajpg}></CardMedia>
                <CardContent>
                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant='body1' component='div'><CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>Mon - Sat</Typography>
                        <Typography variant='body1' component='div'>1 Hours</Typography>
                    </Stack>
                    <Typography variant='h6' component='div'>Weight Lifting & Diet Planing Classes</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{color: 'white', backgroundColor: '#ff5421'}}>Read More</Button>
                </CardActions>
            </Card>
        </Box>    

        <Box width='400px' minWidth='400px' border='1px solid'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={Zumbajpg}></CardMedia>
                <CardContent>
                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant='body1' component='div'><CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>Mon - Sat</Typography>
                        <Typography variant='body1' component='div'>1 Hours</Typography>
                    </Stack>
                    <Typography variant='h6' component='div'>Weight Lifting & Diet Planing Classes</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{color: 'white', backgroundColor: '#ff5421'}}>Read More</Button>
                </CardActions>
            </Card>
        </Box>    

        <Box width='400px' minWidth='400px' border='1px solid'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={Swimingjpg}></CardMedia>
                <CardContent>
                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant='body1' component='div'><CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>Mon - Sat</Typography>
                        <Typography variant='body1' component='div'>1 Hours</Typography>
                    </Stack>
                    <Typography variant='h6' component='div'>Weight Lifting & Diet Planing Classes</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{color: 'white', backgroundColor: '#ff5421'}}>Read More</Button>
                </CardActions>
            </Card>
        </Box>    

        <Box width='400px' minWidth='400px' border='1px solid'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={Crossfitjpg}></CardMedia>
                <CardContent>
                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant='body1' component='div'><CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>Mon - Sat</Typography>
                        <Typography variant='body1' component='div'>1 Hours</Typography>
                    </Stack>
                    <Typography variant='h6' component='div'>Weight Lifting & Diet Planing Classes</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{color: 'white', backgroundColor: '#ff5421'}}>Read More</Button>
                </CardActions>
            </Card>
        </Box>    

        <Box width='400px' minWidth='400px' border='1px solid'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={Pregnancyjpg}></CardMedia>
                <CardContent>
                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant='body1' component='div'><CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>Mon - Sat</Typography>
                        <Typography variant='body1' component='div'>1 Hours</Typography>
                    </Stack>
                    <Typography variant='h6' component='div'>Weight Lifting & Diet Planing Classes</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{color: 'white', backgroundColor: '#ff5421'}}>Read More</Button>
                </CardActions>
            </Card>
        </Box>    
    </Stack>
</>
}