import {Box, Card, CardContent, CardMedia,Stack, Typography} from '@mui/material';
import Crossfitjpg from '../source/CrossFit.jpg';
import Blogimage1 from '../source/img-2.jpg';
import Blogimage2 from '../source/weightlift.jpeg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

export const Blogcompo=()=>{
    return<>
        <Typography variant='h6' component='div' mt={3} sx={{color: '#ff5421'}}>our blogs</Typography>
        <Typography variant='h5' mb={3} component='div' color='white'>Our Daily Posts</Typography>

        <Stack flexDirection='row' flexWrap='wrap' p={3} justifyContent='space-evenly' rowGap={3} columnGap={3}>
         <Box width='350px' minWidth='400px' border='1px solid white'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={Crossfitjpg}></CardMedia>
                <CardContent>
                    
                    <Typography variant='h6' component='div'>Make Yourself Stronger Than Your Excuses</Typography>

                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant='body1' component='div'><CalendarMonthIcon sx={{color: '#ff5421'}}/>21st May, 2023</Typography>
                        <Typography variant='body1' component='div'><PersonIcon sx={{color: '#ff5421'}}/>By Admin</Typography>
                    </Stack>
                </CardContent>
               
            </Card>
        </Box>  

        <Box width='350px' minWidth='400px' border='1px solid white'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={Blogimage1}></CardMedia>
                <CardContent>
                    
                    <Typography variant='h6' component='div'>Weight Lifting & Diet Planing Classes</Typography>

                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant='body1' component='div'><CalendarMonthIcon sx={{color: '#ff5421'}}/>21st May, 2023</Typography>
                        <Typography variant='body1' component='div'><PersonIcon sx={{color: '#ff5421'}}/>By Admin</Typography>
                    </Stack>
                </CardContent>
               
            </Card>
        </Box>  

        <Box width='350px' minWidth='400px' border='1px solid white'>
            <Card sx={{backgroundColor: '#1d0e15', color: 'white'}}>
                <CardMedia component='img' height='230px' src={Blogimage2}></CardMedia>
                <CardContent>
                    
                    <Typography variant='h6' component='div'>Weight Lifting & Diet Planing Classes</Typography>

                    <Stack flexDirection='row' alignItems='center' justifyContent='space-between' sx={{}}>
                        <Typography variant='body1' component='div'><CalendarMonthIcon sx={{color: '#ff5421'}}/>21st May, 2023</Typography>
                        <Typography variant='body1' component='div'><PersonIcon sx={{color: '#ff5421'}}/>By Admin</Typography>
                    </Stack>
                </CardContent>
               
            </Card>
        </Box>    
        </Stack>
    </>
}