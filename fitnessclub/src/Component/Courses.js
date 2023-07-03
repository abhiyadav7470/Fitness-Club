import {Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography} from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WeightLifting from '../source/weightLifting.jpg';

export const Courses=()=>{
    return<>
    
    <Typography variant='h6' component='div'>our courses</Typography>
            <Typography variant='h5' component='div'>Our Latest Courses</Typography>
    <Stack p={3} sx={{backgroundColor: '#1d0e15', color: 'white'}} flexDirection='row' rowGap={2} columnGap={2} justifyContent='center' flexWrap='wrap'>

        <Box width='400px' minWidth='400px'>
            <Card>
                <CardMedia component='img' src={WeightLifting}></CardMedia>
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

        <Box width='400px' minWidth='400px'>
            <Card>
                <CardMedia component='img' src={WeightLifting}></CardMedia>
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

        <Box width='400px' minWidth='400px'>
            <Card>
                <CardMedia component='img' src={WeightLifting}></CardMedia>
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

        <Box width='400px' minWidth='400px'>
            <Card>
                <CardMedia component='img' src={WeightLifting}></CardMedia>
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

        <Box width='400px' minWidth='400px'>
            <Card>
                <CardMedia component='img' src={WeightLifting}></CardMedia>
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

        <Box width='400px' minWidth='400px'>
            <Card>
                <CardMedia component='img' src={WeightLifting}></CardMedia>
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