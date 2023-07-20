import {Stack, Typography, Button} from '@mui/material';
import FootBack from '../source/counter-bg.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

<ChevronRightIcon sx={{color: '#ff5421'}}/>

export const Footer =()=>{
    return<>
        <Stack color='white' p={3} sx={{
            backgroundImage: `url(${FootBack})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Stack flexDirection='row' flexWrap='wrap'  textAlign='left' sx={{
                verticalAlign: 'middle'
            }}>
                <Stack flex={5}>
                    <Typography variant='h5' component='div'>Quick Links</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><ChevronRightIcon sx={{color: '#ff5421'}}/>home</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><ChevronRightIcon sx={{color: '#ff5421'}}/>about</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><ChevronRightIcon sx={{color: '#ff5421'}}/>Courses</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><ChevronRightIcon sx={{color: '#ff5421'}}/>pricing</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><ChevronRightIcon sx={{color: '#ff5421'}}/>register</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><ChevronRightIcon sx={{color: '#ff5421'}}/>team</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><ChevronRightIcon sx={{color: '#ff5421'}}/>blogs</Typography>
                </Stack>
                <Stack flex={5}>
                    <Typography variant='h5' component='div'>Follow Us</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><FacebookIcon sx={{color: '#ff5421'}}/>facebook</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><InstagramIcon sx={{color: '#ff5421'}}n/>instagram</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}> <TwitterIcon sx={{color: '#ff5421'}}/>twitter</Typography>
                </Stack>
                <Stack flex={5}>
                    <Typography variant='h5' component='div'>Contact Info</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><PhoneIcon sx={{color: '#ff5421'}}/>7326236972</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><EmailIcon sx={{color: '#ff5421'}}/>fitclub@gmail.com</Typography>
                    <Typography variant='body1' component='div' style={{display: 'flex', alignItems: 'center'}}><LocationOnIcon sx={{color: '#ff5421'}}/>Indore, india - 452001</Typography>
                </Stack>
                <Stack flex={5} rowGap={1}>
                    <Typography variant='h5' component='div'>Newslatter</Typography>
                    <Typography variant='body1' component='div'>subscribe for latest updates</Typography>
                    <input placeholder='enter your email' variant='text' style={{padding: '10px'}}></input>

                    <Button variant='contained' sx={{color: 'white', backgroundColor: '#ff5421', width: '150px'}}>Subscribe</Button>
                </Stack>
            </Stack>
            <Typography variant='h5' component='div' borderTop='2px solid white' m={2} pt={3}>Created By <span style={{color: '#ff5421'}}>Scsit Davv</span> | All Rights Reserved</Typography>
        </Stack>
    </>
}