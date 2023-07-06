import { Stack, Typography } from "@mui/material";
import SergiImage from '../source/Sergi-Constance-1-1.jpg';
import ShwetaImage from '../source/2000ww.gif';
import YogasiniImage from '../source/team-3.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from "react";

export const TeamCompo=()=>{
    const [hover, setHover] = useState({sergi: false, shwetha: false, yogasini: false});

    const handleMouseOver=(val)=>{
        if(val === 'sergi') setHover({...hover, sergi: true});
        if(val === 'shwetha') setHover({...hover, shwetha: true});
        if(val === 'yogasini') setHover({...hover, yogasini: true}) ;
        console.log(hover)
    }

    const handleMouseOut=()=>{
        setHover({sergi: false, shewetha: false, yogasini: false});
    }
    return<>
    <Typography variant="h6" component='div' color='#ff5421'>our team</Typography>
    <Typography variant="h5" component='div' color='white'>Meet The Expert Team</Typography>

    <Stack flexDirection='row' flexWrap='wrap' justifyContent='space-around' rowGap={3}>
        <Stack>
            <Typography onMouseOver={()=>handleMouseOver('sergi')} onMouseOut={handleMouseOut} variant="h6" component='div' sx={{backgroundImage: `url(${SergiImage})`, width: '400px', height: '400px'}}>

                {hover.sergi? <Stack flexDirection='row'p={2} justifyContent='space-around' sx={{backgroundColor: 'white', width: '200px', marginBottom: '0px', marginTop: '335px'}}><FacebookIcon/><TwitterIcon/><InstagramIcon/></Stack>: <Stack sx={{backgroundColor: 'white', width: '200px', marginBottom: '0px', marginTop: '335px'}}><Typography variant="h6" component='div'>gym trainer</Typography> 
                <Typography variant="h6" component='div'>Sergi Constant</Typography>
        </Stack>}

               
            </Typography>
        </Stack>

        <Stack>
            <Typography onMouseOver={()=>handleMouseOver('shwetha')} onMouseOut={handleMouseOut} variant="h6" component='div' sx={{backgroundImage: `url(${ShwetaImage})`, width: '400px', height: '400px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                {hover.shwetha? <Stack flexDirection='row'p={2} justifyContent='space-around' sx={{backgroundColor: 'white', width: '200px', marginBottom: '0px', marginTop: '335px'}}><FacebookIcon/><TwitterIcon/><InstagramIcon/></Stack>: <Stack sx={{backgroundColor: 'white', width: '200px', marginBottom: '0px', marginTop: '335px'}}><Typography variant="h6" component='div'>crossfit trainer</Typography> 
                <Typography variant="h6" component='div'>Shwetha Devraj</Typography>
        </Stack>}

            </Typography>
        </Stack>

        <Stack>
            <Typography onMouseOver={()=>handleMouseOver('yogasini')} onMouseOut={handleMouseOut} variant="h6" component='div' sx={{backgroundImage: `url(${YogasiniImage})`, width: '400px', height: '400px',backgroundSize: 'cover'}}>

                {hover.yogasini? <Stack flexDirection='row'p={2} justifyContent='space-around' sx={{backgroundColor: 'white', width: '200px', marginBottom: '0px', marginTop: '335px'}}><FacebookIcon/><TwitterIcon/><InstagramIcon/></Stack>: <Stack sx={{backgroundColor: 'white', width: '200px', marginBottom: '0px', marginTop: '335px'}}><Typography variant="h6" component='div'>yoga trainer</Typography> 
                <Typography variant="h6" component='div'>Yogasini</Typography>
        </Stack>}               
            </Typography>
        </Stack>
    </Stack>    
    </>
}