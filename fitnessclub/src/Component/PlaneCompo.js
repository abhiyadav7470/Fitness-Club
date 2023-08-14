import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const PlaneCompo=()=>{
    return <>
    <Typography variant='h4' mt={3} color='#ff5421' component='div'>choose a plan</Typography>
    <Typography variant='h5' mb={3} color='white' component='div'>Find A Perfect Plan</Typography>

    <Stack flexDirection='row' columnGap={3} justifyContent='space-around'>
        <Box width='400px' border='1px solid white'>
            <Card sx={{backgroundColor:'#1d0e15', color:'white'}}>
                <CardContent>
                    <Typography variant='h6' component='div'>Basic Plan</Typography>
                    <Typography variant='h6' component='div'><CurrencyRupeeIcon/><span style={{fontSize: '45px'}}>800</span>/Mo</Typography>
                </CardContent>
                <CardActions>
                    <Button  sx={{backgroundColor: '#ff5421', margin: 'auto', color: 'white'}}>Choose The Plan</Button>
                </CardActions>
                <CardContent>
                    <Typography variant='body1' component='div'><CheckIcon sx={{color: '#ff5421'}}/>personal training</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>classes per week</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>access to gym</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>nutrition plan</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/> diet plan</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>membership</Typography>
                </CardContent>
            </Card>
        </Box>

        <Box width='400px' border='1px solid white'>
            <Card sx={{backgroundColor:'#1d0e15', color:'white'}}>
                <CardContent>
                    <Typography variant='h6' component='div'>Premium Plan</Typography>
                    <Typography variant='h6' component='div'><CurrencyRupeeIcon/><span style={{fontSize: '45px'}}>1200</span>/Mo</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{backgroundColor: '#ff5421',margin: 'auto', color: 'white'}}>Choose The Plan</Button>
                </CardActions>
                <CardContent>
                    <Typography variant='body1' component='div'><CheckIcon/>personal training</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>classes per week</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>access to gym</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>nutrition plan</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/> diet plan</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>membership</Typography>
                </CardContent>
            </Card>
        </Box>

        <Box width='400px' border='1px solid white'>
            <Card sx={{backgroundColor:'#1d0e15', color:'white'}}>
                <CardContent>
                    <Typography variant='h6' component='div'>Ultimate Plan</Typography>
                    <Typography variant='h6' component='div'><CurrencyRupeeIcon/><span style={{fontSize: '45px'}}>2000</span>/Mo</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{backgroundColor: '#ff5421',margin: 'auto', color: 'white'}}>Choose The Plan</Button>
                </CardActions>
                <CardContent>
                    <Typography variant='body1' component='div'><CheckIcon/>personal training</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>classes per week</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>access to gym</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>nutrition plan</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/> diet plan</Typography>
                    <Typography variant='body1' component='div'><CheckIcon/>membership</Typography>
                </CardContent>
            </Card>
        </Box>
    </Stack>
    </>
}